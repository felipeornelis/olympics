import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html,
    body {
        height: 100vh;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
        font: 12px 'Poppins', sans-serif;
    }
`
