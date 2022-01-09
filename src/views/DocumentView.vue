<template>
  <div>
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