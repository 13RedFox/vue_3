<template>
	<hr>
	<h4>{{title }}</h4>
	<ul>
		<li
				v-for="item in news"
				:key="item"
		>
			{{ item.title }}<span v-if="item.wasRead">!!!</span>
		</li>
	</ul>
</template>

<script>
	export default {
		inject: ['title', 'news']
	}
</script>

<style scoped>

</style>
