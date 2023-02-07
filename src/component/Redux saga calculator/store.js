
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import CalculatorSlice from "./Calculator.Slice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const reduxStore = configureStore({
    reducer: {

        calculator: CalculatorSlice,
    },
    middleware: (currentMiddleware) => [
        ...currentMiddleware({ thunk: false }),
        sagaMiddleware,
    ],
});

sagaMiddleware.run(rootSaga);