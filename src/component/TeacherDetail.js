import { useHistory } from "react-router-dom"
import { UseData } from "../base/DataProvider";

export function Teacher() {
    const history=useHistory();
    const { state1 , dispatch1} = UseData()

    const RemoveFun = async(idx) => {
        try {
       
            const response = await fetch(`https://6410036ee1212d9cc926f284.mockapi.io/teacher/${idx}`,{
              method: "Delete"
            })
            const data = await response.json();
            console.log("after deletedata", data)
            const alterList = state1.user1.filter((per)=>per.id !== idx);
              dispatch1({type:"delete-teacher", payload:alterList})

              

            if(!data){
              console.log("cound't'delete data")
            }
          } catch (error) {
             console.log(error)
          }
    }



    return (
       <div>
        <h1><img style={{ width: "45px" }} src="https://em-content.zobj.net/thumbs/120/joypixels/340/teacher_1f9d1-200d-1f3eb.png" />   <br/> Teacher Detail  </h1>
        <div className="top">

            {state1.user1.map((prop, idx) => (
                <div key={idx} className="card">
                    <h2><b>Name : </b>{prop.name}</h2>
                    <p><b>Dept :</b> {prop.dept}</p>
                    <p><b> Email :</b> {prop.email}</p>
                    <p><b>Exp : </b>{prop.exp}</p>
                    <p><b>PhNo : </b>{prop.phNo}</p>
                        <button
                            className="but gre"
                            onClick={() => history.push(`/tcview/${idx}`)}
                        >View</button>
                        <button

                            onClick={() => history.push(`/tcedit/${prop.id}`)}
                            className="but blu">Edit</button>
                        <button
                            onClick={() => RemoveFun(prop.id)}
                            className="but red"
                        >Delete</button>
                </div>
            ))}
        </div>
    </div>   
    )
}