import { ThemeProvider } from 'styled-components'
import theme from './styles/themes/theme'
import GlobalStyle from './styles/global'
import { UploadImage } from './components/UploadImage'
import { Container } from './styles/styles'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <UploadImage />
      </Container>
    </ThemeProvider>
  )
}

export default App
