import React from 'react';
import { Text, View } from 'react-native';

// create a component
const Header = props => {
  const { viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

//adding styles
const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30
  }
};
// export it so other components can utilize it
export default Header;
