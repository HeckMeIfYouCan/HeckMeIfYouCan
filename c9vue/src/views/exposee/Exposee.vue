<template>
    <MainLayout class="exposee-container">

        <h1>Looking for a thesis or practical course?</h1>
        <div class="intro">
            <p>In our <a href="https://www.medien.ifi.lmu.de/team/matthias.schmidmaier/" target="_blank">research group</a>
                I'm currently offering theses and practical courses (Einzelpraktikum) in the area of affective computing.
                If your are interested and enrolled for computer science at LMU Munich, let me know!
                <br/> <a v-bind:href="'mailto:'+email">&raquo; {{email}}</a>.
            </p>
            <p>
                Feel free to suggest your own topic (related to applications of affective computing) or have a look at
                the proposed topics below.
                As I am working at <a href="https://tawny.ai">TAWNY</a> you may also use our technology (e.g. for
                recording or affective analysis).
            </p>
        </div>

        <div class="exposee-topic">
            <img class="logo" v-bind:src='"@/assets/img/assignment-white-18dp.svg"'/>
            <h2>Group Behaviour Visualization</h2>
            <KGrid class="framing" alignItems="start">
                <KGridCell col-span="3">
                    <p>Virtual communication scenarios limit the use of 'classic' non-verbal communication.
                        With increasing number of participants it is hard to keep track of group dynamics or moods.
                        An important feature when moderating a discussion or speaking / performing in front of an
                        audience is
                        for example to asses the current level of attention, joy, understanding etc.</p>
                </KGridCell>
                <KGridCell col-span="1" class="framing-img">
                    <img v-bind:src='"@/assets/img/audience.png"'/>
                </KGridCell>
            </KGrid>
            <h3>Tasks (based on work scope and focus)</h3>
            <ul>
                <li>research existing methods of aggregation / visualization of group dynamics and non-verbal behavior
                    in real-world and virtual scenariuos
                </li>
                <li>create concepts for measuring and visualizing group stats</li>
                <li>develop a prototype that implements the created concepts (using e.g. Angular, React, Vue,
                    Babylon.js, Unity3D, ...)
                </li>
                <li>conduct user studies to evaluate the developed concepts by measuring user behavior, physiological
                    states, self-assessment ...
                </li>
                <li>analyse results using statistical methods, ML, ...</li>
            </ul>
        </div>

        <div class="exposee-topic">
            <img class="logo" v-bind:src='"@/assets/img/assignment-white-18dp.svg"'/>
            <h2>Virtual Spatial Behavior</h2>
            <KGrid class="framing" alignItems="start" col-min="200">
                <KGridCell col-span="2">
                    <p>Spatial behavior is a non-verbal channel in real world communication.
                        The interaction distance between persons, seating orders or territorial markers may reflect
                        intentions or status and influence perception and interaction behavior.
                        In virtual communication spatial interaction is usually limited and not controllable by the user.
                        Examples: you can't choose if you want to sit front or back row in a virtual talk; users can't
                        easily choose seat neighbours (to privately talk to); entering/leaving a room is ususally a hard cut.</p>
                </KGridCell>
                <KGridCell col-span="1" class="framing-img">
                    <img v-bind:src='"@/assets/img/spatial.png"'/>
                </KGridCell>
            </KGrid>
            <h3>Tasks (based on work scope and focus)</h3>
            <ul>
                <li>research existing methods of aggregation / visualization of group dynamics and non-verbal behavior
                    in real-world and virtual scenariuos
                </li>
                <li>create concepts for measuring and visualizing group stats</li>
                <li>develop a prototype that implements the created concepts (using e.g. Angular, React, Vue,
                    Babylon.js, Unity3D, ...)
                </li>
                <li>conduct user studies to evaluate the developed concepts by measuring user behavior, physiological
                    states, self-assessment ...
                </li>
                <li>analyse results using statistical methods, ML, ...</li>
            </ul>
        </div>

    </MainLayout>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import MainLayout from "@/components/main-layout/MainLayout.vue";
    import KGrid from "@/components/k-grid/KGrid.vue";
    import KGridCell from "@/components/k-grid/KGridCell.vue";

    @Component({
        components: {KGridCell, KGrid, MainLayout}
    })
    export default class Exposee extends Vue {
        //email: string = 'matthias.schmidmaier@ifi.lmu.de';
        email: any = 'matthias.schmidmaier@ifi.lmu.de';

    }
</script>

<style scoped lang="scss">
    @import "@/scss/_styles.scss";

    $boxTextColor: #29716d;
    $boxHeaderColor: #1d605e;

    .exposee-container {
        width: 100%;
        h1 {
            font-weight: lighter;
            margin-bottom: 20px;
        }

        .intro {
            text-align: left;
            margin-bottom: 30px;
        }

        a {
            color: $font-color-link;

            &:hover {
                border-bottom: 1px dotted $font-color-link;
            }
        }

        p {
            margin: 0 0 10px 0;
        }
    }

    .exposee-topic {
        text-align: left;
        border-radius: 5px;
        background-color: #deeef0;
        padding: 20px;
        color: $boxTextColor;
        margin-bottom: 20px;

        .logo {
            height: 33px;
            float: left;
            margin: 0 10px 0 0;
        }

        .framing {
            margin: 5px 0 15px 0;

            .framing-img {
                padding: 10px;
                img {
                    height: 120px;
                }
            }
        }

        h2 {
            font-weight: normal;
            color: $boxHeaderColor;
        }

        h3 {
            font-weight: normal;
            color: $boxHeaderColor;
        }

        ul {
            list-style-type: circle;

            li {
                margin-left: 20px;
            }
        }
    }

</style>
