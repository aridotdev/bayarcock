export default {
  template: /*html*/ `
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex gap-2 items-center justify-center"
    >
      <img src="./image/icon-receipt.svg" alt="icon-receipt" />
      {{label}}
    </button>
  `,

  props: {
    label: String,
  },
};
