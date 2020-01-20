export default function SignUpUser(user){
    return dispatch =>{
        console.log(user)
          
        const params = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
           body: JSON.stringify({user: user})
        }
        fetch('http://localhost:3000/users',params)
        .then(resp => resp.json())
        .then(json => dispatch({type:'LOGIN_USER',user:json.user}))
    }

  
}