import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { UseData } from '../base/DataProvider';

function AddTeacher() {
    const { dispatch1 } = UseData();
    const histroy = useHistory();

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [exp, setExp] = useState("");
    const [dept, setDept] = useState("");
    const [phNo, setPhNo] = useState("");
    const addNewTeac =async () => {

        const newUser = {
            id,
            name,
            email,
            dept,
            exp,
            phNo,

        }

        try {
            const resposne = await fetch("https://6410036ee1212d9cc926f284.mockapi.io/teacher", {
                method:"POST",
                body : JSON.stringify(newUser),
                headers :{
                    "Content-Type":"application/json",
                },
            }); 
            const data = await resposne.json();
            console.log(data)
            dispatch1({type:"teacher", payload:data})
            histroy.push("/teacher")
           } catch (error) {
            console.log(error)
           }
    }
    return (
        <div className="add">
            <h1>Add New Teachaer</h1>
                <input
                    className="inp"
                    value={id}
                    placeholder="id"
                    min="1"
                    onChange={(e) => setId(e.target.value)}
                    
                /><br />

                <input
                    className="inp"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Name" /><br />

                <input
                    value={dept}
                    className="inp"
                    onChange={(e) => setDept(e.target.value)}
                    placeholder="DEPT" /><br />

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

                <input
                    value={phNo}
                    className="inp"
                    onChange={(e) => setPhNo(e.target.value)}
                    placeholder="Phone No" /><br />

                <button
                    type="Submit"
                    className="but"
                    onClick={addNewTeac}
                >Add New Teachaer</button>
        </div>
    )
}

export default AddTeacher