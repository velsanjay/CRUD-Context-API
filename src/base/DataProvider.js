
import React, { createContext, useContext, useEffect, useReducer} from 'react'
import reducer from './Reducer';

const DataContext = createContext();

function DataProvider({ children }) {
    const initialState = { user: [] }
    const initialState1 = { user1: [] }
    
    const [state, dispatch] = useReducer(reducer, initialState)
    const [state1, dispatch1] = useReducer(reducer, initialState1)

    useEffect(() => {
        const getStudentDetail = async () => {
            try {
                const res = await fetch("https://6410036ee1212d9cc926f284.mockapi.io/student", {
                    method: "GET"
                })
                const stuData = await res.json()
                dispatch({ type: "get-from-stu-api", payload: stuData })
                console.log(stuData);
            } catch (error) {

            }
        }
        getStudentDetail()
    }, [])

    useEffect(() => {
        const getTeacherDetail = async () => {
            try {
                const res1 = await fetch("https://6410036ee1212d9cc926f284.mockapi.io/teacher", {
                    method: "GET"
                })
                const tecData = await res1.json()
                dispatch1({ type: "get-from-tec-api", payload: tecData })
                console.log(tecData);
            } catch (error) {

            }
        }
        getTeacherDetail()
    }, [])
    return (
        <DataContext.Provider
            value={
                {
                    state,
                    dispatch,
                    state1,
                    dispatch1
                    
                }
            }
        >
            {children}
        </DataContext.Provider>
    )
}

export const UseData = () => {
    return useContext(DataContext)
}

export default DataProvider