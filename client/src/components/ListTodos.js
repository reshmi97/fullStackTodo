import React,{Fragment,useEffect,useState} from "react";
import EditTodo from "./EditTodo";

const ListTodos=()=>{
    const apiUrl=process.env.REACT_APP_API_URL;
    const [todos,setTodos]=useState([]);

    //Get todo function
    const getTodo=async ()=>{
        try {
            const response=await fetch(`${apiUrl}/todos`);
            const jsonData= await response.json();
            setTodos(jsonData);
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);   
        }
    }

    useEffect(()=>{
        getTodo();
    }, []);

    //delete todo function
    const deleteTodo=async (id)=>{
        try {
            const response=await fetch(`${apiUrl}/todos/${id}`,{
                method:"DELETE"
            });
            setTodos(todos.filter(todo=> todo.id!==id));
        } catch (err) {
            console.error(err.message);
        }
    }

    return <Fragment>
        <table class="table mt-5 text-center">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {/* <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
                </tr> */}
                {todos.map(todo=>(
                    <tr key={todo.id}>
                        <td>{todo.description}</td>
                        <td><EditTodo todo={todo}/></td>
                        <td><button className="btn btn-danger" onClick={()=>deleteTodo(todo.id)}>Delete</button></td>
                    </tr>
                ))}
            
            </tbody>
        </table>
    </Fragment>
};

export default ListTodos;