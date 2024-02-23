import { createLogger } from './index';

describe('createLogger', () => {
  it('should log and retrieve messages of different types', () => {
    const logger = createLogger();

    logger.log('User logged in');
    logger.warn('User is trying to enter restricted page');
    logger.log('User logged out');
    logger.error('Unexpected error on the site');

    expect(logger.getRecords()).toEqual([
      { message: 'Unexpected error on the site', type: 'error', dateTime: expect.any(Date) },
      { message: 'User logged out', type: 'log', dateTime: expect.any(Date) },
      { message: 'User is trying to enter restricted page', type: 'warn', dateTime: expect.any(Date) },
      { message: 'User logged in', type: 'log', dateTime: expect.any(Date) }
    ]);

    expect(logger.getRecords('log')).toEqual([
      { message: 'User logged out', type: 'log', dateTime: expect.any(Date) },
      { message: 'User logged in', type: 'log', dateTime: expect.any(Date) }
    ]);

    expect(logger.getRecords('error')).toEqual([
      { message: 'Unexpected error on the site', type: 'error', dateTime: expect.any(Date) }
    ]);

    expect(logger.getRecords('warn')).toEqual([
      { message: 'User is trying to enter restricted page', type: 'warn', dateTime: expect.any(Date) }
    ]);
  });

  it('should maintain independent logs for multiple instances', () => {
    const logger1 = createLogger();
    const logger2 = createLogger();

    logger1.log('User logged in');
    logger2.warn('Oops, something is happening');

    expect(logger1.getRecords()).toEqual([
      { message: 'User logged in', type: 'log', dateTime: expect.any(Date) }
    ]);

    expect(logger2.getRecords('warn')).toEqual([
      { message: 'Oops, something is happening', type: 'warn', dateTime: expect.any(Date) }
    ]);
  });

  it('should return an empty array when there are no messages of the specified type', () => {
    const logger = createLogger();

    expect(logger.getRecords('error')).toEqual([]);
  });

  it('should return an empty array when there are no messages', () => {
    const logger = createLogger();
    
    expect(logger.getRecords()).toEqual([]);
  });
});
