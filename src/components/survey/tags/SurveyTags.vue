<template>
    <div :class="'survey-input survey-item' + (disabled ? ' disabled' : '')">
        <div class="question">
            <p  :innerHTML="question"></p>
            <p v-if="mandatory">*</p>
        </div>
        <div class="tags">
            <div v-for="(tag, i) in tags"
                :class="'tag' + (selectedTags.indexOf(tag) > -1 ? ' selected' : '')"
                :key="i"
                @click="tapItem(tag)">
                <p>{{tag}}</p>
            </div>
        </div>
        <div class="overlay-disabled" v-if="disabled">
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, reactive, watch} from "vue";

    export default defineComponent({
        name: 'SurveyTags',
        emits: ['onSurveyTagSelection'],
        props: {
            id: String,
            question: String,
            mandatory: Boolean,
            tags: Array,
            disabled: Boolean
        },
        setup(props, context) {
            // define data and watchers
            let selectedTags :string[]= reactive([]);
            watch(selectedTags, (curValue, preValue) => {
                context.emit('onSurveyTagSelection', {
                    id: props.id,
                    value: curValue
                });
            });

            // functions
            function tapItem(tag: string) {
                if (props.tags) {
                    const i = selectedTags.indexOf(tag);
                    if (i == -1) {
                        selectedTags.push(tag)
                    }else {
                        selectedTags.splice(i, 1);
                    }
                }
            };

            // return data
            return {
                selectedTags,
                tapItem
            }
        }
    })
</script>

<style lang="scss" scoped>
    @import "@/scss/_styles.scss";
    @import "@/components/survey/survey.scss";

    .survey-input {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        border-radius: 4px;
        row-gap: 4px;

        .tags {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            column-gap: 6px;
            row-gap: 6px;
            padding: 0 4px 12px 4px;
            box-sizing: border-box;

            .tag {
                min-width: 30px;
                min-height: 22px;
                border-radius:12px;
                background-color: #f0f0f0;
                border: 1px solid #f0f0f0;
                padding: 2px 8px 2px 8px;
                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                color: #888;

                &:hover {
                    cursor: pointer;
                    background-color: #eaeaea;
                    border: 1px solid #cccccc;
                }

                p {
                    font-size: $font-size;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    -webkit-tap-highlight-color: transparent;
                }

                &.selected {
                    color: $ui-color;
                    background-color: #ecf5fb;
                    border: $ui-color 1px solid;
                }
            }
        }
    }
</style>
