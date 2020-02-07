const initState = {
  thankYouModalVisibility: false,
  cartItems: localStorage.getItem("cartItems") !== undefined && localStorage.getItem("cartItems") !== null ? JSON.parse(localStorage.getItem("cartItems")) : [],
  orderTotal: localStorage.getItem("orderTotal") !== undefined && localStorage.getItem("orderTotal") !== null ? JSON.parse(localStorage.getItem("orderTotal")) : 0
};

const addStarshipToCart = (state, action) => {
  
  const starshipId = action.payload.starshipId;
  const starship = action.payload.allStarships.find(
    starship => starship.id === starshipId
  );
  const itemIndex = state.cartItems.findIndex(
    item => item.name === starship.name
  );
  const item = state.cartItems[itemIndex];

  let newStarship;
  if (item) {
    newStarship = { ...item, count: item.count + 1 };
  } else {
    newStarship = {
      id: starship.id,
      name: starship.name,
      model: starship.model,
      img: starship.img,
      costInCredits: starship.costInCredits,
      count: 1
    };
  }

  let orderTotal = state.orderTotal;
  orderTotal = Number(newStarship.costInCredits) + orderTotal;

  if (itemIndex < 0) {
    return {
      ...state,
      orderTotal: orderTotal,
      cartItems: [...state.cartItems, newStarship]
    };
  } else {
    return {
      ...state,
      orderTotal: orderTotal,
      cartItems: [
        ...state.cartItems.slice(0, itemIndex),
        newStarship,
        ...state.cartItems.slice(itemIndex + 1)
      ]
    };
  }
};

const increaseStarships = (state, action) => {
  const indexIncreasedStarship = state.cartItems.findIndex(
    item => item.id === action.payload
  );
  const itemIncreasedStarship = state.cartItems[indexIncreasedStarship];
  let increasedNewStarship = {
    ...itemIncreasedStarship,
    count: itemIncreasedStarship.count + 1
  };
  let reacalculateOrderWhenIncreased = state.orderTotal;
  reacalculateOrderWhenIncreased =
    Number(increasedNewStarship.costInCredits) + reacalculateOrderWhenIncreased;
  return {
    ...state,
    orderTotal: reacalculateOrderWhenIncreased,
    cartItems: [
      ...state.cartItems.slice(0, indexIncreasedStarship),
      increasedNewStarship,
      ...state.cartItems.slice(indexIncreasedStarship + 1)
    ]
  };
};

const decreaseStarships = (state, action) => {
  const indexDecreasedStarship = state.cartItems.findIndex(
    item => item.id === action.payload
  );
  const itemDecreasedStarship = state.cartItems[indexDecreasedStarship];
  let decreasedNewStarship = {
    ...itemDecreasedStarship,
    count: itemDecreasedStarship.count - 1
  };
  let reacalculateOrderWhenDecreased = state.orderTotal;
  reacalculateOrderWhenDecreased =
    reacalculateOrderWhenDecreased - Number(decreasedNewStarship.costInCredits);
  if (decreasedNewStarship.count < 1) {
    return {
      ...state,
      orderTotal: reacalculateOrderWhenDecreased,
      cartItems: [
        ...state.cartItems.slice(0, indexDecreasedStarship),
        ...state.cartItems.slice(indexDecreasedStarship + 1)
      ]
    };
  }
  return {
    ...state,
    orderTotal: reacalculateOrderWhenDecreased,
    cartItems: [
      ...state.cartItems.slice(0, indexDecreasedStarship),
      decreasedNewStarship,
      ...state.cartItems.slice(indexDecreasedStarship + 1)
    ]
  };
};

const orderCreated = (state) => {
  localStorage.removeItem("cartItems");
  localStorage.removeItem("orderTotal");
  return {
    ...state,
    thankYouModalVisibility: true,
    cartItems: [],
    orderTotal: 0
  };
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "STARSHIP_ADDED_TO_CART":
      return addStarshipToCart(state, action);
    case "STARSHIP_INCREASED":
      return increaseStarships(state, action);
    case "STARSHIP_DECREASED":
      return decreaseStarships(state, action);
    case "CLOSE_THANK_YOU_MODAL":
      return {
        ...state,
        thankYouModalVisibility: false,
      }
    case "ORDER_CREATED":
      return orderCreated(state);
    
    default:
      return state;
  }
};

export default cartReducer;
