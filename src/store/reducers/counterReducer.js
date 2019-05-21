import * as actionTypes from '../actions';

const initialState = {
    counter: 5,
}

const counterReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.COUNTER_INC:
            return {
                ...state,
                counter: state.counter + payload,
            }

        case actionTypes.COUNTER_DEC:
            return {
                ...state,
                counter: state.counter - payload,
            }

        // case actionTypes.RESULTS_ADD:
        //     return {
        //         ...state,
        //         results: [...state.results, { id: payload, counter: state.counter }],
        //     }

        // case actionTypes.RESULT_DELETE:
        //     return {
        //         ...state,
        //         results: state.results.filter(result => result.id !== payload)
        //     }
             
        default:
            return state;
    }
}

export default counterReducer;