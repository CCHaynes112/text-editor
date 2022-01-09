<template>
  <div>
    <textarea v-model="textInput" id="document" name="document" :style="textAreaStyle"></textarea>
  </div>
</template>

<script>
export default {
  name: "Document",
  props: {},
  data() {
    return {
      textInput: "",
    };
  },
  computed: {
    textAreaStyle() {
      return {
        fontSize: `${this.$store.state.fontSize}px`,
        fontFamily: this.$store.state.font,
        fontWeight: this.$store.state.fontBold ? "bold" : "normal",
        fontStyle: this.$store.state.fontItalic ? "italic" : "normal",
        textDecoration: this.$store.state.fontUnderline ? "underline" : "none",
      };
    },
  },
};
</script>

<style scoped>
#document {
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 20px;
  font-size: 12px;
}
textarea {
  /* Disable default styling */
  border: none;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
  /* Set height and width */
  width: 100%;
  height: 100%;
}
</style>
