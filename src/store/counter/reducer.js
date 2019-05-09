const initialState = {
    counter: 5,
}

const counterReducer = (state = initialState, action) => {
    const { type, payload } = action;

    // That reducer can be reused. I know.
    switch (type) {
        case 'COUNTER_INC':
            return {
                ...state,
                counter: state.counter + payload,
            }

        case 'COUNTER_ADD':
            return {
                ...state,
                counter: state.counter + payload,
            }
        case 'COUNTER_SUB':
            return {
                ...state,
                counter: state.counter - payload,
            }
        case 'COUNTER_DEC':
            return {
                ...state,
                counter: state.counter - payload,
            }

        default:
            return state;
    }
}

export default counterReducer;