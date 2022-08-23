import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: #121214;
  color: ${props => props.theme.colors.txt};
  font: 400 16px Roboto, sans-serif;
}
button{
  font: 400 16px Roboto, sans-serif;
}
@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}
@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

`
