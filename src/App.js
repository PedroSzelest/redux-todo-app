import './App.css';
import Input from './components/Input';
import TodoContainer from './components/TodoContainer';
import { Provider } from "react-redux";
import { store } from './store/store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Input />
        <TodoContainer />
      </div>
    </Provider>
  );
}

export default App;
