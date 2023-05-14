import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { signUpMarkup } from './auth-markup';
import { signInMarkup } from './signin-markup';
import { topBooksRequest } from '../requests/apiRequests';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

// import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAqWH2icjWY7IpUhAf_OC5YhETKs4dKhp4',
  authDomain: 'bookshelf-8fd9e.firebaseapp.com',
  projectId: 'bookshelf-8fd9e',
  storageBucket: 'bookshelf-8fd9e.appspot.com',
  messagingSenderId: '750642504872',
  appId: '1:750642504872:web:4ecdb00b8b46247efb4e9d',
  databaseURL:
    'https://bookshelf-8fd9e-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);

const signUpBtn = document.querySelector('.js-authorization');
const authorizedBtn = document.querySelector('.js-user-bar');
const signOutBtn = document.querySelector('.js-signOut');
const logOutMobile = document.querySelector('.js-logOut');
const logOutWndw = document.querySelector('.js-logout');
const userLoggedName = document.querySelectorAll('.js-name');
console.log(signOutBtn);

signUpBtn.addEventListener('click', onSignUpBtn);
signOutBtn.addEventListener('click', onSignOutBtn);
logOutMobile.addEventListener('click', onSignOutBtn);
authorizedBtn.addEventListener('click', onAuthorizedBtn);

const auth = getAuth();

// TODO: Introduce main entry file and move this logic there
window.addEventListener('DOMContentLoaded', event => {
  console.log('DOM fully loaded and parsed');
  const layoutElement = document.querySelector('.layout');
  layoutElement.classList.add('is-loading');

  Promise.all([authCheck(), topBooksRequest()]).then(() => {
    const loadingElement = document.querySelector('.js-loading');
    const layoutElement = document.querySelector('.layout');

    loadingElement.classList.add('loading-overlay-hide');
    layoutElement.classList.remove('is-loading');
  });
});

export function authCheck() {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      signUpBtn.classList.add('authorized');
      authorizedBtn.classList.replace('unauthorized', 'authorized');
      userLoggedName.forEach(item => {
        item.innerHTML = user.displayName;
      });
    } else {
      // User is signed out
      signUpBtn.classList.remove('authorized');
      authorizedBtn.classList.replace('authorized', 'unauthorized');
    }

    const loadingElement = document.querySelector('.js-loading');
  });
}

const instance = basicLightbox.create(signUpMarkup);
const instanceSignIn = basicLightbox.create(signInMarkup);

function onSignUpBtn(e) {
  e.preventDefault();

  instance.show(() => {
    console.log('instance show');
    const AuthForm = document.getElementById('authorization-form');
    const signInModalEl = document.getElementById('sign-in');

    AuthForm.addEventListener('submit', onSubmit);
    signInModalEl.addEventListener('click', onSignInClick);

    AuthForm.elements.name.value = '';
    AuthForm.elements.email.value = '';
    AuthForm.elements.password.value = '';

    function onSubmit(evt) {
      evt.preventDefault();

      console.log('submit');

      if (evt.target.name === 'name') {
        AuthForm.elements.name.value = evt.target.value.trim();
      } else if (evt.target.name === 'email') {
        AuthForm.elements.email.value = evt.target.value.trim();
      } else if (evt.target.name === 'password') {
        AuthForm.elements.password.value.trim = evt.target.value.trim();
      }

      let name = AuthForm.elements.name.value;
      let email = AuthForm.elements.email.value;
      let password = AuthForm.elements.password.value;

      if (!name || !email || !password) {
        return;
        // return Notify.warning('Please enter all information');
      }

      createUserWithEmailAndPassword(auth, email, password, name)
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          updateProfile(user, {
            displayName: name,
            photoURL: 'https://example.com/jane-q-user/profile.jpg',
          })
            .then(() => {
              // Profile updated!

              window.location.reload();
            })
            .catch(error => {
              // An error occurred
              // ...
            });
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // Notify.failure(errorMessage);
          // ..
        });

      AuthForm.removeEventListener('submit', onSubmit);
      instance.close();
    }

    function onSignInClick(e) {
      instance.close();

      instanceSignIn.show(() => {
        const signInForm = document.getElementById('signin-form');
        const signUpModalEl = document.getElementById('sign-up');

        signInForm.addEventListener('submit', onSignInSubmit);
        signUpModalEl.addEventListener('click', onSignUpBtn);

        signInForm.elements.email.value = '';
        signInForm.elements.password.value = '';

        function onSignInSubmit(evt) {
          evt.preventDefault();

          if (evt.target.name === 'email') {
            signInForm.elements.email.value = evt.target.value.trim();
          } else if (evt.target.name === 'password') {
            signInForm.elements.password.value = evt.target.value.trim();
          }

          const email = signInForm.elements.email.value;
          const password = signInForm.elements.password.value;

          signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
              // Signed in

              const user = userCredential.user;
              console.log(user);
              //   localStorage.setItem(
              //     KEY_USERPROFILE,
              //     JSON.stringify(userProfileObj)
              //   );

              window.location.reload();
            })
            .catch(error => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // Notify.failure(errorMessage);
              console.error('errorMessage', errorMessage);
              // return
            });
          instanceSignIn.removeEventListener('click', onSignUpBtn);
          instanceSignIn.close();
        }

        function onSignUpBtn(evt) {
          instanceSignIn.close();
          instance.show();
        }
      });
    }
  });
}

// function onAuthorizedBtn(e) {
//   e.preventDefault();
//   logOutWndw.classList.toggle('logouthidn');
// }

function onAuthorizedBtn(e) {
  e.preventDefault();
  logOutWndw.classList.toggle('logouthidn');

  if (!logOutWndw.classList.contains('logouthidn')) {
    window.addEventListener('mouseup', function (evt) {
      if (evt.target != logOutWndw && evt.target.parentNode != logOutWndw) {
        logOutWndw.classList.add('logouthidn');
      }
    });
  }
}

function onSignOutBtn() {
  signOut(auth);
  window.location.reload();
}
