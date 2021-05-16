const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите название заметки',
      inputValue: '',
      notes: [],
    }
  },
  methods: {
    addNewNotes() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue);
        this.inputValue = '';
      }
    },
    removeNewNotes(idx) {
      this.notes.splice(idx, 1);
    }
  },
  computed: {
  },
  watch: {
    inputValue(value) {
      if (value.length > 30) {
        this.inputValue = '';
      }
    }
  },
}

Vue.createApp(App).mount('#app');