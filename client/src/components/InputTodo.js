import React,{Fragment,useState} from "react";

const InputTodo=()=>{

    const [description,setDescription]=useState("");

    function handleChange(event){
        setDescription(event.target.value);
    }

    const onSubmitForm= async event=>{
        event.preventDefault();
        try{
            const body={description}
            const response=await fetch("http://localhost:3000/todos",{
                method:"POST",
                headers:{"content-Type":"application/json"},
                body:JSON.stringify(body)
            });

            window.location="/";
        }catch(err){
            console.log(err.message);
        }
    }

    return <Fragment>
        <h1 className="text-center mt-5">Todo List 📝</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input type="text" className="form-control" onChange={handleChange} value={description}/>
            <button className="btn btn-success">ADD</button>
        </form>
    </Fragment>
}

export default InputTodo;
