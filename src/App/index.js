import { Component } from 'react';
import { remove, map, find } from 'ramda';

import days from '../helpers';
import App from './componant';
import todosData from './mocks';

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
