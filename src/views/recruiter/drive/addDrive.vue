<template>
  <div class="addDrive">
    <v-card>
      <v-toolbar flat color="primary" dark>
        <v-toolbar-title>Add Drive</v-toolbar-title>
      </v-toolbar>
      <v-tabs vertical v-model="tab">
        <v-tab>
          <v-icon left> mdi-account </v-icon>
          Job Details
        </v-tab>
        <v-tab>
          <v-icon left> mdi-lock </v-icon>
          Eligibility
        </v-tab>
        <v-tab>
          <v-icon left> mdi-currency-usd </v-icon>
          Salary Details
        </v-tab>
        <v-tab>
          <v-icon left> mdi-license </v-icon>
          Selection Process
        </v-tab>
        <v-tab>
          <v-icon left> mdi-plus-box </v-icon>
          Additional Details
        </v-tab>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Job Designation"
                      prepend-icon="mdi-briefcase"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-file-input
                      show-size
                      counter
                      multiple
                      label="Upload Job Pdf"
                    ></v-file-input>
                  </v-col>
                </v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-textarea label="Job Description" prepend-icon="mdi-mail">
                  </v-textarea>
                </v-col>
                <v-btn class="blue" @click="tab = 1">Save and Next</v-btn>
              </v-container>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="tenth"
                    label="Percentage X"
                    prepend-icon="mdi-percent"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="twleth"
                    label="Percentage XII"
                    prepend-icon="mdi-percent"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-autocomplete
                    auto-select-first
                    chips
                    clearable
                    deletable-chips
                    multiple
                    small-chips
                    dense
                    :items="programme"
                    label="Programme"
                    prepend-icon="mdi-eyedropper-variant"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-autocomplete
                    auto-select-first
                    chips
                    clearable
                    deletable-chips
                    multiple
                    small-chips
                    dense
                    :items="Dept"
                    label="Department"
                    prepend-icon="mdi-shape"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="mincgpa"
                  label="Minimum CGPA"
                  prepend-icon="mdi-graph"
                  type="number"
                >
                </v-text-field>
              </v-col>
              <v-btn class="blue mt-4" @click="tab = 2">Save and Next</v-btn>
            </v-container>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Salary Pacakage" prepend-icon="mdi-cash">
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-file-input
                    show-size
                    counter
                    multiple
                    label="Upload Bond Document"
                  ></v-file-input>
                </v-col>
              </v-row>
              <v-col cols="12" sm="6" md="4">
                <v-textarea label="Bond Details" prepend-icon="mdi-mail">
                </v-textarea>
              </v-col>
              <v-btn class="blue" @click="tab = 3">Save and Next</v-btn>
            </v-container>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-container>
              <v-timeline dense clipped>
                <v-timeline-item
                  fill-dot
                  class="white--text mb-12"
                  color="orange"
                  large
                >
                  <template v-slot:icon>
                    <span>JL</span>
                  </template>
                  <v-combobox
                    v-model="input"
                    :items="process"
                    hide-details
                    flat
                    label="Add an Process..."
                    solo
                    @keydown.enter="comment"
                  >
                    <template v-slot:append>
                      <v-btn class="mx-0" depressed @click="comment">
                        Post
                      </v-btn>
                    </template>
                  </v-combobox>
                  <v-text-field
                    v-model="datee"
                    hide-details
                    flat
                    type="date"
                    width="250px"
                    label="Date"
                    solo
                    @keydown.enter="comment"
                  >
                  </v-text-field>
                </v-timeline-item>

                <v-slide-x-transition group>
                  <v-timeline-item
                    v-for="event in timeline"
                    :key="event.id"
                    class="mb-4"
                    color="pink"
                    small
                  >
                    <v-row justify="space-between">
                      <v-col cols="7" v-text="event.text"></v-col>
                      <v-col
                        class="text-right"
                        cols="5"
                        v-text="event.time"
                      ></v-col>
                    </v-row>
                  </v-timeline-item>
                </v-slide-x-transition>
              </v-timeline>
            </v-container>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Additional Requirement Title"
                    prepend-icon="mdi-briefcase"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-file-input
                    show-size
                    counter
                    multiple
                    label="Upload Requirement Document"
                  ></v-file-input>
                </v-col>
              </v-row>
              <v-col cols="12" sm="6" md="4">
                <v-textarea
                  label="Additional Requirement Description"
                  prepend-icon="mdi-mail"
                >
                </v-textarea>
              </v-col>
              <v-btn class="blue" @click="savedrive">Save</v-btn>
            </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "addDrive",
  data() {
    return {
      tab: null,
      programme: ["BTech", "MTech", "Bsc"],
      Dept: ["ECE", "CSE", "Mech", "AI", "EEE", "Civil"],
      events: [],
      input: null,
      nonce: 0,
      datee: null,
      process: [
        "Aptitude Round",
        "Coding Round",
        "Technical Round-1",
        "Technical Round-2",
        "HR Round-1",
        "HR Round-2",
      ],
      messages: [
        {
          from: "You",
          message: `Sure, I'll see you later.`,
          time: "10:42am",
          color: "deep-purple lighten-1",
        },
        {
          from: "John Doe",
          message: "Yeah, sure. Does 1:00pm work?",
          time: "10:37am",
          color: "green",
        },
        {
          from: "You",
          message: "Did you still want to grab lunch today?",
          time: "9:47am",
          color: "deep-purple lighten-1",
        },
      ],
    };
  },
  computed: {
    timeline() {
      return this.events.slice().reverse();
    },
  },

  methods: {
    comment() {
      const time = this.datee;
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents) => {
          return ` ${contents
            .split(" ")
            .map((v) => v.charAt(0))
            .join("")}`;
        }),
      });
      this.input = null;
    },
  },
};
</script>

<style scoped>
.v-tab {
  justify-content: flex-start !important;
}
</style>