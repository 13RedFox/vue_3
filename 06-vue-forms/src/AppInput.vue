<template>
	<div class="form-control" :class="{invalid: error}">
		<label :for="id">{{ label }}</label>
		<input
				type="text"
				:id="name"
				:placeholder="placeholder"
				:value="modelValue"
				@input="change"
		>
		<small v-if="error">{{ error }}</small>
	</div>
</template>

<script>
	export default {
		emits: ['update:value'],
		props: {
			value: String,
			placeholder: String,
			label: String,
			error: String,
		},
		data() {
			return {
				id: 'input-' + Math.random()
			}
		},
		methods: {
			change(event) {
this.$emit('update:value', event.target.value)
			}
		},
	}
</script>

<style scoped>

</style>
