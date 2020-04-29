<template>
    <div class="main-education">
        <v-container>
            <v-layout column>
                <v-flex
                    xs12
                    class="text-xs-center display-1 font-weight-black my-5"
                    >EDUCATION
                </v-flex>
                <v-row justify="center" no-gutters>
                    <v-col cols="12">
                        <v-flex>
                            <v-list flat>
                                <v-list-item-group>
                                    <v-list-item
                                        v-for="(item, i) in education"
                                        :key="i"
                                    >
                                        <v-list-item-content>
                                            <v-col
                                                cols="12"
                                                md="3"
                                                xs="12"
                                                align="center"
                                            >
                                                <v-card
                                                    class="mx-auto"
                                                    max-width="200"
                                                >
                                                    <v-img
                                                        :src="item.logo"
                                                        height="150"
                                                        width="150"
                                                    ></v-img>
                                                </v-card>
                                            </v-col>
                                            <v-col cols="12" md="9" xs="12">
                                                <v-list-item-title
                                                    v-text="item.name"
                                                ></v-list-item-title>
                                                <v-list-item-subtitle>
                                                    <v-row no-gutters>
                                                        <v-col cols="12" sm="4"
                                                            ><v-icon large
                                                                >mdi-school</v-icon
                                                            >
                                                            {{ item.school }}
                                                        </v-col>
                                                        <v-col cols="12" sm="4"
                                                            ><v-icon large
                                                                >mdi-calendar-range</v-icon
                                                            >{{ item.datein }} -
                                                            {{
                                                                item.dateout
                                                            }}</v-col
                                                        >
                                                        <v-col cols="12" sm="4"
                                                            ><v-icon large
                                                                >mdi-map-marker</v-icon
                                                            >{{
                                                                item.place
                                                            }}</v-col
                                                        >
                                                    </v-row>
                                                </v-list-item-subtitle>
                                                <v-list-item-subtitle
                                                    class="descrption"
                                                    v-text="item.description"
                                                ></v-list-item-subtitle>
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
    name: 'education',
    data() {
        return { education: [] };
    },
    firebase: { education: firedata.ref('education') }
};
</script>

<style scoped>
.v-list-item__title {
    font-size: 1.8em;
    margin-bottom: 2vh;
}
.v-list-item__subtitle {
    font-size: 1.2em;
}
.descrption {
    margin-top: 3vh;
}
</style>
