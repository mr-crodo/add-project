<template>
  <v-container fluid fill-height>
    <v-main>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
          <v-card class="elevation-12">
            <v-toolbar
                color="blue-grey darken-1"
                dark
            >
              <v-toolbar-title>Registration form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <div class="card-body"></div>
              <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  @submit.prevent="signupRequest"
              >
                <v-text-field
                    color="blue-grey"
                    label="User Name"
                    name="username"
                    prepend-inner-icon="mdi-account"
                    type="username"
                    v-model="form.name"
                    :rules="usernameRules"
                ></v-text-field>
                <v-text-field
                    color="blue-grey"
                    label="Email"
                    name="email"
                    prepend-inner-icon="mdi-account"
                    type="email"
                    v-model="form.email"
                    :rules="emailRules"
                ></v-text-field>

                <v-text-field
                    color="blue-grey"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-inner-icon="mdi-lock"
                    :counter="6"
                    v-model="form.password"
                    :rules="passwordRules"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                ></v-text-field>
                <v-text-field
                    color="blue-grey"
                    id="password"
                    label="Confirm Password"
                    name="confirm-password"
                    prepend-inner-icon="mdi-lock"
                    :counter="6"
                    v-model="confirmPassword"
                    :rules="confirmPasswordRules"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                ></v-text-field>
                <v-checkbox
                    v-model="ex4"
                    label="By checking the box you accept our license agreement and confirm that you are over 16 years old"
                    color="teal"
                    hide-details
                    required
                    :rules="checkboxRules"
                ></v-checkbox>

              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              <button
                  v-if="! xhrRequest"
                  class="btn btn-primary btn-lg col-sm-4"
                  @click="signupRequest"
              >
                Sign Up
              </button>
              <button
                  v-if="xhrRequest"
                  class="btn btn-info btn-lg col-sm-4"
              >
                <span class="spinner-border spinner-border-sm btn-spn"></span>
                wait ...
              </button>
            </v-card-actions>
            <v-row justify="space-around" class="mt-6 mb-6">
                  <v-card-title>
                    Create an account using:
                  </v-card-title>
                        <v-card 
                        class="d-flex flex-column flex-wrap justify-content-between" 
                        height="200px" 
                        width="80%"
                        >
                            <v-btn
                                color="white"
                                depressed
                                elevation="2"
                                block
                                class="mt-2 mb-2"
                                @click="googleLogin"
                            >
                              <v-icon left  color="red lighten-1">mdi-google</v-icon>
                              Google
                            </v-btn>
                            <v-btn
                                color="white"
                                depressed
                                elevation="2"
                                block
                                class="mt-2 mb-2"
                                @click="facebookLogin"
                            >
                              <v-icon left  color="blue lighten-1">mdi-facebook</v-icon>
                              Facebook
                            </v-btn>
                            <v-btn
                                color="white"
                                depressed
                                elevation="2"
                                block
                                class="mt-2 mb-2"
                                @click="githubLogin"
                            >
                              <v-icon left  color="black lighten-2">mdi-github</v-icon>
                              GitHub
                            </v-btn>
                        </v-card>
              </v-row>
            <v-alert
                text
                color="blue-grey darken-1"
                dark
            >
              <v-tooltip
                  v-model="show"
                  top
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                  >
                    <v-icon color="blue-grey darken-1">
                      mdi-information
                    </v-icon>
                  </v-btn>
                </template>
                <span>Register to be an active user and make changes</span>
              </v-tooltip>

              Have an account ? <router-link to="/login" text color="red">Login Here</router-link>
            </v-alert>
          </v-card>
        </v-flex>
      </v-layout>
    </v-main>
  </v-container>
</template>

<script>
import firebase from 'firebase';
// import { ref } from 'vue'
export default {
  data () {
    return {
      ex4: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],
      form: {
        email: '',
        password: '',
      },
      error: null,
      showPassword: false,
      confirmPassword: '',
      valid: false,
      show: false,
      xhrRequest: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
      ],
      firstnameRules: [
        v => !!v || 'First name is required'
      ],
      lastnameRules: [
        v => !!v || 'Last name is required'
      ],
      usernameRules: [
        v => !!v || 'User name is required'
      ],
      checkboxRules: [
        v => !!v || 'User name is required'
      ],
      confirmPasswordRules: [
        v => !!v || 'Password is required',
          v => v == this.form.password || 'Passwords should match'
      ],
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]
      setTimeout(() => (this[l] = false), 3000)
      this.loader = null
    },
  },
  computed: {
    loading () {
       return this.$store.getters.loading
    }
  },
  methods: {
    signupRequest: function () {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
          .then(() => {
            let v = this;
            v.xhrRequest = true;
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.form.email, this.form.password)
                .then(data => {
                  data.user
                  .updateProfile({
                    displayName: this.form.name
                  })
                  .then(() => {});
                  // testing login user or no
                  this.$router.replace({ name: "user" });
                  let strLog = `
                    <div v-if="user" class="alert alert-success" role="alert">You are logged in mr. ${this.data.displayName}!
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                    </div>
                      `;
                  document.querySelector(".card-body").innerHTML = strLog;
                  // this.$router.replace('user')
                },
                (err) => {
                  v.xhrRequest = false;
                  let strEr = `
                    <div class="alert alert-danger" role="alert">${err.message}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cone-striped" viewBox="0 0 16 16">
                        <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
                      </svg>
                    </div>
                    `;
                  document.querySelector(".card-body").innerHTML = strEr;
                }
            )
            .catch(err => {
              this.error = err.message;
            });
          })
          .catch((err) => {
            alert(err.message);
          })
    },
    googleLogin: function () {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
          .then(() => {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then(data => {
                  data.user
                  .updateProfile({
                    displayName: this.form.name,
                  })
                  .then(() => {})
                  //testing
              console.log('Login')
              let strLog = `
                  <div v-if="user" class="alert alert-success" role="alert">You are logged in mr. ${this.form.name}!
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
                  </div>
                  `;
              document.querySelector(".card-body").innerHTML = strLog;
              this.$router.replace('user')
            }).catch(err => {
              this.error = err.message;
            })
          })
          .catch((err) => {
            alert(err.message);
            let strEr = `
              <div class="alert alert-dark" role="alert">${err.message}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cone-striped" viewBox="0 0 16 16">
                  <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
                </svg>
              </div>
              `;
            document.querySelector(".card-body").innerHTML = strEr;
      })
    },
    facebookLogin: function () {
              const facebookProvider = new firebase.auth.FacebookAuthProvider();
              // facebookProvider.addScope('user_birthday');
              firebase.auth().signInWithPopup(facebookProvider)
              .then(() => {
                window.location.assign('user')
                // // This gives you a Facebook Access Token.
                // var token = result.credential.accessToken;
                // // The signed-in user info.
                // var user = result.user;
                // console.log(user);
                // console.log(token);
                alert('Login');
                
                
                })
                .catch(error => {
                  let strEr = `
                    <div class="alert alert-dark" role="alert">${error.message}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cone-striped" viewBox="0 0 16 16">
                          <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
                        </svg>
                    </div>
                    `;
            document.querySelector(".card-body").innerHTML = strEr;
                });
    },
    githubLogin: function () {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      const githubProvider = new firebase.auth.GithubAuthProvider();
      firebase.auth().signInWithPopup(githubProvider)
      .then(() => {
        window.location.assign('user')
        alert('Login')
      })
      .catch(error => {
        alert(error.message);
        let strEr = `
          <div class="alert alert-dark" role="alert">${error.message}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cone-striped" viewBox="0 0 16 16">
              <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
            </svg>
          </div>
          `;
        document.querySelector(".card-body").innerHTML = strEr;
      });
    }
  }
}
</script>

<style scoped>
  .btn-spn {
    position: relative;
    top: -3px;
  }
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
</style>
