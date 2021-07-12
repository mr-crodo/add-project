<template>
  <div class="container mt-4" v-if="user.loggedIn">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 col-lg-7">
        <h1 class="font-weight-light text-center">Add a Room</h1>

        <div class="card bg-light">
          <div class="card-body text-center">
            <form class="formgroup">
              <div class="input-group input-group-lg">
                <input
                    type="text"
                    class="form-control"
                    name="roomName"
                    placeholder="Room name"
                    aria-describedby="buttonAdd"
                    v-model="roomName"
                    ref="roomName"
                />
                <div class="input-group-append">
                  <button
                      type="submit"
                      class="btn btn-sm btn-info"
                      id="buttonAdd"
                      @click.prevent="handleAdd"
                  >
                    +
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-11 col-md-8 col-lg-6">
        <div class="card border-top-0 rounded-0">
          <div class="card-body py-2">
            <h4 class="card-title m-0 text-center">Your Rooms</h4>
          </div>
          <div class="list-group list-group-flush">
            <div class="list-group-item d-flex" v-for="item in rooms" :key="item.id">
              <section class="btn-group align-self-center" role="group" aria-label="Room Options">
                <button
                    class="btn btn-sm btn-outline-secondary"
                    title="Delete Room"
                    @click="$emit('deleteRoom', item.id)"
                >
                  <font-awesome-icon icon="trash"></font-awesome-icon>
                </button>

                <router-link
                    class="btn btn-sm btn-outline-secondary"
                    title="Check In"
                    :to="`/checkin/${user.uid}/${item.id}`"
                >
                  <font-awesome-icon icon="user"></font-awesome-icon>
                </router-link>

                <router-link
                    class="btn btn-sm btn-outline-secondary"
                    title="Chat"
                    :to="`/chat/${user.uid}/${item.id}`"
                >
                  <font-awesome-icon icon="video"></font-awesome-icon>
                </router-link>
              </section>

              <section class="pl-3 text-left align-self-center">
                {{ item.name }}
              </section>
            </div>
          </div>
        </div>
      </div>
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
export default {
  name: 'Rooms',
  data: function() {
    return {
      roomName: null
    }
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    handleAdd: function() {
      this.$emit('addRoom', this.roomName)
      this.roomName = null
      this.$refs.roomName.focus()
    }
  },
  props: ['rooms', 'user']
}
</script>
