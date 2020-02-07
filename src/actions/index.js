const starshipsLoaded = (newStarships) => {
    return {
        type: 'STARSHIPS_LOADED',
        payload: newStarships
    };
};

const starshipsRequested = () => {
    return {
        type: 'STARSHIPS_REQUESTED',
    };
};

const starshipAddedToCart = (starshipId, allStarships) => {
    const starshipObj = {
        starshipId: starshipId,
        allStarships: allStarships
    }
    return {
        type: 'STARSHIP_ADDED_TO_CART',
        payload: starshipObj
    }
}

const increaseStarship = (starshipId) => {
    return {
        type: 'STARSHIP_INCREASED',
        payload: starshipId
    }
}

const decreaseStarship = (starshipId) => {
    return {
        type: 'STARSHIP_DECREASED',
        payload: starshipId
    }
}

const orderCreated = () => {
    return {
        type: 'ORDER_CREATED'
    }
}

const closeThankYouModal = () => {
    return {
        type: 'CLOSE_THANK_YOU_MODAL'
    }
}

export { 
    starshipsLoaded,
    starshipsRequested,
    starshipAddedToCart,
    increaseStarship,
    decreaseStarship,
    orderCreated,
    closeThankYouModal
};