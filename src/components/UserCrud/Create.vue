<template>
	<button class=" px-2 py-1 border rounded my-4 " @click="isModalOpen = true">
		Add User
	</button>
	<teleport to="body">
		<modal v-if="isModalOpen" @close="isModalOpen = false">
			<template #title>
				Add New User
			</template>
			<template #body>
				<form @submit.prevent="submit">
					<div class=" p-2">
						<label>Name</label>
						<input
							class=" w-full p-2 rounded border"
							placeholder="User Name"
							v-model="state.form.name"
						/>
					</div>
					<div class=" p-2">
						<label for="">Email</label>
						<input
							class=" w-full p-2 rounded border"
							placeholder="User Email"
							type="email"
							v-model="state.form.email"
						/>
					</div>
					<div class=" p-2">
						<label>Avatar</label>
						<input
							class=" w-full p-2 rounded border "
							placeholder="Avatar Url"
							type="text"
							v-model="state.form.avatar"
						/>
					</div>
					<div class=" p-2">
						<input
							class=" w-full p-2 rounded border hover:bg-gray-200"
							type="submit"
						/>
					</div>
				</form>
			</template>
		</modal>
	</teleport>
</template>

<script>
import { reactive, ref } from "vue";
import Modal from "../Modal";
import axios from "../../plugins/axios";
export default {
	components: { Modal },
	setup(_, { emit }) {
		const isModalOpen = ref(false);

		const state = reactive({
			form: {
				name: "",
				email: "",
				avatar: "",
			},
		});

		async function submit() {
            const { data } = await axios.post("/users", state.form);
            emit('new-user-added', data)
			state.form.name = "";
			state.form.email = "";
			state.form.avatar = "";
			isModalOpen.value = false;
		}

		return { isModalOpen, submit, state };
	},
};
</script>

<style></style>
