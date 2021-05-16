const initialState = {
  user: {
      username: null
  }
}

const UPDATE_USER = 'UPDATE_USER'
const LOGOUT = 'LOGOUT'

export function updateUser(username){
  return{
      type: UPDATE_USER,
      payload: username
  }
}

export function logout(){
  return{
      type: LOGOUT,
      payload: null
  }
}




export default function reducer(state = initialState, action) {
  switch (action.type) {
     case UPDATE_USER:
         return {...state, username: action.payload}
         case LOGOUT: 
              return {...state, username: action.payload}
              default: 
                  return {state}
  } 
}

