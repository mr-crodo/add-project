<template>
  <v-card
    class="mx-auto"
    max-width="434"
    tile
  >
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="164"
            tile
          >
            <Avatar :src="user.data.photoURL"/>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{user.data.displayName}}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ user.data.email }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                {{ user.data.phoneNumber }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
<!--                {{ user.data.providerId }}-->
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                {{ user.data.lastSignInTime }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                {{ user.data.uid }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
import Avatar from './Avatar.vue'
import {mapGetters} from "vuex";
export default {
  components: { Avatar },
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
  }
}
</script>
