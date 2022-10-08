import { ToastContainerStatus } from "./components/Toast/ToastContainer"
import { ValidationProvider } from "./context/validation"
import { RoutesGlobal } from "./routes"

const App = () => {
  return (
    <ValidationProvider>
      <ToastContainerStatus/>
      <RoutesGlobal/>
    </ValidationProvider>
  )
}

export default App

