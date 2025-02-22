export default {
  template: /*html*/ `
    <section class="p-4 bg-blue-50 rounded" id="summaryReport">
      <div class="flex flex-col gap-4">
        <div class="flex justify-between">
          <h3 class="font-bold text-xl">Rangkuman</h3>
          <button 
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex gap-2 items-center"
            @click.prevent="download()"
            >
            <img src="./image/icon-download.svg"/>
          </button>
        </div>
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

        <div class="mb-4">
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
    summary: Object,
  },

  computed: {
    data() {
      return {
        amountCock: this.formattedNumber(this.summary.amountCock),
        donasi: this.formattedNumber(this.summary.donasi),
        totalIncome: this.formattedNumber(this.summary.totalIncome),
        buyCock: this.formattedNumber(this.summary.buyCock),
        payCourt: this.formattedNumber(this.summary.payCourt),
        totalExpense: this.formattedNumber(this.summary.totalExpense),
      };
    },
  },

  methods: {
    formattedNumber(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(number);
    },

    download() {
      let report = document.getElementById("summaryReport");

      htmlToImage.toPng(report).then(function (dataUrl) {
        download(dataUrl, "report.png");
      });
    },
  },
};
