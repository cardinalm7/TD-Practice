import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// export default 
class App extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <Text>Create a ToDo List:</Text>
        <button>Submit</button>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('body')
);