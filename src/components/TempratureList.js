import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import TempratureDetails from './TempratureDetails';

class TempratureList extends Component {
  state = { tempList: [] };
  componentWillMount() {
    console.log('Component mounting');
    BASE_URL = 'http://api.aerisapi.com/';
    CLIENT_ID = 'caZTTXpf5fuA2tmg9Suz3';
    CLIENT_SECRET = 'J06zNZjwoytXqegqQ1GvEN71hdkJbYKGdmdMsjkc';

    REQUEST_URL =
      BASE_URL +
      'observations/tampa,fl?&format=json&filter=allstations&limit=1&client_id=' +
      CLIENT_ID +
      '&client_secret=' +
      CLIENT_SECRET;

    axios
      .get(REQUEST_URL)
      .then(resp => this.setState({ tempList: resp.data.response.ob }));
  }

  renderTemprature() {
    console.log(this.state.tempList.length);
    if (!this.state.tempList.length == 0) {
      currentTemprature = '0';
    } else {
      currentTemprature = this.state.tempList.tempF;
      console.log(currentTemprature);
    }

    return <TempratureDetails temprature={currentTemprature} />;
  }

  render() {
    return <View>{this.renderTemprature()}</View>;
  }
}

export default TempratureList;
