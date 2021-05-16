<template>
	<div class="card">
		<h3>{{ title }}</h3>
		<app-button
				@action="open"
		>{{ isNewsOpen ? 'Закрыть' : 'Открыть' }}</app-button>
		<app-button
				color="danger"
				v-if="wasRead"
				@action="$emit('unmark', id)"
		>Отметить непрочитаной</app-button>
		<div v-if="isNewsOpen">
			<hr>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque commodi corporis
				dolorem
				doloribus ex
				fugiat fugit hic illo inventore ipsum itaque, laudantium modi nisi optio ratione tempora temporibus vitae?</p>
			<app-button
					v-if="!wasRead"
					color="primary"
					@action="mark"
			>Прочесть новость</app-button>

			<app-news-list></app-news-list>
		</div>

	</div>
</template>

<script>
	import AppButton from "./AppButton";
	import AppNewsList from "./AppNewsList";
	export default {
		props: {
			title: {
				type: String,
				required: true
			},
			id: {
				type: Number,
				required: true
			},
			isOpened: {
				type: Boolean,
				required: false,
				default: false,
				validator(value) {
					return value === true || value === false
				}
			},
			wasRead: Boolean,
		},
		emits: {
			'open-news': null,
			'read-news'(id) {
				if (id) {
					return true
				}
				console.war('Нет параметра id для emit read-news')
				return  false
			},
			unmark: null
		},
		data() {
			return {
				isNewsOpen: this.isOpened
			}
		},
		methods: {
			open() {
				this.isNewsOpen = !this.isNewsOpen
				if (this.isNewsOpen) {
					this.$emit('open-news')
				}
			},
			mark() {
				this.isNewsOpen = false
				this.$emit('read-news', this.id)
			},
			unmark() {
				this.$emit('unmark', this.id)
			},
		},
		components: {
			AppNewsList,
			AppButton,
		}
	}
</script>
