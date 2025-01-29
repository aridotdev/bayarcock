export default {
  template: /*html*/`
    <section class="p-4 bg-blue-50 rounded">
      <div class="space-y-2">
        <form class="space-y-2">
            <h3 class="font-bold">Input Data</h3>
            <div>
              <label for="cockperpcs">Iuran Cock Satuan (Rp)</label>
              <input
                ref="cockperpcs"
                id="cockperpcs"
                required
                type="number"
                input-mode="numeric"
                :value="cockPricePerPiece"
                @input="$emit('update:cockPricePerPiece', $event.target.value)"
                placeholder="Harga Cock Satuan"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-gray-400 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label for="buycock">Beli Cock (Rp)</label>
              <input
                id="buycock"
                required
                type="number"
                input-mode="numeric"
                :value="buyCock"
                @input="$emit('update:buyCock', $event.target.value)"
                placeholder="Pembelian Suttlecock"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-gray-400 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label for="paycourt">Sewa Lapang (Rp)</label>
              <input
                id="paycourt"
                required
                type="number"
                input-mode="numeric"
                :value="payCourt"
                @input="$emit('update:payCourt', $event.target.value)"
                placeholder="Bayar member lapangan"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-gray-400 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <button
              type="submit"
              @click.prevent="setInputData()"
              class="w-full flex gap-2 items-center justify-center text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <img src="./image/tick-square.svg" alt="icon-tick" />
                Tetapkan
              </button>
            </div>
          </form>
      </div>
    </section>
  `,

  props: {
    cockPricePerPiece: Number,
    buyCock: Number,
    payCourt: Number
  },

  emit: ['update:cockPricePerPiece', 'update:buyCock', 'update:payCourt'],

  methods: {
    setInputData() {
      if(this.cockPricePerPiece == 0 || this.cockPricePerPiece == null) {
        alert('Iuran Cock Satuan Kosong, Silahkan di isi nominalnya')
        this.$refs.cockperpcs.focus()
        return
      } 
      this.$emit('emitsetInputData')
      console.log('tampilkan div ringkasan')
    }
  }
}