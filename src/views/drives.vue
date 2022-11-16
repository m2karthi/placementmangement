<template>
  <div class="students">
    <div class="headline mb-2">Drives</div>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template v-slot:[`item.img`]>
        <v-avatar class="my-1">
          <!-- <img src="../assets/profile-small.svg" width="5" alt="John" /> -->
          <v-icon small class="mr-2"> fa-brands fa-amazon </v-icon>
        </v-avatar>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <!-- <font-awesome-icon icon="fa-brands fa-amazon" /> -->
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-arrow-up-bold-box-outline
        </v-icon>
        <!-- <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon> -->
      </template>

      <template v-slot:[`item.status`]="{ item }">
        <v-chip :color="getColor(item.status)" dark>
          {{ item.status }}
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "students",
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
        text: "Company Name",
        // align: "start",
        value: "name",
      },

      { text: "Opening Date", value: "open" },
      { text: "Closing Date", value: "close" },
      { text: "Designation", value: "designation" },
      { text: "Registered Students", value: "regStud" },
      { text: "Course", value: "course" },
      { text: "Eligibility CGPA", value: "cgpa" },
      { text: "Status", value: "status" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    statuses: ["Placed", "Not Placed", "On Progress"],
    editedIndex: -1,
    editedItem: {
      name: "",
      open: "",
      close: "",
      designation: "",
      regStud: null,
      cgpa: null,
      course: "",
      status: "",
    },
    defaultItem: {
      name: "",
      open: "",
      close: "",
      designation: "",
      regStud: null,
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
          name: "Amazon",
          open: "12/11/2022",
          close: "15/11/2022",
          designation: "Software Developer",
          regStud: 180,
          cgpa: 9.3,
          course: "B.Tech",
          status: "Active",
        },
        {
          name: "Webilicious",
          open: "10/11/2022",
          close: "14/11/2022",
          designation: "Software Developer",
          regStud: 180,
          cgpa: 9.3,
          course: "B.Tech",
          status: "Closing Soon",
        },
        {
          name: "Microsoft",
          open: "10/11/2022",
          close: "12/11/2022",
          designation: "Software Developer",
          regStud: 180,
          cgpa: 9.3,
          course: "B.Tech",
          status: "Closed",
        },
      ];
    },

    getColor(status) {
      if (status == "Closed") return "red";
      else if (status == "Closing Soon") return "orange";
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
