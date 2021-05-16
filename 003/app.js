Vue.createApp({
	data: () => ({
		title: 'Я есть Грут',
		myHtml: `<h1>Vue 3 App </h1>`,
		person: {
			firstName: 'Alex',
			lastName: 'Alexio',
			age: 13,
		},
		items: [1, 2, 3, 4, 5, 6],
	}),
	methods: {
		addItem() {
			this.items.unshift(this.$refs.myInput.value);
			this.$refs.myInput.value = '';
		},
		remove(idx) {
			this.items.splice(idx, 1);
		},
		log(item) {
			console.log('Log item: ', item)
		},
	},
	computed: {
		evenItems() {
			return this.items.filter(i => i % 2 === 0)
		}
	},
}).mount('#app')