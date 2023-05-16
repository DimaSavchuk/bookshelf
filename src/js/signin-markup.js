const signInMarkup = ` <div class="modal-auth">
 <button class="auth-close-btn js-close-modal-btn">
   X
  </button>

  <form class="modal-authorization-form" id="signin-form" name="signin_form">
    <div
      class="authorization-form-group"
      role="group"
      aria-labelledby="modal_authorization_form"
    >
      <div class="authorization-form-field">
          <svg class="form-icon" width="10" height="10">
            <use href="./images/sprite.svg#icon-mail"></use>
          </svg>
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
          <svg class="form-icon" width="10" height="10">
            <use href="./images/sprite.svg#icon-lock"></use>
          </svg>
          <input
            class="authorization-form-input"
            type="password"
            name="user_password"
            id="password"
            placeholder="enter your password"
            minlength="5"
            maxlength="20"
          />
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
