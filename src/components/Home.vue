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
            <v-btn fab class="mt-5 brown darken-4 some-button">
                <v-icon large>mdi-chevron-double-down</v-icon>
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
.some-button {
    color: white;
}
.name {
    margin-bottom: 25vh;
    margin-top: 5vh;
}
.some-button :hover {
    animation: chevron 5s infinite;
    animation-direction: inherit;
}

@keyframes chevron {
    0% {
        top: 5px;
    }
    25% {
        top: -5px;
    }
    50% {
        top: 5px;
    }
    75% {
        top: -5px;
    }
    100% {
        top: 5px;
    }
}
</style>
