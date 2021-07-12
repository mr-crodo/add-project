<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mt-5 mb-4">Create new Product</h1>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="mb-4"
        >
          <v-text-field
              label="Title*"
              name="title"
              type="text"
              v-model="title"
              :rules="[v => !!v || 'Title is required']"
              required
              color="blue-grey"
          ></v-text-field>
          <v-text-field
              label="Vendor Product*"
              name="title"
              type="text"
              v-model="vendor"
              :rules="[v => !!v || 'Title is required']"
              required
              color="blue-grey"
          ></v-text-field>
          <v-text-field
              label="Color Product*"
              name="title"
              type="text"
              v-model="color"
              :rules="[v => !!v || 'Title is required']"
              required
              color="blue-grey"
          ></v-text-field>
          <v-text-field
              label="Material Product*"
              name="title"
              type="text"
              v-model="material"
              :rules="[v => !!v || 'Title is required']"
              required
              color="blue-grey"
          ></v-text-field>
          <v-text-field
              label="Price Product*"
              name="title"
              type="number"
              v-model="price"
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

        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-btn class="warning" @click="upload">
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
            <input
                ref="fileInput"
                type="file"
                style="display: none;"
                accept="image/*"
                @change="onFileChange"
            >
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img :src="imageSrc" height="200px" v-if="imageSrc">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch
                color="primary"
                label="Add to Promo?"
                v-model="promo"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
                :loading="loading"
                :disabled="!valid || !image || loading"
                class="success"
                @click="createProduct"
            >Create Product</v-btn>
          </v-flex>
        </v-layout>
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
      vendor: '',
      color: '',
      material: '',
      price: 0,
      promo: false,
      valid: false,
      loading3: false,
      image: null,
      imageSrc: ''
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate() && this.image) {
        const ad = {
          title: this.title,
          vendor: this.vendor,
          color: this.color,
          material: this.material,
          price: this.price,
          description: this.description,
          promo: this.promo,
          imageSrc: this.image
        }
        this.$store.dispatch('createAd', ad)
            .then(() => {
              this.$router.push('/list')
            })
            .catch(() => {})
      }
    },
    upload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
        console.log('Eto E', e)
      }
      reader.readAsDataURL(file)
      this.image = file
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