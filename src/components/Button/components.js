import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 52px;
  width: 146px;
  border: 0;
  border-radius: 40px;
  font-style: normal;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`