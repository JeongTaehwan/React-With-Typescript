import React, { createContext, Dispatch, useContext, useReducer } from 'react';

// Color 타입 설정
type Color = 'red' | 'orange' | 'yellow';

// State 타입 설정
type State = {
    count: number,
    text: string,
    color: Color,
    isGood: boolean,
};
// Action 타입 설정
type Action =
    | { type: 'SET_COUNT'; count: number }
    | { type: 'SET_TEXT'; text: string }
    | { type: 'SET_COLOR'; color: Color }
    | { type: 'TOGGLE_GOOD' };

// reducer 함수 작성
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count
            };
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color
            };
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            };
        default:
            throw new Error('Unhandled action type');
    }
};

const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<Dispatch<Action> | null>(null);

type SampleProviderProps = {
    children: React.ReactNode;
}

export function SampleProvider({ children }: SampleProviderProps) {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'Hello',
        color: 'red',
        isGood: true
    });

    return (
        <SampleStateContext.Provider value={state}>
            <SampleDispatchContext.Provider value={dispatch}>
                {children}
            </SampleDispatchContext.Provider>
        </SampleStateContext.Provider>
    )
}

export function useSampleState() {
    const state = useContext(SampleStateContext);
    if (!state) throw new Error('Cannot find SampleProvider');
    return state;
}

export function useSampleDispatch() {
    const dispatch = useContext(SampleDispatchContext);
    if (!dispatch) throw new Error('Cannot find SampleProvider');
    return dispatch;
}