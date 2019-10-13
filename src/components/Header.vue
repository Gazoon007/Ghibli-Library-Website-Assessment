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
		<v-toolbar-title style="padding: 2px" v-if="!isMobile">
			<v-tabs background-color="transparent" dark show-arrows slider-size="4">
				<v-tab to="/">Films</v-tab>
				<v-tab to="/people">People</v-tab>
				<v-tab to="/locations">Locations</v-tab>
				<v-tab to="/species">Species</v-tab>
				<v-tab to="/vehicles">Vehicles</v-tab>
			</v-tabs>
		</v-toolbar-title>
		<v-menu v-else-if="isMobile">
			<template v-slot:activator="{ on }">
				<v-btn
						dark
						icon
						v-on="on"
				>
					<v-icon>mdi-dots-vertical</v-icon>
				</v-btn>
			</template>

			<v-list color="blue lighten-2" dark>
				<v-list-item to="/">Films</v-list-item>
				<v-list-item to="/people">People</v-list-item>
				<v-list-item to="/locations">Locations</v-list-item>
				<v-list-item to="/species">Species</v-list-item>
				<v-list-item to="/vehicles">Vehicles</v-list-item>
			</v-list>
		</v-menu>
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
		}, computed: {
			isMobile() {
				return screen.width <= 760;
			}
		}
	}
</script>

<style scoped>

</style>
