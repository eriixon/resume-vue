<template>
    <div class="main-works">
        <v-container>
            <v-layout column>
                <v-flex
                    xs12
                    class="text-xs-center display-1 font-weight-black my-5"
                    >EXPERIENCE
                </v-flex>
                <v-row justify="center" no-gutters >
                    <v-col cols="12">
                        <v-flex>
                            <v-list flat>
                                <v-list-item-group>
                                    <v-list-item
                                        v-for="(item, i) in works"
                                        :key="i"
                                    >
                                        <v-list-item-content>
                                            <v-col cols="12" md="3" xs="12" align="center">
                                                <v-card :elevation="10">
                                                    <v-img :src="item.logo"  height="150" width="150"></v-img>
                                                </v-card>
                                            </v-col>
                                            <v-col cols="12" md="9" xs="12">
                                                <v-list-item-title
                                                    v-text="item.title"
                                                ></v-list-item-title>
                                                <v-list-item-subtitle>
                                                    <v-icon large>mdi-domain</v-icon>
                                                    {{ item.company }}
                                                    <v-icon large>mdi-calendar-range</v-icon>
                                                    {{ item.datein }} -
                                                    {{ item.dateout }}
                                                    <v-icon large>mdi-map-marker</v-icon>
                                                    {{ item.place}}
                                                </v-list-item-subtitle>
                                                <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
                                            </v-col>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-flex>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import firedata from '../firedata';

export default {
    name: 'works',
    data() {
        return { works: [] };
    },
    firebase: { works: firedata.ref('works') }
};
</script>

<style scoped>
.main-works,
.theme--light.v-list {
    background-color: #ddddcc;
}
.v-list-item__title {
    font-size: 1.8em;
}
.v-list-item__subtitle {
    font-size: 1.2em;
}
</style>
