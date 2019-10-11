<template>
	<v-content>
		<v-container
				class="fill-height"
				fluid
				style="height: 1900px"
		>
			<v-row
					align="center"
					justify="center"
			>
				<v-col class="shrink">
					<v-tooltip right>
						<template v-slot:activator="{ on }">
							<v-btn
									:href="source"
									icon
									large
									target="_blank"
									v-on="on"
							>
								<v-icon large>mdi-code-tags</v-icon>
							</v-btn>
						</template>
						<span>Source</span>
					</v-tooltip>
					<v-tooltip right>
						<template v-slot:activator="{ on }">
							<v-btn
									href="https://codepen.io/johnjleider/pen/bXNzZL"
									icon
									large
									target="_blank"
									v-on="on"
							>
								<v-icon large>mdi-codepen</v-icon>
							</v-btn>
						</template>
						<span>Codepen</span>
					</v-tooltip>
				</v-col>
			</v-row>
		</v-container>
	</v-content>
</template>

<script>
	export default {
		name: "Home"
	}
</script>

<style scoped>

</style>
