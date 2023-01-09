<template>
  <div class="students">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:[`item.img`]>
        <v-btn class="elevation-0 pa-0 ma-0" to="/student/profile" text>
          <v-avatar class="my-1">
            <img src="../assets/profile-small.svg" width="5" alt="John" />
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
          <v-toolbar-title>Students List</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            required
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Add Student
              </v-btn>
            </template>
            <v-card>
              <v-form validate @submit.prevent="save">
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          required
                          v-model="editedItem.name"
                          label="Student Name"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          required
                          v-model="editedItem.rollno"
                          label="Role No"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          required
                          v-model="editedItem.dob"
                          label="DOB"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          required
                          type="email"
                          v-model="editedItem.email"
                          label="Email"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          required
                          type="number"
                          v-model="editedItem.mobile"
                          label="Mobile"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          required
                          type="number"
                          v-model="editedItem.cgpa"
                          label="CGPA"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          required
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
                  <v-btn type="submit" color="blue darken-1" text> Save </v-btn>
                </v-card-actions>
              </v-form>
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
import axios from "axios";

export default {
  name: "students",
  data: () => ({
    dialog: false,
    search: "",
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

      { text: "RollNo", value: "rollno" },
      { text: "DOB", value: "dob" },
      { text: "Email", value: "email" },
      { text: "Mobile (+91)", value: "mobile" },
      { text: "Course", value: "course" },
      { text: "CGPA", value: "cgpa" },
      { text: "Status", value: "status" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    statuses: ["Placed", "Not Placed", "On Progress"],
    editedIndex: -1,
    editedItem: {
      name: "",
      rollno: "",
      dob: "",
      email: "",
      mobile: null,
      cgpa: null,
      course: "",
      status: "",
    },
    defaultItem: {
      name: "",
      rollno: "",
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
    async initialize() {

      const response = await axios.post("http://localhost:3000/getstudent",{});
      let resp = response.data;

      console.log(resp)

      this.desserts = resp.items

      // this.desserts = [
      //   {
      //     name: "Aadithya",
      //     rollno: "20444",
      //     dob: "12/02/2003",
      //     email: "qwerty@gmail.com",
      //     mobile: 999475214,
      //     cgpa: 8.6,
      //     course: "B.tech",
      //     status: "On Progress",
      //   },
      //   {
      //     name: "Logeshwaran",
      //     rollno: "20435",
      //     dob: "12/02/2003",
      //     email: "qwerty@gmail.com",
      //     mobile: 999475214,
      //     cgpa: 8.6,
      //     course: "B.tech",
      //     status: "Placed",
      //   },
      //   {
      //     name: "Pradeep",
      //     rollno: "20447",
      //     dob: "12/02/2003",
      //     email: "qwerty@gmail.com",
      //     mobile: 999475214,
      //     cgpa: 8.6,
      //     course: "B.tech",
      //     status: "Not Placed",
      //   },
      //   {
      //     name: "Praveen",
      //     rollno: "20449",
      //     dob: "12/02/2003",
      //     email: "qwerty@gmail.com",
      //     mobile: 999475214,
      //     cgpa: 8.6,
      //     course: "B.tech",
      //     status: "Placed",
      //   },
      //   {
      //     name: "Frozen Yogurt",
      //     rollno: "20403",
      //     dob: "12/02/2003",
      //     email: "Aadithya@gmail.com",
      //     mobile: 999475214,
      //     cgpa: 8.6,
      //     course: "B.tech",
      //     status: "Not Placed",
      //   },
      // ];

      console.log(
        "%cJSON StudentData: ",
        "color:green",
        JSON.stringify(this.desserts)
      );
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

    async deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);

      let userdetail = {
        rollno: this.editedItem.rollno
      }

      const response = await axios.post("http://localhost:3000/deletestudent", userdetail);
      let resp = response.data;

      console.log(resp);

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

    async save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);

        let userdata = {
          name: this.editedItem.name,
          rollno: this.editedItem.rollno,
          dob: this.editedItem.dob,
          email: this.editedItem.email,
          mobile: this.editedItem.mobile,
          cgpa: this.editedItem.cgpa,
          course: this.editedItem.course,
          status: this.editedItem.status
        }

        const response = await axios.post("http://localhost:3000/updatestudent", userdata);
        let resp = response.data;

        console.log(resp)

      } else {
        this.desserts.push(this.editedItem);
        const newUser = {
          rollno: this.editedItem.rollno,
          name: this.editedItem.name,
          dob: this.editedItem.dob,
          email: this.editedItem.email,
          mobile: this.editedItem.mobile,
          cgpa: this.editedItem.cgpa,
          course: this.editedItem.course,
          status: this.editedItem.status,
        };

        console.log("newuser", newUser);
        // await axios
        //   .post("http://localhost:3000/addstudent", newUser)
        //   .then(function (response) {
        //     console.log("response after adding student", response);
        //   })
        //   .catch(function (error) {
        //     console.log("error in adding student", error);
        //   });

        const response = await axios.post("http://localhost:3000/addstudent", newUser);
        let resp = response.data;

        console.log(resp)

      }
      this.close();
    },
  },
};
</script>
