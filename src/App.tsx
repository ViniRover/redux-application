import { Provider } from 'react-redux';
import { Cart } from './Components/Cart';
import { Catalog } from './Components/Catolog';
import store from './store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
