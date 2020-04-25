<template>
    <div class="main-about">
        <v-container>
            <v-layout column>
                <v-flex class="text-xs-center display-1 font-weight-black my-5"
                    >ABOUT ME</v-flex
                >
                <v-row justify="center" no-gutters>
                    <v-col cols="12" md="8">
                        <v-flex>
                            <p class="subheading mt-3">
                                A software developer with 4+ years of full stack
                                development experience which has included web
                                and software development in several enterprise
                                agile projects, a self-motivated problem-solver,
                                a team player adjusting with positive attitude.
                                My experience is primarily using the .Net stack,
                                Python, SQL, MongoDB, NodeJS, modern JavaScript
                                frameworks. As a developer I have spent my
                                career learning and expanding my experience and
                                skill set to cover the entire SDLC.
                            </p>
                            <p class="subheading mt-3">
                                As a developer I have a keen interest in
                                technology, web and mobile applications, user
                                experience. As someone who takes responsibility
                                for his own personal development, I am
                                continually evaluating and upgrading the skills
                                so that I stay at the cutting edge of software
                                development.
                            </p>
                            <p class="subheading mt-3">
                                "Life is like riding a bicycle. To keep your
                                BALANCE, you must keep moving"<i
                                    >- Albert Einstein</i
                                >
                            </p>
                        </v-flex>
                    </v-col>

                    <v-col cols="10" sm="6" md="4">
                        <v-card :elevation="10">
                            <v-img :src="person"></v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'about',
    data() {
        return { person: this.$store.state.images.person };
    }
};
</script>

<style scoped>
.main-about {
    background-color: #ddddcc;
    padding-bottom: 5vh;
}
</style>
