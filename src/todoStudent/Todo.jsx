import { Button } from "bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo, updateTodo, deleteTodo } from "../store/todoSlice";
import './style.css'

const Todo = () => {
    const count = useSelector((state) => state.todoing.value)
    console.log(count)
    const dispatch = useDispatch()
    const [naming, setNaming] = useState("");
    const [classing, setClassig] = useState("");
    const [batching, setBatching] = useState("")
    const [yearing, setYearing] = useState();
    const [update,setUpdate]=useState(false);
    const [indexing,setIndexing]=useState(0)
    const alpha = (e) => {
        setNaming(e.target.value);


    }
    const beta = (e) => {
        setClassig(e.target.value);

    }
    const gema = (e) => {
        setBatching(e.target.value);

    }
    const peta = (e) => {
        setYearing(e.target.value);

    }
    let newArray = {
        Name: naming,
        Class: classing,
        Batch: batching,
        Year: yearing
    }
    const onAddHandler = () => {
        if(naming && classing && batching && yearing !=="" ){

        
        console.log("before dispatch")

        dispatch(addTodo(newArray))
        setNaming("")
        setBatching("")
        setYearing("")
        setClassig("")
        console.log("after dispatch");
        }
        else{
            alert("Please fill all the parameters")
        }


    }
    const onDeleteHandler= (indexing) =>{
        
        dispatch(deleteTodo(indexing))

    }
    const onEditHandler = (valueing,indexing) =>{
        setUpdate(true)
        setNaming(valueing.Name)
        setClassig(valueing.Class)
        setBatching(valueing.Batch)
        setYearing(valueing.Year)
        setIndexing(indexing)

    }
    const onUpdateHandler= () =>{
        setUpdate(false)
        
        if(naming && classing && batching && yearing !==""){
            dispatch(updateTodo({Name:naming,Class:classing,Batch:batching,Year:yearing,indexing}))
            setBatching("")
            setClassig("")
            setNaming("")
            setYearing("")

        }
        else{
            alert("Please fill all the params");
        }
    }



    return (
        <div>
            <div className="d-flex justify-content-center mt-5 mb-5">
                <div className="card back-shadow" style={{ width: "24rem" }}>

                    <div className="card-body">
                        <h5 className="card-title text-center">Student App</h5>
                        <div className="mb-3 mt-4">
                            <input type="email" className="form-control" value={naming} placeholder="Please enter Name" onChange={alpha} />
                        </div>
                        <div className="mb-3 mt-3">
                            <input type="email" className="form-control" value={classing} placeholder="please enter Class" onChange={beta} />
                        </div>
                        <div className="mb-3 mt-3">
                            <input type="email" className="form-control" value={batching} placeholder="please enter Batch" onChange={gema} />
                        </div>
                        <div className="mb-3 mt-3">
                            <input type="email" className="form-control" value={yearing} placeholder="please enter Year" onChange={peta} />
                        </div>
                        <div className="text-center">
                            {
                                update ?<button type="button" className="btn btn-primary" onClick={onUpdateHandler}>Update Student</button>:
                            
                            
                            <button type="button" className="btn btn-primary" onClick={onAddHandler}>Add Student</button>}
                            
                        </div>

                    </div>
                </div>

            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Class</th>
                        <th scope="col">Batch</th>
                        <th scope="col">Year</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Update</th>
                    </tr>
                </thead>
                {
                    count.map((value, index) => {
                        return (
                            <tbody>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{value.Name}</td>
                                    <td>{value.Class}</td>
                                    <td>{value.Batch}</td>
                                    <td>{value.Year}</td>
                                    <td><button type="button" className="btn btn-danger" onClick={()=>onDeleteHandler(index)}>Delete</button>
                                    </td>
                                    <td><button type="button" className="btn btn-success" onClick={()=>onEditHandler(value,index)}>Update</button>
                                    </td>

                                </tr>
                            </tbody>

                        )

                    })
                }

            </table>

        </div>
    )
}
export default Todo;