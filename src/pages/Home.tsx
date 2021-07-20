import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask:Task = {
      title:newTaskTitle,
      id: (new Date().getTime()),
      done:false
    }
    
    setTasks([...tasks, newTask]);
  } 

  function handleToggleTaskDone(id: number) {
    
    const updatedTasks:Task[]= tasks.map(task => ({ ...task }))
    const taskToToggle = updatedTasks.find( task => task.id === id)
    console.log(taskToToggle)
    if(!taskToToggle){
      return
    }
    taskToToggle.done=(!taskToToggle.done)
    setTasks(updatedTasks)
    //setMySkills(oldState => oldState.filter(skill => skill.id !== id));

    //TODO - toggle task done if exists
  }


  function handleRemoveTask(id: number) {

    setTasks(tasks => tasks.filter((item) =>item.id !== id))
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})