<template>
  <div class="help">
    <v-card>
      <v-card-title>Queries</v-card-title>
      <v-card-subtitle>Any Queries student can send an request</v-card-subtitle>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          filled
          solo
          v-model="subject"
          label="Query Subject"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-textarea
          filled
          solo
          v-model="description"
          label="Query Description"
        ></v-textarea>
      </v-col>
      <v-btn class="primary pa-2 ma-2" @click="donotif"> Submit </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "help",

  methods:{
    donotif()
    {
      window.alert("You query has been sent to us")
    }
  }

};
</script>

<style>
</style>