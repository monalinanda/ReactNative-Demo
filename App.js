import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from "react-native";
import GoalInput from './components/GoalInput';
import GoalItem from "./components/GoalItem";


export default function App() {

  const [addText, setAddText] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);
  

  const addTextHanler = goalTitle => {
    setAddText((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddModal(false);
  };
  
  const removeGoalHandler = goalId =>{
    setAddText(currentGoals => {
      return currentGoals.filter((goal)=> goal.id !==goalId)
    })
  }
  const cancelGoalHandler = ()=>{
    setIsAddModal(false);
   } 
    
  return (
    <View style={styles.container}>
      <Button title="Add New Modal" onPress={() => setIsAddModal(true)}/>
      <GoalInput addTextGoal={addTextHanler} visible={isAddModal} onCancel={cancelGoalHandler}/>
     {/* we can use ScrollView  */}
      {/* <ScrollView >
  {addText.map((text) => <View  key={text} style={styles.listItems}><Text>{text}</Text></View>)}
      </ScrollView> */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={addText}
        renderItem={(itemData) => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  }
 

});
