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

export { 
    starshipsLoaded,
    starshipsRequested,
};