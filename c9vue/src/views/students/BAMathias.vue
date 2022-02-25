<template>
    <MainLayout>
        <div class="main-container">
            <h1>Capturing Visual Attention in Online Lectures</h1>
            <p class="supervised">
                ongoing Bachelor Thesis by <a v-bind:href="'mailto:'+email_mg">Mathias G&ouml;tz</a>
                <br />
                supervised by <a v-bind:href="'mailto:'+email_ms">Matthias Schmidmaier</a>, LMU Munich &amp; TAWNY
            </p>

            <div class="header-img">
                <img src="@/assets/img/stock_homeoffice.jpg"/>
                <!--<p>Photo by <a
                    href="https://unsplash.com/@nickmorrison?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nick
                    Morrison</a> on <a
                    href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
                </p>-->
                <p>Photo by <a
                    href="https://unsplash.com/@purzlbaum?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                    Claudio Schwarz | @purzlbaum</a> on <a
                    href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
                </p>
            </div>

            <div class="description">
                <p>
                    For the overall goal of creating affective audience feedback,
                    we want to capture and analyze non-verbal behavior and attention of students in an
                    online lecture setup - based on real-time video input.
                    In a first step we would like to assess the way students take part in online lectures.
                </p>
                <p>
                    If you are visiting online lectures and got a minute please take part in our online survey!
                </p>

                <a class="bigLink" v-bind:href="survey_link" target="_blank">&rarr; Survey</a>

                <p>
                    As part of the <a href="http://www.medien.ifi.lmu.de/lehre/ws2021/openlab/" target="_blank">
                    Open Lab Day</a> we set up a short demo. During the event we are happy to provide
                    information and discussion in (virtual) person via gather.town.
                    In case you visit this website outside the event hours feel free to contact us via
                    <a v-bind:href="'mailto:'+email_mg">email</a>.
                </p>

                <a class="bigLink" v-bind:href="demo_link" target="_blank">&rarr; Demo</a>
            </div>
        </div>
    </MainLayout>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import MainLayout from "@/components/main-layout/MainLayout.vue";
import PaperLayout from "@/components/paper-layout/PaperLayout.vue";
import KGrid from "@/components/k-grid/KGrid.vue";
import KGridCell from "@/components/k-grid/KGridCell.vue";

@Component({
    components: {KGridCell, KGrid, PaperLayout, MainLayout}
})
export default class BAMathias extends Vue {
    email_ms = 'matthias.schmidmaier@ifi.lmu.de';
    email_mg = 'mathias.goetz@campus.lmu.de';
    survey_link = 'https://forms.gle/39BDKuppEbjTCDkM7'
    demo_link = 'https://goetzmat.github.io/affect-tracker/'
}

</script>

<style scoped lang="scss">
@import "@/scss/_styles.scss";

.main-container {
    max-width: 700px;
    margin: 0 auto;

    a {
        color: #1e88e5;
    }

    .supervised {
        color: $font-color;
    }

    .header-img {
        width: 100%;
        padding: 20px 0;

        img {
            width: 100%;
            max-width: 600px;
            border-radius: 5px;
        }

        p {
            color: #cccccc;
            font-size: .6em;

            a {
                color: inherit;
            }
        }
    }

    .description {
        width: 100%;

        h3 {
            text-align: left;
            margin: 20px 0 0 0;
        }

        p {
            text-align: left;
            margin: 30px 0 10px 0;
            text-align: justify;
        }

        a.bigLink {
            font-size: 1.5em;
            color: #1e88e5;
        }
    }
}
</style>

