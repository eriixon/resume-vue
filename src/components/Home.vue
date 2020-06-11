<template>
    <v-container
        fluid
        fill-height
        class="home-hero"
        :style="{ backgroundImage: `url(${backgroundUrl})` }"
    >
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">
                Sergey Radkov
            </div>
            <div
                class="display-2 font-weight-bold white--text text-xs-center name"
            >
                Interactive Resume
            </div>
            <v-btn icon color="white">
                <v-icon @click="$vuetify.goTo('.main-about')"
                    >mdi-feature-search-outline</v-icon
                >
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'home',
    data() {
        return { backgroundUrl: this.$store.state.images.topImage };
    },
    computed: {}
};
</script>

<style scoped>
.home-hero {
    background: no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 98vh;
}
.name {
    margin-bottom: 25vh;
    margin-top: 5vh;
}
</style>
