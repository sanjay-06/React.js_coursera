import Main from './components/MainComponent';
import { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const history=createBrowserHistory()
const store=ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App