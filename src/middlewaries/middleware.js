import moment from 'moment'
const style = `
border-bottom:2px solid #f2f2f2; 
color: white;
background:#ff0504;
font-weight: 700;
border-radius:3px;
font-family: 'Poppins';
padding:5px;`

const time = (store) => (next) => (action) => {
  console.log(moment().format('hh:mm:ss'))
  next(action)
}

const checkEmail = (store) => (next) => (action) => {
  if (action.type === "users/saveUser") {
    const users = store.getState().users;
    const isEmailExist = users.some(elem => elem.email == action.payload.email);
    if (isEmailExist) {
      console.log("%cemail exist", style)
      return
    }
  }
  next(action)
}


export default (getDefaultMiddleware) => {
  return [...getDefaultMiddleware(), time, checkEmail]
}