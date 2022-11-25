import Layout from "components/Layuot/Layout";
import {CookiesProvider} from "react-cookie";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "store/store";
import "./assets/styles/index.scss";
function App() {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Provider>
    </CookiesProvider>
  );
}
export default App;
