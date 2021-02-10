import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SimpleLineIcons as Icon } from '@expo/vector-icons';

export default function App() {
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
  ];

  const renderDayElements = (plan_list) => {
    return plan_list.map(elem => {
      return (
        <View>
          <Text>{elem.daily}</Text>
        </View>
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

  const day_elements = renderDayElements(daily_plans);
  const detail_elements = renderDetailElements(daily_plans[0].detail);

  return (
    <View style={styles.container}>
      <View style={styles.daily}>
        <Icon name="pencil" size={20} color="green"/>
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
    backgroundColor: 'orange',
    alignItems: 'center',
    marginBottom: '2%',
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: '3%',
    flexDirection: 'row'
  },
  daily_text: {
    marginLeft: '2%'
  },
  week: {
    flex: 4,
    marginBottom: '2%',
    width: '100%'
  },
  week_scroll: {
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  detail: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
    width: '95%'
  },
  detail_scroll: {
  }
});
