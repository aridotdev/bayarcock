import TheWelcome from "./TheWelcome.js";
import TheMainApp from "./TheMainApp.js";


export default {
  components: { TheWelcome, TheMainApp },
  template: /*html*/`
    
    <TheWelcome
      v-if="!isStart"
      @emitStartTheGame="startTheGame" 
    />

    <TheMainApp 
      v-else
      @emitbackToHome="startTheGame" />
  `,

  data() {
    return {
      isStart: false,
    };
  },

  methods: {
    startTheGame() {
      this.isStart = !this.isStart;
    }
  },
}