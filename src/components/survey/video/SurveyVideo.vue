<template>
    <div :class="'survey-video survey-item' + (disabled ? ' disabled' : '')">
        <div class="video-container">
            <video ref="videoRef" width="370" :controls="false" playsinline muted>
                <source :src="require('@/assets/videos/'+videoFile)" type="video/mp4">
            </video>
            <canvas ref="canvasRef"
                :width="width" :height="height">
            </canvas>
        </div>

        <div class="overlay" v-if="!playing">
            <button class="flat-btn play-btn" @click="play()">
                <font-awesome-icon class="icon" :icon="'circle-play'"/>
            </button>
            <p class="question">
                {{(playCount >= 1 ? 'Please answer the questions below' : 'Press play when you are ready')}}</p>
        </div>
        <div class="overlay-disabled" v-if="disabled">
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, watch, ref} from "vue";

    export default defineComponent({
        name: 'SurveyVideo',
        emits: ['onSurveyVideo'],
        props: {
            id: String,
            videoDur: Number,
            videoFile: String,
            maxPlay: Number,
            disabled: Boolean
        },
        setup(props, context) {
            // create items based on the labels property
            // set them reactive to get view updates when they change
            const videoRef = ref<HTMLVideoElement | null>(null);
            const canvasRef = ref<HTMLCanvasElement | null>(null);
            const playbackDur = props.videoDur ? props.videoDur : 1000;
            const width = 360;
            const height = 430;
            let playing = ref(false);
            let rendering = ref(false);
            let renderBuf = ref(0);
            let playbackTime = ref(0);
            let playCount = ref(0);

            // watcher
            watch(playCount, (curValue, preValue) => {
                context.emit('onSurveyVideo', {
                    id: props.id,
                    value: curValue
                });
            });

            return {
                videoRef,
                canvasRef,
                playbackDur,
                width,
                height,
                playing,
                rendering,
                renderBuf,
                playbackTime,
                playCount
            }
        },
        mounted() {
            if (this.videoRef) {
                this.videoRef.load();
                this.videoRef.currentTime = 0;
            }
            this.startRendering();
        },
        methods: {
            play(){
                if (this.videoRef) {
                    this.videoRef.pause();
                    this.videoRef.currentTime = 0;
                    this.playbackTime = 0;
                    this.playing = true;
                    this.videoRef.play();
                }
            },
            stop() {
                this.playing = false;
                this.playbackTime = 0;
            },
            startRendering() {
                this.rendering = true;
                this.renderLoop();
            },
            renderLoop() {
                if(this.rendering) {
                    const now = Date.now();
                    const dt = now - this.renderBuf;

                    // limit render frame rate
                    if (dt > 33) {
                        this.renderBuf = now;
                        if (this.playing && this.canvasRef && this.videoRef) {
                            this.playbackTime += dt;
                            let drawVideo = true;

                            // playback complete
                            if(this.playbackTime >= this.playbackDur) {
                                this.playCount++;
                                this.stop();
                                drawVideo = false;
                            }
                            const ctx = this.canvasRef.getContext('2d');
                            if (ctx) {
                                ctx.clearRect(0, 0, this.width, this.height);
                                ctx.rect(0, 0, this.width, this.height);
                                ctx.fillStyle = '#ffffff';
                                ctx.fill();
                                if (drawVideo) {
                                    ctx.drawImage(this.videoRef, 0, 0, this.width, this.height);
                                }
                            }
                        }
                    }

                    requestAnimationFrame(this.renderLoop);
                }
            }
        }
    })
</script>

<style lang="scss" scoped>
    @import "@/scss/_styles.scss";
    @import "@/components/survey/survey.scss";

    .survey-video {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 4px;

        .video-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;

            video {
                border-radius: 4px;
                display: none;
                visibility: hidden;
            }
            canvas {
                border: none;
                margin: 0;
                padding: 0;
                outline: none;
                border-radius: 4px;
                border: 2px solid $ui-color;
            }

        }
        .overlay {
            width: 100%;
            position: absolute;
            margin: auto auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .question {
                max-width: 250px;
                margin: 8px 4px 12px 4px;
                text-align: center;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

            .play-btn {
                padding: 8px;
                background-color: transparent;

                .icon {
                    font-size: 60px;
                    color: $button-bg;
                }

                &:hover {
                    .icon {
                        font-size: 60px;
                        color: $button-bg-hover;
                    }
                }
            }
        }

    }
</style>
