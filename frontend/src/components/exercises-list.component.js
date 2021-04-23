import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <button href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</button>
    </td>
  </tr>
);

const ExercisesList = () => {

    const [exercises, setExercises] = useState([]);
  
    useEffect(() => {
      //for working localy
      //axios.get('http://localhost:5000/exercises/')
      //for working in a container env
      axios.get('backend:5000/exercises/')
        .then(response => {
          setExercises(response.data);
        })
        .catch((error) => {
              console.log(error);
            })
    },[]);
  
    const deleteExercise = (id) => {
      //for working localy
      //axios.delete('http://localhost:5000/exercises/'+id)
      //for working in a container env
      axios.delete('backend:5000/exercises/'+id)
        .then(response => { console.log(response.data)});
      setExercises(exercises.filter(el => el._id !== id));
    }
  
    const exerciseList = () => exercises.map(currentexercise =>  <Exercise exercise={currentexercise} deleteExercise={deleteExercise} key={currentexercise._id}/>);
  
  return (<div><h3>Logged Exercises</h3><table className="table">
   <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          { exerciseList() }
  
          </tbody>
        </table>
      </div>);
  
  }
  
  export default ExercisesList;
  