```javascript
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Primary Brand Font', sans-serif;
    color: #333;
    background-color: #fff;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Clean Sans-Serif', sans-serif;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
```