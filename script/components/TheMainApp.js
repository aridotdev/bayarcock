import bcToast from './bcToast.js';
import bcStatistic from './bcStatistic.js';
import bcTopMenu from './bcTopMenu.js';
import bcLists from './bcLists.js';
import bcBtnRecap from './bcBtnRecap.js';
import bcInputData from './bcInputData.js';

export default {
  components: { bcToast, bcStatistic, bcTopMenu, bcLists, bcBtnRecap, bcInputData },
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
      </section>

      <!-- Rekap Button -->
      <bcBtnRecap
        v-if="isAllLunas"
        @click="showRecap"
      />

      <!-- Additional Input Data -->
      <bcInputData 
        v-if="isShowRecap"
        v-model:cockPricePerPiece="cockPricePerPiece"
        v-model:buyCock="buyCock"
        v-model:payCourt="payCourt"
        @emitsetInputData="setInputData"
      />

      <!--  Rangkuman Dana -->
      <section class="p-4 bg-blue-50 rounded">
        <div class="space-y-6">
          <h3 class="font-bold text-xl">Rangkuman</h3>
          <div>
            <h4 class="font-bold">Pemasukan</h4>
            <ul class="border rounded-md p-4">
              <li class="flex justify-between">
                <p>Pemain :</p>
                <p>10 Orang</p>
              </li>
              <li class="flex justify-between">
                <p>Iuran Pemain :</p>
                <p>Rp. 200.000</p>
              </li>
              <li class="flex justify-between">
                <p>Donasi :</p>
                <p>Rp. 50.000</p>
              </li>
              <hr class="my-2">
              <li class="flex justify-between font-semibold">
                <p>TOTAL :</p>
                <p>Rp. 250.000</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold">Pengeluaran</h4>
            <ul class="border rounded-md p-4">
              <li class="flex justify-between">
                <p>Beli Cock :</p>
                <p>Rp. 120.000</p>
              </li>
              <li class="flex justify-between">
                <p>Member Lapangan :</p>
                <p>Rp. 240.000</p>
              </li>
              <hr class="my-2">
              <li class="flex justify-between font-semibold">
                <p>TOTAL :</p>
                <p>Rp. 360.000</p>
              </li>
            </ul>
          </div>
        </div>
      </section>  

      <button
        type="button"
        v-if="isAllLunas"
        @click="endTheGame"
        class="w-full mt-4 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 flex gap-2 items-center justify-center"
      >
        <img src="./image/tick-square.svg" alt="icon-tick" />
        {{ players.length ? 'Selesai' : 'Kembali' }}
      </button>
    </div>
  `,

  props:{
    isStart: Boolean
  },

  data() {
    return {
      isEnd: false,
      isShowToast: true,
      isShowRecap: false,
      cockPricePerPiece: 5000,
      buyCock : 0,
      payCourt : 0,
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
    },

    showRecap() {
      this.isShowRecap = !this.isShowRecap
    },

    setInputData() {
      this.isShowRecap = false
      console.log('tampilkan div ringkasan')
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