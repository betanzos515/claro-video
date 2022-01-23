import { AppRoute } from "./routes/AppRoute";
import store from "./store/store";
import { Provider } from 'react-redux';


function App() {
  return (
    <>
      <Provider store={store}>
        <AppRoute/>
      </Provider>
    </>
  )
}

export default App;
