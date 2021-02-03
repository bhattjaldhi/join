<template>
  <v-app>
    <v-slide-y-transition>
      <router-view></router-view>
    </v-slide-y-transition>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
