export default {
  template: /*html*/`
    <!-- Halaman utama -->
    <div
      v-if="!isStart"
      class="h-screen flex flex-col items-center justify-center text-center space-y-4"
    >
      <a
        target="_blank"
        href="https://www.vecteezy.com/free-vector/badminton"
        class="text-xs flex justify-center"
      >
        <img
          src="./image/header.png"
          alt="Badminton Vectors by Vecteezy"
          title="Badminton Vectors by Vecteezy"
          class="w-4/5"
        />
      </a>
      <h1>Mini App untuk hitung patungan Kok Badminton</h1>

      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        @click="startTheGame"
      >
        Mulai Latihan Badminton
      </button>
    </div>

    <!-- Mini App Hitungan -->
    <div v-else class="space-y-4 flex flex-col m-4 w-full">
      <!-- toast informasi -->
      <div
        id="toast-warning"
        class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
        v-if="isShowToast"
      >
        <div
          class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-700 dark:text-green-200"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span class="sr-only">Check icon</span>
        </div>
        <div class="ms-3 text-sm font-normal">
          Salam Olahraga dan Semangat !!!
        </div>
        <button
          type="button"
          class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-warning"
          aria-label="Close"
          @click="isShowToast = !isShowToast"
        >
          <span class="sr-only">Close</span>
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>

      <!-- statistik -->
      <section class="p-2 bg-blue-50 rounded">
        <p class="font-semibold">Statistik</p>
        <div class="flex justify-evenly items-center text-center mb-2">
          <div>
            <h3 class="text-4xl font-semibold">{{totalPlayer}}</h3>
            <p class="text-xs text-gray-500">Pemain</p>
          </div>
          <div
            class="inline-block w-[1px] self-stretch bg-gray-300 dark:bg-white/10"
          ></div>
          <div>
            <h3 class="text-4xl font-semibold">{{totalCock}}</h3>
            <p class="text-xs text-gray-500">Kok</p>
          </div>
        </div>
      </section>

      <!-- daftar pemain -->
      <section>
        <div class="flex justify-between" v-if="!isShowAddPlayer">
          <a
            type="button"
            class="flex items-center underline underline-offset-1 text-blue-500 hover:cursor-pointer"
            @click="backToHome"
          >
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
            Kembali
          </a>
          <button
            type="button"
            @click="openAddPlayerForm"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex gap-2 items-center"
          >
            <img src="./image/user-add.svg" alt="logo-user-add" />
            Tambah Pemain
          </button>
        </div>

        <form @submit.prevent="addPlayer" class="flex gap-2" v-else>
          <input
            type="text"
            v-model="newPlayerName"
            placeholder="Masukan nama pemain"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex gap-2 items-center"
          >
            Add
          </button>
        </form>
      </section>

      <section>
        <ul>
          <li
            class="p-4 mb-2 rounded-lg disabled:cursor-not-allowed relative"
            :class="{
              'bg-blue-50': player.isLunas == false,
              'bg-green-500': player.isLunas == true,
            }"
            v-for="player in players"
            :key="player.id"
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
                      @click="removePlayer(player)"
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

  data() {
    return {
      isStart: false,
      isEnd: false,
      isShowAddPlayer: false,
      isShowToast: true,
      newPlayerName: "",
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
    };
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
    startTheGame() {
      this.isStart = !this.isStart;
    },

    backToHome() {
      this.isStart = !this.isStart;
      this.isShowToast = !this.isShowToast;
    },

    endTheGame() {
      this.isStart = !this.isStart;
      this.players = [];
    },

    openAddPlayerForm() {
      this.isShowAddPlayer = !this.isShowAddPlayer;
    },

    addPlayer() {
      if (
        this.newPlayerName.trim() === "" ||
        this.newPlayerName.trim() === null
      ) {
        this.isShowAddPlayer = false;
        this.newPlayerName = "";
        return;
      }
      this.players.push({
        id: this.players.length + 1,
        name: this.newPlayerName,
        qtyCock: 0,
        isLunas: false,
        menuIsHidden: true,
        extraCash: 0,
      });
      this.newPlayerName = "";
      this.isShowAddPlayer = false;
    },

    removePlayer(player) {
      this.players = this.players.filter((p) => p !== player);
    },
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