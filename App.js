import React from 'react';
import { FlatList, StyleSheet, View , ScrollView,} from 'react-native';
import HTML from 'react-native-render-html';


const userData =[
  {
    id:'1',
    firstname: 'Nikka Jane',
    lastname: 'Tribunalo',
    course: 'BSIT',
    yearSection: '3B',
    username: 'baniknik',
    password: 'taytokon143',
    userType: 'teacher',
  },
  {
    id:'2',
    firstname: 'Mary Jane',
    lastname: 'Sanchez',
    course: 'BSIT',
    yearSection: '3B',
    username: 'mjsanchez',
    password: 'sanchezmj@123',
    userType: 'student',
  },
  {
    id:'3',
    firstname: 'Chariz',
    lastname: 'Baco',
    course: 'BSIT',
    yearSection: '3B',
    username: 'charizbaco',
    password: 'pashpashword123',
    userType: 'student',
  },
  {
    id:'4',
    firstname: 'Aldwin',
    lastname: 'Handumon',
    course: 'BSIT',
    yearSection: '3B',
    username: 'handumon',
    password: 'chariz29',
    userType: 'student',
  },
  {
    id:'5',
    firstname: 'Jerry',
    lastname: 'Ale',
    course: '',
    yearSection: '',
    username: 'jerryale09',
    password: 'password@123',
    userType: 'teacher',
  },

];



export default function App() {
  const scrollView = `
  <table style="border: 1px solid black; width: 100%">
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>COURSE</th>
    <th>YEAR & SECTION</th>
  </tr>
  ${userData.map(
    (user) => `
      <tr key=${user.id}>
        <td>${user.id}</td>
        <td>${user.firstname} ${user.lastname}</td>
        <td>${user.course}</td>
        <td>${user.yearSection}</td>
      </tr>
    `
  ).join('')}
</table>
`;

const tableHtml = `
<table style="border: 1px solid black; width: 100%">
  <tr>
    <th>ID</th>
    <th>USERNAME</th>
    <th>PASSWORD</th>
    <th>USERTYPE</th>
  </tr>
  ${userData.map(
    (user) => `
      <tr key=${user.id}>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.password}</td>
        <td>${user.userType}</td>
      </tr>
    `
  ).join('')}
</table>
`;

  const studentData = userData.filter((user) => user.userType === 'student');

  
  



  return (
    <View style={styles.container}>
    <View style={styles.plainMap}>
      <HTML source={{ html: tableHtml }} />
      </View>
      <ScrollView style={styles.scroolViu}>
        <HTML source={{html:scrollView}}/>
      </ScrollView>

      <FlatList
  data={studentData}
  keyExtractor={(student) => student.id}
  renderItem={({ item }) => (
    <table>
      <tr>
        <td>ID</td>
        <td>FIRSTNAME</td>
        <td>LASTNAME</td>
      </tr>
      <tr>
        <td>{item.id}</td>
        <td>{item.firstname}</td>
        <td>{item.lastname}</td>
      </tr>
    </table>
  )}
  style={styles.flatLest}
/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  plainMap: {
    width: '95%',
    margin: 10,
  },
  scroolViu: {
    width: '95%',
    margin: 10,
  },
  
  flatLest: {
    width: '95%',
  },
});