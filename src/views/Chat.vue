<template>
  <div class="container-fluid mt-4" v-if="user.loggedIn">
    <div class="mb-3">
      <span class="mb-0 h2 text-primary">{{ roomName }}</span>
      <span class="ml-1" v-if="user && user.uid !== hostID">
        Hosted by: <strong class="text-danger">{{ hostDisplayName }}</strong>
      </span>
    </div>
    <div class="row" v-if="(user !== null && user.uid == hostID) || attendeeApproved">
      <div class="col-md-8">
        <vue-webrtc
            ref="webrtc"
            width="100%"
            :roomId="roomID"
            v-on:joined-room="doAttendeeJoined"
            v-on:left-room="doAttendeeLeft"
        />
      </div>
      <div class="col-md-4">
        <button
            v-if="!attendeeJoined && attendeeApproved"
            class="btn btn-primary mr-1"
            @click="doJoin"
        >
          Join
        </button>
        <button v-if="attendeeJoined" type="button" class="btn btn-danger mr-1" @click="doLeave">
          Leave
        </button>
        <h4 class="mt-2">Attendees</h4>
        <ul class="list-unstyled">
          <li v-for="attendee in attendeesApproved" :key="attendee.id">
            <a
                type="button"
                class="mr-2"
                title="Approve attendee"
                @click="toggleApproval(attendee.id)"
                v-if="user && user.uid == hostID"
            >
              <font-awesome-icon icon="user"></font-awesome-icon>
            </a>

            <span
                class="mr-2"
                :class="[attendee.webRTCID ? 'text-success' : 'text-secondary']"
                title="On Air"
            >
              <font-awesome-icon icon="podcast"></font-awesome-icon>
            </span>
            <span
                class="pl-1"
                :class="[attendee.id == user.uid ? 'font-weight-bold text-danger' : '']"
            >{{ attendee.displayName }}</span
            >
          </li>
        </ul>
        <div v-if="user && user.uid == $route.params.hostID">
          <h5 class="mt-4">Pending</h5>
          <ul class="list-unstyled">
            <li class="mb-1" v-for="attendee in attendeesPending" :key="attendee.id">
              <span>
                <a
                    type="button"
                    class="mr-2"
                    title="Approve attendee"
                    @click="toggleApproval(attendee.id)"
                >
                  <font-awesome-icon icon="user"></font-awesome-icon>
                </a>
                <a
                    type="button"
                    class="text-secondary pr-1"
                    title="Delete Attendee"
                    @click="deleteAttendee(attendee.id)"
                >
                  <font-awesome-icon icon="trash"></font-awesome-icon>
                </a>
              </span>
              <span
                  class="pl-1"
                  :class="[attendee.id == user.uid ? 'font-weight-bold text-danger' : '']"
              >{{ attendee.displayName }}</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="lead" v-if="user">
        Hi <strong class="text-primary font-weight-bold">{{ user.displayName }}</strong
      >, you're currently in the room waiting for the owner of the chat to add you to the meeting.
        Please wait.
      </p>
    </div>
  </div>

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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import db from '../main.js'
import {mapGetters} from "vuex";
export default {
  name: 'Attendees',
  data: function() {
    return {
      attendeesApproved: [],
      attendeesPending: [],
      attendeeApproved: false,
      attendeeJoined: false,
      hostID: this.$route.params.hostID,
      roomID: this.$route.params.roomID,
      roomName: null,
      hostDisplayName: null
    }
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    toggleApproval: function(attendeeID) {
      if (this.user && this.user.uid == this.hostID) {
        const ref = db
            .collection('users')
            .doc(this.user.uid)
            .collection('rooms')
            .doc(this.roomID)
            .collection('attendees')
            .doc(attendeeID)
        ref.get().then(attendeeDocument => {
          const approved = attendeeDocument.data().approved
          if (approved) {
            ref.update({
              approved: !approved
            })
          } else {
            ref.update({
              approved: true
            })
          }
        })
      }
    },
    deleteAttendee: function(attendeeID) {
      if (this.user && this.user.uid == this.hostID) {
        db.collection('users')
            .doc(this.user.uid)
            .collection('rooms')
            .doc(this.roomID)
            .collection('attendees')
            .doc(attendeeID)
            .delete()
      }
    },
    doJoin() {
      this.$refs.webrtc.join()
      this.attendeeJoined = true
    },
    doLeave() {
      this.$refs.webrtc.leave()
      this.attendeeJoined = false
    },
    doAttendeeJoined(joinID) {
      const ref = db
          .collection('users')
          .doc(this.hostID)
          .collection('rooms')
          .doc(this.roomID)
          .collection('attendees')
          .doc(this.user.uid)
      ref.update({
        webRTCID: joinID
      })
    },
    doAttendeeLeft(leaveID) {
      const ref = db
          .collection('users')
          .doc(this.hostID)
          .collection('rooms')
          .doc(this.roomID)
          .collection('attendees')
          .doc(this.user.uid)
      ref.update({
        webRTCID: null,
        leaveID
      })
    }
  },
  props: {
    name: { type: String, default: '' },
    photoUrl: { type: String, default: '' },
    sender: { type: Boolean, default: false }
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  // props: ['user'],
  mounted() {
    const roomRef = db
        .collection('users')
        .doc(this.hostID)
        .collection('rooms')
        .doc(this.roomID)
    //Get Room Name
    roomRef.get().then(roomDocument => {
      if (roomDocument.exists) {
        this.roomName = roomDocument.data().name
      } else {
        this.$router.replace('/')
      }
    })
    roomRef.collection('attendees').onSnapshot(attendeeSnapshot => {
      const tempPending = []
      const tempApproved = []
      let amCheckedIn = false
      attendeeSnapshot.forEach(attendeeDocument => {
        if (this.user.uid == attendeeDocument.id) {
          amCheckedIn = true
        }
        if (this.hostID == attendeeDocument.id) {
          this.hostDisplayName = attendeeDocument.data().displayName
        }
        if (attendeeDocument.data().approved) {
          if (this.user.uid == attendeeDocument.id) {
            this.attendeeApproved = true
          }
          tempApproved.push({
            id: attendeeDocument.id,
            displayName: attendeeDocument.data().displayName,
            approved: attendeeDocument.data().approved,
            webRTCID: attendeeDocument.data().webRTCID
          })
        } else {
          if (this.user.uid == attendeeDocument.id) {
            this.attendeeApproved = false
          }
          tempPending.push({
            id: attendeeDocument.id,
            displayName: attendeeDocument.data().displayName,
            approved: attendeeDocument.data().approved,
            webRTCID: attendeeDocument.data().webRTCID
          })
        }
      })
      this.attendeesApproved = tempApproved
      this.attendeesPending = tempPending
      if (!amCheckedIn) {
        this.$router.push(`/checkin/${this.hostID}/${this.roomID}`)
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.video-list {
  margin-bottom: 10px;
  background: transparent !important;
}
.video-item {
  width: 50%;
  display: inline-block;
  background: transparent !important;
}
.video-item video {
  width: 100%;
  height: auto;
}
</style>