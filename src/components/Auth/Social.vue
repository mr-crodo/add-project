<template>
    <v-row justify="space-around">
      <v-card-title>
        Create an account using:
      </v-card-title>
            <v-card class="d-flex flex-column flex-wrap justify-content-between" height="200px" width="80%">
                <v-btn
                    color="white"
                    depressed
                    elevation="2"
                    v-for="social in socials"
                    :key="social.title"
                    block
                    class="mt-2 mb-2"
                    @click="googleLogin"
                >
                  <v-icon left  :color="social.color">{{ social.icon }}</v-icon>
                  {{ social.title }}
                </v-btn>
            </v-card>
  </v-row>


            <!-- <v-btn
                
                color="secondary"
                depressed
                elevation="2"
                @click="googleLogin"
            >
              <v-icon 
              color="red lighten-1" 
              left
              
              >
                mdi-google
              </v-icon>
              Google
            </v-btn> -->
</template>

<script>
import firebase from 'firebase';
export default {
  data: () => ({
    firebase,
    socials: [
      {title: 'Google', icon: 'mdi-google', color: 'red lighten-1',  },
      {title: 'Facebook', icon: 'mdi-facebook', color: 'blue lighten-1'},
      {title: 'Github', icon: 'mdi-github', color: 'black lighten-2'}
    ],
  }),
  props: {
    name: { type: String, default: '' },
    photoURL: { type: String, default: '' },
    sender: { type: Boolean, default: false }
  },
  methods: {
      googleLogin: function () {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
              const provider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithPopup(provider)
                  .then(data => {
                    data.user
                    .updateProfile({
                      displayName: this.form.name
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
  }
}
</script>