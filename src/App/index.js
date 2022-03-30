import { Component } from 'react';

import days from '../helpers';
import App from './componant';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayName: days[new Date().getDay()],
    };
  }

  render() {
    return <App {...this.state} />;
  }
}

export default AppContainer;
