'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
} from 'react-native';
import Main from './app/components/Main';

class SamosaSearch extends Component {
  render() {
    return (
      <Main style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('SamosaSearch', () => SamosaSearch);
