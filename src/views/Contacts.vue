<template>
    <div
        class="contacts-form"
        :style="{ backgroundImage: `url(${backgroundUrl})` }"
    >
        <v-container>
            <v-layout column>
                <v-flex class="text-xs-center display-1 font-weight-black my-5"
                    >CONTACTS</v-flex
                >
                <v-row justify="center" no-gutters>
                    <v-col cols="12" md="6" class="offers">
                        <v-flex>
                            <p class="subheading mt-3 headline">
                                Please feel free to reach out to me if you have
                                any questions, comments of offers.
                            </p>
                            <v-row no-gutters>
                                <v-col
                                    v-for="(item, i) in media"
                                    :key="i"
                                    class="soc-btn"
                                >
                                    <v-btn icon color="white" :href="item.url" target="_blank">
                                        <v-icon>{{ item.icon }}</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-flex>
                    </v-col>

                    <v-col cols="12" md="6" class="email-form">
                        <v-form @submit.prevent="sendEmail">
                            <v-text-field
                                v-model="name"
                                name="user_name"
                                :error-messages="nameErrors"
                                :counter="25"
                                label="Name"
                                solo-inverted
                                required
                                class="white-text"
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
                            ></v-text-field>
                            <v-text-field
                                v-model="email"
                                name="user_email"
                                :error-messages="emailErrors"
                                label="E-mail"
                                solo-inverted
                                required
                                @input="$v.email.$touch()"
                                @blur="$v.email.$touch()"
                                class="white-text"
                            ></v-text-field>
                            <v-textarea
                                v-model="message"
                                name="message"
                                :error-messages="messageErrors"
                                label="Message"
                                solo-inverted
                                required
                                @change="$v.message.$touch()"
                                @blur="$v.message.$touch()"
                                class="white-text"
                            ></v-textarea>
                            <v-btn class="mr-4" text color="white" type="submit"
                                >submit</v-btn
                            >
                            <v-btn
                                class="mr-4"
                                text
                                color="white"
                                @click="clear"
                                >clear</v-btn
                            >
                        </v-form>
                    </v-col>
                </v-row>
                <v-dialog v-model="dialog" max-width="300">
                    <v-card>
                        <v-card-title class="headline">
                            Message Status
                        </v-card-title>
                        <v-card-text>
                            <p class="subheading mt-3 headline">
                                {{ dialogMessage }}
                            </p>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="dialog = false"
                            >
                                OK
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import firedata from '../firedata';
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';
import emailjs from 'emailjs-com';
import emailConfig from '../../config/emailjs.json';

export default {
    name: 'Contacts',
    mixins: [validationMixin],

    validations: {
        name: { required, maxLength: maxLength(25) },
        email: { required, email },
        message: { required }
    },
    data() {
        return {
            backgroundUrl: this.$store.state.images.downImage,
            media: [],
            name: '',
            email: '',
            message: '',
            dialog: false,
            dialogMessage: ''
        };
    },
    firebase: {
        media: firedata.ref('socialLinks')
    },
    computed: {
        messageErrors() {
            const errors = [];
            if (!this.$v.message.$dirty) return errors;
            !this.$v.message.required && errors.push('The message is required');
            return errors;
        },
        nameErrors() {
            const errors = [];
            if (!this.$v.name.$dirty) return errors;
            !this.$v.name.maxLength &&
                errors.push('Name must be at most 25 characters long');
            !this.$v.name.required && errors.push('Name is required.');
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.email && errors.push('Must be valid e-mail');
            !this.$v.email.required && errors.push('E-mail is required');
            return errors;
        }
    },

    methods: {
        sendEmail(e) {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                emailjs
                    .sendForm(
                        emailConfig['serviceId'],
                        emailConfig['template'],
                        e.target,
                        emailConfig['userId']
                    )
                    .then(
                        result => (this.dialogMessage = 'Your message has been sent'),
                        error => (this.dialogMessage = 'Ooops, try later...')
                    );
                this.dialog = true;
                this.clear();
            }
        },
        clear() {
            this.$v.$reset();
            this.name = '';
            this.email = '';
            this.message = '';
        }
    }
};
</script>

<style scoped>
.contacts-form {
    background: no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    color: whitesmoke !important;
    font-size: 20px;
}
.offers {
    margin-top: 10vh;
}
.headline {
    margin-top: 5vh;
    margin-bottom: 5vh;
    text-align: center;
}
.soc-btn {
    text-align: center;
    margin-top: 5vh;
}
.v-btn--icon.v-size--default .v-icon {
    font-size: 4em;
}
.email-form {
    margin-top: 13vh;
}
.white-text >>> .v-text-field__slot input,
.white-text >>> .v-text-field__slot textarea,
.white-text >>> .theme--light {
    color: whitesmoke;
}
</style>
