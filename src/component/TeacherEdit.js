import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UseData } from '../base/DataProvider';

function TeacherEdit() {
    const { state1, dispatch1 } = UseData();

    const { id } = useParams();
    const histroy = useHistory();

    const [name, setName] = useState("");
    const [idx, setIdx] = useState("");
    const [email, setEmail] = useState("");
    const [exp, setExp] = useState("");
    const [dept, setDept] = useState("");
    const [phNo, setPhNo] = useState("");

    const selectUser = state1.user1.find((per) => per.id == id)

    useEffect(() => {
        setIdx(selectUser.id)
        setName(selectUser.name)
        setEmail(selectUser.email)
        setExp(selectUser.exp)
        setPhNo(selectUser.phNo)
        setDept(selectUser.dept)
    }, []);

    const updateUser = async() => {
        const editIndex =state1.user1.findIndex(per => per.id == id)
        //  console.log(editIndex)
        const editedData = {
            id: idx,
            name,
            email,
            exp,
            phNo,
            dept
        }

        try {
            const response = await fetch(`https://6410036ee1212d9cc926f284.mockapi.io/teacher/${idx}`, {
              method :"PUT",
              body : JSON.stringify(editedData),
              headers:{
                "Content-Type":"application/json"
              }
            });
            const data = await response.json();
            console.log(data)
                state1.user1[editIndex] = data
                dispatch1({type:"user"})
                histroy.push("/teacher");
        
           } catch (error) {
            console.log(error)
           }


    }


    return (
        <div className="add">
            <h1>Change Your Detail Mr.{name}!</h1>
            <input
                className="inp"
                placeholder="id"
                value={idx}
                onChange={(event) => setIdx(event.target.value)}
            /><br /><br />

            <input
                className="inp"
                placeholder="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <input
                className="inp"
                placeholder="Dept"
                value={dept}
                onChange={(event) => setDept(event.target.value)}
            />

            <input
                className="inp"
                placeholder="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <input
                className="inp"
                placeholder="experience"
                value={exp}
                onChange={(event) => setExp(event.target.value)}
            />

            <input
                className="inp"
                placeholder="Phone No"
                value={phNo}
                onChange={(event) => setPhNo(event.target.value)}
            />

            <br />

            <button
                className="but"
                onClick={updateUser}
            >Commit Changes</button>
        </div>
    )
}

export default TeacherEdit