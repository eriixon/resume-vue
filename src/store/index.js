import Vue from 'vue';
import Vuex from 'vuex';


const images = {
    topImage: 'https://firebasestorage.googleapis.com/v0/b/resume-vue-6fa3a.appspot.com/o/back-top.jpg?alt=media&token=0f6a4960-13f6-485c-ae13-785a2c2854a1',
    downImage: 'https://firebasestorage.googleapis.com/v0/b/resume-vue-6fa3a.appspot.com/o/back-down.jpg?alt=media&token=e3a7c113-745d-42b2-808f-b12593bc1b3d',
    person: 'https://firebasestorage.googleapis.com/v0/b/resume-vue-6fa3a.appspot.com/o/person.jpg?alt=media&token=997f21f0-1175-4f81-974a-6ad2b27c548a'
}

const mainTools = [
    { url: 'https://www.python.org/', title: 'Python', icon: ['fab', 'python'] },
    { url: 'https://docs.microsoft.com/en-us/dotnet/csharp/', title: 'C#' },
    { url: 'https://dotnet.microsoft.com/', title: '.NET' },
    { url: 'https://developer.mozilla.org/en/docs/Web/JavaScript', title: 'JavaScript', icon: ['fab', 'js-square']},
    { url: "https://nodejs.org/", title: "Node.JS", icon: ['fab', 'node-js'] },
    { url: 'https://www.mongodb.com/', title: 'MongoDB', icon: ['fas', 'database'] },
    { url: 'https://www.w3schools.com/sql/', title: 'SQL' },
    { url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', title: 'HTML', icon: ['fab', 'html5'] },
    { url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', title: 'CSS', icon: ['fab','css3'] }
]

const otherTools = [
    { url: 'https://aws.amazon.com/', title: 'AWS', icon: ['fab', 'aws'] },
    { url: 'https://angular.io/', title: 'Angular', icon: "fab fa-angular" },
    { url: 'https://reactjs.org/', title: 'React', icon: "fab fa-react" },
    { url: 'https://vuejs.org/', title: 'VueJS', icon: "fab fa-vuejs" },
    { url: 'http://getbootstrap.com/', title: 'Bootstrap', icon: ['fab', 'bootstrap'] },
    { url: "https://material.io/", title: "Material design", icon: "fab fa-mdb" },
    { url: 'https://www.firebase.com/', title: 'Firebase', icon: ['fas', 'fire-alt'] },
    { url: 'https://www.jetbrains.com/pycharm/', title: 'PyCharm', icon: '' },
    { url: 'https://code.visualstudio.com/', title: 'Visual Studio Code', icon: '' },
    { url: 'https://www.visualstudio.com/', title: 'Visual Studio', icon: "fab fa-vuejs"  }
]

const skills = [
    { item: "Problem solving", stars: 5 },
    { item: "Communication & negotiation", stars: 5 },
    { item: "Analitycal skills", stars: 5 },
    { item: "Staff management", stars: 4 },
    { item: "Project management", stars: 4 },
    { item: "Time management", stars: 4 }
]

const socialLinks = [
    { url: 'https://www.facebook.com/radkovsn', title: "Facebook" },
    { url: 'https://www.linkedin.com/in/radkovsn', title: "LikedIn" },
    { url: 'https://github.com/eriixon', title: "GitHub" },
    { url: 'https://www.instagram.com/eriixon/', title: "Instagram" }
]


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        images: images,
        mainTools: mainTools,
        tools: otherTools,
        skills: skills,
        socialLinks: socialLinks
    }
});
