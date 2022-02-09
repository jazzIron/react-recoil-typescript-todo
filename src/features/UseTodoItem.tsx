import { useRecoilState, useRecoilValue } from 'recoil';
import { cardDataQuery, getCardList } from '../store/TodoState';
import { CardListType, TodoItemType } from '../store/TodoTypes';

export function UseCardItem(cardId: string) {
  const [cardList, setCardList] = useRecoilState<CardListType[]>(cardDataQuery);
  const getCardList = (): CardListType[] => cardList;
  const getTargetCardList = (): CardListType[] => cardList.filter((card) => card.cardId === cardId);

  const onAddCardItem = (): void => {
    const newCardList = [...cardList];
    const cardIndex = cardList.find((card) => card.cardId === cardId)?.index;
    let indexValue = Number(cardIndex) + 1;
    newCardList.splice(Number(cardIndex) + 1, cardList.length, {
      index: String(Number(cardIndex) + 1),
      cardId: String(Math.max(...cardList.map((val) => Number(val.cardId)), 0) + 1),
      todoFilter: '0',
      todoList: [
        {
          index: '0',
          todoId: '0',
          text: '',
          checked: false,
        },
      ],
    });
    const newList = cardList.slice(Number(cardIndex) + 1, cardList.length).map((cardItem) => {
      indexValue = indexValue + 1;
      return true ? { ...cardItem, index: String(indexValue) } : cardItem;
    });
    setCardList(newCardList.concat(newList));
  };

  const onRemoveCardItem = (): void =>
    setCardList(cardList.filter((card) => card.cardId !== cardId));

  return {
    getCardList,
    getTargetCardList,
    onAddCardItem,
    onRemoveCardItem,
  };
}

export function UseTodoItem(cardId: string, todoId: string) {
  const [cardList, setCardList] = useRecoilState<CardListType[]>(cardDataQuery);
  const todoList = useRecoilValue<TodoItemType[]>(getCardList(cardId));
  const targetTodoList = cardList.filter((cardItem) => cardItem.cardId === cardId);

  const getTodoList = (): TodoItemType[] => todoList;
  // Todo 추가
  const onAddTodoItem = (): void => {
    const newTodoList = [...todoList];
    const todoIndex = todoList.find((todo) => todo.todoId === todoId)?.index;
    let indexValue = Number(todoIndex) + 1;
    newTodoList.splice(Number(todoIndex) + 1, todoList.length, {
      index: String(Number(todoIndex) + 1),
      todoId: String(Math.max(...todoList.map((val) => Number(val.todoId)), 0) + 1),
      text: '',
      checked: true,
    });
    const newList = todoList.slice(Number(todoIndex) + 1, todoList.length).map((todoItem) => {
      indexValue = indexValue + 1;
      return true ? { ...todoItem, index: String(indexValue) } : todoItem;
    });
    setCardList(
      cardList.map((cardItem) =>
        cardItem.cardId === cardId
          ? { ...cardItem, todoList: newTodoList.concat(newList) }
          : cardItem,
      ),
    );
  };
  // Todo 삭제
  const onRemoveTodoItem = (): void => {
    const newTodoList = [...targetTodoList[0].todoList].filter((val) => val.todoId !== todoId);
    settingCardList(newTodoList);
  };
  // Todo 토글
  const onToggleTodoItem = (): void => {
    const newTodoList = [...targetTodoList[0].todoList].map((todo) =>
      todo.todoId !== todoId ? todo : { ...todo, checked: !todo.checked },
    );
    settingCardList(newTodoList);
  };
  // Todo 입력
  const onInputTodoItem = (todoId: string, inputText: string): void => {
    const newTodoList = [...targetTodoList[0].todoList].map((todo) =>
      todo.todoId !== todoId ? todo : { ...todo, text: inputText },
    );
    settingCardList(newTodoList);
  };

  const settingCardList = (newTodoList: TodoItemType[]): void => {
    setCardList(
      cardList.map((cardItem) =>
        cardItem.cardId === cardId ? { ...cardItem, todoList: newTodoList } : cardItem,
      ),
    );
  };

  return {
    getTodoList,
    onAddTodoItem,
    onRemoveTodoItem,
    onToggleTodoItem,
    onInputTodoItem,
  };
}
