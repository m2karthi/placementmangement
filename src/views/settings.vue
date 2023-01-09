<template>
  <div class="settings">
    <v-card>
      <v-card-title>Settings</v-card-title>
      <v-card-subtitle>Update Admin password</v-card-subtitle>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          filled
          solo
          v-model="admin_password"
          label="Admin Password"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-textarea
          filled
          solo
          v-model="description"
          label="Remarks"
        ></v-textarea>
      </v-col>
      <v-btn class="primary pa-2 ma-2"> Update </v-btn>
    </v-card>
  </div>
</template>
  
  <script>
  import axios from 'axios';
export default {
  name: "settings",

  data(){
    return {
      admin_password: "",
      description: ""
    }
  },

  methods: {
    async savesetting()
    {
        let newuser = {
          username: "",
          newpassword: this.admin_password
        }

        const response = await axios.post("http://localhost:3000/adminpassword", newuser);
        let resp = response.data;

        console.log(resp)
    },
  },

};
</script>
  
  <style>
</style>