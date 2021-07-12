<template>
  <v-menu
      offset-y
      left
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          dark
          icon
          v-bind="attrs"
          v-on="on"
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
          v-for="user in users"
          :key="user"
          link
          :to="user.url"
      >
        <v-icon left>
          {{ user.icon }}
        </v-icon>
        <v-list-item-title v-text="user.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "DotsBtn",
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
    users: [
      {title: 'Rooms', icon: 'mdi-human-capacity-decrease', url: '/manID'},
      {title: 'Chat', icon: 'mdi-chat', url: '/chat'},
      {title: 'Video chat', icon: 'mdi-message-video', url: '/video'},
      {title: 'Favorites', icon: 'mdi-star-circle', url: '/list'},
      {title: 'Contacts', icon: 'mdi-star-circle', url: '/contact'},
    ],
  }),
}
</script>

<style scoped>
</style>