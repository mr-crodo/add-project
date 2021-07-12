<template>
  <div class="mt-3" v-if="user.loggedIn">
    <div class="text-center">
      Welcome back <span class="font-weight-bold text-info">{{ user.data.displayName }}</span
    >, <a href="#" role="button" class="text-primary" @click="$emit('logout')">logout</a>
    </div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-10 col-md-10 col-lg-8 col-xl-7">
          <h4 class="display-4 text-primary mb-2">Video Chat</h4>
          <p class="lead">
            This app uses Firebase for real time communication and WebRTC to create video chats
            between multiple users, allowing you to create rooms for your meetings and invite
            attendees.
          </p>

          <router-link class="btn btn-primary mr-2" to="/rooms" v-if="user.loggedIn">Rooms</router-link>
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
export default {
  name: 'Home',
  props: ['user']
}
</script>
