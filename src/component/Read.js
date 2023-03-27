
import { useHistory } from "react-router-dom";
import { UseData } from "../base/DataProvider";

export function DashBoard() {
    const { state,dispatch } = UseData();
    const history = useHistory();
    

    const RemoveFun = async(idx) => {
        try {
       
            const response = await fetch(`https://6410036ee1212d9cc926f284.mockapi.io/student/${idx}`,{
              method: "Delete"
            })
            const data = await response.json();
            console.log("after deletedata", data)
            const alterList = state.user.filter((per)=>per.id !== idx);
              dispatch({type:"delete-user", payload:alterList})
            if(!data){
              console.log("cound't'delete data")
            }
          } catch (error) {
             console.log(error)
          }
    }

    return (
        <div>
            <h1><img style={{ width: "40px" }} src="https://em-content.zobj.net/thumbs/120/apple/325/man-student-light-skin-tone_1f468-1f3fb-200d-1f393.png" /> Student Detail  </h1>
            <div className="top">

                {state.user.map((prop, idx) => (
                    <div key={idx} className="card">
                        <h2><b>Name : </b>{prop.name}</h2>
                        <p><b>Reg No :</b> {prop.regNo}</p>
                        <p><b> Email :</b> {prop.email}</p>
                        <p><b>Exp : </b>{prop.exp}</p>
                        <button
                            className="but gre"
                            onClick={() => history.push(`/stview/${idx}`)}
                        >View</button>
                        <button

                            onClick={() => history.push(`/stedit/${prop.id}`)}
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
