import React from 'react';
import {View} from 'react-native';
import {Navigation} from './utils/routers';

const App = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column', textAlign: 'center'}}>
      <Navigation />
    </View>
  );
};

export {App};
