import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface CheckBoxTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.InputHTMLAttributes<HTMLInputElement>) => void;
  children?: ReactNode;
}

export function CheckBox({ children, ...props }: CheckBoxTypes): React.ReactElement {
  return (
    <CheckBoxWrapper type="checkbox" {...props}>
      {children}
    </CheckBoxWrapper>
  );
}
const CheckBoxWrapper = styled.input``;
