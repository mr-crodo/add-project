<template>
<v-row justify="center">
  <v-card justify="center" class="portrait">
    <v-img
        class="my-img"
        src="@/assets/men.jpg"
        lazy-src="@/assets/me1.jpg"
    >
<!--      <h1 class="main-text">{{ $t('welcomeMsg') }}</h1>-->
      <template v-slot:placeholder>
        <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
        >
          <v-progress-circular
              indeterminate
              color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-img
        class="texture"
        src="@/assets/blowup.jpg"
    >

    </v-img>
  </v-card>

</v-row>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Main",
  data: () => ({
    drawer: false,
    group: null,
    value: 1,
    links: [
      {title: 'Login', icon: 'mdi-lock', url: '/login'},
      {title: 'Registration', icon: 'mdi-face', url: '/registration'},
    ]
  }),
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>

<style scoped>

.main-text {
  color: #ffffff;
}

.portrait {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000000 !important;
}

.my-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.texture {
  mix-blend-mode: multiply;
  filter: contrast(1.5);
}
</style>