export default {
  template: /*html*/`
      <div
        :class="player.menuIsHidden ? 'hidden' : ''"
        class="mt-4 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200 space-y-2"
        >
          <li>
            <a
              href="#"
              class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              @click="edit()"
            >
              <img src="./image/icon_edit.svg" alt="icon-edit" />
              Edit</a
            >
          </li>
          <li class="flex justify-between mx-4 gap-2">
            <label class="flex items-center gap-2 grow">
              Donasi
              <input
                type="number"
                :disabled="player.isLunas == true"
                v-model="player.extraCash"
                placeholder="Tambahan"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full disabled:bg-gray-200"
              />
            </label>
            <button 
              class="flex-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              @click.prevent="done()"
              >Done</button>
          </li>
          <li>
            <button
              href="#"
              class="flex item-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white w-full"
              @click="removePlayer()"
              :disabled="player.isLunas == true"
            >
              <img src="./image/trash.svg" alt="icon-trash" />
              Hapus
            </button>
          </li>
        </ul>
      </div>
  `,

  props: {
    player: Object,
  },

  methods: {
    edit() {
      this.$emit('emitEdit')
    },

    removePlayer() {
      this.$emit('emitRemovePlayer')
    },

    done(){
      this.player.menuIsHidden = true
    }
  }
}