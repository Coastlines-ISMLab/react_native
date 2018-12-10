import React from 'react';
import { View } from 'react-native';

const Card = props => {
  return <View style={styles.containerStyles}>{props.children}</View>;
};
const styles = {
  containerStyles: {
    //border
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,

    //shadow
    shadowColor: '#000',
    shadowOffSet: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,

    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,

    //margins
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,

    //font
    fontSize: 150
  }
};

export default Card;
