import {createContext, useState, useReducer, useEffect} from "react"
import { readingListReducer, listActions } from '../reducers/readingListReducer'


export const AppContext = createContext();

const AppContextProvider = ({children})=>{
    const getUserFromLS=()=>{
        let u=localStorage.getItem('user-bookstore')
        if (u){
            return JSON.parse(u)
        }
    }

    const [alert, setAlert] =useState({})
    const [user, _setUser] =useState(getUserFromLS()??'')
    const [book, setBook] = useState('')
    const [list, dispatch] = useReducer(readingListReducer, [])

    useEffect(
        ()=>{
            localStorage.setItem('readingList-bookstore', JSON.stringify(list))
        },
        [list]
    )    

    const setUser=(user)=>{
        localStorage.setItem('user-bookstore', JSON.stringify(user))
        _setUser(user)
    }
    
    const values={
        alert,
        setAlert,
        user,
        setUser,
        book,
        setBook,
        list,
        // Need to add funcitonality to add to reading list here!
        addToList:(book)=>{
            dispatch({type: listActions.addToList, book})
        },
        removeFromList:(book)=>{
            dispatch({type: listActions.removeFromList, book})
        },
        removeAllFromList:(book)=>{
            dispatch({type: listActions.removeAllFromList, book})
        }
    }
    
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider