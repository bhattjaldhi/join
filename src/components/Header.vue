<template>
  <div class="toolbar">
    <v-toolbar flat rounded>
      <v-toolbar-title>
        <router-link to="/">
          <img src="@/assets/images/logo2.png" class="logo" />
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="menu-item hidden-xs-only" to="/" text>Home</v-btn>
      <v-btn class="menu-item hidden-xs-only" to="/about" text>About</v-btn>
      <v-btn class="menu-item hidden-xs-only" to="/contact" text>Contact</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" class="d-flex d-sm-none" dark v-bind="attrs" v-on="on" icon>
            <v-icon>$menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title @click="redirect(item.to)">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Home", to: "/" },
      { title: "About", to: "/about" },
      { title: "Contact", to: "/contact" }
    ]
  }),
  methods: {
    redirect(to) {
      this.$router.replace(to);
    }
  }
};
</script>