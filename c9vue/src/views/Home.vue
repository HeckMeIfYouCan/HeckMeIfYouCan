<template>
    <MainLayout class="home-container">

        <h1>oO</h1>

        <p>
            Heyhey! Welcome to my site.
            I'm currently affiliated with the <a href="https://mimuc.de" target="_blank">HCI research group</a> at LMU
            Munich.
            My general field of research is application-oriented Affective Computing, with
            a focus on non-verbal communication in virtual environments.
            In general, I try to explore meaningful (non-evil) ways of applying affective computing, by exploring the
            following topics:
        </p>
        <p class="questions">
            &raquo; How to capture and visualize non-verbal cues of virtual audiences in real-time<br/>
            &raquo; How to measure the impact of affective feedback on user emotions and behavior<br/>
            &raquo; Ways to create &apos;affective traces&apos; on shared content like videos or tweets<br/>
            &raquo; Increasing transparency and awareness in emotion sharing and visualization
        </p>

        <!-- running projects -->
        <div class="section">
            <h2>Running Projects</h2>
            <KGrid col-gap="40">
                <KGridCell align="start">
                    <p>
                        Some of my running (student) projects deal with tracking and design of affective group feedback
                        in
                        virtual communication: <a href="./bavisualattention">Capturing Visual Attention</a> and
                        <a href="./maaudiencefeedback">Designing Affective Audience Feedback</a> in online lectures.
                    </p>
                    <img class="project-img" style="max-width: 320px;" src="@/assets/img/group_feedback.jpg"/>
                </KGridCell>
                <KGridCell align="start">
                    <p>
                        Heart Activity may be used to derive affective states like stress our arousal. A current
                        Bachelor thesis
                        deals with the extraction of heart waveforms from videos streams to estimate heart rate
                        variability.
                    </p>
                    <img class="project-img" style="max-width: 320px;" src="@/assets/img/rppghrv.jpg"/>
                </KGridCell>
            </KGrid>
        </div>

        <!-- bye -->
        <div class="section">
            <p>
                I am also working in the tech team at <a href="https://tawny.ai" target="_blank">TAWNY</a> where we
                develop applications, algorithms and services for the recognition and analysis of affective states.
                If you are dealing with video analytics, check out our
                <a href="https://platform.tawny.ai" target="_blank">emotion analytics platform</a>.
            </p>
            <p>If you are interested in any of these topics, or in other cool stuff <a v-bind:href="'mailto:'+email">
                get in touch</a> :)
            </p>
            <p class="signature">
                <!--<img class="profile-img" src="@/assets/img/ms.jpg"/>-->
                cheers, <br/><span style="color: transparent">__</span>Matthias
            </p>
        </div>
    </MainLayout>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import MainLayout from "@/components/main-layout/MainLayout.vue";
import KGrid from "@/components/k-grid/KGrid.vue";
import KGridCell from "@/components/k-grid/KGridCell.vue";


@Component({
    components: {KGridCell, KGrid, MainLayout}
})
export default class Home extends Vue {
    email: any = 'matthias.schmidmaier@ifi.lmu.de';
    survey_link_aline = 'https://www.soscisurvey.de/aneumann-survey-2020/'
}
</script>

<style scoped lang="scss">
@import "@/scss/_styles.scss";

.home-container {
    h1 {
        font-size: 48px;
        font-weight: lighter;
    }

    a {
        color: $font-color-link;

        &:hover {
            text-decoration: underline dotted;
        }
    }

    p {
        text-align: justify;
        margin: 10px auto;

        &.questions {
            padding: 0 0 0 40px;
        }
    }

    .section {
        width: 100%;
        margin: 30px 0 30px 0;

        h2 {
            text-align: left;
            padding: 0 0 5px 0;
        }

        p {
            text-align: justify;
            margin: 0;
        }

        .project-img {
            width: 100%;
            max-width: 480px;
            margin: 10px auto 0 auto;
        }
    }

    .signature {
        height: 50px;
        font-weight: lighter;
        vertical-align: middle;
        padding: 20px 0 0 80px;

        .profile-img {
            width: 80px;
            border-radius: 50%;
            float: left;
            margin: 0 30px 0 0;
            filter: contrast(120%) brightness(120%) grayscale(50%);
            transition: width 400ms ease-in-out, filter 200ms ease-in-out;
        }
    }

}
</style>
