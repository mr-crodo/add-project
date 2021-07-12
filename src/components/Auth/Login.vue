<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar
              color="blue-grey darken-1"
              dark
          >
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <div class="card-body"></div>
          <v-card-text>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent="loginUser"
            >


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
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <button
                v-if="! xhrRequest"
                class="btn btn-primary btn-lg col-sm-4"
                @click="loginUser"
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
                    Sign in with:
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
              <span>Log in to your account using the login and password that you used when registering</span>
            </v-tooltip>
            Need an account ? <router-link to="/registration">Register Here</router-link>
          </v-alert>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import Avatar from './Avatar.vue';
import firebase from "firebase";
import {mapGetters} from "vuex";
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
      },
      ertext: {
        message: 'This is Oshibka di',
        fullName: 'John Doe',
        email: 'john.doe@doe.com',
      },
      error: null,
      showPassword: false,
      xhrRequest: false,
      show: false,
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      nameRules: [
          v => !!v || 'Name is required'
      ],
      passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
      ]
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
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },

  methods: {
    loginUser() {
      let v = this;

      v.xhrRequest = true;
      firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
          .then(data => {
            data.user
            this.$router.replace({ name: "user" });
                this.$router.push('/rooms')
            let strLog = `
            <div v-if="user" class="alert alert-success" role="alert">You are logged in mr. ${this.data.displayName}!
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
            </div>
            `;
            document.querySelector(".card-body").innerHTML = strLog;
            v.xhrRequest = false;

          },
          (err) => {
            console.log(`Errordu qaqqa - ${err.message}`);
            let strEr = `
            <div class="alert alert-danger" role="alert">${err.message} !!
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cone-striped" viewBox="0 0 16 16">
  <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
</svg>
            </div>
            `;
            document.querySelector(".card-body").innerHTML = strEr;
            v.xhrRequest = false;
          }
      )
      .catch(err => {
        this.error = err.message
      })
    },
    googleLogin: function () {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(() => {
        let strLog = `
            <div v-if="user" class="alert alert-success" role="alert">You are logged in. Welcome {{ user.data.fullName }}!
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
            </div>
            `;
        document.querySelector(".card-body").innerHTML = strLog;
        this.$router.replace('user')
      }).catch(err => {
        let strEr = `
            <div class="alert alert-danger" role="alert">${err.message} !!
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
    },

    //
    created () {
      if (this.$route.query['loginError']) {
        this.$store.dispatch('setError', 'Please log in to access this page')
      }
    }

  },
  // components: { Avatar }
}
</script>

<style>
.btn-spn {
  position: relative;
  top: -3px;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
</style>