<template>

  <v-main>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <v-carousel
              cycle
              height="400"
              hide-delimiter-background
              show-arrows-on-hover
          >
            <v-carousel-item
                v-for="ad in promoAds"
                :key="ad.id"
                :src="ad.imageSrc"
                :lazy-src="ad.imageSrc"
                aspect-ratio="1"
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
              <div class="car-link">
                <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container mt-5 pt-5 grid-list-lg>
      <v-layout row xs12 wrap>
        <v-flex
            v-for="ad of ads"
            :key="ad.id"
            mb-5
        >
          <v-card
              class="mx-auto"
              max-width="400"
          >
            <v-img
                class="white--text align-end"
                height="200px"
                :src="ad.imageSrc"
                :lazy-src="ad.imageSrc"
                aspect-ratio="1"
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
              <v-card-title color="blue lighten-4">{{ ad.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              {{ ad.vendor }}
            </v-card-subtitle>

            <v-card-text class="text--primary">


              <div>{{ ad.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-tooltip bottom v-if="ad.stock">
                <template v-slot:activator="{ on, attrs }">
                  <v-alert
                      v-bind="attrs"
                      v-on="on"
                      dense
                      text
                      type="success"
                  >
                    {{ ad.price }} azn
                  </v-alert>
                </template>
                <span>In stock</span>
              </v-tooltip>

              <v-tooltip bottom v-else>
                <template v-slot:activator="{ on, attrs }">
                  <v-alert
                      v-bind="attrs"
                      v-on="on"
                      dense
                      outlined
                      type="error"
                  >
                    {{ ad.price }} azn
                  </v-alert>
                </template>
                <span>out of stock</span>
              </v-tooltip>

              <v-spacer></v-spacer>
              <v-btn
                  color="blue-grey darken-2"
                  text
                  :to="'/ad/' + ad.id"
              >
                Open
              </v-btn>

              <v-btn
                  color="blue-grey darken-1"
                  dark
                  raised
              >
                Buy
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
export default {
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    }
  }
}
</script>

<style scoped>
  .v-card__title {
    color: #FF6F00;
  }
  .car-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .5);
    transform: translate(-50%, 0);
    padding: 10px  20px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
</style>
