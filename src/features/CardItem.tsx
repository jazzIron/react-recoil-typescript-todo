import styled from '@emotion/styled';
import React from 'react';
import { TodoList } from '../features/TodoList';
import { Button } from 'src/components/';
import { Filter } from './Filter';
import { UseCardItem } from './UseTodoItem';

interface PropTypes {
  cardId: string;
}

export function CardItem({ cardId }: PropTypes): React.ReactElement {
  const { onAddCardItem, onRemoveCardItem } = UseCardItem(cardId);
  const handleAddCardItem = () => onAddCardItem();
  const handleRemoveCardItem = () => onRemoveCardItem();

  return (
    <CardContainerWrapper>
      <CardItemWrapper>
        <FilterWrapper>
          <ColWrapper>
            <Filter cardId={cardId} />
          </ColWrapper>
        </FilterWrapper>
        <TodoList cardId={cardId} />
      </CardItemWrapper>
      <CardControllerWrapper>
        <Button onClick={handleAddCardItem}>추가</Button>
        <Button onClick={handleRemoveCardItem}>삭제</Button>
      </CardControllerWrapper>
    </CardContainerWrapper>
  );
}

const CardContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0px;
`;

const CardItemWrapper = styled.div`
  padding: 1rem;
  border: 1px solid #000;
  min-height: 170px;
  max-height: 170px;
  min-width: 360px;
  overflow-y: scroll;
`;

const FilterWrapper = styled.div`
  position: relative;
  padding: 1rem 0rem 1rem 0rem;
`;
const ColWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const CardControllerWrapper = styled.div`
  padding: 0.5rem;
`;
