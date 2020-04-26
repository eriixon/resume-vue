<template>
    <v-container grid-list-lg class="tech">
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >TECHNOLOGIES
            </v-flex>
            <v-row justify="center" no-gutters>
                <v-col cols="12" md="6">
                    <v-flex>
                        <v-list flat>
                            <v-list-item-group>
                                <v-list-item
                                    v-for="(item, i) in mainTools"
                                    :key="i"
                                    :href="item.url"
                                    target="_blank"
                                >
                                    <v-list-item-icon>
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            v-text="item.title"
                                        ></v-list-item-title>
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
                                <v-list-item
                                    v-for="(item, i) in slavetools"
                                    :key="i"
                                    :href="item.url"
                                    target="_blank"
                                >
                                    <v-list-item-icon large>
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            v-text="item.title"
                                        ></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-flex>
                </v-col>
            </v-row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >SKILLS
            </v-flex>
            <v-row justify="center" no-gutters>
                <v-col cols="12">
                    <v-flex>
                        <v-list flat>
                            <v-list-item-group>
                                <v-list-item
                                    v-for="(item, i) in skills"
                                    :key="i"
                                    :href="item.url"
                                    target="_blank"
                                >
                                    <v-list-item-content>
                                        <v-col cols="12" md="6" xs="12">
                                            <v-list-item-title
                                                v-text="item.item"
                                            ></v-list-item-title>
                                        </v-col>
                                        <v-col md="6" xs="12">
                                            <span
                                                v-for="index in item.stars"
                                                :key="index"
                                            >
                                                <v-icon large
                                                    >mdi-star-box-outline</v-icon
                                                >
                                            </span>
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
</template>

<script>
import firedata from '../firedata';

export default {
    name: 'techs',
    data() {
        return {
            mainTools: [],
            slavetools: [],
            skills: []
        };
    },
    firebase: {
        mainTools: firedata.ref('primarytools'),
        slavetools: firedata.ref('slavetools'),
        skills: firedata.ref('skills')
    }
};
</script>

<style scoped>
.v-list-item__title {
    font-size: 1.2em;
}
.tech {
    margin-bottom: 10vh;
}
.v-list-item-group :hover {
    background: lightgrey;
    border-radius: 8px;
}
</style>
