const initState = {
    starships: [],
    loading: true,
    cartItems: localStorage.getItem('cartItems') !== undefined ? localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : [] : [],
    orderTotal: localStorage.getItem('orderTotal') !== undefined ? localStorage.getItem('orderTotal') !== null ? JSON.parse(localStorage.getItem('orderTotal')) : 0 : 0
  };
  
  
  const starshipsReducer = (state = initState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  
  export default starshipsReducer;