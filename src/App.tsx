import routes from "./router/routes.tsx";
import { RouterProvider } from "react-router-dom";
import { Global, Wrapper } from "./styles/styles.ts";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";


const App = () => (
  <Provider store={store}>
    <Global />
    <Wrapper>
      <RouterProvider router={routes} />
    </Wrapper>
  </Provider>
)

export default App
