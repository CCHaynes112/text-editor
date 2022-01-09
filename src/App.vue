<template>
  <v-app>
    <v-app-bar app flat outlined style="background-color: white">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
      <h3>Document</h3>

      <v-spacer></v-spacer>
    </v-app-bar>
    <DocumentToolBar />

    <v-main>
      <DocumentView />
    </v-main>
  </v-app>
</template>

<script>
import DocumentView from "./views/DocumentView";
import DocumentToolBar from "./components/DocumentToolBar";

export default {
  name: "App",

  components: {
    DocumentView,
    DocumentToolBar,
  },

  data: () => ({}),
};
</script>

<style scoped>
</style>