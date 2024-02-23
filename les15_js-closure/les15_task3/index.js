// Explain

export const createLogger = () => {
  const messages = [];

  const addToLog = (message, type) => {
    const log = {
      message,
      dateTime: new Date(),
      type,
    };
    messages.unshift(log); // Add to the beginning of the array to maintain message order
  };

  return {
    warn: (message) => {
      addToLog(message, "warn");
    },
    error: (message) => {
      addToLog(message, "error");
    },
    log: (message) => {
      addToLog(message, "log");
    },
    getRecords: (type) => {
      if (type) {
        return messages.filter((log) => log.type === type);
      }
      return messages.slice(); // Return a copy of the array
    },
  };
};

// examples
const logger1 = createLogger();
logger1.log("User logged in");
logger1.warn("User is trying to enter restricted page");
logger1.log("User logged out");
logger1.error("Unexpected error on the site");

console.log(logger1.getRecords());
console.log(logger1.getRecords("log"));
console.log(logger1.getRecords("error"));
console.log(logger1.getRecords("warn"));

const logger2 = createLogger();
logger2.warn("Oops, something is happening");
console.log(logger2.getRecords("error"));
console.log(logger2.getRecords("warn"));
console.log(logger2.getRecords());

const logger3 = createLogger();
console.log(logger3.getRecords("error"));
console.log(logger3.getRecords());
