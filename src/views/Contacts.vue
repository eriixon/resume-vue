<template>
    <div class="contacts-form" :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <h1>This is a contact page</h1>
    </div>
</template>

<script>
export default {
    name: 'Contacts',
    data() {
        return { backgroundUrl: this.$store.state.images.downImage };
    },
    computed: {}
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
    color: whitesmoke;
}
</style>
