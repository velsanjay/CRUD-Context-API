import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { UseData } from "../base/DataProvider";


export function AddUser() {
    const { dispatch} = UseData();
    const history = useHistory();
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [exp, setExp] = useState("");
    const [regNo, setRegNo] = useState("");

    const addNewUser = async(e) => {

        const newUser = {
            id,
            name,
            email,
            regNo,
            exp
        }
    e.preventDefault()
    try {
        const resposne = await fetch("https://6410036ee1212d9cc926f284.mockapi.io/student", {
            method:"POST",
            body : JSON.stringify(newUser),
            headers :{
                "Content-Type":"application/json",
            },
        }); 
        const data = await resposne.json();
        console.log(data)
        dispatch({type:"add-teacher", payload:data})
        history.push("/")
       } catch (error) {
        console.log(error)
       }
     
    }
    return (
        <div className="add">
            <h1>Add New Student</h1>
                <input
                    className="inp"
                    value={id}
                    placeholder="id"
                    min={10}
                    onChange={(e) => setId(e.target.value)}
                    required
                /><br />

                <input
                    className="inp"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Name" /><br />

                <input
                    value={regNo}
                    className="inp"
                    onChange={(e) => setRegNo(e.target.value)}
                    placeholder="Reg No" /><br />

                <input
                    value={email}
                    className="inp"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" /><br />

                <input
                    value={exp}
                    className="inp"
                    onChange={(e) => setExp(e.target.value)}
                    placeholder="Exp" /><br />

                <button
                    type="Submit"
                    className="but"
                    onClick={addNewUser}
                >Add New Student</button>
        </div>
    )
}