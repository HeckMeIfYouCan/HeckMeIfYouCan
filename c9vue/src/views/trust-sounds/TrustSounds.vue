<template>
    <MainLayout class="">
        <PaperLayout
                title="Beep Beep: Building Trust with Sound"
                image=""
                v-bind:authors="authors"
                abstract="Audio is one modality that besides content transmission offers non-verbal cues that influence
                emotional perception. This allows to increase trust for example in privacy-sensitive systems
                like digital assistants. In this work we focus on basic audio feedback and explore how parameters
                like melody, pitch or tempo influence the creation of trust. We refer to related research in
                trust perception of voice, and evaluate if the derived concepts can be universally applied to
                simple sound patterns. Our study (n=39) shows significant effects for melody and mode, while
                tendencies were found for pitch and individual user preferences. We consider our findings to serve
                as basis for research towards the design of unobtrusive and trustworthy user experiences."
                publication="CHI ’20 Extended Abstracts, April 25–30, 2020, Honolulu, HI, USA.
                © 2020 Copyright is held by the author/owner(s)."
                isbn="ACM ISBN 978-1-4503-6819-3/20/04"
                doi="https://dl.acm.org/doi/abs/10.1145/3334480.3382848"
        >

            <div class="spacer-20"></div>

            <div class="paper-section">
                <p class="text disclaimer">
                    <font-awesome-icon icon="info-circle"/>
                    The following sections provide a
                    <span style="font-weight: bold">condensed overview</span> of our study.
                    You can find a complete, detailed description in our <a class="link" target="_blank"
                                                                            href="http://dx.doi.org/10.1145/3334480.3382848">
                    research paper</a>, published at CHI'20 Extended Abstracts.
                </p>
            </div>
            <div class="spacer-30"></div>

            <img class="header-img" v-bind:src='"@/assets/img/trustsoundheader.jpg"' />

            <div class="spacer-30"></div>

            <!-- Idea -->
            <div class="paper-section">
                <h3>How could sound feedback influence trust in HCI?</h3>
                <p class="text">In this work we explore if principles found for emotion and trust perception through
                    music and voice, also apply for simple sound patterns. We looked into related research regarding
                    audio in HCI, trust in HCI, emotions through sound and trustful voices.
                    Musical cues like tempo, dynamics, mode, articulation, timbre, phrasing were found to
                    influence the perception of emotions <a class="link" @click="scrollTo('sources')">[5]</a>.
                    So for example in voice, intonation was found to influence valence
                    <a class="link" @click="scrollTo('sources')">[16]</a>
                    as well as the perception of trust <a class="link"  @click="scrollTo('sources')">[1]</a>.
                    In music, higher notes were found to be related to happiness <a class="link"  @click="scrollTo('sources')">[3]</a>
                    and high trustworthiness <a class="link"  @click="scrollTo('sources')">[1]</a>
                    while musical modes can be used to express happiness (major) and sadness (minor)
                    <a class="link"  @click="scrollTo('sources')">[3]</a>.


                    To explore the influence of different sound features on trust perception we
                    designed two sets à 19 audio samples and conducted an online
                    study inspired by the work of Belin et al. <a class="link"  @click="scrollTo('sources')">[3]</a>.
                    <!--<a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0185651" target="_blank">
                        Belin et al. [3]</a>-->
                </p>
            </div>

            <div class="spacer-30"></div>

            <!-- Sound Design -->
            <div class="paper-section">
                <h3>Sound Design</h3>
                <p class="text">
                    We produced 16 audio patterns that vary in melody, mode, pitch and tempo and three additional
                    samples. Sample 17 simulates an Android melody, while sample 18 simulates a standard iOS message
                    sound.
                    Each sample was produced in <span class="hl">two sound styles</span> (piano vs. synthetic).
                    Sample 19 acts as test pattern to cross-check the sound style preference in our study.
                    Parameters were selected based on research in emotion expression through music and in
                    trustworthiness of voice:
                    <span class="hl">4 melodies</span>: ascending, descending, valley-shaped, arch-shaped,
                    <span class="hl">2 pitch levels</span>: low 261..523Hz (&#9661;) vs. high 523..1046Hz (&#9650;),
                    <span class="hl">2 modes</span>: C vs. C-Minor (Cm) and
                    <span class="hl">2 paces</span>: 140ms (+) vs. 170ms (-) per tone.</p>
                <p class="text caption">
                    Tap the sound items below for playback. First time playback may take a moment to load the .mp3 file.
                </p>

                <audio ref="audioElement" v-on:ended="onPlaying(0)"></audio>

                <div class="spacer-20"></div>
                <h4>Piano Style</h4>
                <div class="spacer-10"></div>
                <KGrid class="paper-section" col-min="100" col-gap="10" row-gap="10" alignItems="start"
                       justifyItems="center">
                    <KGridCell v-for="(m, i) in melodies" :key=i
                               :class="'sound-cell no-select '+ ((curPlaying == i+1 && curStyle=='Piano') ? 'playing' : '')"
                               @click.native="playSound(i+1, 'Piano')">
                        <p class="index">{{i+1}}</p>
                        <p class="description">{{m.description}}</p>
                        <img v-bind:src='"@/assets/trust-sounds/"+m.img+".png"'/>
                    </KGridCell>
                </KGrid>

                <div class="spacer-20"></div>
                <h4>Synthetic Style</h4>
                <div class="spacer-10"></div>
                <KGrid class="paper-section" col-min="100" col-gap="10" row-gap="10" alignItems="start"
                       justifyItems="center">
                    <KGridCell v-for="(m, i) in melodies" :key=i
                               :class="'sound-cell no-select '+ ((curPlaying == i+1 && curStyle=='Synth') ? 'playing' : '')"
                               @click.native="playSound(i+1, 'Synth')">
                        <p class="index">{{i+1}}</p>
                        <p class="description">{{m.description}}</p>
                        <img v-bind:src='"@/assets/trust-sounds/"+m.img+".png"'/>
                    </KGridCell>
                </KGrid>
            </div>


            <div class="spacer-30"></div>

            <!-- Study -->
            <div class="paper-section">
                <h3>Study</h3>
                <p class="text">Participants were asked to listen to two sound style samples (Piano and Synthetic) and
                    decide which they prefer most. Based on this selection, the corresponding 19 samples were
                    presented to the user successively in randomized partial counterbalanced order.
                    To create an understanding of trustworthy feedback, subjects were asked to consider if they
                    ‚like‘ a sound and if they are ‚feeling good‘ while hearing it. Further they were asked to imagine
                    how the sound feedback would influence their interaction with a system in a trust context
                    like entering an elevator.
                    Participants were asked to rate each sound pattern on a 4-point scale, answering to
                    'I found this audio pattern trustworthy': &#9450; strongly disagree &#9312; disagree &#9313; agree
                    &#9314;
                    strongly agree.
                </p>
            </div>

            <div class="spacer-30"></div>

            <!-- Results -->
            <div class="paper-section">
                <h3>Results</h3>
                <KGrid col-min="200" col-gap="20" row-gap="20" alignItems="start" justifyItems="start">
                    <KGridCell align="start" justify="start">
                        <p class="text">
                            Overall rating for all patterns was &mu;=1.62 (&sigma;=0.28). For patterns 1..16: &mu;=1.65
                            (&sigma;=0.27).
                            Significance analyses on rating deviations of different melodies and sound parameters lead
                            to the following conclusions:
                        </p>

                        <p class="text">
                            <font-awesome-icon icon="check"/>
                            Ascending melodies were perceived as more trustworthy than descending ones.
                        </p>
                        <p class="text">
                            <font-awesome-icon icon="check"/>
                            Major mode audio patterns were perceived as more trustworthy than patterns in minor mode.
                        </p>
                        <p class="text">
                            <font-awesome-icon icon="times"/>
                            Valley-shaped melodies were not perceived as more trustworthy than simply ascending
                            melodies.
                        </p>
                        <p class="text">
                            <font-awesome-icon icon="times"/>
                            Higher pitch did not result in higher perceived trustworthiness.
                        </p>
                        <p class="text">
                            <font-awesome-icon icon="times"/>
                            Faster tempo did not result in a higher level of perceived trustworthiness.
                        </p>

                        <p class="text">From our results we conclude that specific audio parameters like melody or mode can be used
                            for trustworthy interaction design. Our findings also indicate possible correlations
                            between individual user characteristics and audio parameters aside from mode and melody.
                            We expect our findings to serve as base for context-specific research of
                            non-verbal audio trust cues.</p>
                        <p class="text">For a detailed description of all results, analyses and conclusions please have a look at the
                            <a class="link" target="_blank" href="https://dl.acm.org/doi/abs/10.1145/3334480.3382848">
                                research paper</a>.</p>
                    </KGridCell>

                    <KGridCell class="img-col" align="start" justify="center">
                        <img src="@/assets/trust-sounds/ratings_total_19.png"/>
                        <p class="text caption">Mean trust ratings for all 19 sound patterns.
                            Grouped by melodies with each group containing a variant with high pitch,
                            C-minor mode and low tempo. Trust rating range: 0..3.</p>
                    </KGridCell>
                </KGrid>

                <!--
                <KGrid col-min="200" col-gap="20" row-gap="20" align="start" justify="start">
                    <KGridCell class="img-col-quad" align="start" justify="center">
                        <img src="@/assets/trust-sounds/melodies.png"/>
                        <p class="caption">Mean trust ratings for all 19 sound patterns.
                            Grouped by melodies with each group containing a variant with high pitch,
                            C-minor mode and low tempo. Trust rating range: 0..3.</p>
                    </KGridCell>
                    <KGridCell class="img-col-quad" align="start" justify="center">
                        <img src="@/assets/trust-sounds/parameters.png"/>
                        <p class="caption">Mean trust ratings for all 19 sound patterns.
                            Grouped by melodies with each group containing a variant with high pitch,
                            C-minor mode and low tempo. Trust rating range: 0..3.</p>
                    </KGridCell>
                </KGrid>-->

            </div>

            <div class="spacer-30"></div>

            <div class="paper-section" ref="sources">
                <h3>Sources</h3>
                <p class="text">Below you can find the sources cited in our paper.
                    Due to the condensed content, the sections above only refer to some of them.</p>
                <p class="text source" v-for="(src, i) in sources" :key="i">
                    [{{i+1}}] {{src}}
                </p>
            </div>


            <div class="spacer-100"></div>
        </PaperLayout>
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
    export default class TrustSounds extends Vue {
        sources: any[] = [
            "Pascal Belin, Bibi Boehme, and Phil McAleer. 2017. The sound of trustworthiness: Acoustic-based modulation of perceived voice personality. PLoS One 12, 10 (Oct. 2017), e0185651.",
            "Anna Bramwell-Dicks, Helen Petrie, Alistair D N Edwards, and Christopher Power. 2013. Affective Musical Interaction: Influencing Users’ Behaviour and Experiences with Music. In Music and Human-Computer Interaction, Simon Holland, Katie Wilkie, Paul Mulholland, and Allan Seago (Eds.). Springer London, London, 67–83.",
            "Tuomas Eerola, Anders Friberg, and Roberto Bresin. 2013. Emotional expression in music: contribution, linearity, and additivity of primary musical cues. Front. Psychol. 4 (July 2013), 487.",
            "Karmen Franinovic ́ and Stefania Serafin. 2013. Sonic Interaction Design. MIT Press.",
            "Alf Gabrielsson and Erik Lindström. 2010. The role of structure in the musical expression of emotions. Handbook of music and emotion: Theory, research, applications. 975 (2010), 367–400.",
            "David Gefen, Izak Benbasat, and Paul A Pavlou. 2008. A Research Agenda for Trust in Online Environments. Journal of Management Information Systems 24, 4 (2008), 275–286.",
            "Li Gong. 2008. How social is social responses to computers? The function of the degree of anthropomorphism in computer representations. Comput. Human Behav. 24, 4 (July 2008), 1494–1509.",
            "Brian Daniel Green. 2010. Applying human characteristics of trust to animated anthropomorphic software agents. State University of NY at Buffalo.",
            "D Harrison McKnight and Norman L Chervany. 2001. Trust and Distrust Definitions: One Bite at a Time. In Trust in Cyber-societies. Springer Berlin Heidelberg.",
            "Renate Häuslschmid, Max von Bülow, Bastian Pfleging, and Andreas Butz. 2017. SupportingTrust in Autonomous Driving. In Proceedings of the 22Nd International Conference on Intelligent User Interfaces (IUI ’17). ACM, New York, NY, USA, 319–329.",
            "Kevin Anthony Hoff and Masooda Bashir. 2015. Trust in automation: integrating empirical evidence on factors that influence trust. Hum. Factors 57, 3 (May 2015), 407–434.",
            "Eun-Sook Jee, Yong-Jeon Jeong, Chong Hui Kim, and Hisato Kobayashi. 2010. Sound design for emotion and intention expression of socially interactive robots. Intelligent Service Robotics 3, 3 (July 2010), 199–206.",
            "John D Lee and Katrina A See. 2004. Trust in automation: designing for appropriate reliance. Hum. Factors 46, 1 (2004), 50–80.\n",
            "J David Lewis and Andrew Weigert. 1985. Trust as a Social Reality. Soc. Forces 63, 4 (1985), 967–985.",
            "Roger C Mayer, James H Davis, and F David Schoorman. 1995. An Integrative Model Of Organizational Trust. AMRO 20, 3 (July 1995).\n",
            "Phil McAleer, Alexander Todorov, and Pascal Belin. 2014. How do you say ’hello’? Personality impressions from brief novel voices. PLoS One 9, 3 (March 2014).",
            "Richard Pak, Nicole Fink, Margaux Price, Brock Bass, and Lindsay Sturre. 2012. Decision support aids with anthropomorphic characteristics influence trust and performance in younger and older adults. Ergonomics 55, 9 (July 2012), 1059–1072.",
            "Rosalind Wright Picard and Others. 1995. Affective computing. (1995).",
            "Cambridge University Press. 2019a. Cambridge Dictionary. https://dictionary.cambridge.org/",
            "Oxford University Press. 2019b. Oxford English Dictionary. https://dictionary.cambridge.org/",
            "Sonia Sousa, David Lamas, and Paulo Dias. 2014. A Model for Human-Computer Trust. In Learning and Collaboration Technologies. Designing and Developing Novel Learning Experiences. 128–137.",


        ];

        melodies: any[] = [{
            description: "asc C ▽ +",
            img: "notes_1"
        }, {
            description: "asc C ▲ +",
            img: "notes_2"
        }, {
            description: "asc Cm ▽ +",
            img: "notes_3"
        }, {
            description: "asc C ▽ -",
            img: "notes_1"
        }, {
            description: "valley C ▽ +",
            img: "notes_5"
        }, {
            description: "valley C ▲ +",
            img: "notes_6"
        }, {
            description: "valley Cm ▽ +",
            img: "notes_7"
        }, {
            description: "valley C ▽ -",
            img: "notes_5"
        }, {
            description: "arch C ▽ +",
            img: "notes_9"
        }, {
            description: "arch C ▲ +",
            img: "notes_10"
        }, {
            description: "arch Cm ▽ +",
            img: "notes_11"
        }, {
            description: "arch C ▽ -",
            img: "notes_9"
        }, {
            description: "desc C ▽ +",
            img: "notes_16"
        }, {
            description: "desc C ▲ +",
            img: "notes_14"
        }, {
            description: "desc Cm ▽ +",
            img: "notes_15"
        }, {
            description: "desc C ▽ -",
            img: "notes_16"
        }, {
            description: "Andr. C ▲ +",
            img: "notes_android"
        }, {
            description: "iOS C ▲ +",
            img: "notes_apple"
        }, {
            description: "test C ▲ +",
            img: "notes_5"
        }
        ];
        authors: any[] = [{
            name: "Matthias Schmidmaier",
            affiliation: "LMU Munich | TAWNY",
            location: "Munich, Germany",
            email: "matthias.schmidmaier@ifi.lmu.de"
        }, {
            name: "Dominik Maurice Runge",
            affiliation: "LMU Munich",
            location: "Munich, Germany",
            email: "dom.runge@campus.lmu.de"
        }, {
            name: "Heinrich Hußmann",
            affiliation: "LMU Munich",
            location: "Munich, Germany",
            email: "hussmann@ifi.lmu.de"
        }];

        curPlaying = 0;
        curStyle = 'Piano';
        audio: any;

        playSound(i: number, style = "Piano") {
            if (!this.audio) {
                this.audio = this.$refs.audioElement;
                //this.audio.onended = this.onPlaying(0);
            }

            // return if already playing
            /*if(this.curStyle === style && this.curPlaying === i) {
                return;
            }*/

            this.curStyle = style;
            this.audio.src = require("@/assets/trust-sounds/TrustOK" + style + "/TrustOK" + i + ".mp3");
            this.audio.load();
            this.audio.play();
            this.onPlaying(i);
        }

        onPlaying(i: number) {
            this.curPlaying = i;
        }


        scrollTo(refName: string) {
            const element = this.$refs[refName];
            //element.scrollIntoView();
            //console.log(element);
            //element.scrollIntoView({block: "start", behavior: "smooth"});
           // window.scrollTo(0, element.scrollTop);
        }
    }

</script>

<style scoped lang="scss">
    @import "@/scss/_styles.scss";

    $sound-cell-width: 100px;

    .header-img {
        width: 100%;
        max-width: 500px;
    }

    .sound-cell {
        width: $sound-cell-width;
        border: 1px solid #f2f2f2;
        border-radius: 5px;
        position: relative;

        box-shadow: none;
        -webkit-transition: box-shadow ease-in-out 0.8s;
        -moz-transition: box-shadow ease-in-out 0.8s;
        transition: box-shadow ease-in-out 0.8s;

        @media(hover: hover) {
            &:hover {
                cursor: pointer;
                background-color: #f9f9f9;
            }
        }

        &.playing {
            box-shadow: inset $sound-cell-width 0 0 0 #f1eaff;
        }

        .index {
            position: absolute;
            float: left;
            left: 6px;
            font-size: .8em;
        }

        .description {
            text-align: start;
            padding-left: 25px;
            font-size: .7em;
        }

        img {
            width: 70%;
            opacity: .75;
        }
    }

    .img-col-quad {
        img {
            width: 200px;
        }

    }

    .img-col {
        width: 80%;
        max-width: 250px;

        img {
            width: 100%;
        }
    }

    span.hl {
        font-weight: bold;
    }

</style>

