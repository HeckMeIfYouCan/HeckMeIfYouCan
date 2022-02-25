<template>
    <div class="old-container">

        <!-- OLD-->
        <div class="sign">
            <h1 class="neon blinking">Open Lab Day - 07.12.20</h1>
            <p class="neon plain">
                Me (Matthias) and some of my students will be around here
                to talk about affective computing in virtual communication. See you :)
            </p>

            <KGrid col-gap="40">
                <KGridCell align="top">
                    <p class="neon blue">
                        <a class="neon blue" v-bind:href="survey_link_aline" target="_blank">
                            Do you give online lectures? <br/>
                            Take part in a ~5min survey</a>
                    </p>
                </KGridCell>
                <KGridCell align="top">
                    <p class="neon blue">
                        <a class="neon blue" v-bind:href="survey_link_mathias" target="_blank">
                            Do you visit online lectures? <br/>
                            Take part in a ~2min survey</a>
                    </p>
                </KGridCell>
            </KGrid>

            <p class="neon plain">
                18:00-21:00<br/>
                Find Mathias Götz to talk about his thesis and his demo on visual attention tracking
                <a class="neon blue" v-bind:href="demo_link" target="_blank">&rarr; Open demo</a>
            </p>

            <p class="neon plain">
                18:00-21:00<br/>
                Find Aline Neumann to talk about potential benefits and design of affective group feedback in online
                lecture scenarios.
            </p>

            <p class="neon text">
                19:00 - 19:30 &raquo; Talk<br/>
                Come around to listen to Alexander Bünger's talk on his thesis topic <span class="neon red">
                &raquo; How to extract heart activity from video streams &laquo;</span><br/>
            </p>
        </div>

        <div class="footer">
            <router-link to="/" class="link">Home</router-link>
            <router-link to="/impressum" class="link">Impressum</router-link>
            <router-link to="/privacy" class="link">Datenschutz</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import MainLayout from "@/components/main-layout/MainLayout.vue";
import KGrid from "@/components/k-grid/KGrid.vue";
import KGridCell from "@/components/k-grid/KGridCell.vue";

@Component({
    components: {KGridCell, KGrid, MainLayout}
})
export default class OpenLabDay extends Vue {
    email: any = 'matthias.schmidmaier@ifi.lmu.de';
    survey_link_aline = 'https://www.soscisurvey.de/aneumann-survey-2020/'
    survey_link_mathias = 'https://forms.gle/39BDKuppEbjTCDkM7'
    demo_link = 'https://goetzmat.github.io/affect-tracker/'
}
</script>

<style scoped lang="scss">
@import "@/scss/_styles.scss";

$neon-shadow-red: #b022ca;

.old-container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
    min-width: 400px;
    min-height: 100vh;
    overflow-x: auto;
    background-color: #0a0a0a;

    .footer {
        height: 40px;
        font-size: $font-size-small;
        color: #333;

        a {
            padding: 10px;

            &:hover {
                color: #444;
            }
        }
    }

    .sign {
        width: 100%;
        max-width: 600px;
        margin: 20px auto;
        border-radius: 10px;
        padding: 30px;
        background-color: #222;
        background-image: repeating-linear-gradient(
                to bottom,
                transparent 7px,
                rgba(0, 0, 0, 0.8) 9px,
                rgba(0, 0, 0, 0.8) 13px,
                transparent 13px
        );

        p {
            margin: 30px 0 30px 0;
            text-align: left;
            font-size: 1.2em;
        }

        .neon {
            text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
            color: #fff6a9;

            a {
                text-decoration: underline;
                outline: 0;

                &:focus {
                    outline: 0;
                }
            }

            &.plain {
                text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
                color: #fff6a9;
                //text-shadow: none; // 0 0 5px $neon-shadow-plain, 0 0 15px $neon-shadow-plain, 0 0 20px $neon-shadow-plain, 0 0 40px $neon-shadow-plain, 0 0 60px $neon-shadow-plain, 0 0 10px $neon-shadow-plain, 0 0 98px $neon-shadow-plain;
                //color: rgba(255,255,255,.4);
            }

            &.red {
                text-shadow: 0 0 5px $neon-shadow-red, 0 0 15px $neon-shadow-red, 0 0 20px $neon-shadow-red, 0 0 40px $neon-shadow-red, 0 0 60px $neon-shadow-red, 0 0 10px $neon-shadow-red, 0 0 98px $neon-shadow-red;
                color: #c05cc8;
            }

            &.blue {
                text-shadow: 0 0 5px #1e88e5, 0 0 15px #1e88e5, 0 0 20px #1e88e5, 0 0 40px #1e88e5, 0 0 60px #1e88e5, 0 0 10px #1e88e5, 0 0 98px #1e88e5;
                color: #1ec7e5;
                text-decoration: none;
                margin: 5px 0 0 0;

                &:hover {
                    color: #1aa8c1;
                }
            }

            &.blinking {
                animation: blink 12s infinite;
                -webkit-animation: blink 12s infinite;
            }
        }
    }

    @-webkit-keyframes blink {
        20%,
        24%,
        55% {
            color: #111;
            text-shadow: none;
        }

        0%,
        19%,
        21%,
        23%,
        25%,
        54%,
        56%,
        100% {
            /*     color: #fccaff;
                text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
                  0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
            text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
            color: #fff6a9;
        }
    }

    @keyframes blink {
        20%,
        24%,
        55% {
            color: #111;
            text-shadow: none;
        }

        0%,
        19%,
        21%,
        23%,
        25%,
        54%,
        56%,
        100% {
            /*     color: #fccaff;
                text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
                  0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
            text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
            color: #fff6a9;
        }
    }
}
</style>
