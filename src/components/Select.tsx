import React from 'react';
import styled from '@emotion/styled';

interface optionTypes {
  value: string;
  text: string;
}

function SelectOptionItem({ value, text }: optionTypes) {
  return <option value={value}>{text}</option>;
}

export interface SelectTypes extends React.InputHTMLAttributes<HTMLSelectElement> {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: optionTypes[];
  value: string | number;
}

export function Select({ children, options, ...props }: SelectTypes): React.ReactElement {
  return (
    <SelectWrapper {...props}>
      {options &&
        options.map((option: optionTypes) => (
          <SelectOptionItem key={option.value} value={option.value} text={option.text} />
        ))}
    </SelectWrapper>
  );
}

const SelectWrapper = styled.select`
  border: solid 1px #000;
  padding: 0.3rem;
`;
