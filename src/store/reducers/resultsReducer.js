import * as actionTypes from '../actions';

const initialState = {
    results: [],
}

const resultsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.RESULTS_ADD:
            return {
                ...state,
                results: [...state.results, { id: payload.uuid, counter: payload.counter }],
            }

        case actionTypes.RESULT_DELETE:
            return {
                ...state,
                results: state.results.filter(result => result.id !== payload)
            }
        default:
            return state;
    }
}

export default resultsReducer;