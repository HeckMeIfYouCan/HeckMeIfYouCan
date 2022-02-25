<template>
    <div class="affective-text">

        <!-- twitter style-->
        <template  v-if="style == 'twitter'">
            <div class="tweet">
                <div class="user">
                    {{userInitials}}
                </div>
                <div class="text">
                    <div class="name">
                        {{userName}} <span class="id">{{userShort}}</span>
                    </div>
                    <div class="message">
                        {{currentString}}
                    </div>
                </div>
            </div>

            <Transition name="fade">
                <button class="flat-btn play-btn" @click="play()" v-show="!isPlaying">
                    <font-awesome-icon class="icon" :icon="'circle-play'"/>
                </button>
            </Transition>
        </template>

        <!-- iMessage style -->
        <template  v-if="style == 'iMessage'">
            <div class="iMessage">
                <Transition name="fade">
                    <div class="message" v-if="isPlaying || currentString != ''">
                        {{currentString}}
                    </div>
                </Transition>
            </div>

            <Transition name="fade">
                <button class="flat-btn play-btn" @click="play()" v-show="!isPlaying">
                    <font-awesome-icon class="icon" :icon="'circle-play'"/>
                </button>
            </Transition>
        </template>

        <!-- iMessage interactive -->
        <template  v-if="style == 'iMessageInteractive'">
            <div class="iMessageInteractive">

                <div class="sentRow">
                    <Transition name="fade">
                        <div class="sentMsg" v-show="iMessageSentMsg != ''">
                            {{iMessageSentMsg}}
                        </div>
                    </Transition>
                </div>

                <div class="answerRow">
                    <Transition name="fade">
                        <div class="message" v-if="currentString != ''">
                            {{currentString}}
                        </div>
                    </Transition>
                    <!--
                    <div class="isWriting" v-if="isPlaying && isWriting">
                        <font-awesome-icon class="icon" :icon="'circle'"/>
                        <font-awesome-icon class="icon" :icon="'circle'"/>
                        <font-awesome-icon class="icon" :icon="'circle'"/>
                    </div>
                    <div class="message" v-if="(isPlaying && !isWriting) || currentString != ''">
                        {{currentString}}
                    </div>
                    -->
                </div>

                <div class="inputRow">
                    <input class="msgInput" v-model="iMessageInput" placeholder="New message">
                    <Transition name="fade">
                        <button class="flat-btn send-btn" @click="send()">
                            <font-awesome-icon class="icon" :icon="'paper-plane'"/>
                        </button>
                    </Transition>
                </div>
            </div>
        </template>

    </div>

</template>

<script lang="ts">
    import { defineComponent, onMounted, computed, watch, ref, onBeforeUnmount} from "vue";

    export default defineComponent({
        name: 'AffectiveText',
        emits: ['onAnimationEnd'],
        props: {
            id: String,
            style: String,
            message: String,
            charInterval: {
                type: Number,
                required: true
            },
            delay: {
                type: Number,
                required: true,
                default: 0
            },
            userInitials: {
                type: String,
                required: false,
                default: 'CS'
            },
            userName: {
                type: String,
                required: false,
                default: 'C. Schmidt'
            },
            userShort: {
                type: String,
                required: false,
                default: '@cschmidt'
            }
        },

        setup(props, context) {
            // variables
            let timer = -1;
            let isPlaying = ref(false);
            let isWriting = ref(false);
            let charIndex = ref(0);
            let playCount = ref(0);
            let tBuffer = 0;
            let tRedraw = 0;
            let tAnimation = ref(0);
            let redrawAnimation: any;
            let currentString = computed(() => {
                if (props.message != undefined && charIndex.value >= 0 ){
                    return props.message.substring(0, charIndex.value);
                }
                return '';
            });
            let iMessageInput = ref('');
            let iMessageSentMsg = ref('');

            // hooks n watcher
            onMounted(() => {
                console.log("mounted");
            })
            onBeforeUnmount(() => {
                stop();
            })

            // methods
            function play() {
                if (!isPlaying.value) {
                    charIndex.value = 0;
                    isPlaying.value = true;
                    if (props.message != undefined ) {

                        // timer
                        // timer = setInterval(() => {
                        //     if (charIndex.value >= props.message.length) {
                        //         stop();
                        //         playCount.value++;
                        //         context.emit('onAnimationEnd', {
                        //             id: props.id,
                        //             value: playCount.value
                        //         });
                        //     } else {
                        //         charIndex.value++;
                        //     }
                        // }, props.charInterval);

                        // animationFrame
                        tAnimation.value = 0;
                        tRedraw = 0;
                        tBuffer = 0;
                        isWriting.value = false;
                        redrawAnimation = animationLoop();
                    }
                }
            }

            function stop() {
                isPlaying.value = false;
                if (timer) {
                    clearInterval(timer);
                }
                if (redrawAnimation) {
                    cancelAnimationFrame(redrawAnimation);
                }
            }

            function send() {
                iMessageSentMsg.value = iMessageInput.value;
                iMessageInput.value = '';
                play();
            }

            function animationLoop() {
                if(isPlaying.value) {
                    // get current date, get delta to last frame
                    const t = Date.now();
                    if (tBuffer <= 0) {
                        tBuffer = t;
                        tRedraw = 0;
                    }
                    const dt = t - tBuffer;

                    // update at specified rate
                    tBuffer = t;
                    tRedraw += dt;
                    if (tRedraw >= 30) {

                        // wait until delay is over (or undefined)
                        if (tAnimation.value <= props.delay) {
                            isWriting.value = true;
                        }


                        if (tAnimation.value >= props.delay) {
                            isWriting.value = false;
                            // inc charIndex at charInterval
                            const p = Math.round((tAnimation.value - props.delay) / props.charInterval);
                            if (p != charIndex.value) {
                                charIndex.value = p;
                                //console.log('redraw ' + p);
                            }

                            // stop
                            if (props.message == undefined || charIndex.value >= props.message.length) {
                                stop();
                                playCount.value++;
                                context.emit('onAnimationEnd', {
                                    id: props.id,
                                    value: playCount.value
                                });
                            }
                        }

                        // reset redraw buffer
                        tAnimation.value += tRedraw;
                        tRedraw = 0;
                    }

                    // next frame
                    requestAnimationFrame(animationLoop);
                }
            }

            // return data
            return {
                charIndex,
                currentString,
                timer,
                isPlaying,
                playCount,
                tRedraw,
                tBuffer,
                tAnimation,
                redrawAnimation,
                isWriting,
                iMessageInput,
                iMessageSentMsg,

                play,
                stop,
                animationLoop,
                send
            }
        }
    })
</script>

<style lang="scss" scoped>
    @import "@/scss/_styles.scss";
    @import "@/components/survey/survey.scss";

    .affective-text {
        width: 100%;
        min-height: 80px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #f6f6f6;
        background-color: #fcfcfc;
        border-radius: 4px;
        padding: 8px;
        box-sizing: border-box;

        .play-btn {
            padding: 8px;
            background-color: transparent;

            .icon {
                font-size: 42px;
                color: $button-bg;
            }

            &:hover {
                .icon {
                    font-size: 42px;
                    color: $button-bg-hover;
                }
            }
        }

        .tweet {
            height: 40px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            column-gap: 8px;

            .user {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #333;
                color: #999;
                text-align: center;
                font-weight: bold;
                line-height: 40px;
            }

            .text {
                .name {
                    font-weight: bold;
                    .id {
                        color: #999;
                        font-weight: 500;
                    }
                }
                .message {
                    width: 220px;
                    font-size: 18px;
                    color: #666;
                    text-align: left;
                }
            }
        }

        .iMessage {
            .message {
                min-width: 30px;
                height: 28px;
                background-color: #eee;
                font-size: 18px;
                color: #666;
                text-align: left;
                border-radius: 18px;
                padding: 4px 18px 4px 18px;
                display:flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
            }
            .isWriting {
                min-width: 30px;
                height: 28px;
                background-color: #999;
                font-size: 6px;
                color: #fafafa;
                border-radius: 18px;
                padding: 4px 18px 4px 18px;

                display:flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                column-gap: 5px;

                animation-name: writingAnimation;
                animation-duration: 1s;
                animation-iteration-count: infinite;
            }

            @keyframes writingAnimation {
                0%   {color:#fafafa;}
                25%  {color:#eaeaea;}
                50%  {color:#eaeaea;}
                75%  {color:#fafafa;}
            }
        }

        .iMessageInteractive {
            width: 100%;
            min-height: 140px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;
            row-gap: 8px;

            .sentRow {
                .sentMsg {
                    min-width: 30px;
                    height: 28px;
                    background-color: $button-bg;
                    font-size: 18px;
                    color: #fafafa;
                    text-align: right;
                    border-radius: 18px;
                    padding: 4px 18px 4px 18px;
                    display:flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                }
            }

            .answerRow {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: flex-start;

                .message {
                    min-width: 30px;
                    height: 28px;
                    background-color: #eee;
                    font-size: 18px;
                    color: #666;
                    text-align: left;
                    border-radius: 18px;
                    padding: 4px 18px 4px 18px;
                    display:flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                }
            }

            .inputRow {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                column-gap: 8px;

                .msgInput {
                    width: 220px;
                    height: 30px;
                    background-color: #fafafa;
                    border-radius: 18px;
                    border: 1px solid #ddd;
                    padding: 4px 18px 4px 18px;
                    font-size: 18px;
                    color: #666;
                    font-family: inherit;

                    &:focus {
                        outline: none;
                        border: 1px solid $ui-color;
                    }
                }

                .send-btn {
                    width: 60px;
                    font-size: 24px;
                    background: none;
                    padding: 10px 16px 10px 16px;
                    color: $button-bg;
                }
            }
        }

        .fade-enter-active,
        .fade-leave-active {
            transition: opacity 300ms ease;
        }
        .fade-enter-from,
        .fade-leave-to {
            opacity: 0;
        }
    }
</style>
