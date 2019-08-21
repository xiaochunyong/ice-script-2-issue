import { moment } from '@icedesign/base';

/* 重置对象的属性值为初始值 */
const resetObj = (obj) => {
  if (obj == undefined) { return undefined; }
  for (const prop in obj) {
    if (typeof obj[prop] === 'string') {
      obj[prop] = '';
    } else if (typeof obj[prop] === 'number') {
      obj[prop] = '';
    } else if (typeof obj[prop] === 'boolean') {
      obj[prop] = false;
    } else if (typeof obj[prop] === 'object') {
      if (obj[prop] instanceof Array) {
        obj[prop] = []
      } else {
        obj[prop] = resetObj(obj[prop]);
      }
    }
  }
  return obj;
};

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const dateFormat = (timestamp) => {
  if (!timestamp) return '';
  return moment(new Date(timestamp)).format('YYYY-MM-DD HH:mm:ss');
};

const getCurrentCity = () => {
  return JSON.parse(localStorage.getItem("CURRENT_CITY") || "{}");
};

const setCurrentCity = (id, name) => {
  localStorage.setItem("CURRENT_CITY", JSON.stringify({ id, name }));
};

const getValueFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const setItemToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export {
  resetObj,
  uuidv4,
  dateFormat,
  getCurrentCity,
  setCurrentCity,
  getValueFromLocalStorage,
  setItemToLocalStorage
};
