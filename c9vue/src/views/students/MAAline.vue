<template>
    <MainLayout>
        <div class="main-container">
            <h1>Designing Affective Audience Feedback in Online Lectures</h1>
            <p class="supervised">
                ongoing Master Thesis by <a v-bind:href="'mailto:'+email_an">Aline Neumann</a>
                <br/>
                supervised by <a v-bind:href="'mailto:'+email_ms">Matthias Schmidmaier</a>, LMU Munich &amp; TAWNY
            </p>

            <div class="header-img">
                <img src="@/assets/img/smileys.jpg"/>
                <p>Photo by <a
                    href="https://unsplash.com/@jannerboy62?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nick
                    Fewings</a> on <a
                    href="https://unsplash.com/s/photos/smileys?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
                </p>
            </div>

            <div class="description">
                <p>
                    The goal of this thesis is to explore affective group feedback design in an online lecture
                    scenario. What affective cues and what forms of visualization are relevant to improve interaction
                    and user experience? How does this kind of feedback influence the user?
                    In a first step we would like to ask lecturers about their experience with non-verbal communication
                    in the audience.
                </p>
                <p>
                    If you are a lecturer or involved in teaching it would be great if you could take part in our online
                    survey (~5-10min).
                </p>

                <a class="bigLink" v-bind:href="survey_link" target="_blank">&rarr; Survey</a>

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
export default class MAAline extends Vue {
    email_ms = 'matthias.schmidmaier@ifi.lmu.de';
    email_an = 'aline.neumann@campus.lmu.de';
    survey_link = 'https://www.soscisurvey.de/aneumann-survey-2020/'
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

