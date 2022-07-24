<template>
  <div id="loginForm" class="login-form">
    <form @submit.prevent="submit">
      <div class="form-group" :class="{ 'form-group--error': $v.username.$error }">
        <label class="form__label">Name</label><br>
        <input class="form__input" type="text" v-model.trim="$v.username.$model"/>
      </div>
      <div class="error" v-if="!$v.username.required">Name is required</div>
      <div class="error" v-if="!$v.username.alpha">Name can only have letters</div>

      <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
        <label class="form__label">Password</label><br>
        <input class="form__input" type="password" v-model.trim="$v.password.$model"/>
      </div>
      <div class="error" v-if="!$v.password.required">Password is required.</div>
      <div class="error" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>

      <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">LOGIN</button>
    </form>
  </div>
</template>

<script>
import { required, alpha, minLength } from 'vuelidate/lib/validators';
import router from "@/router";

export default {
  name: "LoginForm",
  data() {
    return {
      username: '',
      password: '',
      submitStatus: null,
      userLoginData: {
        username: "Admin",
        password: 12345,
      },
    }
  },
  validations: {
    username: {
      required,
      alpha
    },
    password: {
      required,
      minLength: minLength(5)
    }
  },
  methods: {
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK';
          if (this.username === this.userLoginData.username && this.password === this.userLoginData.password.toString()) {
            router.push('/todo');
          }
        }, 500)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login-form {
  width: 22%;
  height: auto;
  background: #fff;
  margin: -10% 0 0 56%;
  padding: 54px 31px;
  box-shadow: 0 0 15px 0 rgba(34, 60, 80, 0.2);
}

.login-btn {
  width: 100px;
  height: 40px;
  margin: auto;
}

h1 {
  text-align: center;
  padding: 1em 0;
}

.form__label, .form__label--inline {
  font-size: 18px;
  color: #4b6372;
  margin-bottom: -15px;
  display: block;
  font-family: "Lato",sans-serif;
  text-align: left;
}

.form-group--error .form__label, .form-group--error .form__label--inline {
  color: #f04124;
}

.form-group {
  margin-bottom: 45px;
}

.error {
  margin-top: -30px;
  margin-bottom: 20px;
}

.form__input, .form__textarea {
  font-family: "Lato",sans-serif;
  font-size: .875rem;
  font-weight: 300;
  color: #374853;
  line-height: 2.375rem;
  min-height: 2.375rem;
  position: relative;
  border: 1px solid #E8E8E8;
  border-radius: 5px;
  background: #fff;
  padding: 0 0.8125rem;
  width: 100%;
  transition: border .1s ease;
  box-sizing: border-box;
}

.form-group__message, .error {
  font-size: 14px;
  line-height: 1;
  display: none;
  margin-left: 14px;
  margin-top: -1.6875rem;
  margin-bottom: 0.9375rem;
}

.form-group--error+.form-group__message, .form-group--error+.error {
  display: block;
  color: #f57f6c;
}

.button {
  width: 100%;
  height: 55px;
  background: #0076C0;
  color: #fff;
  border: none;
  font-size: 23px;

  :hover {
    background: #fff;
    border: 2px solid #0076C0;
    color: #0076C0;
  }
}
</style>
