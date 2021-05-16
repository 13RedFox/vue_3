const h = Vue.h

const app = Vue.createApp({
	data() {
		return {
			title: 'Это из свойства template',
		}
	},
	methods: {
		changeTitle() {
			console.log(this)
			this.title = 'Изменили'
		}
	},
	// template: `
	// 	<div class="card center">
	// 		<h1>{{ title }}</h1>
	// 		<button class="btn" @click="title = 'Изменили!'">Изменить</button>
	// 	</div>
	// `
	render() {
		return h('div', {
			className: 'card center'
		}, [
			h('h1', {}, this.title),
			h('button', {
				className: 'btn',
				onClick: this.changeTitle
			}, 'Изменить'),
		])
	},
})

app.mount('#app')

Vue.createApp({
	data() {
		return {
			title: 'New Title 2'
		}
	}
}).mount('#app2')

let title = 'Vue 3'
let message = `Заголовок это: ${title}`

// console.log(message)
//
// title = 'Angular 10'
// console.log(message)

const data = {
	title: 'Vue 3',
	message: `Заголовок это: Vue 3`
}

console.log(data)

const proxy = new Proxy(data, {
	get(target, p) {
		console.log(target)
		console.log(p)
	},
	set(target, key, value) {
		if (key === 'title') {
			target.message = 'Заголовок это: ' + value
		}
		target[key] = value
	}
})

proxy.title = 'Angular 10'

console.log(proxy)