<template>
  <div class="home">
    <div class="top">
      <v-card class="leftTop">
        <v-card-title>Year Wise Placement Comparision</v-card-title>
        <div class="text-center d-flex">
          <div class="one">
            <v-progress-circular
              :size="100"
              :width="15"
              :value="value1"
              color="teal"
            >
              {{ value1 }}
            </v-progress-circular>
            <p>2022</p>
          </div>
          <div class="one">
            <v-progress-circular
              :size="100"
              :width="15"
              :value="value2"
              color="primary"
            >
              {{ value2 }}
            </v-progress-circular>
            <p>2021</p>
          </div>

          <div class="one">
            <v-progress-circular
              :size="100"
              :width="15"
              :value="value3"
              color="red"
            >
              {{ value3 }}
            </v-progress-circular>
            <p>2020</p>
          </div>

          <div class="one">
            <v-progress-circular
              :size="100"
              :width="15"
              :value="value4"
              color="pink"
            >
              {{ value4 }}
            </v-progress-circular>
            <p>2019</p>
          </div>
        </div>
      </v-card>
      <v-card class="rightTop"> </v-card>
    </div>
    <div class="down mt-6">
      <v-card class="leftDown pa-3">
        <v-card-title>Top Pacakages last Year</v-card-title>

        <div class="ml-4 pb-4">
          <h5>Pacakage: 30+ LPA</h5>
          <div class="d-flex">
            <v-progress-linear
              v-model="valueDeterminate1"
              height="10px"
              rounded
              color="deep-purple accent-4"
            ></v-progress-linear>
            <h5 class="pl-1">{{ valueDeterminate1 }}%</h5>

            <br />
          </div>
          <h5>Pacakage: 20+ LPA</h5>
          <div class="d-flex">
            <v-progress-linear
              height="10px"
              rounded
              v-model="valueDeterminate2"
              color="pink"
            >
            </v-progress-linear>
            <h5 class="pl-1">{{ valueDeterminate2 }}%</h5>
            <br />
          </div>
          <h5>Pacakage: 15+ LPA</h5>
          <div class="d-flex">
            <v-progress-linear
              height="10px"
              rounded
              v-model="valueDeterminate3"
              color="indigo darken-2"
            ></v-progress-linear>
            <h5 class="pl-1">{{ valueDeterminate3 }}%</h5>

            <br />
          </div>
          <h5>Pacakage: 10+ LPA</h5>
          <div class="d-flex">
            <v-progress-linear
              height="10px"
              rounded
              v-model="valueDeterminate4"
              color="amber"
            ></v-progress-linear>
            <h5 class="pl-1">{{ valueDeterminate4 }}%</h5>
          </div>
        </div>
      </v-card>
      <v-card class="rightDown">
        <div id="chart">
          <apexchart
            type="pie"
            width="380"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script lang="js">
// import ApexCharts from "apexcharts";
export default {
  name: "home",
  // components: [ApexCharts],
  data() {
    return {
      gh: 50,
      interval: {},
      value: 0,
      valueDeterminate1: 50,
      valueDeterminate2: 30,
      valueDeterminate3: 80,
      valueDeterminate4: 60,
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,

      series: [44, 55, 13, 43, 22],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["CSE", "Mech", "ECE", "CCE", "EEE"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value1 === 90) {
        return (this.value1 = 0);
      }
      if (this.value2 === 90) {
        return (this.value2 = 0);
      }
      if (this.value3 === 90) {
        return (this.value3 = 0);
      }
      if (this.value4 === 90) {
        return (this.value4 = 0);
      }
      this.value1 += 10;
      this.value2 += 10;
      this.value3 += 10;
      this.value4 += 10;
    }, 500);
  },
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
.v-progress-linear {
  width: 300px;
}

.leftTop {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100%;  */
}
.down {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}
</style>