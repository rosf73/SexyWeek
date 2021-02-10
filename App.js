import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const daily_todo = "엄인태 하루일과 화이팅 ^^";
  const daily_plans = [
    {
      test: "엄인태1 하루계획 화이팅 ^^"
    },
    {
      test: "엄인태2 하루계획 화이팅 ^^"
    },
    {
      test: "엄인태3 하루계획 화이팅 ^^"
    },
  ];

  const renderElements = (plan_list) => {
    return plan_list.map(elem => {
      return (
        <View>
          <Text>{elem.test}</Text>
        </View>
      );
    });
  }

  const day_elements = renderElements(daily_plans);

  return (
    <View style={styles.container}>
      <View style={styles.daily}>
        <Text>{daily_todo}</Text>
      </View>
      <ScrollView style={styles.week}>
        {day_elements}
      </ScrollView>
      <View style={styles.detail}>
        <Text>엄인태 세부일과 화이팅 ^^</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2%'
  },
  daily: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: '2%',
    width: '95%'
  },
  week: {
    flex: 5,
    marginBottom: '2%',
    width: '100%'
  },
  detail: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2%',
    width: '95%'
  }
});
