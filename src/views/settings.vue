<template>
  <div class="settings">
    <v-card>
      <v-card-title>Settings</v-card-title>
      <v-card-subtitle>Update Admin password</v-card-subtitle>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          filled
          solo
          v-model="subject"
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
export default {
  name: "settings",
};
</script>
  
  <style>
</style>