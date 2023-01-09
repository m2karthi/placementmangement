<template>
  <div class="settings">
    <v-card>
      <v-card-title>Settings</v-card-title>
      <v-card-subtitle>Update Recuirter password</v-card-subtitle>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          filled
          solo
          v-model="recruiter_password"
          label="Recuirter Password"
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
      <v-btn class="primary pa-2 ma-2" @click="savesetting"> Update </v-btn>
    </v-card>
  </div>
</template>
    
    <script>
    import axios from 'axios';
export default {
  name: "Recsettings",

  data(){
    return {
      recruiter_password: "",
      description: ""
    }
  },

  methods: {
    async savesetting()
    {
        let newuser = {
          username: this.$route.params.id,
          newpassword: this.recruiter_password
        }

        const response = await axios.post("http://localhost:3000/recruiterpassword", newuser);
        let resp = response.data;

        console.log(resp)
        
        window.alert("Your Password has been updated!!!")
    },
  },

};
</script>
    
    <style>
</style>