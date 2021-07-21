import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 225px;
    background: ${theme.colors.card.bg};
    color: ${theme.colors.card.text};
    padding: 20px;

    header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 20px;

      > img {
        width: 70px;
        height: 50px;
      }

      > span {
        display: block;
        margin-top: 20px;
        font-weight: 600;
      }
    }

    > div {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 5px;

      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        span + span {
          font-weight: 800;
          margin-top: 12px;
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
  `}
`
