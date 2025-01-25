export default {
  template: /*html*/`
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
  `,

  props: {
    totalPlayer: Number,
    totalCock: Number
  }
}