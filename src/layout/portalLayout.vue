<template>
  <v-app>
    <!-- Drawer -->
    <v-navigation-drawer
      app
      v-model="drawer"
      permanent="true"
      height="100vh"
      class="deep-purple accent-4"
    >
      <div id="logo">
        <h3 class="white--text">Placement Portal</h3>
      </div>

      <v-list dense nav>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.route"
          link
          class="mt-2"
        >
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="ml-n6">
            <v-list-item-title class="caption white--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- <h4 class="mt-6 font-weight-medium white--text">Account</h4> -->
        <!-- <v-list-item
          v-for="item in accountItems"
          :key="item.title"
          :to="item.route"
          link
          class="mt-2"
        >
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="ml-n6">
            <v-list-item-title class="caption white--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar app elevation="4" class="deep-purple accent-4" id="navbar">
      <!-- <v-app-bar-nav-icon @click.stop="showHideNav()"></v-app-bar-nav-icon> -->
      <!-- <v-app-bar-title><h5>a</h5></v-app-bar-title> -->
      <!-- <div class="d-flex align-center ml-3">
        <v-img
          alt="WebHead Logo"
          class="shrink mr-2 mt-6"
          contain
          src="../../assets/logo.svg"
          transition="scale-transition"
        />
      </div> -->

      <v-spacer></v-spacer>
      <v-btn icon class="mr-0">
        <v-icon color="red">mdi-bell-badge-outline</v-icon>
      </v-btn>

      <v-btn href="" text>
        <v-img
          alt="Vuetify Logo"
          class="shrink red"
          contain
          src="../assets/profile-small.svg"
        />
        <div class="mr-3 ml-2">
          <div class="red--text">CIR</div>
          <div class="grey--text subtitle-2">Admin</div>
        </div>
        <v-icon class="ml-1" color="red">mdi-chevron-down</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="pa-4">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app color="black">
      <span
        >@2023 | Made with ???? by<a
          class="link"
          target="_blank"
          href="https://webilicious.in"
        >
          Webilicious</a
        ></span
      >
      <v-spacer></v-spacer>
      <ul class="footer-right">
        <li>
          <a class="link" target="_blank" href="https://webilicious.in"
            >Webilicious</a
          >
        </li>
        <li>Help</li>
        <li>Terms</li>
      </ul>
    </v-footer>
  </v-app>
</template>
  
  <script>
// import { mapGetters, mapActions } from "vuex";

export default {
  name: "portalLayout",
  components: {},
  data() {
    return {
      drawer: true,
      isPermanent: false,
      isTemporary: false,
      menuItems: [],
      accountItems: [],
    };
  },
  created() {
    this.init();
  },
  computed: {},
  methods: {
    async init() {
      this.getMenuItems();
    },

    async getMenuItems() {
      this.menuItems = [
        {
          title: "Home",
          icon: "fa-solid fa-house",
          route: "/home",
        },
        {
          title: "Drives",
          route: "/drives",
          icon: "fa-solid fa-paperclip",
        },
        {
          title: "Students",
          route: "/students",
          icon: "fa-solid fa-graduation-cap",
        },
        {
          title: "Companies",
          route: "/companies",
          icon: "fa-solid fa-building",
        },
        {
          title: "Settings",
          route: "/settings",
          icon: "fa-solid fa-gears",
        },
      ];
      this.accountItems = [
        {
          title: "Institute",
          icon: "fa-solid fa-school",
          route: "/institute/1",
        },
        {
          title: "Settings",
          icon: "fa-solid fa-gear",
          route: "/settings/academy",
        },
      ];
    },

    showHideNav() {
      if (this.drawer) {
        this.drawer = false;
        this.isPermanent = false;
        this.isTemporary = true;
      } else if (!this.drawer) {
        this.drawer = true;
        this.isPermanent = false;
        this.isTemporary = false;
      }
    },
  },
};
</script>
  
  <style scoped>
.mainn {
  background-color: rgb(211, 211, 211);
}

#logo {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-navigation-drawer {
  padding: 20px 20px;
}
.v-navigation-drawer >>> .v-navigation-drawer__border {
  display: none;
}
.v-list-item {
  padding: 5px 20px;
}

.v-footer {
  background-color: #f8f9fa;
  font-size: 12px;
  color: #ffffff;
}
.footer-right {
  display: flex;
  text-decoration: none;
  list-style-type: none;
}
.footer-right li {
  margin-left: 20px;
  cursor: pointer;
}
.link {
  color: #4fd1c5;
  text-decoration: none;
}
</style>
  