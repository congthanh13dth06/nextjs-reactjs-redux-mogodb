// import ActionType from '../actions/action.type'

const stateDefault = {
  username: '',
  token: '',
  deviceId: ''
}

const authReducer = (state = stateDefault, action) => {
  switch (action.type) {
    // case ActionType.AUTH_LOGOUT:
    //   return stateDefault
    // case ActionType.AUTH_UPDATE_USERNAME_TOKEN:
    //   return {
    //     ...state,
    //     ...action.payload
    //   };
    //   case ActionType.AUTH_UPDATE_TOKEN:
    //     return {
    //       ...state,
    //       token: action.payload.token
    //     };
    default:
      return state
  }
}

export default authReducer
