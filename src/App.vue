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
    <v-app-bar
      app
      flat
      dense
      outlined
      style="margin-top: 64px; background-color: white"
    >
      <v-btn small icon>
        <v-icon>mdi-undo</v-icon>
      </v-btn>
      <v-btn small icon>
        <v-icon>mdi-redo</v-icon>
      </v-btn>
      <v-btn small icon>
        <v-icon>mdi-printer</v-icon>
      </v-btn>
      <v-btn small icon>
        <v-icon>mdi-spellcheck</v-icon>
      </v-btn>
      <v-btn small icon>
        <v-icon>mdi-format-paint</v-icon>
      </v-btn>
      <v-divider vertical inset class="mx-2"></v-divider>
      <div class="zoom-dropdown">
        <v-select
          :items="zoomOptions"
          :value="currentZoom"
          dense
          solo
          flat
          hide-details
        ></v-select>
      </div>
      <v-divider vertical inset class="mx-2"></v-divider>
      <div class="text-type-dropdown">
        <v-select
          :items="textType"
          :value="currentTextType"
          dense
          solo
          flat
          hide-details
        ></v-select>
      </div>
      <v-divider vertical inset class="mx-2"></v-divider>
      <div class="font-dropdown">
        <v-select
          :items="fonts"
          :value="currentFont"
          dense
          solo
          flat
          hide-details
        ></v-select>
      </div>
      <v-btn small outlined icon>
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <div class="font-size-input">
        <v-text-field
          :value="currentFontSize"
          solo
          flat
          dense
          hide-details
        ></v-text-field>
      </div>
      <v-btn small outlined icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn small icon>
        <v-icon>mdi-format-bold</v-icon>
      </v-btn>
      <v-btn small icon>
        <v-icon>mdi-format-italic</v-icon>
      </v-btn>
      <v-btn small icon>
        <v-icon>mdi-format-underline</v-icon>
      </v-btn>
      <v-btn small icon>
        <v-icon>mdi-format-color-text</v-icon>
      </v-btn>
      <v-btn small icon>
        <v-icon>mdi-marker</v-icon>
      </v-btn>
      <v-divider vertical inset class="mx-2"></v-divider>
      <v-btn small icon>
        <v-icon>mdi-link</v-icon>
      </v-btn>
      <v-btn disabled small icon>
        <v-icon>mdi-comment-plus-outline</v-icon>
      </v-btn>
      <v-btn small icon>
        <v-icon>mdi-image-outline</v-icon>
      </v-btn>
      <v-divider vertical inset class="mx-2"></v-divider>
      <v-btn small icon>
        <v-icon>mdi-format-align-left</v-icon>
      </v-btn>
      <v-btn small icon>
        <v-icon>mdi-format-align-center</v-icon>
      </v-btn>
      <v-btn small icon>
        <v-icon>mdi-format-align-right</v-icon>
      </v-btn>
      <v-btn small icon>
        <v-icon>mdi-format-align-justify</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <DocumentView />
    </v-main>
  </v-app>
</template>

<script>
import DocumentView from "./views/DocumentView";

export default {
  name: "App",

  components: {
    DocumentView,
  },

  data: () => ({
    zoomOptions: [
      { text: "50%", value: 0.5 },
      { text: "75%", value: 0.75 },
      { text: "100%", value: 1 },
      { text: "125%", value: 1.25 },
      { text: "150%", value: 1.5 },
      { text: "175%", value: 1.75 },
      { text: "200%", value: 2 },
    ],
    currentZoom: 1,
    textType: [
      { text: "Normal Text", value: "normal" },
      { text: "Title", value: "title" },
      { text: "Subtitle", value: "subtitle" },
      { text: "Heading 1", value: "heading1" },
      { text: "Heading 2", value: "heading2" },
      { text: "Heading 3", value: "heading3" },
      { text: "Options", value: "options" },
    ],
    currentTextType: "normal",
    fonts: [
      { text: "Arial", value: "Arial" },
      { text: "Courier New", value: "Courier New" },
      { text: "Georgia", value: "Georgia" },
      { text: "Helvetica", value: "Helvetica" },
      { text: "Times New Roman", value: "Times New Roman" },
      { text: "Verdana", value: "Verdana" },
    ],
    currentFont: "Arial",
    currentFontSize: "12",
  }),
};
</script>

<style scoped>
.zoom-dropdown {
  width: 100px;
}
.text-type-dropdown {
  width: 150px;
}
.font-dropdown {
  width: 150px;
}
.font-size-input {
  width: 50px;
}
</style>