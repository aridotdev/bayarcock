import TheWelcome from "./TheWelcome.js";
import TheMainApp from "./TheMainApp.js";
import modal from "./modal.js";

export default {
  components: { TheWelcome, TheMainApp, modal },
  template: /*html*/ `
    <TheWelcome
      v-if="!isStart"
      @emitStartTheGame="startTheGame"
    />

    <TheMainApp 
      v-if="isStart"
      @emitbackToHome="startTheGame" 
      @endTheGame="startTheGame"
    />
  `,

  data() {
    return {
      isStart: false,
    };
  },

  methods: {
    startTheGame() {
      this.isStart = !this.isStart;
    },
  },
};
