import React,{Fragment,useState} from "react";

const EditTodo=(props)=>{
    const apiUrl=process.env.REACT_APP_API_URL;
    const [description,setDescription]=useState(props.todo.description);

    //EDIT DESCRIPTION  
    const changeEdit=async (e)=>{
        e.preventDefault();
        try {
            const body={description};//this des is same as upper bagal wala of setdes but isse curly braces me lika hai taki ise object bana ja sake and object se json me convert karna assan hai but yadi ham simply des likenege to ye ek string hoga jise json me convert shayad sidha nahi kiya ja sakta hai 
            // console.log(description);
            const response=await fetch(`${apiUrl}/todos/${props.todo.id}`,{
                method:"PATCH",
                headers:{"content-Type":"application/json"},
                body:JSON.stringify(body),
            })
           
            window.location="/";

        } catch (err) {
            console.log(err.message);
        }
    }

    return <Fragment>
   
<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${props.todo.id}`}>
 Edit
</button>

<div class="modal" id={`id${props.todo.id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={()=>setDescription(props.todo.description)}></button>
      </div>

      <div class="modal-body">
        <input type="text" className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)}/>
      </div>

      <div class="modal-footer">
      <button type="button" class="btn btn-warning" data-bs-dismiss="modal" onClick={(e)=>changeEdit(e)}>Edit</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={()=>setDescription(props.todo.description)}>Close</button>
      </div>

    </div>
  </div>
</div>
    </Fragment>
}

export default EditTodo;