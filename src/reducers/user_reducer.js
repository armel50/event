export default function user_reducer(state={},action){
    switch(action.type){
        case 'LOGIN_USER': 
            console.log(action.user)
            localStorage.setItem("user_id", action.user.id)
            return action.user
        case 'LOGOUT_USER': 
            localStorage.clear()
            return {}
        default: return state

    }
}