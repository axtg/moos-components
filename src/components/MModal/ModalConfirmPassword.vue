<script setup>
import { ref, reactive, nextTick } from 'vue';
import { MButton as Button } from '../index.js';
import { MModalDialog as ModalDialog } from '../index.js';
import { MFormInput as FormInput } from '../index.js';
import { MFormInputError as FormInputError } from '../index.js';
import { MButtonSecondary as ButtonSecondary } from '../index.js';
const emit = defineEmits(['confirmed']);
defineProps({
    title: {
        type: String,
        default: 'Confirm Password',
    },
    content: {
        type: String,
        default: 'For your security, please confirm your password to continue.',
    },
    button: {
        type: String,
        default: 'Confirm',
    },
});
const confirmingPassword = ref(false);
const form = reactive({
    password: '',
    error: '',
    processing: false,
});
const passwordInput = ref(null);
const startConfirmingPassword = () => {
    axios.get(route('password.confirmation')).then(response => {
        if (response.data.confirmed) {
            emit('confirmed');
        } else {
            confirmingPassword.value = true;
            setTimeout(() => passwordInput.value.focus(), 250);
        }
    });
};
const confirmPassword = () => {
    form.processing = true;
    axios.post(route('password.confirm'), {
        password: form.password,
    }).then(() => {
        form.processing = false;
        closeModal();
        nextTick().then(() => emit('confirmed'));
    }).catch(error => {
        form.processing = false;
        form.error = error.response.data.errors.password[0];
        passwordInput.value.focus();
    });
};
const closeModal = () => {
    confirmingPassword.value = false;
    form.password = '';
    form.error = '';
};
</script>

<template>
    <span>
        <span @click="startConfirmingPassword">
            <slot />
        </span>

        <ModalDialog :show="confirmingPassword" @close="closeModal">
            <template #title>
                {{ title }}
            </template>

            <template #content>
                {{ content }}

                <div class="mt-4">
                    <Input
                        ref="passwordInput"
                        v-model="form.password"
                        type="password"
                        class="mt-1 block w-3/4"
                        placeholder="Password"
                        @keyup.enter="confirmPassword"
                    />

                    <InputError :message="form.error" class="mt-2" />
                </div>
            </template>

            <template #footer>
                <ButtonSecondary @click="closeModal">
                    Cancel
                </ButtonSecondary>

                <Button
                    class="ml-3"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    @click="confirmPassword"
                >
                    {{ button }}
                </Button>
            </template>
        </ModalDialog>
    </span>
</template>