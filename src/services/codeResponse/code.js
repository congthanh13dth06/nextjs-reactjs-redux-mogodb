const RESPONSE_CODE = {}

// system
RESPONSE_CODE[RESPONSE_CODE["SYSTEM_ERROR"] = "5000"] = "Unknown error from server"

// user
RESPONSE_CODE[RESPONSE_CODE["GET_ALL_USER_SUCCESS"] = "USER_2000"] = "Get all user success"
RESPONSE_CODE[RESPONSE_CODE["CREATE_USER_SUCCESS"] = "USER_2001"] = "Create user success"
RESPONSE_CODE[RESPONSE_CODE["GET_USER_BY_ID_SUCCESS"] = "USER_2002"] = "Get user by id success"


export default RESPONSE_CODE
