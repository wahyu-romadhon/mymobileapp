import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import axios from 'axios';

const Tab = createBottomTabNavigator();

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://equran.id/api/surat/1', // ini diganti dari api quran tadi
    }).then(function (response) {
      setDatas(response.data); //kita masukkan response kedalam datas ini
    });
  }, []);

  const HandleSurat = () => {
    return (
      <ScrollView>
        {datas?.ayat?.map((item, index) => {
          return (
            <View style={styles.contentBody} key={index}>
              <Text style={styles.contentAyat}>{item.ar}</Text>
              <Text>{item.idn}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  const HandleJus = () => {
    return (
      <ScrollView>
        <View style={styles.contentBody}>
          <Text>Coming Soon!</Text>
        </View>
      </ScrollView>
    );
  };

  console.log('datass', datas);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={`Surat ${datas?.nama_latin}`}
          component={HandleSurat}
        />
        <Tab.Screen name="Jus" component={HandleJus} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  contentBody: {
    margin: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
  },
  contentAyat: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default App;
