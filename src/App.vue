<template>
  <v-app>
    <!-- <portalLayout></portalLayout>s -->

    <v-main>
      <!-- <div class="auth" v-if="auth == false">
        <login></login>
      </div> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import portalLayout from "./layout/portalLayout.vue";
// import login from "./views/auth/login.vue";

export default {
  name: "App",
  // components: { login },
  // data: () => ({
  //   auth: true,
  // }),
};
</script>
