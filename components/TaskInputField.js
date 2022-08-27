import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,Button
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default TaskInputField = (props) => {
  const [task, setTask] = useState();

  const handleAddTask = (value) => {
    props.addTask(value);
    setTask(null);
  };

  return(
<KeyboardAvoidingView
behavior={Platform.OS === "ios" ? "padding" : "height"}
style={styles.container}
>


<TouchableOpacity onPress={() => handleAddTask(task)}> 

<View style={styles.button}>
<MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
</View>
</TouchableOpacity>
</KeyboardAvoidingView>


  );
 
}

const styles = StyleSheet.create({
container: {
borderColor: '#fff' ,
backgrounColor: '#3E3364',
borderWidth: 1,
marginHorizontal: 20,
borderRadius: 12,
flexDirection: 'row',
alignItems: 'center' ,
justifyContent: 'space-between' ,
paddingHorizontal: 10,
position : 'absolute',
bottom: 20,

},
inputField: {
  color: '#fff' ,
  height: 50,
  flex: 1,

},

button: {
  height: 30,
  width: 30,
borderRadius: 5,
backgroudColor: '#fff',
alignItems: 'center',
justifyContent: 'center'
},





});

