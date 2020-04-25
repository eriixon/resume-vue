<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >TECHNOLOGIES
            </v-flex>
            <v-row justify="center" no-gutters>
                <v-col cols="12" md="6">
                    <v-flex>
                        <v-list flat>
                            <v-list-item-group>
                                <v-list-item v-for="(item, i) in mainTools " :key="i">
                                    <v-list-item-icon>
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.title"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-flex>
                </v-col>
                <v-col cols="12" md="6">
                    <v-flex>
                        <v-list flat>
                            <v-list-item-group>
                                <v-list-item v-for="(item, i) in slavetools" :key="i">
                                    <v-list-item-icon large>
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.title" ></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-flex>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>

<script>
import firedata from '../firedata';

export default {
    name: 'techs',
    data() {
        return {
            mainTools: [],
            slavetools: []
        };
    },
    firebase: {
        mainTools: firedata.ref('primarytools'),
        slavetools: firedata.ref('slavetools')
    },
    computed: {
        iconPrefix() {
            return 'fab';
        }
    }
};
</script>

<style scoped>
.v-list-item__title {
    font-size: 1.2em;
}
</style>
