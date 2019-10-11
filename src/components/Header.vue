<template>
	<v-app-bar
			app
			color="#43a047"
			dark
			fade-img-on-scroll
			prominent
			scroll-threshold="500"
			shrink-on-scroll
			src="https://picsum.photos/1920/1080?random"
	>
		<v-spacer></v-spacer>
		<v-toolbar-title>Application</v-toolbar-title>
		<v-spacer></v-spacer>
		<template v-slot:img="{ props }">
			<v-img
					gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
					v-bind="props"
			></v-img>
		</template>
	</v-app-bar>
</template>

<script>
	export default {
		props: String,
		name: "Header"
	}
</script>

<style scoped>

</style>
