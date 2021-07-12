<template>
  <div v-if="this.user" id="talkjs-container" style="width: 90%; margin: 30px; height: 500px"><i>Loading chat...</i></div>

  <div v-else class="card-body card-outline-danger text-center">
    <h1 class="text-danger card-title ">Sorry</h1>
    <p class="card-text lead">
      Sorry, access to rooms is only available to registered users. Please
      <router-link to="/login">login</router-link> or
      <router-link to="/register">register</router-link> and try again.
    </p>
  </div>
</template>

<script>
import Talk from "talkjs";
import {mapGetters} from "vuex";
export default {
  name: "Chats",
  props: {
    currentUser: {
      type: Object,
      required: true,
      name: { type: String, default: '' },
      photoUrl: { type: String, default: '' },
      sender: { type: Boolean, default: false }
    }
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  mounted: function() {
    Talk.ready.then(function() {
      var me = new Talk.User({
        id: parseInt(Math.random()*500000).toString(),
        name: "Alice",
        email: "demo@talkjs.com",
        photoUrl: "https://demo.talkjs.com/img/alice.jpg",
        welcomeMessage: "Hey there! How are you? :-)",
        role: "booker"
      });

      var talkSession = new Talk.Session({
        appId: "Hku1c4Pt",
        me: me
      });

      var other = new Talk.User({
        id: parseInt(Math.random()*500000).toString(),
        name: "Sebastian",
        email: "demo@talkjs.com",
        photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
        welcomeMessage: "Hey, how can I help?",
        role: "booker"
      });

      var conversation = talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other));
      conversation.setParticipant(me);
      conversation.setParticipant(other);
      var inbox = talkSession.createInbox({selected: conversation});
      inbox.mount(document.getElementById("talkjs-container"));
    });
  }

}

</script>

<style scoped>

</style>