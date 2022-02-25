<template>
    <BasicLayout>
        <div class="main-container">
            <div class="header">
                <h1>Welcome</h1>
                <p class="supervised">
                    ongoing Bachelor Thesis by <a v-bind:href="'mailto:'+email_mg">Mathias G&ouml;tz</a>
                    <br />
                    supervised by <a v-bind:href="'mailto:'+email_ms">Matthias Schmidmaier</a>, LMU Munich &amp; TAWNY
                </p>
            </div>

            <div class="survey">
                <!--<SurveySelection title="Muhaaaa" :items="emotionItems" :hu="emotionItems">
                </SurveySelection>-->

                <SurveyLikert title="Valence" id="valence" question="Rate valence!">
                </SurveyLikert>
            </div>
        </div>
    </BasicLayout>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import BasicLayout from "@/components/basic-layout/BasicLayout.vue";
import SurveySelection from "@/components/survey/selection/SurveySelection.vue";
import SurveyLikert from "@/components/survey/likert/SurveyLikert.vue";

@Component({
    components: {BasicLayout, SurveySelection, SurveyLikert},
    data() {
        return {
            emotionItems: [
                { id: "arousal", text: "Arousal" },
                { id: "valence", text: "Valence" }
            ]
        }
    }
})
export default class BAMathias extends Vue {
    email_ms = 'matthias.schmidmaier@ifi.lmu.de';
    email_mg = 'johannes.e.heckmann@gmail.com';
}

</script>

<style scoped lang="scss">
@import "@/scss/_styles.scss";

.main-container {
    width: 100vw;
    max-width: 600px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: start;

    .header {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-items: start;
        margin: 20px;

        p {
            text-align: left;
        }
    }
}
</style>

