<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-img
              class="image d-flex align-center justify-center"
              :src="ad.imageSrc"
              :lazy-src="ad.imageSrc"
              aspect-ratio="1"
              max-height="300"
              width="100%"
              style="background-size: contain;"
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
          </v-img>
          <v-card-text>
            <h1 class="text--secondary product__title">{{ ad.title }}</h1>
            <h4><span class="product__title">Vendor :</span> <span>{{ ad.vendor.charAt(0).toUpperCase() + ad.vendor.substr(1) }}</span></h4>
<!--            <h3 class="teal lighten-5 text&#45;&#45;secondary">-->
<!--              <span class="product__title">Color :</span> -->
<!--              <span class="blue-grey&#45;&#45;text">{{ ad.color }}</span>-->
<!--            </h3>-->
            <h4 class="teal lighten-5 text--secondary">
              <span class="product__title">Color : </span>
              <span
                  class="product__color-bg"
                  :title="ad.color"
                  :style="{ backgroundColor: ad.color}"
              ></span>
            </h4>
            <h4 class="product__title green lighten-5">Material : <span class="blue-grey--text">{{ ad.material.charAt(0).toUpperCase() + ad.material.substr(1) }}</span></h4>
            <p>{{ ad.description }}</p>

          </v-card-text>
          <v-card-actions>
<!--            <v-col cols="6" class="light-green&#45;&#45;text">-->
<!--              {{ ad.price }} azn-->
<!--            </v-col>-->
            <v-alert
                text
                cols="6"
                dense
                color="teal"
                icon="mdi-clock-fast"
                border="left"
                class="product__price title"
            >
              $ {{ ad.price }}
            </v-alert>
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
.product {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #1c77ad;
  padding: 30px;
  margin-bottom: 100px;
}
.product__img {
  height: 100%;
  width: 550px;
}
.product__info {
  margin-left: 50px;
}
.product__title {
  font-size: 1.6rem;
  font-weight: bold;
  color: #1875d0;
  margin-bottom: 0;
}
.product__color-bg {
  display: inline-block;
  width: 50px;
  height: 20px;
  border: 1px solid #2b2b2b;
  border-radius: 10px;
}
</style>