<template>
  <div class="studentHome">
    <div class="cont">
      <v-card
        v-for="drive in allDrives"
        :key="drive.company_name"
        class="my-6"
        width="350"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          src="../../assets/amazon.svg"
        >
          <v-card-title>{{ drive.name }}</v-card-title>
        </v-img>

        <v-card-text class="text--primary">
          <h3>{{ drive.designation }}</h3>
          <div>{{ description }}</div>
          <!-- <div>Eligibility CGPA above of 8.0</div> -->
        </v-card-text>
        <v-card-subtitle class="pt-2"> Internship </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange" @click="applyItem" text> Apply Now </v-btn>

          <v-btn color="orange" @click="explore(drive.name)" text>
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <v-dialog v-model="applyDialog" max-width="600px">
      <v-card class="pt-2">
        <v-card-text class="text-h5 mt-3"
          >Are you sure you want to apply for this Role?</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeApplyItem"
            >Cancel</v-btn
          >
          <v-btn color="green darken-1" text @click="applyItemConfirm"
            >Apply</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
      color="green darken-1"
      max-height="20px"
      max-width="50px"
      bottom
    >
      Apllied Successfully!!

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          x
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "studentHome",
  data() {
    return {
      cards: [1, 2, 3, 4],
      applyDialog: false,
      snackbar: false,
      text: "My timeout is set to 2000.",
      timeout: 2000,
      username: "",
      allDrives: [],
    };
  },
  created() {
    console.log("StudentHome created");
    this.username = this.$route.params.id;
    console.log("username", this.username);
    this.init();
  },

  methods: {
    async init() {
      // Get all drive
      const response = await axios.post("http://localhost:3000/gethomedrive");
      let resp = response.data;
      console.log(resp);
      this.allDrives = resp.items;
    },
    applyItem() {
      this.applyDialog = true;
    },

    applyItemConfirm() {
      //   this.desserts.splice(this.editedIndex, 1);
      this.snackbar = true;
      this.closeApplyItem();
    },

    closeApplyItem() {
      this.applyDialog = false;
    },
    explore(cmpnyName) {
      console.log("explore");
      this.$router.push(`/student/${this.username}/singleDrive/${cmpnyName}`);
    },
  },
};
</script>

<style scoped>
.cont {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>