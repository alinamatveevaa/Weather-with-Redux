import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ContainerWeather } from './components/ContainerWeather';
import { rootReducer } from './store/store';

const store = createStore(rootReducer, composeWithDevTools())

function App() {
  return (
    <Provider store={store}>
      <main>
        <h1 className='main__title'>Search weather in your city</h1>
        <ContainerWeather />
      </main>
    </Provider>
  );
}

export default App;
