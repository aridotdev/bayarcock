export default {
  template: /*html*/`
    <div class="flex gap-4 h-8 ml-2">
      <button
        class="text-xs px-2 py-1 font-medium rounded focus:ring-4"
        :class="{
          'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800': player.isLunas == true,
          'bg-transparent outline outline-2 outline-blue-600 focus:outline-blue-500' : player.isLunas == false
        }"
        @click="player.isLunas = true"
        :disabled="player.isLunas == true"
      >
        {{player.isLunas ? 'Lunas' : 'Bayar'}}
      </button>
      <div
        class="flex gap-2 font-medium items-center justify-center"
      >
        <button
          class="w-8 flex justify-center items-center"
          @click="qtyDecrement()"
          :disabled="player.qtyCock < 1 || player.isLunas == true"
        >
          <img
            src="./image/minus-square.svg"
            alt="icon-minus-square"
            class="size-8"
          />
        </button>
        <p>{{player.qtyCock}}</p>
        <button
          class="w-8 flex justify-center items-center"
          @click="qtyIncrement()"
          :disabled="player.isLunas == true"
        >
          <img
            src="./image/add-square.svg"
            alt="icon-minus-square"
            class="size-8"
          />
        </button>
      </div>
    </div>
  `,

  props: {
    player: Object
  },

  methods: {
    qtyIncrement() {
      this.player.qtyCock++
    },

    qtyDecrement() {
      this.player.qtyCock--
    }
  }
}