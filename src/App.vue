<template>
  <v-app>
    <!-- <portalLayout></portalLayout>s -->

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import portalLayout from "./layout/portalLayout.vue";
export default {
  name: "App",
  // components: { portalLayout },
  data: () => ({
    //
  }),
};
</script>
