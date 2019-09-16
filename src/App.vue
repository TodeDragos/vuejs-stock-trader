<template>
	<div class="container my-container">
		<app-header></app-header>
		<br>
			<transition name="slide" mode="out-in">
				<router-view></router-view>
			</transition>

	</div>
</template>

<script>
import Header from './components/Header'


	export default {

		components: {
			'app-header': Header
		},
		created() {
			this.$store.dispatch('initStocks');
		},
	}
</script>

<style>
	body {
		margin: 30px;
	}
	.slide-enter-active {
		animation: slide-in 200ms ease-out forwards;
	}
	.slide-leave-active {
		animation: slide-out 200ms ease-out forwards;
	}
	@keyframes slide-in {
		from {
			transform: translateY(-30px);
			opacity: 0;
		}
		to {
			transfrom: translateY(0);
			opacity: 1;
		}
	}
	@keyframes slide-out {
		from {
			transform: translatey(0);
			opacity: 1
		}
		to {
			transform: translateY(-30px);
			opacity: 0;
		}
	}
</style>
