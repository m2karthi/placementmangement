<template>
  <div class="addNew">
    <v-form @submit.prevent="addDetails">
      <div class="top d-flex">
        <h4 class="title">View Student Profile</h4>
      </div>
      <div class="topic">
        <h4>Personal Details</h4>
      </div>
      <div class="container-employee d-flex">
        <div class="div-left">
          <v-card>
            <v-img
              src="../../assets/employee1.svg"
              class="rounded-xl ="
              width="100%"
            ></v-img>
            <div class="text-field pl-2 ml-2">
              <v-text-field
                dense
                outlined
                clearable
                v-model="name"
                color="primary"
                label="Name"
              >
              </v-text-field>

              <v-autocomplete
                dense
                outlined
                :items="genderList"
                clearable
                v-model="gender"
                color="primary"
                label="gender"
              >
              </v-autocomplete>
              <v-text-field
                dense
                outlined
                clearable
                v-model="email"
                color="primary"
                label="Email"
              >
              </v-text-field>
              <v-text-field
                dense
                outlined
                clearable
                v-model="mobile"
                color="primary"
                label="Contact Number"
              >
              </v-text-field>
            </div>
          </v-card>
        </div>
        <div class="left-div pa-2 mx-2">
          <v-card class="pa-2 ml-2 d-flex">
            <div class="text-field pa-2 ml-2">
              <v-text-field
                dense
                outlined
                clearable
                v-model="accountnumber"
                color="primary"
                label="Alternate Mobile"
              >
              </v-text-field>

              <v-file-input
                dense
                outlined
                clearable
                prepend-icon=""
                append-icon="mdi-file"
                v-model="emp_password"
                color="primary"
                label="Upload Resume"
              >
              </v-file-input>
              <v-text-field
                dense
                outlined
                clearable
                v-model="dob"
                color="primary"
                type="date"
                label="Date of Birth"
              >
              </v-text-field>
              <v-text-field
                dense
                outlined
                clearable
                v-model="city"
                color="primary"
                label="Address"
              >
              </v-text-field>

              <v-textarea
                dense
                outlined
                clearable
                v-model="remarks"
                color="primary"
                label="Remarks"
              >
              </v-textarea>
            </div>
            <div class="text-field pa-2 ml-2">
              <v-text-field
                dense
                outlined
                clearable
                v-model="cgpa"
                color="primary"
                label="CGPA"
              >
              </v-text-field>
              <v-autocomplete
                dense
                outlined
                clearable
                :items="paytypeList"
                v-model="paytype"
                color="primary"
                label="10th %"
              >
              </v-autocomplete>
              <v-text-field
                dense
                outlined
                clearable
                v-model="payrate"
                color="primary"
                label="12th %"
              >
              </v-text-field>
              <v-text-field
                dense
                outlined
                clearable
                v-model="designation"
                color="primary"
                label="Prefered Designation"
              >
              </v-text-field>

              <v-textarea
                dense
                outlined
                clearable
                v-model="overrate"
                color="primary"
                label="Areas Of Interest"
              >
              </v-textarea>

              <!-- <v-autocomplete
                  dense
                  outlined
                  clearable
                  :items="statuslist"
                  v-model="empstatus"
                  color="primary"
                  label="Status"
                >
                </v-autocomplete> -->
            </div>
          </v-card>
        </div>
      </div>
    </v-form>
  </div>
</template>
    
    <script>
// import axios from "axios";
export default {
  name: "studentProfile",
  data() {
    return {
      genderList: ["Male", "Female"],
      jobtypeList: ["Full Time", "PartTime"],
      paytypeList: ["NEFT", "RTGS", "Net Banking"],
      statuslist: ["Active", "On Leave", "On Duty"],

      employee_name: "",
      emp_password: "",
      gender: "",
      email: "",
      mobile: null,
      designation: "",
      dob: null,
      city: "",
      remarks: "",
      cgpa: "",
      paytype: "",
      overrate: null,
      payrate: null,
      accountnumber: null,
      empstatus: "",
    };
  },
  methods: {
    async addDetails() {
      console.log("add details");
      const empDetails = {
        employee_name: this.employee_name,
        emp_password: this.emp_password,
        gender: this.gender,
        designation: this.designation,
        dob: this.dob,
        mobile: this.mobile,
        email: this.email,
        remarks: this.remarks,
        city: this.city,
        cgpa: this.cgpa,
        paytype: this.paytype,
        payrate: this.payrate,
        empstatus: this.empstatus,
        overrate: this.overrate,
        accountnumber: this.accountnumber,
      };

      console.log("EmpDetails", empDetails);
      //   await axios
      //     .post("http://localhost:3000/employees", empDetails)
      //     .then((response) => {
      //       console.log("response", response);
      //     })
      //     .catch((err) => {
      //       console.log("error", err);
      //     });

      this.$router.replace("/student");
    },
  },
};
</script>
    
    <style scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.v-text-field--outlined >>> fieldset {
  border-color: primary;
}
.custom-placeholer-color input::placeholder {
  color: red !important;
  opacity: 1;
}

.custom-label-color .v-label {
  color: red;
  opacity: 1;
}

.custom-placeholer-color input,
.custom-label-color input {
  color: red !important;
}
.addNew {
  width: 100%;
  padding: 15px;
}
.div-left {
  width: 30%;
}
.v-text-field {
  width: 250px;
}
</style>