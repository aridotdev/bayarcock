export default {
  template:/*html*/`
    <section>
      <div class="flex justify-between" v-if="!isShowAddPlayer">
        <a
          type="button"
          class="flex items-center underline underline-offset-1 text-blue-500 hover:cursor-pointer"
          @click.prevent="backToHome()"
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
          @click.prevent="openAddPlayerForm()"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex gap-2 items-center"
        >
          <img src="./image/user-add.svg" alt="logo-user-add" />
          Tambah Pemain
        </button>
      </div>

      <form @submit.prevent="addPlayer()" class="flex gap-2" v-else>
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
  `,

  data() {
    return {
      isShowAddPlayer: false,
      newPlayerName: ''
    }
  },

  methods: {
    backToHome() {
      this.$emit('emitBackToHome')
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
      } else {
        this.$emit('emitaddPlayer', this.newPlayerName)
        this.newPlayerName = ""
        this.isShowAddPlayer = false;
      }
    }
  }
}