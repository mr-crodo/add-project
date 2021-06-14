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
            <Avatar :src="photoUrl"/>
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
              <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
import Avatar from './Avatar.vue'


export default {

  components: { Avatar },
  props: {
    name: { type: String, default: '' },
    photoUrl: { type: String, default: '' },
    sender: { type: Boolean, default: false }
  }
}
</script>


<!--<template>-->
<!--  <div class="container">-->
<!--    <div class="row justify-content-center">-->
<!--      <div class="col-md-8">-->
<!--        <div class="card">-->
<!--          <div class="card-header">Dashboard</div>-->
<!--          <div class="card-body">-->
<!--            <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }
};
</script>