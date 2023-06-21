import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { addUserAction } from "../../Store/Todo/TodoActions";

function AddUser() {
    const count = useSelector((state)=>state?.todoReducer?.users?.length);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(addUserAction({
            id:uuidv4(),
            name:name,
            email:email
        }))
        navigate('/daysix')
    }
    return (
      <div>
          <form>
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> <br/>
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} /> <br/>
            <button onClick={handleClick}>Register</button>
        </form>
      </div>
    )
}
export default AddUser