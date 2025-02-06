import bcListsName from "./bcListsName.js"
import bcListsQtyBtn from "./bcListsQtyBtn.js"
import bcListsModalMenu from "./bcListsModalMenu.js"

export default {
  components: {bcListsName, bcListsQtyBtn, bcListsModalMenu},
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
      <bcListsModalMenu 
        :player
        v-if = "!player.menuIsHidden"
        @emitEdit = "edit"
        @emitRemovePlayer = "removePlayer"
      />
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