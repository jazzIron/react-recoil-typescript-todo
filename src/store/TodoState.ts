import { atom, selectorFamily } from 'recoil';
import { CardListType, TodoItemType, FilterType, TODO_FILTER } from './TodoTypes';
import * as cardDataJson from '../tempJson/cardData.json';

export const TodoItemState = atom<TodoItemType[]>({
  key: 'TodoItemState',
  default: [],
});
export const cardDataQuery = atom<CardListType[]>({
  key: 'cardDataQuery',
  default: cardDataJson.payload,
});
export const filterState = atom<FilterType[]>({
  key: 'filterState',
  default: [
    { value: '0', text: 'ALL' },
    { value: '1', text: 'COMPLETE' },
    { value: '2', text: 'UNCOMPLETE' },
  ],
});

export const getCardList = selectorFamily<TodoItemType[], string>({
  key: 'getCardList',
  get:
    (cardId) =>
    ({ get }) => {
      const cardList = get(cardDataQuery);
      const targetTodoList = cardList.filter((cardItem) => cardItem.cardId === cardId);
      const filterType = targetTodoList[0].todoFilter === '1' ? true : false;
      if (targetTodoList.length <= 0) return targetTodoList[0].todoList;
      const checkTodoItem =
        targetTodoList &&
        [...targetTodoList[0].todoList].filter((val) => val.checked === filterType);
      const newList =
        targetTodoList[0].todoFilter === '0' ? targetTodoList[0].todoList : checkTodoItem;
      return newList;
    },
});
