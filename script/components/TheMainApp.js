import bcToast from './bcToast.js';
import bcStatistic from './bcStatistic.js';
import bcTopMenu from './bcTopMenu.js';
import bcLists from './bcLists.js';

export default {
  components: { bcToast, bcStatistic, bcTopMenu, bcLists },
  template: /*html*/`
      <!-- Mini App Hitungan -->
    <div class="space-y-4 flex flex-col m-4 w-full">
      
      <!-- toast informasi -->
      <bcToast 
        v-if="isShowToast"
        @emitCloseToast="closeToast()"
      />

      <!-- statistik -->
      <bcStatistic 
        :totalPlayer
        :totalCock
      />

      <!-- Top Menu -->
      <bcTopMenu 
        @emitBackToHome="backToHome()"
        @emitaddPlayer="addPlayer"
      />
      
      <!-- daftar pemain -->
      <section>
        <ul>
          <bcLists 
            v-for="player in players"
            :key="player.id"
            :player
            @emitRemovePlayer="removePlayer"
          />
        </ul>

        <button
          type="button"
          v-if="isAllLunas"
          @click="endTheGame"
          class="w-full mt-4 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 flex gap-2 items-center justify-center"
        >
          <img src="./image/tick-square.svg" alt="icon-tick" />
          {{ players.length ? 'Selesai' : 'Kembali' }}
        </button>
      </section>
    </div>
  `,

  props:{
    isStart: Boolean
  },

  data() {
    return {
      isEnd: false,
      isShowToast: true,
      players: [
        {
          id: 1,
          name: "Puad",
          qtyCock: 0,
          isLunas: false,
          menuIsHidden: true,
          extraCash: 0,
        },
        {
          id: 2,
          name: "Asten",
          qtyCock: 0,
          isLunas: false,
          menuIsHidden: true,
          extraCash: 0,
        },
      ],
    }
  },

  watch: {
    players: {
      handler() {
        localStorage.setItem("players", JSON.stringify(this.players));
      },
      deep: true,
    },
  },

  mounted() {
    const storage = localStorage.getItem("players");
    if (storage) {
      this.players = JSON.parse(storage);
    }
  },

  methods: {
    backToHome() {
      this.$emit('emitbackToHome')
      this.isShowToast = !this.isShowToast;
    },

    endTheGame() {
      this.isStart = !this.isStart;
      this.players = [];
    },

    addPlayer(newPlayerName) {
      this.players.push({
        id: this.players.length + 1,
        name: newPlayerName,
        qtyCock: 0,
        isLunas: false,
        menuIsHidden: true,
        extraCash: 0,
      });
      this.isShowAddPlayer = false;
    },

    removePlayer(player) {
      this.players = this.players.filter((p) => p !== player);
    },

    closeToast() {
      this.isShowToast = false
    }
  },

  computed: {
    isAllLunas() {
      return this.players.every((player) => player.isLunas == true);
    },

    totalPlayer() {
      return this.players.length;
    },

    totalCock() {
      let cocks = this.players.map((cock) => cock.qtyCock);
      if (cocks.length) {
        return cocks.reduce((acc, curr) => acc + curr);
      } else {
        return 0;
      }
    },
  },
}