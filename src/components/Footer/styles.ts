import styled, { css } from 'styled-components'

export const Container = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 15px;
    padding: 90px 20px;

    > p {
      text-align: center;
      color: ${theme.colors.text};
    }
  `}
`
