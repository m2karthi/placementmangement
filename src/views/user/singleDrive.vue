<template>
  <div class="singleDrive">
    <v-card class="left ma-4">
      <v-card-title class="jobRole text--centre">{{
        singleDrive.jobDesignation
      }}</v-card-title>
      <p class="ml-4 mb-0 pa-0"><b>Job Description</b></p>
      <v-card-text>
        {{ singleDrive.jobDescription }}
      </v-card-text>
      <p class="ml-4 mb-0 pa-0"><b>Eligiblity</b></p>
      <v-card-text>
        Minimum CGPA- {{ singleDrive.mincgpa }} and above <br />
        <!-- </v-card-text> -->
        <!-- <v-card-text> Minimum CGPA- {{ singleDrive.mincgpa }} </v-card-text> -->
        <!-- <v-card-text> -->
        10th Percentage- {{ singleDrive.tenthPercentage }} and above<br />
        <!-- </v-card-text> -->
        <!-- <v-card-text> -->
        12th Percentage- {{ singleDrive.twlethPercentage }} and above
      </v-card-text>
      <p class="ml-4 mb-0 pa-0"><b>Location</b></p>
      <v-card-text> Bangalore, India </v-card-text>
      <p class="ml-4 mb-0 pa-0"><b>Qualification</b></p>
      <v-card-text>
        B.Tech <br />
        The Application is open from {{ singleDrive.openingDate }} to
        {{ singleDrive.closingDate }}
      </v-card-text>
    </v-card>

    <v-card class="right ma-4">
      <div class="jobRole">
        <v-avatar size="200px">
          <v-img
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
          ></v-img>
        </v-avatar>
        <!-- <v-img src="../../assets/amazon.svg" class=""></v-img> -->
      </div>
      <v-card-title class="jobRole">{{
        singleDrive.company_name
      }}</v-card-title>
      <p class="ml-4 mb-0 pa-0">Vision</p>
      <v-card-text
        >Our vision is to be the premier provider of innovative and reliable IT
        solutions for businesses and organizations around the world.
      </v-card-text>
      <p class="ml-4 mb-0 pa-0">Selection Process</p>

      <v-card-text>
        <v-timeline align-top dense>
          <v-timeline-item color="pink" small>
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>5pm</strong>
              </v-col>
              <v-col>
                <strong>New Icon</strong>
                <div class="text-caption">Mobile App</div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="teal lighten-3" small>
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>3-4pm</strong>
              </v-col>
              <v-col>
                <strong>Design Stand Up</strong>
                <div class="text-caption mb-2">Hangouts</div>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                  ></v-img>
                </v-avatar>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="pink" small>
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>12pm</strong>
              </v-col>
              <v-col>
                <strong>Shortlist Applications</strong>
                <div class="text-caption">on 16/11/2022</div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="teal lighten-3" small>
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>9 AM</strong>
              </v-col>
              <v-col>
                <strong>Application open</strong>
                <div class="text-caption">from 16/11/2022</div>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="js">
import axios from "axios";
export default {
  name: "singleDrive",
  data() {
    return {
      singleDrive: null,
      driveId: null,
    };
  },
  created() {
    console.log("Single Drive created");
    this.driveId = this.$route.params.driveId;
    console.log("driveId", this.driveId);
    this.init();
  },
  methods: {
    async init() {
      const response = await axios.post("http://44.200.57.40:3000/getsingledrive");
      let resp = response.data;
      console.log(resp);
      this.singleDrive = resp.items;
    },
  },
};
</script>

<style scoped >
.jobRole {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.singleDrive {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  width: 100%;
}
.right {
  width: 35%;
}
.left {
  width: 70%;
}
/* .v-img {
  border-radius: 50px !important;
  width: 50px !important;
} */
</style>