import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {GET_ALL_USER_INFO_REQUEST} from '../models/user/actions';

const mapDispatchaToProps = (dispatch, props) => ({
  getAllUserInfo: () => {
    dispatch({
      type: GET_ALL_USER_INFO_REQUEST,
      payload: {},
    });
  },
});

const mapStateToProps = (state, props) => {
  console.log('mapStateToProps', state);
  const {data} = state.user;

  return {
    data,
  };
};

const HomeView = ({data, getAllUserInfo}) => {
  console.log('dataassss', data);
  useEffect(() => {
    getAllUserInfo();
  }, []);

  return (
    <ScrollView>
      <View>
        {/* {data.ayat.map((item, index) => {
          return (
            <>
              <Text>{index + 1}</Text>
              <Text>{item.ar}</Text>
            </>
          );
        })} */}
      </View>
    </ScrollView>
  );
};

const Home = connect(mapStateToProps, mapDispatchaToProps)(HomeView);

export {Home};
