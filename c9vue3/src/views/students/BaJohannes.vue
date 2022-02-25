<template>
    <div class="main-container">
        <div class="main-content ba-survey">
            <!--<h1>Study</h1>-->

            <!-- WELCOME -->
            <div class="survey-site" v-if="ready && currentSession.state == SessionState.TERMS">
                <!-- content -->
                <div class="survey-content">
                    <h1>Welcome</h1>
                    <p>
                        This study is part of a Bachelor's Thesis at the Institute of Informatics
                        of the Ludwig-Maximillians-Universität.
                    </p>
                    <ul>
                        <li>the study lasts ca. 5-10 minutes</li>
                        <li>participation is anonymous</li>
                        <li>we only collect survey data</li>
                        <li>a conclusion about your identity is not possible</li>
                        <li>please read all instructions carefully</li>
                        <li>if you have questions, write to <a href="mailto:{{email}}">{{email}}</a></li>
                    </ul>

                    <br>
                    <h2>Your task</h2>
                    <p>
                        In this study, we want to test the <b>non-verbal effect</b> of animated text messages.
                    </p>
                    <ul class="task">
                        <li>
                            you will see {{surveyDataFiltered.length}} different animated text messages
                        </li>
                        <li>
                            scenario: imagine that these messages are published by another person
                        </li>
                        <li>
                            after each message, we ask you to <b>rate how you perceived</b> the animation:<br>
                            &rarr; did it appear rather positive or negative, calm or excited, shy or dominant, insecure or confident
                        </li>
                    </ul>

                    <p>
                        <br>
                        Thank you for your participation :)
                        <br>
                        Press 'Continue' to start.
                    </p>
                </div>
            </div>

            <!-- DEMOGRAPHICS -->
            <div class="survey-site" v-if="ready && (currentSession.state === SessionState.SURVEY_DEMOGRAPHIC)">
                <!-- content -->
                <div class="survey-content">
                    <h1>About you</h1>
                    <p>Please answer the following questions.</p>
                    <SurveyInput id="age"
                        question="How old are you?"
                        inputType="number"
                        placeholder="age"
                        :mandatory="true"
                        @onSurveyInput="updateSurveyData('age', $event)">
                    </SurveyInput>
                    <SurveyInput id="gender"
                        question="What gender do you identify yourself with?"
                        inputType="text"
                        placeholder="gender"
                        :mandatory="true"
                        @onSurveyInput="updateSurveyData('gender', $event)">
                    </SurveyInput>

                    <SurveyLikert id="musical"
                        :mandatory="true"
                        question="Would you consider yourself to have a good perception of music?"
                        :labels="['not at all', 'slightly', 'neutral', 'very', 'very much']"
                        @onSurveySelection="updateSurveyData('musical', $event)">
                    </SurveyLikert>

                    <SurveyLikert id="tech"
                        :mandatory="true"
                        question="How familiar with tech would you consider yourself?"
                        :labels="['not at all', 'slightly', 'neutral', 'very', 'very much']"
                        @onSurveySelection="updateSurveyData('tech', $event)">
                    </SurveyLikert>
                </div>
            </div>

            <!-- SURVEY TASKS -->
            <template v-for="(s, i) in surveyDataFiltered">
                <div class="survey-site"  v-if="ready && s.id == currentSession.state && !s.im" :key="i">


                    <!-- content -->
                    <div class="survey-content">
                        <h1>Task {{currentSession.states.indexOf(currentSession.state)}}/{{surveyDataFiltered.length}}</h1>
                        <p>
                            {{taskIntro}}
                        </p>

                        <AffectiveText id="twitter"
                            :message="s.message"
                            :style="'twitter'"
                            :delay="250"
                            userInitials="U"
                            userName="user"
                            userShort="@usr123"
                            :charInterval="s.charInterval"
                            @onAnimationEnd="updateSurveyData('numPlayed', $event)">
                        </AffectiveText>
                        <!--<AffectiveText id="iMessage"
                            :message="s.message"
                            :style="'iMessage'"
                            :delay="250"
                            :charInterval="s.charInterval"
                            @onAnimationEnd="updateSurveyData('numPlayed', $event)">
                        </AffectiveText>-->
                        <!-- AffectiveText id="iMessageInteractive"
                            message="This is my fancy text."
                            :style="'iMessageInteractive'"
                            :delay="2000"
                            :charInterval="200"
                            @onAnimationEnd="updateSurveyData('numPlayed', $event)">
                        </AffectiveText -->
                        <p :innerHTML="questionRate">
                            <!-- How did the text animation appear to you? -->
                            <!-- How did you perceive text animation?-->
                            <!-- How would you describe the expression of the animation.-->
                            <!-- Rate the non-verbal effect of the text animation -->
                            <!-- What features would you assign to the sender of the text animation above? -->
                        </p>

                        <SurveyLikert id="arousal"
                            question=""
                            :mandatory="true"
                            :slim="true"
                            :connected="true"
                            :labels="['calm', '', '', '', 'excited']"
                            @onSurveySelection="updateSurveyData('arousal', $event)">
                        </SurveyLikert>

                        <SurveyLikert id="valence"
                            question=""
                            :mandatory="true"
                            :slim="true"
                            :connected="true"
                            :labels="['negative', '', '', '', 'positive']"
                            @onSurveySelection="updateSurveyData('valence', $event)">
                        </SurveyLikert>

                        <SurveyLikert id="confidence"
                            question=""
                            :mandatory="true"
                            :slim="true"
                            :connected="true"
                            :labels="['insecure', '', '', '', 'confident']"
                            @onSurveySelection="updateSurveyData('confidence', $event)">
                        </SurveyLikert>

                        <SurveyLikert id="dominance"
                            question=""
                            :mandatory="true"
                            :slim="true"
                            :connected="true"
                            :labels="['shy', '', '', '', 'dominant']"
                            @onSurveySelection="updateSurveyData('dominance', $event)">
                        </SurveyLikert>

                        <SurveyText id="description"
                            :question="questionInput"
                            :mandatory="false"
                            :rows="3"
                            @onSurveyTextInput="updateSurveyData('description', $event)">
                        </SurveyText>

                        <!--
                        <SurveyTags id="tags"
                            question="Select some tags."
                            :tags="descriptorTags"
                            :mandatory="true"
                            :disabled="s.numPlayed < 1"
                            @onSurveyTagSelection="updateSurveyData('tags', $event)">
                        </SurveyTags>
                        -->
                    </div>
                    </div>
                    <div class="survey-site"  v-if="ready && s.id == currentSession.state && s.im" :key="i">

                    <div class="survey-content">
                        <h1>Task {{currentSession.states.indexOf(currentSession.state)}}/{{surveyDataFiltered.length}}</h1>
                        <p>
                            {{taskIntro}}
                        </p>

                        <SurveyVideo id="video"
                            :videoDur="s.duration"
                            :videoFile="s.videoFile"
                            :maxPlay="1"
                            :disabled="false"
                            @onSurveyVideo="updateSurveyData('numPlayed', $event)">
                        </SurveyVideo>

                        <p><br>
                            {{questionRate}}
                            <!--<br><i>Note: The display service (iMessage) is just used for presentation and should not have an influence on your decision making. </i>-->
                        </p>

                        <SurveyLikert id="arousal"
                            question=""
                            :mandatory="true"
                            :slim="true"
                            :connected="true"
                            :labels="['calm', '', '', '', 'excited']"
                            @onSurveySelection="updateSurveyData('arousal', $event)">
                        </SurveyLikert>

                        <SurveyLikert id="valence"
                            question=""
                            :mandatory="true"
                            :slim="true"
                            :connected="true"
                            :labels="['negative', '', '', '', 'positive']"
                            @onSurveySelection="updateSurveyData('valence', $event)">
                        </SurveyLikert>

                        <SurveyText id="description"
                            :question="questionInput"
                            :mandatory="false"
                            :rows="3"
                            @onSurveyTextInput="updateSurveyData('description', $event)">
                        </SurveyText>
                    </div>

                </div>
            </template>

            <!-- END -->
            <div class="survey-site" v-if="ready && currentSession.state == SessionState.END">
                <!-- content -->
                <div class="survey-content">
                    <h1>End</h1>
                    <p>
                        Thank you for your participation.
                    </p>
                </div>
            </div>

            <!-- controls -->
            <div class="survey-controls">
                <p class="snack">
                    {{(!stateValid ? 'please answer all mandatory (*) questions' : '')}}
                </p>
                <div class="btn-row">
                    <button class="flat-btn survey-btn"
                        v-if="showBackButton"
                        @click="next(-1)" >
                        Back
                    </button>
                    <button class="flat-btn survey-btn"
                        v-if="showContinueButton"
                        @click="onContinue()"
                        :disabled="!stateValid">
                        Continue
                    </button>
                </div>
            </div>

            <div class="debug" v-if="debug">
                fb: {{currentSession.id}}<br>
                tic: {{currentSession.tic}}<br>
                {{currentSession.createdAt}}<br>
                {{currentSession.state}}<br>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script lang="ts">

    import { defineComponent, ref, reactive, watch, onMounted, computed} from "vue";
    import { useRoute, useRouter } from 'vue-router'
    import Footer from "@/components/Footer.vue"; // @ is an alias to /src
    import SurveyLikert from "@/components/survey/likert/SurveyLikert.vue";
    import SurveyInput from "@/components/survey/input/SurveyInput.vue";
    import SurveyVideo from "@/components/survey/video/SurveyVideo.vue";
    import SurveyText from "@/components/survey/text/SurveyText.vue";
    //import SurveyTags from "@/components/survey/tags/SurveyTags.vue";
    import AffectiveText from "@/views/students/affective-text/AffectiveText.vue";
    import { uuid } from 'vue-uuid';
    import { Session, SessionState, SurveyData, SurveyDataObject} from '@/firebase/firebase.types';
    import { getFirestore, doc, getDoc, getDocs, collection, Timestamp, addDoc, setDoc} from "firebase/firestore";

    export default defineComponent({
        name: 'BaJohannes',
        components: {
            SurveyLikert,
            SurveyInput,
            SurveyVideo,
            SurveyText,

            AffectiveText,
            Footer
        },
        setup() {
            // <!--
            // <DataProcessing
            //     :studyTitle="'Text Animation 2022'"
            //     :contact="'Matthias Schmidmaier'"
            //     :mail="emailMs"
            //     :studyCode="currentSession.tic.toString()"
            //     :deletionDate="'03/2023'"
            //     >
            // </DataProcessing>
            // -->

            // data
            const email = 'johannes.heckmann@campus.lmu.de';
            const emailMs = 'matthias.schmidmaier@ifi.lmu.de';
            let sessions: Session[] = [];
            const taskIntro = 'Press the play button to display an animated text message. You can repeat it as many times as you want.';
            const questionRate = '<b>Based on the text animation</b>:<br>what emotional state might be expressed?';
            const questionInput = 'What other effects or emotions would you infer from this animation? (optional)';



            // agent
            //console.log(navigator.userAgent);

            // check if there's a tic in the url - if not create a new one
            const route = useRoute();
            const router = useRouter();
            let tic: string = uuid.v4();
            if (route.query && 'tic' in route.query && route.query.tic) {
                tic = route.query.tic.toString();
            }
            // add tic to url
            router.push({
                query: {
                    tic: tic
                }
            });
            let debug = false;
            if (route.query && 'debug' in route.query) {
                debug = true;
            }

            // init firestore
            const db = getFirestore();
            console.log('fb-init');
            // todo: check if there's a session with this tic, else create a new one
            // const db = getFirestore();
            // getDocs(collection(db, 'sessions')).then((snapshot) => {
            //     snapshot.forEach((doc) => {
            //         console.log(`${doc.id} => ${doc.data()}`);
            //     })
            // })

            // setup session order
            let sessionStates: SessionState[] = [
                SessionState.TERMS,
                SessionState.SURVEY_DEMOGRAPHIC
            ]
            let shortStates: SessionState[] = [
                SessionState.SURVEY_SLOW_SHORT,
                SessionState.SURVEY_MEDIUM_SHORT,
                SessionState.SURVEY_FAST_SHORT,
                SessionState.SURVEY_NEUTRAL_SHORT
            ]
            let longStates: SessionState[] = [
                SessionState.SURVEY_SLOW_LONG,
                SessionState.SURVEY_MEDIUM_LONG,
                SessionState.SURVEY_FAST_LONG,
                SessionState.SURVEY_NEUTRAL_LONG
            ]

            let msgStates: SessionState[] = [
                SessionState.SURVEY_IM_NEUTRAL,
                SessionState.SURVEY_IM_LOUD,
                SessionState.SURVEY_IM_GENTLE,
                SessionState.SURVEY_IM_SLAM,
                SessionState.SURVEY_IM_INVISIBLE,
            ]
            shortStates = shortStates.sort(() => Math.random() - 0.5)
            longStates = longStates.sort(() => Math.random() - 0.5)
            msgStates = msgStates.sort(() => Math.random() - 0.5)


            sessionStates = sessionStates.concat(shortStates);
            sessionStates = sessionStates.concat(longStates);
            sessionStates = sessionStates.concat(msgStates);
            sessionStates.push(SessionState.END);

            const longSentence = "This is not what I expected";

            let surveyData: SurveyDataObject[] = reactive([
                {
                    id: SessionState.SURVEY_DEMOGRAPHIC,
                    age: -1,
                    gender: '',
                    musical: -1,
                    tech: -1
                },
                {
                    id: SessionState.SURVEY_NEUTRAL_SHORT,
                    message: "Hello",
                    charInterval: 0,
                    numPlayed: 0,
                    valence: -1,
                    arousal: -1,
                    confidence: -1,
                    dominance: -1,
                    description: '',
                    im: false
                },
                {
                    id: SessionState.SURVEY_SLOW_SHORT,
                    message: "Hello",
                    charInterval: 200,
                    numPlayed: 0,
                    valence: -1,
                    arousal: -1,
                    confidence: -1,
                    dominance: -1,
                    description: '',
                    im: false
                },
                {
                    id: SessionState.SURVEY_MEDIUM_SHORT,
                    message: "Hello",
                    charInterval: 125,
                    numPlayed: 0,
                    valence: -1,
                    arousal: -1,
                    confidence: -1,
                    dominance: -1,
                    description: '',
                    im: false
                },
                {
                    id: SessionState.SURVEY_FAST_SHORT,
                    message: "Hello",
                    charInterval: 50,
                    numPlayed: 0,
                    valence: -1,
                    arousal: -1,
                    confidence: -1,
                    dominance: -1,
                    description: '',
                    im: false
                },
                {
                    id: SessionState.SURVEY_NEUTRAL_LONG,
                    message: longSentence,
                    charInterval: 0,
                    numPlayed: 0,
                    valence: -1,
                    arousal: -1,
                    confidence: -1,
                    dominance: -1,
                    description: '',
                    im: false
                },
                {
                    id: SessionState.SURVEY_SLOW_LONG,
                    message: longSentence,
                    charInterval: 200,
                    numPlayed: 0,
                    valence: -1,
                    arousal: -1,
                    confidence: -1,
                    dominance: -1,
                    description: '',
                    im: false
                },
                {
                    id: SessionState.SURVEY_MEDIUM_LONG,
                    message: longSentence,
                    charInterval: 125,
                    numPlayed: 0,
                    valence: -1,
                    arousal: -1,
                    confidence: -1,
                    dominance: -1,
                    description: '',
                    im: false
                },
                {
                    id: SessionState.SURVEY_FAST_LONG,
                    message: longSentence,
                    charInterval: 50,
                    numPlayed: 0,
                    valence: -1,
                    arousal: -1,
                    confidence: -1,
                    dominance: -1,
                    description: '',
                    im: false
                },
                {
                    id: SessionState.SURVEY_IM_NEUTRAL,
                    videoFile: 'no_effect.mp4',
                    duration: 11000,
                    numPlayed: 0,
                    valence: -1,
                    arousal: -1,
                    description: '',
                    im: true
                },
                {
                    id: SessionState.SURVEY_IM_LOUD,
                    videoFile: 'im_loud.mp4',
                    duration: 10000,
                    numPlayed: 0,
                    valence: -1,
                    arousal: -1,
                    description: '',
                    im: true
                },
                {
                    id: SessionState.SURVEY_IM_GENTLE,
                    videoFile: 'im_gentle.mp4',
                    duration: 12000,
                    numPlayed: 0,
                    valence: -1,
                    arousal: -1,
                    description: '',
                    im: true
                },
                {
                    id: SessionState.SURVEY_IM_SLAM,
                    videoFile: 'im_slam.mp4',
                    duration: 8000,
                    numPlayed: 0,
                    valence: -1,
                    arousal: -1,
                    description: '',
                    im: true
                },
                {
                    id: SessionState.SURVEY_IM_INVISIBLE,
                    videoFile: 'im_invisible_ink.mp4',
                    duration: 14000,
                    numPlayed: 0,
                    valence: -1,
                    arousal: -1,
                    description: '',
                    im: true
                }
            ]);

            // create new session
            let ready = ref(false);
            let stateValid = ref(false);
            let showBackButton = ref(true);
            let showContinueButton = ref(true);
            let currentSession = reactive({
                id: '',
                tic: tic,
                createdAt: new Date(),
                updatedAt: new Date(),
                survey: {},
                states: sessionStates,
                //state: SessionState.SURVEY_NEUTRAL_LONG,
                state: SessionState.TERMS,
                info: navigator.userAgent.toString()
            });

            const ekman = ['angry','disgusted', 'afraid', 'happy', 'sad', 'suprised']
            const valenceArousalDominance = ['fun', 'exciting', 'happy', 'joy', 'cheerful', 'love', 'lovely','sentimental', 'melancholy', 'sad', 'depressing', 'mellow', 'terrible', 'shock', 'hate']



            const descriptorTags = ekman;

            // computed
            // get a filtered array of all task states
            let surveyDataFiltered = computed(() => {
                //s => s.id && msgStates.indexOf(s.id) > -1);
                return surveyData.filter(s => (msgStates.indexOf(s.id as SessionState) > -1 || shortStates.indexOf(s.id as SessionState) > -1 || longStates.indexOf(s.id as SessionState) > -1));
            });

            // watcher
            watch(() => currentSession.state, () => {
                loadedState();
            });

            // functions
            function loadedState() {
                //console.log('loaded session state ' + currentSession.state);
                if (currentSession.state == SessionState.TERMS) {
                    showBackButton.value = false;
                    showContinueButton.value = true;
                } else if (currentSession.state == SessionState.END) {
                    showBackButton.value = debug;
                    showContinueButton.value = false;
                } else {
                    showBackButton.value = debug;
                    showContinueButton.value = true;
                }
                validateState();
            };

            function validateState() {
                console.log('validate');
                let b = true;
                for (let s of surveyData) {
                    if(s.id == currentSession.state) {
                        if (currentSession.state == SessionState.SURVEY_DEMOGRAPHIC) {
                            b = s.age! > 0 && s.musical! >= 0 && s.gender! != '' && s.tech! >= 0;
                        } else if(  currentSession.state == SessionState.SURVEY_IM_NEUTRAL ||
                                    currentSession.state == SessionState.SURVEY_IM_SLAM ||
                                    currentSession.state == SessionState.SURVEY_IM_LOUD ||
                                    currentSession.state == SessionState.SURVEY_IM_GENTLE ||
                                    currentSession.state == SessionState.SURVEY_IM_INVISIBLE) {
                            b = s.valence! >= 0 && s.arousal! >= 0;
                            b = b && s.numPlayed! >= 1;
                        } else if(  currentSession.state == SessionState.SURVEY_NEUTRAL_SHORT ||
                                    currentSession.state == SessionState.SURVEY_SLOW_SHORT ||
                                    currentSession.state == SessionState.SURVEY_MEDIUM_SHORT ||
                                    currentSession.state == SessionState.SURVEY_FAST_SHORT ||
                                    currentSession.state == SessionState.SURVEY_NEUTRAL_LONG||
                                    currentSession.state == SessionState.SURVEY_SLOW_LONG||
                                    currentSession.state == SessionState.SURVEY_MEDIUM_LONG||
                                    currentSession.state == SessionState.SURVEY_FAST_LONG) {
                            b = s.valence! >= 0 && s.arousal! >= 0 && s.confidence! >= 0 && s.dominance! >= 0;
                            b = b && s.numPlayed! >= 1;
                        }
                    }
                }
                //}
                stateValid.value = b || debug;

                //const json = JSON.stringify(surveyData);
                //console.log(json);
            };

            function onContinue() {
                // store currentSession to firestore
                updateOrCreateFirebaseSession();

                // load next state
                next();
            }

            function next(step = 1) {
                // move on to next state
                if(currentSession && currentSession.state && currentSession.states)  {
                    let i = currentSession.states.indexOf(currentSession.state) + step;
                    const iMax = currentSession.states.length - 1;
                    i = i < 0 ? 0 : (i >= iMax ? iMax : i);
                    currentSession.state = currentSession.states[i];
                    window.scrollTo(0,0,);
                }
            };

            // function createFirebaseSession() {
            //     //export declare function setDoc<T>(reference: DocumentReference<T>, data: WithFieldValue<T>): Promise<void>;
            //     //const tutorialsRef = firebase.firestore().collection("/tutorials")
            //     console.log('creating new fb session');
            //     if (db) {
            //         addDoc(collection(db, 'sessions'), currentSession).then((ref) => {
            //             console.log('added new session ' + ref.id);
            //             currentSession.id = ref.id;
            //         })
            //         //setDoc(collection(db, 'sessions'), currentSession).then(() => {
            //         //     console.log('added new session')
            //         // })

            //         // get all sessions
            //         // getDocs(collection(db, 'sessions')).then((snapshot) => {
            //         //     snapshot.forEach((doc) => {
            //         //         console.log(`${doc.id} => ${doc.data()}`);
            //         //     })
            //         // });
            //     }
            // };

            function updateOrCreateFirebaseSession() {
                if(db && currentSession) {

                    // update local
                    // create json from surveyData and update currentSession
                    const json = JSON.stringify({
                        sessionId: currentSession.id,
                        tic: currentSession.tic,
                        items: surveyData
                    });
                    currentSession.survey = json;
                    currentSession.updatedAt = new Date();

                    // debug hack
                    if (currentSession.tic == 'debug-nofb') {
                        console.log("debug: not writing to fb");
                        console.log(JSON.stringify(currentSession));
                        return;
                    }

                    // update in fb
                    // if currentSession has no id, create a new entry
                    if (currentSession.id == '') {
                        addDoc(collection(db, 'sessions'), currentSession).then((ref) => {
                            console.log('added new session ' + ref.id);
                            currentSession.id = ref.id;
                        })
                    } else {
                        const docRef = doc<Session>(collection(db, 'sessions'), currentSession.id);
                        setDoc(docRef, currentSession).then(() => {
                            console.log('updated fb session');
                        });
                    }
                }
            };

            function updateSurveyData(surveyKey:string, itemData: any) {

                if(currentSession && surveyKey != '') {
                    // get survey data object with current state id (e.g. SURVEY_DEMOGRAPHIC)
                    // add itemData to object (if it has a valid key - e.g. 'age')
                    for (let sd of surveyData) {
                        if (sd.id == currentSession.state) {
                            const key = surveyKey as keyof SurveyDataObject;
                            if (key in sd) {
                                sd[key] = itemData.value;
                            }
                        }
                    }

                    // validate
                    validateState();
                }
            };

            // hooks
            onMounted(() => {
                console.log('on mounted');
                ready.value = true;
                loadedState();
            });

            return {
                email,
                emailMs,
                ready,
                sessions,
                currentSession,
                surveyData,
                surveyDataFiltered,
                stateValid,
                showBackButton,
                showContinueButton,
                descriptorTags,
                debug,
                db,
                taskIntro,
                questionRate,
                questionInput,

                SessionState,

                validateState,
                loadedState,
                next,
                onContinue,
                updateSurveyData,
                updateOrCreateFirebaseSession
            }
        }
    })
</script>

<style lang="scss" scoped>
    @import "@/scss/_styles.scss";

    .ba-survey {
        width: 100%;
        max-width: $max-content-width;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        row-gap: 20px;

        .debug {
            color: #666;
            font-size: 12px;
        }

        .task {
            border: 1px solid $ui-color;
            border-radius: 4px;
            padding: 4px;
            background-color: #f8fcff;
        }

        .survey-site {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: start;
            row-gap: 10px;
            flex-grow: 1;

            p {
                padding: 0;
                margin: 0;
            }
            ul {
                padding-left: 30px;
            }

            li {
                padding-bottom: 1px;
            }

            a {
                color: inherit;
                text-decoration: underline;
            }

            .survey-content {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                row-gap: 10px;
            }
        }

        .survey-controls {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            row-gap: 10px;
            margin: 30px 0 30px 0;

            p.snack {
                color: #666;
                font-size: $font-size-small;
                text-align: right;
            }

            .btn-row {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: flex-end;
                column-gap: 10px;
            }

            .survey-btn {
                min-width: 140px;
                min-height: 50px;
                padding: 8px 12px 8px 12px;
                letter-spacing: 1px;
            }
        }
    }

</style>
