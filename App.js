import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ToastAndroid } from 'react-native';
import { SimpleLineIcons as Icon } from '@expo/vector-icons';

import Day from './Components/Day';

export default function App() {
  const [ detail , setDetail ] = useState([]);

  const daily_todo = "아침점심저녁 먹기";
  const daily_plans = [
    {
      daily: "엄인태1 하루계획 화이팅 ^^",
      detail: [
        "엄인태11 세부일과 화이팅 ^^",
        "엄인태12 세부일과 화이팅 ^^",
        "엄인태13 세부일과 화이팅 ^^"
      ]
    },
    {
      daily: "엄인태2 하루계획 화이팅 ^^",
      detail: [
        "엄인태21 세부일과 화이팅 ^^",
        "엄인태22 세부일과 화이팅 ^^",
        "엄인태23 세부일과 화이팅 ^^"
      ]
    },
    {
      daily: "엄인태3 하루계획 화이팅 ^^",
      detail: [
        "엄인태31 세부일과 화이팅 ^^",
        "엄인태32 세부일과 화이팅 ^^",
        "엄인태33 세부일과 화이팅 ^^"
      ]
    },
    {
      daily: "엄인태4 하루계획 화이팅 ^^",
      detail: [
        "엄인태41 세부일과 화이팅 ^^",
        "엄인태42 세부일과 화이팅 ^^",
        "엄인태43 세부일과 화이팅 ^^"
      ]
    },
    {
      daily: "엄인태5 하루계획 화이팅 ^^",
      detail: [
        "엄인태51 세부일과 화이팅 ^^",
        "엄인태52 세부일과 화이팅 ^^",
        "엄인태53 세부일과 화이팅 ^^"
      ]
    }
  ];

  const renderDayElements = (plan_list) => {
    return plan_list.map(elem => {
      const onPress = () => {
        ToastAndroid.show(elem.daily, ToastAndroid.SHORT);
        setDetail(elem.detail);
      };

      return (
        <Day
          daily={elem.daily}
          onPress={onPress}
        />
      );
    });
  }
  const renderDetailElements = (detail_plan_list) => {
    return detail_plan_list.map(elem => {
      return (
        <View>
          <Text>{elem}</Text>
        </View>
      );
    });
  }

  var day_elements = renderDayElements(daily_plans);
  var detail_elements = renderDetailElements(detail);

  return (
    <View style={styles.container}>
      <View style={styles.daily}>
        <Icon name="pencil" size={20} color="#5A5"/>
        <Text style={styles.daily_text}>{daily_todo}</Text>
      </View>
      <View style={styles.week}>
        <ScrollView
          contentContainerStyle={styles.week_scroll}
          horizontal={true}
        >
          {day_elements}
        </ScrollView>
      </View>
      <View style={styles.detail}>
        <ScrollView
          contentContainerStyle={styles.detail_scroll}
        >
          {detail_elements}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === `ios` ? 0 : Expo.Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2%'
  },
  daily: {
    flex: 0.6,
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    paddingHorizontal: '3%',
    flexDirection: 'row',
    marginBottom: '5%'
  },
  daily_text: {
    marginLeft: '2%'
  },
  week: {
    flex: 4,
    marginBottom: '5%',
    width: '100%'
  },
  week_scroll: {
    
  },
  detail: {
    flex: 8,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8EBEF',
    marginBottom: '15%'
  },
  detail_scroll: {
    flexGrow: 1,
    justifyContent: 'center'
  }
});