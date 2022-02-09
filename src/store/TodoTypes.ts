export interface CardListType {
  index: string;
  cardId: string;
  todoFilter: string;
  todoList: TodoItemType[];
}

// TODOLIST
export enum TODO_FILTER {
  ALL = '0',
  COMPLETE = '1',
  UNCOMPLETE = '2',
}

export interface TodoItemType {
  index: string;
  todoId: string;
  text: string;
  checked: boolean;
}

export interface FilterType {
  value: string;
  text: string;
}
