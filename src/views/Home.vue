<template>
    <div class="main-container">
        <div class="main-content home-content">
            <h1>oO</h1>
            <section>
                <p>
                    Heyhey! Welcome to my site.
                    I'm currently affiliated with the <a href="https://mimuc.de" target="_blank">HCI research group</a> at LMU
                    Munich.
                    My general field of research is application-oriented Affective Computing, with
                    a focus on non-verbal communication in virtual environments.
                </p>
            </section>
            <section>
                <p>
                    I am also working in the tech team at <a href="https://tawny.ai" target="_blank">TAWNY</a> where we
                    develop applications, algorithms and services for the recognition and analysis of affective states.
                    If you are dealing with video analytics, check out our
                    <a href="https://platform.tawny.ai" target="_blank">emotion analytics platform</a>.
                </p>
            </section>
            <section>
                <p>If you are interested in any of these topics, or in other cool stuff <a v-bind:href="'mailto:'+email">
                    get in touch</a> :)
                </p>
                <p class="signature">
                    <!--<img class="profile-img" src="@/assets/img/ms.jpg"/>-->
                    Cheers, Matthias
                </p>
            </section>
        </div>

        <Footer></Footer>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from "vue-class-component";
    import Footer from "@/components/Footer.vue"; // @ is an alias to /src

    @Options({
        components: {
            Footer,
        },
    })
    export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
    @import "@/scss/_styles.scss";

    .home-content {
        max-width: $max-content-width;
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        p {
            text-align: left;
        }
    }
</style>
