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

document.querySelector('.js-authorization').onclick = showSignUpForm;

// ----------------Scroll block---------------
const bodyScroll = document.querySelector('body');

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

function showSignUpForm() {
  const instanceSignUp = basicLightbox.create(signUpMarkup, {
    onShow: signUpModalInstance => {
      // ----------------Scroll block---------------
      bodyScroll.classList.add('no-scroll');

      signUpModalInstance
        .element()
        .querySelector('.js-close-modal-btn').onclick =
        signUpModalInstance.close;

      const signUpForm = signUpModalInstance
        .element()
        .querySelector('#signup-form');

      signUpForm.elements.name.value = '';
      signUpForm.elements.email.value = '';
      signUpForm.elements.password.value = '';

      const onSignUpFormSubmit = evt => {
        evt.preventDefault();

        if (evt.target.name === 'name') {
          signUpForm.elements.name.value = evt.target.value.trim();
        } else if (evt.target.name === 'email') {
          signUpForm.elements.email.value = evt.target.value.trim();
        } else if (evt.target.name === 'password') {
          signUpForm.elements.password.value.trim = evt.target.value.trim();
        }

        let name = signUpForm.elements.name.value;
        let email = signUpForm.elements.email.value;
        let password = signUpForm.elements.password.value;

        if (!name || !email || !password) {
          return Notify.warning('Please enter all information');
        }

        signUpModalInstance
          .element()
          .querySelector('.authorization-form-button')
          .setAttribute('disabled', 'disabled');

        createUserWithEmailAndPassword(auth, email, password, name)
          .then(userCredential => {
            // Signed in
            const user = userCredential.user;

            updateProfile(user, {
              displayName: name,
            })
              .then(() => {
                // Profile updated!
                signUpModalInstance.close();
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

            signUpModalInstance
              .element()
              .querySelector('.authorization-form-button')
              .removeAttribute('disabled', 'disabled');
          });
      };

      signUpForm.addEventListener('submit', onSignUpFormSubmit);

      signUpModalInstance.element().querySelector('#sign-in').onclick = () => {
        signUpModalInstance.close();
        showSignInForm();
      };

      document.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
          signUpModalInstance.close();
        }
      });
    },
    onClose: signUpModalInstance => {
      bodyScroll.classList.remove('no-scroll');

      document.removeEventListener('keydown', e => {
        if (e.code === 'Escape') {
          signUpModalInstance.close();
        }
      });
    },
  });

  instanceSignUp.show();
}

function showSignInForm() {
  const instanceSignIn = basicLightbox.create(signInMarkup, {
    onShow: signInModalInstance => {
      // ----------------Scroll block---------------
      bodyScroll.classList.add('no-scroll');

      signInModalInstance
        .element()
        .querySelector('.js-close-modal-btn').onclick =
        signInModalInstance.close;

      const signInForm = signInModalInstance
        .element()
        .querySelector('#signin-form');

      signInForm.elements.email.value = '';
      signInForm.elements.password.value = '';

      const onSignInFormSubmit = evt => {
        evt.preventDefault();

        if (evt.target.name === 'email') {
          signInForm.elements.email.value = evt.target.value.trim();
        } else if (evt.target.name === 'password') {
          signInForm.elements.password.value = evt.target.value.trim();
        }

        const email = signInForm.elements.email.value;
        const password = signInForm.elements.password.value;

        if (!email || !password) {
          return Notify.warning('Please enter all information');
        }

        signInModalInstance
          .element()
          .querySelector('.authorization-form-button')
          .setAttribute('disabled', 'disabled');

        signInWithEmailAndPassword(auth, email, password)
          .then(userCredential => {
            // Signed in

            const user = userCredential.user;
            signInModalInstance.close();
            window.location.reload();
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Notify.failure(errorMessage);

            signInModalInstance
              .element()
              .querySelector('.authorization-form-button')
              .removeAttribute('disabled', 'disabled');
            // return
          });
      };

      signInForm.addEventListener('submit', onSignInFormSubmit);

      signInModalInstance.element().querySelector('#sign-up').onclick = () => {
        signInModalInstance.close();
        showSignUpForm();
      };

      document.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
          signInModalInstance.close();
        }
      });
    },
    onClose: signInModalInstance => {
      bodyScroll.classList.remove('no-scroll');

      document.removeEventListener('keydown', e => {
        if (e.code === 'Escape') {
          signInModalInstance.close();
        }
      });
    },
  });

  instanceSignIn.show();
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
