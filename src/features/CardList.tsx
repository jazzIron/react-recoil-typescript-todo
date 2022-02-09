import styled from '@emotion/styled';
import React from 'react';
import { CardItem } from '../features/CardItem';
import { Filter } from './Filter';
import { Button } from 'src/components/';
import { UseCardItem } from './UseTodoItem';

export function CardList(): React.ReactElement {
  const { getCardList, onAddCardItem } = UseCardItem('');
  const cardList = getCardList();
  const handleAddCardItem = () => onAddCardItem();

  return (
    <>
      <FilterWrapper>
        <ColWrapper>
          <Filter />
        </ColWrapper>
      </FilterWrapper>
      <CardListWrapper>
        {cardList.length === 0 && (
          <EmptyContainerWrapper>
            <Button onClick={handleAddCardItem}>카드 아이템 추가</Button>
          </EmptyContainerWrapper>
        )}
        {cardList && cardList.map((card) => <CardItem key={card.cardId} cardId={card.cardId} />)}
      </CardListWrapper>
    </>
  );
}

const EmptyContainerWrapper = styled.div`
  padding: 0.5rem;
  min-height: 170px;
  max-height: 170px;
  min-width: 360px;
`;

const FilterWrapper = styled.div`
  position: relative;
  padding: 1rem 0rem 1rem 0rem;
  min-width: 360px;
`;
const ColWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
const CardListWrapper = styled.div``;
