<template>
	<div class="container">
		<app-alert
				:alert="alert"
				@close="alert = null"
		></app-alert>

		<form class="card" @submit.prevent="createPerson">
			<h2>Работа с базой данных</h2>

			<div class="form-control">
				<label for="name">Введите имя</label>
				<input type="text" id="name" v-model.trim="name">
			</div>

			<button class="btn primary" :disabled="name.length === 0">Создать человека</button>
		</form>

		<app-loader v-if="loading"></app-loader>

		<app-people-list
				v-else
				:people="people"
				@load="loadPeople"
				@remove="removePerson"
		></app-people-list>

	</div>
</template>

<script>
	import AppPeopleList from "./AppPeopleList";
	import AppAlert from "./AppAlert";
	import AppLoader from "./AppLoader";
	import axios from 'axios'

	export default {
		data() {
			return {
				name: '',
				people: [],
				alert: null,
				loading: false,
			}
		},
		methods: {
			async createPerson() {
				const response = await fetch('https://vue-width-http-8c47e-default-rtdb.europe-west1.firebasedatabase.app/people.json', {
					method: 'POST',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify({
						firstName: this.name
					})
				})

				const firebaseData = await response.json()

				this.people.push({
					firstName: this.name,
					id: firebaseData.name
				})
				this.name = ''
			},
			async loadPeople() {
				try {
					this.loading = true
					const {data} = await axios.get('https://vue-width-http-8c47e-default-rtdb.europe-west1.firebasedatabase.app/people.json')
					if (!data) {
						throw new Error('Список людей пуст')
					}
					this.people = Object.keys(data).map(key => {
						return {
							id: key,
							firstName: data[key].firstName
						}
					})
					this.loading = false
				} catch (e) {
					this.alert = {
						type: 'danger',
						title: 'Ошибка!',
						text: e.message,
					}
					this.loading = false
					console.log(e.message)
				}
			},
			async removePerson(id) {
				try {
					const name = this.people.find(person => person.id === id).firstName
					await axios.delete(`https://vue-width-http-8c47e-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`)
					this.people = this.people.filter(person => person.id !== id)
					this.alert = {
						type: 'primary',
						title: 'Успешно',
						text: `Пользователь с именем "${name}" был удален`
					}
				} catch (e) {
					console.log(e.message)
				}

			},
		},
		mounted() {
			this.loadPeople()
		},
		components: {AppPeopleList, AppAlert, AppLoader},
	}
</script>

<style lang="scss">

</style>
