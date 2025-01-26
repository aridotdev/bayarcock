export default {
  template: /*html*/`
    <li
      class="p-4 mb-2 rounded-lg disabled:cursor-not-allowed relative"
      :class="{
        'bg-blue-50': player.isLunas == false,
        'bg-green-500': player.isLunas == true,
      }"
    >
      <div class="flex items-center justify-between">
        <!-- left div -->
        <div class="flex gap-2 items-center">
          <button
            @click="player.menuIsHidden = !player.menuIsHidden"
            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 4 15"
            >
              <path
                d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
          </button>

          <p class="font-medium">{{player.name.toUpperCase()}}</p>
        </div>
        <!-- right div -->
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
              @click="player.qtyCock--"
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
              @click="player.qtyCock++"
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
      </div>

      <!-- additional menu -->
      <div v-if="!player.menuIsHidden">
        <div
          :class="player.menuIsHidden ? 'hidden' : ''"
          class="mt-4 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 w-3/4"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200 space-y-2"
          >
            <li>
              <a
                href="#"
                class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                @click="player.isLunas = false"
              >
                <img src="./image/icon_edit.svg" alt="icon-edit" />
                Edit</a
              >
            </li>
            <li>
              <label class="flex items-center gap-2 ml-4">
                Donasi
                <input
                  type="text"
                  :disabled="player.isLunas == true"
                  v-model="player.extraCash"
                  placeholder="Tambahan"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-4 w-full disabled:bg-gray-200"
                />
              </label>
            </li>
            <li>
              <button
                href="#"
                class="flex item-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                @click="removePlayer()"
                :disabled="player.isLunas == true"
              >
                <img src="./image/trash.svg" alt="icon-trash" />
                Hapus
              </button>
            </li>
          </ul>
        </div>
      </div>
    </li>
  `,

  props: {
    player: Object
  },

  methods:{
    removePlayer() {
      this.$emit('emitRemovePlayer', this.player)
    }
  }
}