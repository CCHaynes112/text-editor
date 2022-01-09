import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    zoom: 1,
    textType: 'normal',
    font: 'Arial',
    fontSize: '12',
    fontColor: '#000000',
    fontBold: false,
    fontItalic: false,
    fontUnderline: false,
  },
  mutations: {
    setZoom(state, zoom) {
      state.zoom = zoom
    },
    setTextType(state, textType) {
      state.textType = textType
    },
    setFont(state, font) {
      state.font = font
    },
    setFontSize(state, fontSize) {
      state.fontSize = fontSize
    },
    setFontColor(state, fontColor) {
      state.fontColor = fontColor
    },
    setFontBold(state) {
      state.fontBold = !state.fontBold
    },
    setFontItalic(state) {
      state.fontItalic = !state.fontItalic
    },
    setFontUnderline(state) {
      state.fontUnderline = !state.fontUnderline
    }
  },
  actions: {
    setZoom(context, zoom) {
      context.commit('setZoom', zoom)
    },
    setTextType(context, textType) {
      context.commit('setTextType', textType)
    },
    setFont(context, font) {
      context.commit('setFont', font)
    },
    setFontSize(context, fontSize) {
      context.commit('setFontSize', fontSize)
    },
    setBold(context) {
      context.commit('setFontBold')
    },
    setItalic(context) {
      context.commit('setFontItalic')
    },
    setUnderline(context) {
      context.commit('setFontUnderline')
    }
  },
  modules: {
  }
})
