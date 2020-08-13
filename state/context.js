import {useReducer,useContext,createContext} from 'react';

const StateContext = createContext();
const DispatchContext = createContext();
const initialState= {
    launches: [],
    filter_year: 'None',
    filter_launch_success: 'None',
    filter_land_success: 'None'
}

const reducer = (state,action) => {
    switch(action.type) {
        case 'Year_filter':
            return {
                ...state,
                filter_year: action.filter,
                launches: [...action.data]
            }
        case 'Land_filter':
            return {
                ...state,
                filter_land_success: action.filter,
                launches: [...action.data]
            }
        case 'Launch_filter':
            return {
                ...state,
                filter_launch_success: action.filter,
                launches: [...action.data]
            }
        case 'Fetch_Data':
            return {
                ...state,
                launches:[...action.data]
            }
    }
}

export const StateProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <DispatchContext.Provider value = {dispatch}>
            <StateContext.Provider value = {state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
}

export const useFilterState = () => useContext(StateContext);
export const useDispatchState = () => useContext(DispatchContext);