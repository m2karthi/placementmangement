<template>
  <div class="regStudents">
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:[`item.img`]>
        <v-btn class="elevation-0 pa-0 ma-0" to="/student/profile" text>
          <v-avatar class="my-1">
            <img src="../../assets/profile-small.svg" width="5" alt="John" />
          </v-avatar>
        </v-btn>
      </template>

      <template v-slot:[`item.status`]="{ item }">
        <v-chip :color="getColor(item.status)" dark>
          {{ item.status }}
        </v-chip>
      </template>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Eligible Students List</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <!-- <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Add Student
              </v-btn>
            </template> -->
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Student Name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.roleno"
                        label="Role No"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.dob"
                        label="DOB"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.email"
                        label="Email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.mobile"
                        label="Mobile"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.cgpa"
                        label="CGPA"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.course"
                        label="Course"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        v-model="editedItem.status"
                        label="Status"
                        :items="statuses"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="550px">
            <v-card>
              <v-card-subtitle class="text-h5 mt-3"
                >Are you sure you want to delete this Student?</v-card-subtitle
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>
  
  <script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "regStudents",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Profile",
        align: "left",
        width: "1%",
        sortable: false,
        value: "img",
      },
      {
        text: "Name",
        // align: "start",
        value: "name",
      },

      { text: "RollNo", value: "roleno" },
      { text: "DOB", value: "dob" },
      { text: "Email", value: "email" },
      { text: "Mobile (+91)", value: "mobile" },
      { text: "Course", value: "course" },
      { text: "CGPA", value: "cgpa" },
      // { text: "Status", value: "status" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    statuses: ["Placed", "Not Placed", "On Progress"],
    editedIndex: -1,
    editedItem: {
      name: "",
      roleno: "",
      dob: "",
      email: "",
      mobile: null,
      cgpa: null,
      course: "",
      status: "",
    },
    defaultItem: {
      name: "",
      roleno: "",
      dob: "",
      email: "",
      mobile: null,
      cgpa: null,
      course: "",
      status: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Student" : "Edit Student";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          roleno: "20444",
          dob: "12/02/2003",
          email: "qwerty@gmail.com",
          mobile: 999475214,
          cgpa: 8.6,
          course: "B.tech",
          status: "On Progress",
        },
        {
          name: "Frozen Yogurt",
          roleno: "20444",
          dob: "12/02/2003",
          email: "qwerty@gmail.com",
          mobile: 999475214,
          cgpa: 8.6,
          course: "B.tech",
          status: "Placed",
        },
        {
          name: "Frozen Yogurt",
          roleno: "20444",
          dob: "12/02/2003",
          email: "qwerty@gmail.com",
          mobile: 999475214,
          cgpa: 8.6,
          course: "B.tech",
          status: "Not Placed",
        },
        {
          name: "Frozen Yogurt",
          roleno: "20444",
          dob: "12/02/2003",
          email: "qwerty@gmail.com",
          mobile: 999475214,
          cgpa: 8.6,
          course: "B.tech",
          status: "Placed",
        },
        {
          name: "Frozen Yogurt",
          roleno: "20444",
          dob: "12/02/2003",
          email: "qwerty@gmail.com",
          mobile: 999475214,
          cgpa: 8.6,
          course: "B.tech",
          status: "Not Placed",
        },
      ];
    },

    getColor(status) {
      if (status == "Not Placed") return "red";
      else if (status == "On Progress") return "grey";
      else return "green";
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
  