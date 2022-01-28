import { ActionCreator, Reducer } from "redux";

const SET_LOCATION = 'SET_LOCATION';

export type RootState = {
    location: string;
}

const initialState: RootState = {
    location: 'Moscow',
}


type SetLocation = {
    type: typeof SET_LOCATION,
    text: string
}

export const setLocation: ActionCreator<SetLocation> = (text: string) => ({
    type: SET_LOCATION,
    text,
})


type MyAction = SetLocation;

export const rootReducer:  Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION: 
            return {
                ...state,
                location: action.text,
            };  
        default:
            return state;
    }
}

