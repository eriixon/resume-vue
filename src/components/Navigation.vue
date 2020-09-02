<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="brown lighten-2"
            dark
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-item :key="index" :to="item.url">
                        <v-list-item-content>{{item.title}}</v-list-item-content>
                    </v-list-item>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color="brown darken-4" dark>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-btn color="brown lighten-3" class="hidden-sm-and-down btn" to="/">Main</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn color="brown lighten-3" class="hidden-sm-and-down btn" to="/contacts">CONTACTS</v-btn>
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'navigation',
    data() {
        return {
            drawer: false,
            items: [
                { title: 'Main', url: '/' },
                { title: 'Contacts', url: '/contacts' }
            ]
        };
    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
.btn :hover{
    color: black
}
</style>