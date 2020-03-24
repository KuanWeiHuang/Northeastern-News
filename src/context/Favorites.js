import createDataContext from './createDataContext';


const favoritesReducer = (state, action) => {
    switch (action.type) {
        case 'delete_favorites':
            return state.filter((News) => News.id !== action.payload);
        case 'add_favorites':
            return [...state, 
                    { 
                        id: action.payload,
                    }
            ];
        default:
            return state;
    }
};

const addFavorites = (dispatch) => {
    return (id) => {
        dispatch({ type: 'add_favorites', payload: id });
    };
};
const deleteFavorites = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_favorites', payload: id });
    };
};


export const {Context,Provider} = createDataContext(
    favoritesReducer, 
    { addFavorites, deleteFavorites },
    [{id: '1'}, {id: '2'}, { id: '3'}]
);