<template>
    <div :class="'survey-likert survey-item' + (disabled ? ' disabled' : '')">

        <div class="question" v-if="question != ''">
            <p  :innerHTML="question"></p>
            <p v-if="mandatory">*</p>
        </div>

        <div class="mandatory" v-if="question == '' && mandatory">
            *
        </div>

        <div :class="'rating' + (slim ? ' slim' : '')">
            <div v-if="connected" class="connection-line">
            </div>
            <div v-for="(item, i) in dItems"
                :class="'rating-item' +
                    (item.selected ? ' selected' : '') +
                    (item.index == 0 ? ' min' : item.index == dItems.length-1 ? ' max' : '')"
                :key="i" @click="tapItem(item.index)">
                <div class="icon">
                    <font-awesome-icon :icon="item.selected ? 'circle-dot' : 'circle'"/>
                </div>
                <div class="label" :innerHTML="item.label">
                </div>
            </div>
        </div>
        <div class="overlay-disabled" v-if="disabled">
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, ref, watch} from "vue";

    export interface ILikertItem {
        index: number,
        label: string,
        selected: boolean
    }

    export default defineComponent({
        name: 'SurveyLikert',
        emits: ['onSurveySelection'],
        props: {
            id: String,
            question: String,
            labels: Array,
            mandatory: Boolean,
            disabled: Boolean,
            slim: Boolean,
            connected: Boolean
        },
        setup(props, context) {
            // create items based on the labels property
            // set them reactive to get view updates when they change
            const dItems: ILikertItem[] = [];
            const pLabels = props.labels ? props.labels : []
            let i = 0;
            for(const l of pLabels) {
                dItems.push(reactive({
                    index: i,
                    label: l as string,
                    selected: false
                }));
                i++;
            }

            // watcher
            const selection = ref(-1);
            watch(selection, (curValue, preValue) => {
                context.emit('onSurveySelection', {
                    id: props.id,
                    value: curValue
                });
            });

            // functions
            function tapItem(index: number) {
                for (const itm of dItems) {
                    itm.selected = itm.index == index;
                }
                selection.value = index;
            };

            return {
                dItems,
                selection,
                tapItem
            }
        }
    })
</script>

<style lang="scss" scoped>
    @import "@/scss/_styles.scss";
    @import "@/components/survey/survey.scss";

    .survey-likert {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        border-radius: 4px;
        row-gap: 6px;

        .rating {
            $item-width: 70px;
            max-width: 100%;
            display: flex;
            flex-direction: row;
            column-gap: 0px;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 8px;
            position: relative;

            .rating-item {
                width: $item-width;
                min-height: 60px;
                border-radius: 4px;
                outline: none;
                box-shadow: none;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                row-gap: 2px;
                position: relative;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                -webkit-tap-highlight-color: transparent;

                &:active {
                    outline: none;
                    box-shadow: none;
                }

                &:hover {
                    cursor: pointer;
                }

                .icon {
                    color: #ddd;
                }

                .label {
                    color: #666;
                    line-height: 14px;
                    font-size: $font-size-small;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    -webkit-tap-highlight-color: transparent;
                }

                // hover
                &:hover {
                    .icon {
                        color: $ui-color;
                    }
                    .label {
                        color: $ui-color;
                    }
                }

                // item selected
                &.selected {
                    .icon {
                        color: $ui-color;
                    }
                    .label {
                        color: $ui-color;
                    }
                }

                // item is min / max
                // &.min, .max {
                //     width: 120px;
                //     min-height: 40px;
                // }
                // &.min {
                //     flex-direction: row-reverse;
                //     justify-content: center;
                //     align-items: center;
                //     column-gap: 6px;
                //     .label {
                //         color: red;
                //     }
                // }
                // &.max {
                //     flex-direction: row;
                //     justify-content: center;
                //     align-items: flex-start;
                //     column-gap: 6px;
                //     .label {
                //         color: blue;
                //     }
                // }

            }

            // slim
            &.slim {
                margin: 10px 0 4px 0;

                .rating-item {
                    min-height: 40px;
                }
            }

            .connection-line {
                width: calc(100% - $item-width);
                height: 2px;
                background-color: #f0f0f0;
                position: absolute;
                top: 9px;
                left: 35px;
            }
        }
    }
</style>
