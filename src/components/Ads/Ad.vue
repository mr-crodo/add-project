<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-img
              :src="ad.imageSrc"
              height="300"
          ></v-img>
          <v-card-text>
            <h1 class="text--secondary">{{ ad.title }}</h1>
            <p>{{ ad.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                class="warning black--text"
                depressed
            >
              Edit</v-btn>
            <v-btn
                color="blue-grey darken-1"
                dark
                raised
            >
              Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    }
  }
}
</script>

<style scoped>

</style>