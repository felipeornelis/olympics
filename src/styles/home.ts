import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 930px;
  margin: 0 auto;
`

export const Hero = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 400px;
    display: flex;

    .hero-message {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      > h1 {
        color: ${theme.colors.text};
        font-size: 28px;
        line-height: 32px;
        margin-bottom: 15px;
        font-weight: 300;
      }

      > span {
        color: #b1b1b1;
        font-size: 16px;
        line-height: 18px;
      }
    }

    .hero-olympics-image {
      flex: 3;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px 0;

    > h2 {
      color: ${theme.colors.text};
      font-size: 32px;
      line-height: 42px;
      letter-spacing: -1px;
    }

    > span {
      font-size: 23px;
      color: ${theme.colors.text};
      font-weight: 300;
    }

    > input {
      width: 40%;
      background: ${theme.colors.card.text};
      padding: 10px;
      border-radius: 5px;
      border: 0;
    }
  `}
`

// export const Table = styled.section`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   gap: 10px;
// `
export const Table = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 225px);
  grid-template-rows: auto;
  gap: 10px;
`
