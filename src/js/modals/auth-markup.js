const signUpMarkup = ` <div class="modal-auth">
 <button class="auth-close-btn">
   <svg class="icon" width="10" height="10">
          <use href="./images/sprite.svg#icon-x-close"></use>
        </svg>
  </button>

  <form class="modal-authorization-form" id="authorization-form" name="authorization_form">
    <div
      class="authorization-form-group"
      role="group"
      aria-labelledby="modal_authorization_form"
    >
      <div class="authorization-form-field">
        <input
            class="authorization-form-input"
            type="text"
            name="user_name"
            id="name"
            placeholder="User name"
            pattern="^[А-Яа-я-A-Za-z]+$"
          />
        <label class="authorization-form-label" for="name">Name</label>
      </div>

      <div class="authorization-form-field">
          <svg class="form-icon" width="18" height="18">
            <use href="./images/sprite.svg#mail"></use>
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
          <svg class="form-icon" width="18" height="18">
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

    <button class="authorization-form-button" type="submit">Sign up</button>
   </form>
  
   <div class="sign-action-group">
      <p class="modal-sign-action active">Sign up</p>
      <p class="modal-sign-action js_sign_in" id="sign-in">Sign in</p>
    </div>
</div>`;

export { signUpMarkup };
