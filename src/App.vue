<template>
	<app-header @open-login-modal="isLoginOpen = true"></app-header>
	<div class="divide-y-4 divide-black divide-opacity-25 ">
		<div class="w-full flex ">
			<router-view></router-view>
		</div>
	</div>
	<login-modal
		v-if="isLoginOpen"
		@close-login="isLoginOpen = false"
	></login-modal>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import firebase from "./utilities/firebase";

export default {
	components: { AppHeader, LoginModal },
	data() {
		return {
			isLoginOpen: false,
			isLoggedIn: false,
			authUser: "",
		};
	},
	mounted() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				// User is signed in.
				this.isLoggedIn = true;
				this.authUser = user;
			} else {
				// No user is signed in.
				this.isLoggedIn = false;
				this.authUser = {};
			}
		});
	},
};
</script>
