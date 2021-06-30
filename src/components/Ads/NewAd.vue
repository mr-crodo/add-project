<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mt-5 mb-4">Create new Ad</h1>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="mb-4"
        >
          <v-text-field
              label="Ad title"
              name="title"
              type="text"
              v-model="title"
              :rules="[v => !!v || 'Title is required']"
              required
              color="blue-grey"
          ></v-text-field>

          <v-textarea
              label="Ad description"
              name="description"
              v-model="description"
              type="text"
              :rules="[v => !!v || 'Description is required']"
              color="blue-grey"
          ></v-textarea>
        </v-form>

        <v-form>
          <v-layout row mb-3>
            <v-flex xs12>
              <v-btn
                  :loading="loading3"
                  :disabled="loading3"
                  color="blue-grey"
                  class="ma-2 white--text"
                  @click="loader = 'loading3'"
              >
                Upload
                <v-icon
                    right
                    dark
                >
                  mdi-cloud-upload
                </v-icon>
              </v-btn>

            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12>
              <img
                  src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
                  alt=""
                  height="100"
              >
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-switch
                  v-model="promo"
                  text
                  label="Add to promo?"
                  color="blue-grey lighten-2"
              ></v-switch>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
             <v-spacer></v-spacer>
              <v-btn
                  :disabled="!valid"
                  @click="createAd"
                  color="blue-grey darken-2"
                  dark
              >
                Create Add</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      loader: null,
      description: '',
      promo: false,
      valid: false,
      loading3: false,
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc: 'data:image/png;base64,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'
        }
        this.$store.dispatch('createAd', ad)
        // console.log(ad)
      }
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },
}
</script>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>