import styled from '@emotion/styled';
import React from 'react';
import { Button } from 'src/components/';
import { TodoItem } from '.';
import { UseCardItem, UseTodoItem } from './UseTodoItem';

interface propTypes {
  cardId: string;
}
export function TodoList({ cardId }: propTypes): React.ReactElement {
  const { getTargetCardList } = UseCardItem(cardId);
  const { getTodoList, onAddTodoItem } = UseTodoItem(cardId, '');
  const todoList = getTodoList();
  const targetCardList = getTargetCardList();

  const handleAddTodoItem = () => onAddTodoItem();

  console.log(todoList);
  console.log(targetCardList[0].todoFilter);
  return (
    <>
      {todoList.length === 0 && targetCardList[0].todoFilter === '0' && (
        <EmptyContainerWrapper>
          <Button onClick={handleAddTodoItem}>Todo 추가</Button>
        </EmptyContainerWrapper>
      )}
      {todoList.length === 0 && targetCardList[0].todoFilter !== '0' && (
        <EmptyContainerWrapper>Empty</EmptyContainerWrapper>
      )}
      <TodoListWrapper>
        {todoList &&
          todoList.map((todo) => <TodoItem key={todo.todoId} cardId={cardId} todo={todo} />)}
      </TodoListWrapper>
    </>
  );
}

const EmptyContainerWrapper = styled.div`
  padding: 1rem 0rem;
  text-align: center;
`;

const TodoListWrapper = styled.div``;
