import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        images: {
            topImage:
                'https://firebasestorage.googleapis.com/v0/b/resume-vue-6fa3a.appspot.com/o/back-top.jpg?alt=media&token=0f6a4960-13f6-485c-ae13-785a2c2854a1',
            downImage:
                'https://firebasestorage.googleapis.com/v0/b/resume-vue-6fa3a.appspot.com/o/back-down.jpg?alt=media&token=e3a7c113-745d-42b2-808f-b12593bc1b3d',
            person:
                'https://firebasestorage.googleapis.com/v0/b/resume-vue-6fa3a.appspot.com/o/person.jpg?alt=media&token=997f21f0-1175-4f81-974a-6ad2b27c548a'
        }
    }
});
