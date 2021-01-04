<template>
	<app-header></app-header>
	<div class="divide-y-4 divide-black divide-opacity-25 ">
		<div class="w-full flex mt-10">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
	components: { AppHeader },

	data() {
		return {};
	},
};
</script>
