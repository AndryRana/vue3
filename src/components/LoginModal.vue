<template>
	<section
		@click="close"
		class="z-20 h-screen w-screen bg-gray-400 fixed top-0 opacity-50"
	></section>
	<div class="absolute inset-0">
		<div class="flex h-full">
			<div class="z-30 m-auto bg-white p-2 rounded shadow w-1/4">
				<div class="p-2 border">
					<h1 class=" text-2xl text-center">Login</h1>
					<p class=" text-center my-3">Or</p>
					<google-login @close-login-google="close" ></google-login>
					
					<form class="p-2 my-2" @submit.prevent="submit">
						<div class="my-4">
							<label for="">Email ou Nom d'utilisateur</label>
							<input
								v-model="email"
								class="rounded shadow p-2 w-full"
								placeholder="votre email ou nom d'utilisateur"
								ref="emailRef"
							/>
						</div>
						<div class="my-4">
							<label for="">Mot de passe</label>
							<input
								v-model="password"
								class="rounded shadow p-2 w-full"
								type="password"
								placeholder="Saisir votre mot de passe"
							/>
						</div>
						<div class="my-4">
							<button
								type="submit"
								class=" w-full rounded shadow bg-gradient-to-r from-red-800 to-pink-800 text-white p-2"
							>
								<span v-if="!isLoading">Login</span>
								<span v-else>⏳</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import firebase from "../utilities/firebase";
import GoogleLogin from "./Login/GoogleLogin.vue";

export default {
	components: { GoogleLogin },
	data() {
		return {
			email: "",
			password: "",
			isLoading: false,
		};
	},

	mounted() {
		this.$refs.emailRef.focus();
	},

	methods: {
		submit() {
			this.isLoading = true;
			firebase
				.auth()
				.signInWithEmailAndPassword(this.email, this.password)
				.then(() => {
					this.email = "";
					this.password = "";
					this.isLoading = false;
					this.close();
				})
				.catch((err) => {
					console.log(err);
					this.isLoading = false;
				});
		},

		close() {
			this.$emit("close-login");
		},

		
	},
};
</script>

<style></style>
