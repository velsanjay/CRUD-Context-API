import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { UseData } from "../base/DataProvider";

export function EditUser(){
    const { state , dispatch } = UseData();

    const {id}=useParams();
    const histroy = useHistory();

    const [name, setName] = useState("");
    const [idx, setIdx] = useState("");
    const [email, setEmail] = useState("");
    const [exp, setExp] = useState("");
    const [regNo, setRegNo] = useState("");

    const selectUser = state.user.find((per)=>per.id==id)

    useEffect(() => {
        setIdx(selectUser.id)
        setName(selectUser.name)
        setEmail(selectUser.email)
        setExp(selectUser.exp)
        setRegNo(selectUser.regNo)
     }, []);

     const updateUser = async()=>{
         const editIndex = state.user.findIndex(per => per.id == id)
          const editedData = {
              id :idx, 
              name, 
              email, 
              exp, 
              regNo
          }
          
          try {
            const response = await fetch(`https://6410036ee1212d9cc926f284.mockapi.io/student/${idx}`, {
              method :"PUT",
              body : JSON.stringify(editedData),
              headers:{
                "Content-Type":"application/json"
              }
            });
            const data = await response.json();
            console.log(data)
                //updating the user
                state.user[editIndex] = data
                //setUser([...state.user]); 
                dispatch({type:"edit-user"})
                histroy.push("/");
        
           } catch (error) {
            console.log(error)
           }
           
        }

    return(
        <div className="add">
            <h1>Change Your Detail Mr.{name}!</h1>
            <input 
            className="inp"
            placeholder="id"
            value ={idx}
            onChange={(event)=>setIdx(event.target.value)}
            /><br/><br/>

            <input 
            className="inp"
            placeholder="name"
            value= {name}
            onChange={(event)=>setName(event.target.value)}
            />

            <input 
            className="inp"
            placeholder="email"
            value= {email}
            onChange={(event)=>setEmail(event.target.value)}
            />

            <input 
            className="inp"
            placeholder="experience"
            value = {exp}
            onChange={(event)=>setExp(event.target.value)}
            />

            <input 
            className="inp"
            placeholder="batch"
            value = {regNo}
            onChange={(event)=>setRegNo(event.target.value)}
            /><br/>

            <button
            className="but"
            onClick={updateUser}
            >Commit Changes</button>
        </div>
    )
}