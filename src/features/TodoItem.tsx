import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Input, Button, CheckBox } from 'src/components/';
import { TodoItemType } from '../store/TodoTypes';
import { UseTodoItem } from './UseTodoItem';

interface propTypes {
  cardId: string;
  todo: TodoItemType;
}

export function TodoItem({ cardId, todo }: propTypes): React.ReactElement {
  const { todoId, text, checked } = todo;
  const [inputText, setInputText] = useState(text);
  const { onAddTodoItem, onRemoveTodoItem, onToggleTodoItem, onInputTodoItem } = UseTodoItem(
    cardId,
    todo.todoId,
  );
  const handleAddTodoItem = () => onAddTodoItem();
  const handleToggleTodoItem = () => onToggleTodoItem();
  const handleRemoveTodoItem = () => onRemoveTodoItem();
  const handleInputTodoItem = (e: any) => {
    setInputText(e.target.value);
    onInputTodoItem(todoId, e.target.value);
  };

  return (
    <TodoItemWrapper key={todoId}>
      <Input
        type={'text'}
        onChange={(e) => handleInputTodoItem(e)}
        placeholder="Todo를 입력해주세요."
        value={inputText}
      />
      <CheckBox onChange={handleToggleTodoItem} checked={checked}></CheckBox>
      <Button onClick={handleAddTodoItem}>추가</Button>
      <Button onClick={handleRemoveTodoItem}>삭제</Button>
    </TodoItemWrapper>
  );
}

const TodoItemWrapper = styled.div`
  padding: 0.3rem 0rem;
`;
