import { createSlice } from '@reduxjs/toolkit'
import Swal from "sweetalert2"
const initialState = {
    cartItems : []
}

const cartSlice = createSlice({
    name:"cart",
    initialState : initialState,
    reducers: {
        addToCart: (state, action)=>{
          const existingItem = state.cartItems.find(item => item._id === action.payload._id)
           if(!existingItem){
            state.cartItems.push(action.payload)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Items Successfully added in the cart",
                showConfirmButton: false,
                timer: 2000
              });
           }
        else{
            Swal.fire({
                title: "This is Item already exist in the cart",
                icon: "info"
              });
        }},
        removeFromCart: (state , actions)=>{
            state.cartItems = state.cartItems.filter(item => item._id !== actions.payload._id)
            let timerInterval;
Swal.fire({
  title: "Your item will remove in <b></b> milliseconds.",
  timer: 1000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
})

        },
        clearCart : (state)=>{
        state.cartItems = []
        Swal.fire({
            title: "Your Cart will clear in <b></b> milliseconds.",
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
              timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            }
          })
        }

    }

})

// export the action
export const {addToCart, removeFromCart , clearCart}=cartSlice.actions;
export default cartSlice.reducer;