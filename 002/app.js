const App = {
	data() {
		return {
			title: 'Список заметок',
			placeholderString: 'Введите название заметки, но не длиннее 40 символов.',
			inputValue: '',
			notes: [],
		}
	},
	methods: {
		addNewNote() {
			if (this.inputValue !== '') {
				this.notes.push(this.inputValue)
				this.inputValue = ''
			}
		},
		toUpperCase(item) {
			return item.toUpperCase()
		},
		removeNote(idx) {
			this.notes.splice(idx, 1)
		}
	},
	watch: {
		inputValue(value) {
			if (value.length > 40) {
				this.inputValue = ''
			}
			console.log(value)
		}
	}
}
Vue.createApp(App).mount('#app');