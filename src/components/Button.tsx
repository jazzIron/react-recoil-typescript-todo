import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface ButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export function Button({ children, ...props }: ButtonTypes): React.ReactElement {
  return (
    <ButtonWrapper type="button" {...props}>
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px #00000004;
  cursor: pointer;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  color: #000000d9;
  border-color: #d9d9d9;
  background: #fff;
  margin: 0 0.3rem;
`;
