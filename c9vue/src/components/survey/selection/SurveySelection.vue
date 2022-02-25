<template>
    <div class="survey-item">

        <div v-for="(item, i) in items" :key="i">
            {{item.text}}
        </div>

        <div class="checkbox" @click="tapItem()">
            <div class="box">
                <font-awesome-icon class="icon-check" icon="check"/>
            </div>
            <div class="label">Envisioning Information</div>
        </div>

        {{hu}}
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({
        components: {},
        props: {
            items: {
                type: Array,
                default: () => [{text:'itm1'}, {text: 'itm2'}]
            }
        }
    })
    export default class SurveySelection extends Vue {
        //@Prop() private items: Array<any> = [{text:'itm1'}, {text: 'itm2'}];
        // @Prop() private ladida = ['strone', 'strttwo'];
        @Prop() private hu: Array<any> = [];

        loadedItems: Array<any> = [];

        mounted() {
            // this.loadedItems = this.items;
            // console.log("mounted");
            // for (const item of this.items) {
            //     console.log(item.text);
            // }
        }

        tapItem() {
            console.log("tap");
        }
    }
</script>

<style scoped lang="scss">
    @import "@/components/survey/survey.scss";
    @import "@/scss/_styles.scss";

    .checkbox {
        display: flex;
        flex-direction: row;
        justify-items: start;
        align-items: start;
        column-gap: 6px;
        max-width: 150px;

        .box {
            width: 18px;
            height: 18px;
            border-radius: 3px;
            border: 1px solid #ccc;
            flex-shrink: 0;

            .icon-check {
                width: 14px;
            }
        }
        .label {
            color: black;
            font-size: 16px;
            text-align: left;
        }

        &:hover {
            cursor: pointer;
            .box {
                background-color: #eee;
            }
        }
    }
</style>
