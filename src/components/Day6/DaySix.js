import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteUserAction } from "../../Store/Todo/TodoActions";
function DaySix() {
    const users = useSelector((state)=>state?.todoReducer?.users);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        console.log(id)
        dispatch(deleteUserAction(id))
    }
    return (
        <div>
            <p>
                <Link to="/daysix/add-user">
                    <button>Add user</button>
                </Link>
            </p>
         {users?.length>0?   <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, index)=> {
                            return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/update-user/${user.id}`}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                            )
                        }) }
                </tbody>
            </table>:"no users are available"}
                        {/* {users?.length===0 && "no users are available" } */}
        </div>
    )
}
export default DaySix