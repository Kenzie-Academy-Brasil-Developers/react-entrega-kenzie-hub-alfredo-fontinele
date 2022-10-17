import { ToastContainerStatus } from "./components/Toast/ToastContainer"
import { ValidationProvider } from "./context/validation"
import { RoutesGlobal } from "./routes/routes"
import { GlobalStyle } from './style/global'

const App = () => (
  <>
    <GlobalStyle/>
    <ValidationProvider>
      <ToastContainerStatus/>
      <RoutesGlobal/>
    </ValidationProvider>
  </>
)

export default App