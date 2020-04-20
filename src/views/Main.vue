<template>
    <span>
        <main-home></main-home>
        <main-about></main-about>
        <main-tech></main-tech>
        <main-works></main-works>
        <main-education></main-education>
    </span>
</template>

<script>
import MainHome from '@/components/Home';
import MainAbout from '@/components/About';
import MainTech from '@/components/Techs';
import MainWorks from '@/components/Works';
import MainEducation from '@/components/Education';

export default {
    name: 'Home',
    components: {
        MainHome,
        MainAbout,
        MainTech,
        MainWorks,
        MainEducation
    }
};
</script>

<style scoped>
span {
    font-size: 20px;
}
</style>
