const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SETUSERS'

let initialState = {
    users: [
        {fullName:"Антон С.",followed: false, status:"Всем прив",location:{country:"Россия",city:"Новосибирск"}, id: 1},
        {fullName:"Захар Н.", followed: true, status:"На работе 24/7",location:{country:"Россия",city:"Барнаул"}, id: 2},
        {fullName:"Александр Е.", followed: true, status:"Го доту",location:{country:"Россия",city:"Ишим"}, id: 3},
    ],
}

const findUserPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id ===userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id ===userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS :
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type:SET_USERS, users})
export default findUserPageReducer