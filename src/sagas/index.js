import { takeEvery, take, put, spawn, debounce, retry } from 'redux-saga/effects';
import { getItemsSuccess, getItemsFailure, getHitSuccess, getHitFailure, getCategoriesSuccess, getCategoriesFailure, getItemsCatSuccess, getItemsCatFailure } from '../actions/actionCreators';
import { GET_HIT_REQUEST, GET_ITEMS_REQUEST, GET_CATEGORIES_REQUEST, GET_ITEMSCAT_REQUEST } from '../actions/actionTypes';
import { listItems, listHits, listCategories, itemsInCategory } from '../api/index';

function filterGetItemsCatAction({ type, payload }) {
    return type === GET_ITEMSCAT_REQUEST && payload.id !== ''
}

// watcher
function* watchGetItemsCatSaga() {
    yield debounce(100, filterGetItemsCatAction, handleGetItemsCatSaga);
}

// worker
function* handleGetItemsCatSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, itemsInCategory, action.payload.id);
        yield put(getItemsCatSuccess(data));
    } catch (e) {
        yield put(getItemsCatFailure(e.message));
    }
}

function* handleGetHitsSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, listHits);
        yield put(getHitSuccess(data));
    } catch (e) {
        yield put(getHitFailure(e.message));
    }
}

// watcher
function* watchGetHitsSaga() {
    yield takeEvery(GET_HIT_REQUEST, handleGetHitsSaga);
}

function* handleGetCategoriesSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, listCategories);
        yield put(getCategoriesSuccess(data));
    } catch (e) {
        yield put(getCategoriesFailure(e.message));
    }
}
// watcher
function* watchGetCategoriesSaga() {
    yield takeEvery(GET_CATEGORIES_REQUEST, handleGetCategoriesSaga);
}

function* handleGetItemsSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, listItems);
        yield put(getItemsSuccess(data));
    } catch (e) {
        yield put(getItemsFailure(e.message));
    }
}

// watcher
function* watchGetItemsSaga() {
    yield takeEvery(GET_ITEMS_REQUEST, handleGetItemsSaga);
}

export default function* saga() {
    yield spawn(watchGetItemsSaga);
    yield spawn(watchGetHitsSaga);
    yield spawn(watchGetCategoriesSaga);
    yield spawn(watchGetItemsCatSaga);
}