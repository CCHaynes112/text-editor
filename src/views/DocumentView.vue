<template>
  <div>
    <div class="toolbar">
      <v-btn icon color="pink">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </div>
    <div class="document-container">
      <Document class="document" />
    </div>
  </div>
</template>

<script>
import Document from "../components/Document.vue";

export default {
  name: "DocumentView",
  components: {
    Document,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>

<style scoped>
.toolbar {
  background-color: #f5f5f5;
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
.document-container {
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  width: 100%;
  min-height: 100vh;
  padding-top: 20px;
}
.document {
  width: 80vw;
  min-height: 100vh;
}
</style>