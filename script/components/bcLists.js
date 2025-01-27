import bcListsName from "./bcListsName.js"
import bcListsQtyBtn from "./bcListsQtyBtn.js"

export default {
  components: {bcListsName, bcListsQtyBtn},
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
        <bcListsName 
          :player
          @emitToggleMenu = "player.menuIsHidden = !player.menuIsHidden"
        />

        <!-- right div -->
        <bcListsQtyBtn 
          :player
        />
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
                @click="edit()"
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
      this.player.menuIsHidden = true
    },

    edit() {
      this.player.isLunas = false
      this.player.menuIsHidden = true
    }
  }
}