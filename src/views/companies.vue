<template>
  <div class="home">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Recruiters List</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
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
                Add Recruiter
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-form validate @submit.prevent="save">
                <v-card-text>
                  <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Company Name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.username"
                        label="User Name"
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
                        v-model="editedItem.gst"
                        label="gst"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.lastDrive"
                        label="lastDrive"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.drive"
                        label="drive"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-col cols="12" sm="6" md="4">
                        <v-autocomplete
                          v-model="editedItem.status"
                          label="Status"
                          :items="statuses"
                        ></v-autocomplete>
                      </v-col>
                  <v-row>
                  </v-row>
                </v-container>
              </v-card-text>
              </v-form>
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
                >Are you sure you want to delete this Company?</v-card-subtitle
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
  name: "Home",
  data: () => ({
    search: "",
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Company Name",
        align: "start",
        value: "name",
      },
      { text: "Gst Id", value: "gst" },
      { text: "Drives", value: "drive" },
      { text: "Email", value: "email" },
      { text: "Last Drive", value: "lastDrive" },
      { text: "Status", value: "status" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    statuses: ["Active", "Inactive"],
    editedIndex: -1,
    editedItem: {
      name: "",
      gst: "",
      drive: 5,
      email: "",
      lastDrive: "12/11/2022",
      status: "Active",
    },
    defaultItem: {
      name: "",
      gst: "",
      drive: 5,
      email: "",
      lastDrive: "12/11/2022",
      status: "Active",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Company" : "Edit Company";
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

      const response = await axios.post("http://localhost:3000/getrecruiter",{});
      let resp = response.data;


      this.desserts = resp.items 

      console.log(typeof(this.desserts))

      // this.desserts = [
      //   {
      //     name: "Amazon",
      //     gst: "PAB34HK6NSGD7X",
      //     drive: 3,
      //     email: "contact@amazon.com",
      //     lastDrive: "12/08/2022",
      //     status: "active",
      //   },
      //   {
      //     name: "Amazon",
      //     gst: "PAB34HK6NSGD7X",
      //     drive: 3,
      //     email: "contact@amazon.com",
      //     lastDrive: "12/08/2022",
      //     status: "active",
      //   },
        // {
        //   name: "Amazon",
        //   gst: "PAB34HK6NSGD7X",
        //   drive: 3,
        //   email: "contact@amazon.com",
        //   lastDrive: "12/08/2022",
        //   status: "active",
        // },
      //   {
      //     name: "Amazon",
      //     gst: "PAB34HK6NSGD7X",
      //     drive: 3,
      //     email: "contact@amazon.com",
      //     lastDrive: "12/08/2022",
      //     status: "active",
      //   },
      // ];
      console.log(
        "%cJSON CompaniesData: ",
        "color:blue",
        JSON.stringify(this.desserts)
      );

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
        username: this.editedItem.username
      }

      const response = await axios.post("http://localhost:3000/deletecompany", userdetail);
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
        console.log("Updating...")

        let userdata = {
          username: this.editedItem.username,
          name: this.editedItem.name,
          gst: this.editedItem.gst,
          drive: this.editedItem.drive,
          email: this.editedItem.email,
          lastDrive: this.editedItem.lastDrive,
          status: this.editedItem.status
        }

        const response = await axios.post("http://localhost:3000/updatecompany", userdata);
        let resp = response.data;

        console.log(resp)


      } else {
        this.desserts.push(this.editedItem);
        const newUser = {
          name: this.editedItem.name,
          username: this.editedItem.username,
          email: this.editedItem.email,
          gst: this.editedItem.gst,
          lastDrive: this.editedItem.lastDrive,
          drive: this.editedItem.drive,
          status: this.editedItem.status
        };

        console.log("newuser", newUser);

        const response = await axios.post("http://localhost:3000/addrecruiter", newUser);
        let resp = response.data;

        console.log(resp)

      }
      this.close();
    },

  },
};
</script>
  