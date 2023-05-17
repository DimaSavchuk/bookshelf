import svg from '../images/sprite.svg';

const closeIcon = `<svg width="28" height="28" class="icon-modal-close">
            <use href="${svg}#icon-x-close"></use>
          </svg>`;

const mail = `<svg width="28" height="28" class="form-icon">
            <use href="${svg}#icon-mail"></use>
          </svg>`;

const lock = `<svg width="28" height="28" class="form-icon">
            <use href="${svg}#icon-lock"></use>
          </svg>`;

const signInMarkup = ` <div class="modal-auth">
 <button class="auth-close-btn js-close-modal-btn">
 ${closeIcon}
  </button>

  <form class="modal-authorization-form" id="signin-form" name="signin_form">
    <div
      class="authorization-form-group"
      role="group"
      aria-labelledby="modal_authorization_form"
    >
      <div class="authorization-form-field">
          ${mail}
          <input
            class="authorization-form-input"
            type="email"
            name="user_email"
            id="email"
            placeholder="example@com.com"
          />
          <label class="authorization-form-label" for="email">Email</label>
      </div>

      <div class="authorization-form-field">
          ${lock}
          <input
            class="authorization-form-input"
            type="password"
            name="user_password"
            id="password"
            placeholder="enter your password"
            minlength="5"
            maxlength="20"
            title="Must contain from 6 to 20 characters"/>
         
            <label class="authorization-form-label" for="password">Password</label>
        </div>
    </div>

    <button class="authorization-form-button" type="submit">Sign in</button>
   </form>

   <div class="sign-action-group">
      <p class="modal-sign-action" id="sign-up">Sign up</p>
      <p class="modal-sign-action active">Sign in</p>
    </div>
</div>`;

export { signInMarkup };
