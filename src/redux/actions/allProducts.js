// import axios from "axios";
import { Client } from './../../Client';
import { actionTypes } from './actionTypes';

// export const fetchUsers = () => {
//     return (dispatch) => {
//       dispatch(fetchUsersRequest())
//       axios
//       Client.getEntries({
//                     'content_type': 'offertshirt',
//                     'limit': 3,
//                   })
//         .then(response => {
//           // response.data is the users
//           const users = response.items
//           dispatch(fetchUsersSuccess(users))
//         })
//         .catch(error => {
//           // error.message is the error message
//           dispatch(fetchUsersFailure(error.message))
//         })
//     }
//   }

// regular fetch
//   export const fetchUsers = () => {
//       return (dispatch) => {
//           dispatch(fetchUsersRequest())
//           Client.getEntries({
//             'content_type': 'offertshirt',
//             'limit': 3,
//           })
//         //   .then(res => res.json())
//           .then(res2 => {
//               const users = res2.items
//               dispatch(fetchUsersSuccess(users))
//           })
//           .catch(error => {
//             dispatch(fetchUsersFailure(error.message))
//           })
//       }
//   }

// regular async await

export const fetchProducts = () => {
   
    return async (dispatch) => {
        try {
        dispatch(fetchProductsRequest())
       const data = await  Client.getEntries({
                    'content_type': 'offertshirt',
                    'limit': 3,
                  })
        const res2 = await data.items
            const result = res2
            dispatch(fetchProductsSuccess(result))

        }
        catch(error) {
          dispatch(fetchProductsFailure(error.message))
        }
    }
}
  
  export const fetchProductsRequest = () => {
    return {
      type: actionTypes.FETCH_PRODUCTS_REQUEST
    }
  }
  
  export const fetchProductsSuccess = id => {
    return {
      type: actionTypes.FETCH_PRODUCTS_SUCCESS,
      payload: id
    }
  }
  
  export const fetchProductsFailure = error => {
    return {
      type: actionTypes.FETCH_PRODUCTS_FAILURE,
      payload: error
    }
  }

