import { createCheckboxElem } from './checkbox.js';

export const renderListItems = listItems => {
    const listElem = document.querySelector('.list');
  
    const listItemsElems = listItems
      .sort((a, b) => a.done - b.done)
      .map(({ text, done }) => {
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');
        if (done) {
          listItemElem.classList.add('list__item_done');
        }
        const checkboxElem = createCheckboxElem(done);
        listItemElem.append(checkboxElem, text)
  
        return listItemElem;
      });
  
    listElem.append(...listItemsElems);
  };