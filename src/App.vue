<template>
	<app-header></app-header>
	<div class="w-full flex ">
		<router-view></router-view>
	</div>
	<teleport to="body">
		<login-modal></login-modal>
	</teleport>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import firebase from "./utilities/firebase";

export default {
	components: { AppHeader, LoginModal },
	data() {
		return {};
	},
	mounted() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.$store.commit("setIsLoggedIn", true);
				this.$store.commit("setAuthUser", user);
				// User is signed in.
			} else {
				// No user is signed in.
				this.$store.commit("setIsLoggedIn", false);
				this.$store.commit("setAuthUser", {});
			}
		});
	},
};
</script>
