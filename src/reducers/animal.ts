import { CHANGE_ANIMAL } from '../constants';
import { Action } from '../interfaces/action';
import { Animal } from '../interfaces/animal';

const initalAnimal : Animal = {
     name: 'tiger'
}

const initalState : any = {
    animal : initalAnimal
}

const animal = (state = initalState, action: Action) => {
    console.log(action)
    switch(action.type){
        case CHANGE_ANIMAL: 
        return {
            ...state,
            animal : action.payload.animal
        }
    default:
        return state;
    }
}

export default animal;