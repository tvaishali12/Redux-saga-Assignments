import { delay, put, takeLatest } from "redux-saga/effects";

import { addNumbersSuccess, addNumbersFailed } from "./Calculator.Slice";

function* onAddNumber(actions) {
    console.log("action", actions)
    try {
        const result = +actions.payload.num1 + +actions.payload.num2;
        console.log({ result });

        yield delay(3000);
        yield put(addNumbersSuccess(result));
    } catch (err) {
        console.log("@vt err: ", err);
        yield put(addNumbersFailed());
    }
}
export function* watchAddNewBusinessRequest() {
    yield takeLatest("calculator/addNumbers", onAddNumber);
}