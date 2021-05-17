<template>
	<h1 class="t-center">Vue 3</h1>

	<div class="card">
		<p class="t-center">Счетчик: {{ counter }}</p>
		<div class="wrapper">
			<button class="btn" @click="removeCount">-</button>
			<button class="btn danger" @click="resetCount">Reset</button>
			<button class="btn" @click="addCount">+</button>
		</div>
	</div>

	<div class="card">
		<p>Есть опубликованные книги:</p>
		<span>{{ publishedBooksMessage }}</span>
	</div>


</template>

<script>
	export default {
		data() {
			return {
				counter: 0,
				author: {
					name: 'John Doe',
					books: [
						'Vue 2 - Advanced Guide',
						'Vue 3 - Basic Guide',
						'Vue 4 - The Mystery'
					]
				},
			}
		},
		methods: {
			addCount() {
				this.counter++
			},
			removeCount() {
				if (this.counter > 0) {
					this.counter--
				}
			},
			resetCount() {
				this.counter = 0
			},
		},
		computed: {
			publishedBooksMessage() {
				return this.author.books.length > 0 ? 'Да' : 'Нет'
			}
		}

	}
</script>
