export default {
  template: /*html*/`
  <!-- Halaman utama -->
    <div
      class="h-screen flex flex-col items-center justify-center text-center space-y-4"
    >
      <a
        target="_blank"
        href="https://www.vecteezy.com/free-vector/badminton"
        class="text-xs flex justify-center"
      >
        <figure class="grid place-items-center">
          <img
            src="./image/header.png"
            alt="Badminton Vectors by Vecteezy"
            title="Badminton Vectors by Vecteezy"
            class="w-4/5"
          />
          <figcaption class="text-[8px]">Badminton Vectors by Vecteezy</figcaption>
        </figure>
      </a>
      
      <h1>Mini App untuk hitung patungan Kok Badminton</h1>

      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        @click="startTheGame"
      >
        Mulai Latihan
      </button>
    </div>
  `,

  methods: {
    startTheGame() {
      this.$emit('emitStartTheGame')
    }
  },
}