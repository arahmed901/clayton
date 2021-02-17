import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* put styles that are sitewide here.
they should be few and far between. */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
}

html, body {
    margin: 0;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    background: #fff;
    color: #121212;
}
`

export default GlobalStyle;