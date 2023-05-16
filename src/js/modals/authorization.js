import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { signUpMarkup } from './auth-markup';
import { signInMarkup } from './signin-markup';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAqWH2icjWY7IpUhAf_OC5YhETKs4dKhp4',
  authDomain: 'bookshelf-8fd9e.firebaseapp.com',
  projectId: 'bookshelf-8fd9e',
  storageBucket: 'bookshelf-8fd9e.appspot.com',
  messagingSenderId: '750642504872',
  appId: '1:750642504872:web:4ecdb00b8b46247efb4e9d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const signUpBtn = document.querySelector('.js-authorization');
const authorizedBtn = document.querySelector('.js-user-bar');
const signOutBtn = document.querySelector('.js-signOut');
const headerNavEl = document.querySelector('.js-header-nav');
const logOutMobile = document.querySelector('.js-logOut');
const logOutWndw = document.querySelector('.js-logout');
const userLoggedName = document.querySelectorAll('.js-name');
// ----------------Scroll block---------------
const bodyScroll = document.querySelector('body');

signUpBtn.addEventListener('click', onSignUpBtn);
signOutBtn.addEventListener('click', onSignOutBtn);
logOutMobile.addEventListener('click', onSignOutBtn);

const auth = getAuth();

export function authCheck() {
  onAuthStateChanged(auth, user => {
    if (user) {
      signUpBtn.classList.add('authorized');
      authorizedBtn.classList.replace('unauthorized', 'authorized');
      userLoggedName.forEach(item => {
        item.innerHTML = user.displayName;
      });
      headerNavEl.classList.replace('unauthorized', 'authorized');
      logOutMobile.classList.add('authorized');
    } else {
      // User is signed out
      signUpBtn.classList.remove('authorized');
      authorizedBtn.classList.replace('authorized', 'unauthorized');
      headerNavEl.classList.replace('authorized', 'unauthorized');
      logOutMobile.classList.remove('authorized');
    }

    const loadingElement = document.querySelector('.js-loading');
  });
}

const instance = basicLightbox.create(signUpMarkup, {
  onShow: () => {
    // ----------------Scroll block---------------
    bodyScroll.classList.add('no-scroll');
  },
  onClose: () => {
    bodyScroll.classList.remove('no-scroll');
  },
});
const instanceSignIn = basicLightbox.create(signInMarkup, {
  onShow: () => {
    // ----------------Scroll block---------------
    bodyScroll.classList.add('no-scroll');
  },
  onClose: () => {
    bodyScroll.classList.remove('no-scroll');
  },
});

function onSignUpBtn(e) {
  e.preventDefault();

  instance.show(() => {
    const AuthForm = document.getElementById('authorization-form');
    const signInModalEl = document.getElementById('sign-in');
    AuthForm.addEventListener('submit', onSubmit);
    signInModalEl.addEventListener('click', onSignInClick);

    AuthForm.elements.name.value = '';
    AuthForm.elements.email.value = '';
    AuthForm.elements.password.value = '';

    function onSubmit(evt) {
      evt.preventDefault();

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
        return Notify.warning('Please enter all information');
      }

      createUserWithEmailAndPassword(auth, email, password, name)
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name,
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
          Notify.failure(errorMessage);
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
              window.location.reload();
            })
            .catch(error => {
              const errorCode = error.code;
              const errorMessage = error.message;
              Notify.failure(errorMessage);
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

// This logic hides/shows the logout popover window
// for signout
document.body.addEventListener('click', function (evt) {
  if (
    evt.target.closest('.js-user-bar') &&
    logOutWndw.classList.contains('logouthidn')
  ) {
    return logOutWndw.classList.remove('logouthidn');
  }

  if (
    !evt.target.closest('.js-logout') &&
    !logOutWndw.classList.contains('logouthidn')
  ) {
    return logOutWndw.classList.add('logouthidn');
  }
});

function onSignOutBtn() {
  signOut(auth);
  window.location.reload();
}
