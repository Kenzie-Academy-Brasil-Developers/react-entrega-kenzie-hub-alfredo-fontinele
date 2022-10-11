import { ToastContainerStatus } from "./components/Toast/ToastContainer"
import { ValidationProvider } from "./hooks/validation"
import { RoutesGlobal } from "./routes"
import { GlobalStyle } from './styles/global'

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <ValidationProvider>
        <ToastContainerStatus/>
        <RoutesGlobal/>
      </ValidationProvider>
    </>
  )
}

export default App

