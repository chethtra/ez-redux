import React from 'react';
import { connect } from 'react-redux';
import { store } from './store';
import { SET_USER, CHANGE_ANIMAL } from './constants';
import { User } from './interfaces/user'
import { Animal } from './interfaces/animal';
const users : User[] = [{
  name: 'steven',
  color: 'blue'
},{
  name: 'joe',
  color: 'red'
},
{
  name: 'chet',
  color: 'purple'
}];

const animals :Animal[] = [{
    name: 'dog'
  },
  {
    name: 'cat'
}]

const getRandomData = (array: any[]) => {
  return array[Math.floor(Math.random() * array.length)];
}

const setUser = () => {
  const user = getRandomData(users);
  store.dispatch({ type: SET_USER, payload: {user} })
}

const changeAnimal = () => {
  const animal = getRandomData(animals);
  store.dispatch({ type: CHANGE_ANIMAL, payload: {animal }})
}

const mapStateToProps = ({userLogin}: any) =>({
    user: userLogin.user,
    login: userLogin.auth.loggedIn
  })

const mapAnimalStateToProps = ({animalLogger}: any) =>({
  animal : animalLogger.animal
})

const UserInfo = connect(mapStateToProps)((props)=>{
  const {login, user} : {login: string, user: User} = props;
  return (login) 
  ? (<div>hi my name is {user.name}</div>) 
  : (<div></div>)
});

const UserColor = connect(mapStateToProps)((props)=>{
  const {login, user} : {login: string, user: User} = props;
  return (login) 
  ? (<div>My favorite color is {user.color}</div>) 
  : (<div></div>)
});

const AnimalDisplay = connect(mapAnimalStateToProps)((props) =>{
  const {animal} : {animal: Animal} = props;
  return (animal)
  ?(<div>{animal.name}</div>)
  :(<div></div>)
})

const App = () =>{
  return(<div>
    <button onClick={setUser}>set user</button>
    <button onClick={changeAnimal}>change animal</button>
    <UserInfo/>
    <UserColor/>
    <AnimalDisplay/>
  </div>)
};

export default App;