import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cardDataQuery, filterState } from '../store/TodoState';
import { Select } from '../components/Select';

interface propTypes {
  cardId?: string;
}

export function Filter({ cardId }: propTypes): React.ReactElement {
  const [cardListData, setCardListData] = useRecoilState(cardDataQuery);
  const todoFilter = useRecoilValue(filterState);
  const updateFilter = (e: any) => {
    const targetTodoList = !cardId
      ? cardListData.map((todoItem) =>
          true ? { ...todoItem, todoFilter: e.target.value } : todoItem,
        )
      : cardListData.map((todoItem) =>
          todoItem.cardId === cardId ? { ...todoItem, todoFilter: e.target.value } : todoItem,
        );
    setCardListData(targetTodoList);
  };
  const targetCardList = cardListData.filter((todoItem) => todoItem.cardId === cardId);

  return (
    <Select
      onChange={(e) => updateFilter(e)}
      value={targetCardList[0]?.todoFilter}
      options={todoFilter}
    />
  );
}
