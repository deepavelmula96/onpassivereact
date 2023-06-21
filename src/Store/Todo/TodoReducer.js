import { v4 as uuidv4 } from 'uuid';
const initialState = {
    users:[ 
        { id: uuidv4(), name: "deepa", email: "deepa@gmail.com" }, 
        { id: uuidv4(), name: "rao", email: "rao@gmail.com" }
    ] 
};
const TodoReducer = (state=initialState, action) => {
    switch(action.type) {
        case "Add_user":
            return {...state, users:[...state.users, action.payload]}
        case "Update_user":
            const user = state.users.find((u)=>u.id==action.payload.id)
            if (user) {
                user.name = action.payload.name
                user.email = action.payload.email
            }
            return state
        case "Delete_user":
            return {...state, users:[...state.users.filter((u)=>u.id!==action.payload)]}
        default:
            return state
    }
}
export default TodoReducer