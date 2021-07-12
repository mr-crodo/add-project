<template>
  <div class="wrapper">
    <section v-if="this.user">
      <main>
        <div v-for="(msg, index) in messages" v-bind:key="'index-'+index"
             :class="['message', sentOrReceived(msg.userUID)]">
          <v-avatar color="indigo" v-if="!msg.photoURL">
<!--            <v-icon dark>-->
<!--              mdi-account-circle-->
<!--            </v-icon>-->
            <span class="white--text text-h5">{{ msg.displayName[0]}}{{ msg.displayName[5]}}</span>
          </v-avatar>
          <img v-else :src="msg.photoURL" :alt="msg.displayName">
          <p>{{ msg.text }}</p>
        </div>

        <div ref="scrollable"></div>
      </main>

      <form v-on:submit.prevent="sendMessage">
        <input class="form-button" v-model="message" type="text" placeholder="Enter your message!">
        <button class="form-input" :disabled="!message" type="submit" @click="messages++">
          <svg
              class="icon-send hover:text-green-500 hover:text-green-500"
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
          >
            <path
                fill="currentColor"
                d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
            />
          </svg>
        </button>
      </form>
    </section>

    <div v-else class="card-body card-outline-danger text-center">
      <h1 class="text-danger card-title ">Sorry</h1>
      <p class="card-text lead">
        Sorry, access to rooms is only available to registered users. Please
        <router-link to="/login">login</router-link> or
        <router-link to="/register">register</router-link> and try again.
      </p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: "Chat",
  mounted() {
    this.db.collection('messages').orderBy('createdAt')
        .onSnapshot(querySnap => {
          this.messages = querySnap.docs.map(doc => doc.data())
        })
  },
  data() {
    return {
      user: firebase.auth().currentUser,
      db: firebase.firestore(),
      message: '',
      messages: [],
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut()
    },
    sentOrReceived(userUID) {
      return userUID === this.user.uid ? 'sent' : 'received'
    },
    async sendMessage() {
      const messageInfo = {
        'userUID': this.user.uid,
        'displayName': this.user.displayName,
        'photoURL': this.user.photoURL,
        'text': this.message,
        'createdAt': Date.now(),
      }
      await this.db.collection('messages').add(messageInfo)
      this.message = ''
      this.$refs['scrollable'].scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
}
.wrapper {
  text-align: center;
  max-width: 728px;
  margin: 0 auto;
  header {
    background-color: #181717;
    height: 10vh;
    min-height: 50px;
    color: white;
    position: fixed;
    width: 100%;
    max-width: 728px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
    padding: 10px;
    box-sizing: border-box;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    background-color: #90A4AE;
    @media screen and (max-width: 540px) {
      margin-left: 10px;
      margin-right: 10px;
      max-width: 400px;
    }
    main {
      padding: 10px;
      height: 75vh;
      margin: 10vh 0 10vh;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      &::-webkit-scrollbar {
        width: 0.25rem;
      }
      &::-webkit-scrollbar-track {
        background: #1e1e24;
      }
      &::-webkit-scrollbar-thumb {
        background: #6649b8;
      //  scroll
      }
    }
    form {
      height: 10vh;
      position: fixed;
      bottom: 0;
      background-color: rgb(24, 23, 23);
      width: 100%;
      max-width: 728px;
      display: flex;
      font-size: 1.5rem;
      button {
        width: 20%;
        background-color: #4DB6AC;
        //button
      }
      input {
        line-height: 1.5;
        width: 100%;
        font-size: 1.5rem;
        background: rgb(58, 58, 58);
        color: white;
        outline: none;
        border: none;
        padding: 0 10px;
      }
    }
  }
  button {
    background-color: #282c34; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-size: 1.25rem;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  button, input {
    color: #fff;
    border: none;
  }
  p {
    max-width: 500px;
    margin-bottom: 12px;
    line-height: 24px;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    color: white;
    text-align: center;
  }
  .message {
    display: flex;
    align-items: center;
    &.received {
      p {
        background: #e5e5ea;
        color: #000;
        @media screen and (max-width: 540px) {
          max-width: 200px;
        }
      }
    }
    &.sent {
      flex-direction: row-reverse;
      //border: 1px solid red;
      p {
        color: #fff;
        background: #0b93f6;
        align-self: flex-end;
        @media screen and (max-width: 540px) {
          max-width: 200px;
        }
      }
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 2px 5px;
    }
    p {
      max-width: 500px;
      margin-bottom: 12px;
      line-height: 24px;
      padding: 10px 20px;
      border-radius: 25px;
      position: relative;
      color: #fff;
      text-align: center;
    }
  }
}
.card-body p {
  color: #1e1e24;
  margin: 0;
  padding: 0;
  max-width: 100%;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: inherit;
}
</style>
