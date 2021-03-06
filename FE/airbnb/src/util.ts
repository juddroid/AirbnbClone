import { LASTDATE_LIST } from './const';

interface IDate {
  year: number;
  month: number;
  date: number;
}

export const getDateList = (today: IDate, month: number) => {
  const day = new Date(today.year, month).getDay();

  const dateList = [];

  for (let i = 0; i < day; i++) {
    dateList.push(null);
  }
  for (let i = 0; i < LASTDATE_LIST[month]; i++) {
    dateList.push(i + 1);
  }
  return dateList;
};

export const getHourMinute = (hour: number) => {
  console.log(hour);
  if (hour.toString().includes('.'))
    return `${hour.toString().slice(0, hour.toString().indexOf('.'))}시간 30분`;
  return `${hour}시간`;
};

export const setState = (setCallback: any, state: boolean) =>
  setCallback(state);
export const setToggle = (setCallback: any, state: boolean) =>
  setCallback(!state);

export const getDate = (dateObj: IDate) => {
  return new Date(dateObj.year, dateObj.month, dateObj.date);
};

export const getRandom = (min: number, max: number, isInt: Boolean) => {
  const random = Math.random() * (max - min) + min;
  return isInt ? Math.floor(random) : random.toFixed(2);
};

export const moneyComma = (num: number) => {
  const arr = num.toString().split('');
  const comma = arr.reduce((acc, cur, idx) => {
    if (idx % 3 === arr.length % 3) {
      cur = `,${cur}`;
    }
    acc += cur;
    return acc;
  });
  return comma;
};
