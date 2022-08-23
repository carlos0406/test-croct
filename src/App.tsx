import { ThemeProvider } from 'styled-components'
import theme from './styles/themes/theme'
import GlobalStyle from './styles/global'
import { UploadImage } from './components/UploadImage'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UploadImage />
    </ThemeProvider>
  )
}

export default App
