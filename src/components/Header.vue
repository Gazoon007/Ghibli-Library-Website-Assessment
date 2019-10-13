<template>
	<v-app-bar
			app
			color="rgba(0, 173, 239, 1)"
			fade-img-on-scroll
			prominent
			ref="myAppBar"
			scroll-threshold="200"
			shrink-on-scroll
			src="../assets/header.jpg"
	>
		<v-toolbar-title style="padding: 0">
			<v-img
					:max-width="height * 4 + 'px'"
					contain
					src="../assets/Studio_Ghibli_portal_logo.png"
			></v-img>
		</v-toolbar-title>
		<v-spacer></v-spacer>
			<v-toolbar-title style="padding: 2px">
				<v-tabs slider-size="4" show-arrows background-color="transparent" dark>
					<v-tab>Films</v-tab>
					<v-tab>People</v-tab>
					<v-tab>Locations</v-tab>
					<v-tab>Species</v-tab>
					<v-tab>Vehicles</v-tab>
				</v-tabs>
			</v-toolbar-title>
		<template v-slot:img="{ props }">
			<v-img
					gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.5)"
					v-bind="props"
			></v-img>
		</template>
	</v-app-bar>
</template>

<script>
	export default {
		data() {
			return {
				height: 128
			}
		},
		mounted() {
			this.$watch(
				() => {
					return this.$refs.myAppBar.styles.height
				},
				(val) => {
					this.height = parseInt(val.substring(0, val.length - 2));
				}
			)
		}
	}
</script>

<style scoped>

</style>
