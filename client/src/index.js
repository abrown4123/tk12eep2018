import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/index'
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage";
import registerServiceWorker from './registerServiceWorker';
import EpisodePage from "./components/SinglePage/EpisodePage";

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Homepage />
        <Footer />
      </div>

    );
  }
}

class SingleEpisodePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <EpisodePage />
        <Footer />
      </div>
    )
  }
}
const Site = () => {
  return (
  <Router>
    <Switch>
      <Route exact path="/" component={Header} />
      <Route exact path="/sep" component={SingleEpisodePage} />
      <Route  component={ErrorPage} />
    </Switch>
  </Router>
  );
}

ReactDOM.render(<Site />, document.getElementById('root'));

registerServiceWorker();
