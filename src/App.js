import Main from './components/MainComponent';
import { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from "history";
const history=createBrowserHistory()

class App extends Component {

  render() {
    return (
      <BrowserRouter history={history}>
          <div className="App">
            <Main />
          </div>
      </BrowserRouter>

    );
  }
}

export default App