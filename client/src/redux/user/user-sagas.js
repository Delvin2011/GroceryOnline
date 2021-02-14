//listen to googleSignInStart and trigger the actual signIn from the saga

import {takeLatest, put, all, call} from 'redux-saga/effects';

import UserActionTypes from './user-types';
import {signInSuccess, signInFailure, signOutSuccess, signOutFailure,signUpSuccess, signUpFailure} from './user-actions';

import {auth, googleProvider, createUserProfileDocument,getCurrentUser} from '../../firebase/firebase.utils';


/*-Our googel will call auth.signInWithPopup using googleProvider.
-Which will create the right popup inside of our App.
-User is selected and Onces that succeeds and we get back the user object with user details.
-The obj is take and call createUserProfileDocument (in firebase utils) and gives back User Ref.
-Get the snapshot using UserRef and put out a success.
-The success will update the user reducer using the object being passed to it. yield put(googleSignInSuccess({id: userSnapShot.id, ...userSnapShot.data()}
-Which will be current user object in user reducer
-use refactoring for both sign in with google or email*/

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth,additionalData);
        const userSnapShot = yield userRef.get();
        yield put(signInSuccess({id: userSnapShot.id, ...userSnapShot.data()}));
    }catch(error){
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle(){
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    }catch(error){
        yield put(signInFailure(error));
    }
}

export function* signInWithEmail({payload: {email, password}}) {
    //API request
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user);
    }catch(error){
        yield put(signInFailure(error));
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if (!userAuth) return; //no user session
        yield getSnapshotFromUserAuth(userAuth);
    }catch(error){
        yield put(signInFailure(error))
    }
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error){
        yield put(signOutFailure(error));
    }
}

export function* signUp({payload: {email, password, displayName}}){
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(signUpSuccess({user, additionalData: {displayName} }))
    }catch(error){
        yield put(signUpFailure(error))
    }
}

export function* signInAfterSignUp({payload:{user, additionalData}}){
   yield getSnapshotFromUserAuth(user, additionalData); 
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}
//initiates the start caal to our API
export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}

export function* oncheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut )
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp )
}

export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}
export function* userSagas(){
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(oncheckUserSession), call(onSignOutStart), call(onSignUpStart), call(onSignUpSuccess)]);
} //instantiating all the sagas we are going to call