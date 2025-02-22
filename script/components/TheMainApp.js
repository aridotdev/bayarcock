import bcToast from "./bcToast.js";
import bcStatistic from "./bcStatistic.js";
import bcTopMenu from "./bcTopMenu.js";
import bcLists from "./bcLists.js";
import bcRecapBtn from "./bcRecapBtn.js";
import bcRecapInputData from "./bcRecapInputData.js";
import bcSummary from "./bcSummary.js";
import modal from "./modal.js";

export default {
  components: {
    bcToast,
    bcStatistic,
    bcTopMenu,
    bcLists,
    bcRecapBtn,
    bcRecapInputData,
    bcSummary,
    modal,
  },
  template: /*html*/ `
    
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
      </section>

      <!-- Rekap Button -->
      <bcRecapBtn
        v-if="isAllLunas"
        @click="showRecap"
        :label="isShowRangkuman ? 'Edit' : 'Rekap'"
      />

      <!-- Additional Input Data -->
      <bcRecapInputData 
        v-if="isShowRecap"
        v-model:cockPricePerPiece="amounts.cockPricePerPiece"
        v-model:buyCock="amounts.buyCock"
        v-model:payCourt="amounts.payCourt"
        @emitsetInputData="setInputData"
      />

      <!--  Rangkuman Dana -->
        <bcSummary 
          v-if="isShowRangkuman"
          :summary
        />
        
      <button
        type="button"
        v-if="isShowRangkuman"
        @click="isShowModal = !isShowModal"
        class="w-full mt-4 mb-8 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 flex gap-2 items-center justify-center"
      >
        <img src="./image/tick-square.svg" alt="icon-tick" />
        {{ players.length ? 'Selesai' : 'Kembali' }}
      </button>

      <Teleport to="#modal">
        <modal 
          v-if="isShowModal"
          @emitExit="endTheGame"
          @emitCancel="cancel"
          ></modal>
      </Teleport>
    </div>

    
  `,

  props: {
    isStart: Boolean,
  },

  data() {
    return {
      isEnd: false,
      isShowToast: true,
      isShowRecap: false,
      isShowRangkuman: false,
      isShowModal: false,
      amounts: {
        cockPricePerPiece: 0,
        buyCock: 0,
        payCourt: 0,
      },
      players: [],
    };
  },

  watch: {
    players: {
      handler() {
        localStorage.setItem("players", JSON.stringify(this.players));
      },
      deep: true,
    },
    amounts: {
      handler() {
        localStorage.setItem("amounts", JSON.stringify(this.amounts));
      },
      deep: true,
    },
  },

  mounted() {
    const storagePlayer = localStorage.getItem("players");
    const storageAmount = localStorage.getItem("amounts");

    if (storagePlayer) {
      this.players = JSON.parse(storagePlayer);
    }

    if (storageAmount) {
      this.amounts = JSON.parse(storageAmount);
    }

    if (this.players) {
      this.$emit("emitPlayers", this.players.length);
    }
  },

  methods: {
    backToHome() {
      this.$emit("emitbackToHome");
      this.isShowToast = !this.isShowToast;
    },

    endTheGame() {
      this.players = [];
      this.amounts.cockPricePerPiece = 0;
      this.amounts.buyCock = 0;
      this.amounts.payCourt = 0;
      this.isShowRecap = false;
      localStorage.clear();
      this.$emit("endTheGame");
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
      this.isShowToast = false;
    },

    showRecap() {
      this.isShowRecap = !this.isShowRecap;
      this.isShowRangkuman = false;
    },

    setInputData() {
      this.isShowRecap = false;
      this.isShowRangkuman = !this.isShowRangkuman;
    },

    cancel() {
      this.isShowModal = false;
    },
  },

  computed: {
    isAllLunas() {
      if (this.players == null || this.players == 0) {
        return false;
      }
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

    totalDonasi() {
      let extraDonasi = this.players.map((donasi) => donasi.extraCash);
      if (extraDonasi.length) {
        return Number(extraDonasi.reduce((acc, curr) => acc + curr));
      } else {
        return 0;
      }
    },

    totalIncome() {
      return Number(
        this.totalCock * this.amounts.cockPricePerPiece + this.totalDonasi
      );
    },

    totalExpense() {
      return Number(this.amounts.buyCock) + Number(this.amounts.payCourt);
    },

    summary() {
      return {
        players: Number(this.totalPlayer),
        amountCock:
          Number(this.totalCock) * Number(this.amounts.cockPricePerPiece),
        donasi: Number(this.totalDonasi),
        totalIncome: Number(this.totalIncome),
        buyCock: Number(this.amounts.buyCock),
        payCourt: Number(this.amounts.payCourt),
        totalExpense: Number(this.totalExpense),
      };
    },
  },
};
