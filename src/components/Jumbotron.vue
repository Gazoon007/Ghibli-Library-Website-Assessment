<template>
	<v-parallax
			max-width="80%"
			height="600"
			src="../assets/jombotron_parallax_picture.jpg"
	>
		<v-row
				align="center"
				style="padding-left: 20px; text-after-overflow: center"
		>
			<v-col cols="12" sm="6">
				<transition appear mode="out-in" name="slide">
						<h1 class="display-2 font-weight-thin mb-4">Welcome to Ghibli Movie Library
							Website</h1>
				</transition>
				<transition appear mode="out-in" name="slide-2">
					<h4 class="font-weight-thin mb-4" key="sub">The most credible source of Ghibli Movies that you
						can trust!
						:)</h4>
				</transition>
			</v-col>
		</v-row>
	</v-parallax>
</template>

<script>
	export default {
		name: "Jumbotron"
	}
</script>

<style scoped>

	.slide-enter-active {
		animation: slide-in 1000ms ease-out forwards;
	}

	.slide-leave-active {
		animation: slide-out 1000ms ease-out forwards;
		animation-delay: 0.4s;
	}

	.slide-2-enter-active {
		opacity: 0;
		animation: slide-in 1000ms ease-out forwards;
		animation-delay: 0.4s;
	}

	.slide-2-leave-active {
		animation: slide-out 1000ms ease-out forwards;
	}

	@keyframes slide-in {
		from {
			transform: translateY(+30px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes slide-out {
		from {
			transform: translateY(0);
			opacity: 1;
		}
		to {
			transform: translateY(+30px);
			opacity: 0;
		}
	}
</style>
