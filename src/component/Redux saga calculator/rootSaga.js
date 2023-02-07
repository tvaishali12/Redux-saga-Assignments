import { all, fork } from "redux-saga/effects";
import { watchAddNewBusinessRequest } from "./Calculator.Saga";

export default function* rootSaga() {
    yield all([fork(watchAddNewBusinessRequest)]); // genrator func
}