import { USER_ACTION_TYPE } from "./User.types"

export const setCurrentUser = (user) => ({type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: user})