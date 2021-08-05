<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mt-5 mb-4">Orders</h1>
        <v-list
            two-line
            subheader
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Profile photo</v-list-item-title>
              <v-list-item-subtitle>Change your Google+ profile photo</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>

        <v-list
            subheader
            two-line
            text
        >
          <v-list-item-group
              avatar
              v-for="order in orders"
              :key="order"
              multiple
          >
            <v-list-content class="d-flex col-12">
              <v-list-item
                  class="d-flex col-7"
                  color="success"
              >
                <template  v-slot:default="{ active,}">
                  <!--                // delete-->



                  <v-list-item-action>
                    <!--                  // value order.done-->
                    <v-checkbox
                        :input-value="active"
                        color="success"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>{{ order.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                  </v-list-item-content>

                </template>

              </v-list-item>

              <v-list-item-action class="d-flex col-4 align-items-center justify-center">
                <v-btn
                    :to="'/ad/' + order.adId"
                    color="blue-grey"
                    dark
                >
                  Open
                </v-btn>
              </v-list-item-action>

            </v-list-content>



          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: 'fds3',
          name: 'User',
          phone: '8-832-334-43-23',
          adId: '1234',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  }
}
</script>

<style scoped>
</style>