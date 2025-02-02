export default {
  template: /*html*/`
		<div id="default-modal" tabindex="-1" aria-hidden="true" class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-slate-100 bg-opacity-50">
			<div class="bg-white rounded-md py-4 px-8 border-2 border-blue-500 space-y-6 text-xs">
				<div class="flex flex-col justify-center items-center">
					<img class="m-4" src="./image/icon-warning.svg" alt="icon warning ">
					<p class="font-bold text-xl">SIGN OUT</p>
					<p class="text-slate-600" >Yakin mau keluar?</p>
				</div>
				<div class="flex gap-4 justify-center">
					<button
						@click="cancel"
						type="button"
						class="text-xs bg-white py-2.5 rounded-md hover:bg-blue-100 border border-blue-500 focus:ring-4 focus:ring-blue-300 w-16"
					>
						Batal
					</button>
					<button
						@click="exit"
						type="button"
						class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-md text-xs py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-16"
					>
						Keluar
					</button>
				</div>
			</div>
		</div>
  `,

	methods: {
		exit() {
			this.$emit('emitExit')
		},

		cancel() {
			this.$emit('emitCancel')
		}
	}
}