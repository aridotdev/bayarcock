export default {
  template: /*html*/`
    <section class="p-4 bg-blue-50 rounded">
      <div class="space-y-6">
        <h3 class="font-bold text-xl">Rangkuman</h3>
        <div>
          <h4 class="font-bold">Pemasukan</h4>
          <ul class="border rounded-md p-4">
            <li class="flex justify-between">
              <p>Pemain :</p>
              <p>{{summary.players}} Orang</p>
            </li>
            <li class="flex justify-between">
              <p>Iuran Pemain :</p>
              <p>{{data.amountCock}}</p>
            </li>
            <li class="flex justify-between">
              <p>Donasi :</p>
              <p>{{data.donasi}}</p>
            </li>
            <hr class="my-2">
            <li class="flex justify-between font-semibold">
              <p>TOTAL :</p>
              <p>{{data.totalIncome}} </p>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold">Pengeluaran</h4>
          <ul class="border rounded-md p-4">
            <li class="flex justify-between">
              <p>Beli Cock :</p>
              <p>{{data.buyCock}}</p>
            </li>
            <li class="flex justify-between">
              <p>Member Lapangan :</p>
              <p>{{data.payCourt}}</p>
            </li>
            <hr class="my-2">
            <li class="flex justify-between font-semibold">
              <p>TOTAL :</p>
              <p>{{data.totalExpense}}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,

  props: {
    summary: Object
  },

  computed: {
    data() {
      return {
        'amountCock': this.formattedNumber(this.summary.amountCock),
        'donasi': this.formattedNumber(this.summary.donasi),
        'totalIncome': this.formattedNumber(this.summary.totalIncome),
        'buyCock': this.formattedNumber(this.summary.buyCock),
        'payCourt': this.formattedNumber(this.summary.payCourt),
        'totalExpense': this.formattedNumber(this.summary.totalExpense),
      }
    }
  },

  methods: {
    formattedNumber(number) {
      return new Intl.NumberFormat('id-ID', 
        { 
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(number)
    }
  }
}