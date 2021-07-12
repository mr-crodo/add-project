<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My Products</h1>

        <v-hover
            v-slot="{ hover }"
            v-for="ad in myAds"
            :key="ad"
        >
          <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="600"
          >
            <v-img
                :aspect-ratio="16/9"
                :src="ad.imageSrc"
                :lazy-src="ad.imageSrc"
                height="160"
            >
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
              <v-expand-transition>
                <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
                    style="height: 100%;"
                >
                  {{ ad.price }} azn
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text
                class="pt-6"
                style="position: relative;"
            >
              <v-btn
                  absolute
                  color="orange"
                  class="white--text"
                  fab
                  large
                  right
                  top
              >
                <v-icon>mdi-cart</v-icon>
              </v-btn>
              <v-btn
                  :to="'/ad/' + ad.id"
                  color="blue-grey darken-2"
                  class="mr-4"
                  dark
              >Open</v-btn>
              <div class="font-weight-light grey--text text-h6 mb-2">
                {{ ad.vendor }}
              </div>
              <h3 class="text-h4 font-weight-light orange--text mb-2">
                {{ ad.title }}
              </h3>
              <div class="font-weight-light text-h6 mb-2">
                {{ ad.description }}
              </div>
            </v-card-text>
          </v-card>
        </v-hover>

<!--        <v-card-->
<!--            elevation="10"-->
<!--            class="mb-7"-->
<!--            v-for="ad in myAds"-->
<!--            :key="ad"-->
<!--        >-->
<!--          <v-layout row>-->
<!--            <v-flex xs4>-->
<!--              <v-img-->
<!--                  :src="ad.imageSrc"-->
<!--                  :lazy-src="ad.imageSrc"-->
<!--                  aspect-ratio="1"-->
<!--                  height="160"-->
<!--              >-->
<!--                <template v-slot:placeholder>-->
<!--                  <v-row-->
<!--                      class="fill-height ma-0"-->
<!--                      align="center"-->
<!--                      justify="center"-->
<!--                  >-->
<!--                    <v-progress-circular-->
<!--                        indeterminate-->
<!--                        color="grey lighten-5"-->
<!--                    ></v-progress-circular>-->
<!--                  </v-row>-->
<!--                </template>-->
<!--              </v-img>-->
<!--            </v-flex>-->
<!--            <v-flex xs8>-->
<!--              <v-card-text>-->
<!--                <h2 class="text&#45;&#45;secondary">{{ ad.title }}</h2>-->
<!--                <p>{{ ad.description }}</p>-->
<!--              </v-card-text>-->
<!--              <v-card-actions>-->
<!--                <v-col cols="6">-->
<!--                  {{ ad.price }} azn-->
<!--                </v-col>-->
<!--                <v-spacer></v-spacer>-->
<!--                <v-btn-->
<!--                    :to="'/ad/' + ad.id"-->
<!--                    color="blue-grey darken-2"-->
<!--                    class="mr-4"-->
<!--                    dark-->
<!--                >Open</v-btn>-->
<!--              </v-card-actions>-->
<!--            </v-flex>-->
<!--          </v-layout>-->
<!--        </v-card>-->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds () {
      return this.$store.getters.myAds;
    }
  }
}
</script>

<style>
</style>