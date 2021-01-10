import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
body{
 background-color: var(--color-background);
}

body, input, button, textarea {
 font: 600 18px Ubuntu, Nunito, sans-serif;
}
:root{
 --color-background: #ebf2f5;
 --color-button: #ffd666;
}
`;
