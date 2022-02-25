<template>
    <div :class="'survey-input survey-item' + (disabled ? ' disabled' : '')">
        <div class="question">
            <p  :innerHTML="question"></p>
            <p v-if="mandatory">*</p>
        </div>
        <div class="input">
            <input :type="inputType" :placeholder="placeholder" v-model="value">
        </div>
        <div class="overlay-disabled" v-if="disabled">
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref, watch} from "vue";

    export default defineComponent({
        name: 'SurveyInput',
        emits: ['onSurveyInput'],
        props: {
            id: String,
            question: String,
            inputType: String,
            placeholder: String,
            mandatory: Boolean,
            disabled: Boolean
        },
        setup(props, context) {
            // define data and watchers
            const value = ref('');
            watch(value, (curValue, preValue) => {
                context.emit('onSurveyInput', {
                    id: props.id,
                    value: curValue
                });
            });

            onMounted(() => {
                console.log("mounted");
            })

            // return data
            return {
                value
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

        .input {
            margin: 0 8px 16px 8px;

            input {
                width: 200px;
                border: 1px solid #ddd;
                background-color: #fff;
                border-radius: 4px;
                font-size: $font-size;
                color: #666;
                padding: 4px 8px 4px 8px;
                box-sizing: border-box;
                font-family: inherit;

                &:focus {
                    outline: none;
                    border: 1px solid $ui-color;
                }
            }
        }
    }
</style>
