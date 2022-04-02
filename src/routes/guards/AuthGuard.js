// import React, { useCallback, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { async_status } from 'redux/Actions/types'
// import { fetchUser } from 'redux/Actions/userAction'
// import { RootState } from 'redux/Reducers'
// import { handleLogout } from 'services/authService'

// export const AuthGuard: React.FC<any> = (props) => {
//     const { user } = useSelector((state: RootState) => state)
//     let ds = useDispatch()
//     const doFetchUserDetails = useCallback(async () => {
//         let empId = localStorage.getItem("empId")
//         if(!empId){
//             handleLogout()
//         }
//         ds(fetchUser(empId as string))
//     }, [ds])

//     useEffect(() => {
//         doFetchUserDetails()
//     }, [doFetchUserDetails])

//     if (user.status === async_status.__LOADING__ || user.status === async_status.__DEFAULT__)
//         return "Show Loader"

//     if (user.status === async_status.__FAILED__) {
//         handleLogout();
//         return ""
//     }

//     return props.children
// }

// export default AuthGuard
