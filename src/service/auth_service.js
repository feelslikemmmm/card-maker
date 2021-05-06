import firebase from 'firebase';

class AuthService {
  login(provideerName) {
    const authProvider = new firebase.auth[`${provideerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;