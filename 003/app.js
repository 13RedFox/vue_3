Vue.createApp({
  data() {
    return {
      title: 'Я есть Грут',
      myHtml: '<h2>Vue 3 App</h2>',
      person: {
        firstName: 'Name',
        lastName: 'Last',
        age: 0,
      },
      items: [1, 2, 3, 4, 5, 6, 7,]
    }
  },
  methods: {},
  computed: {
    evenItems() {
      return this.items.filter(i => i % 2 === 0)
    }
  }
}).mount('#app');