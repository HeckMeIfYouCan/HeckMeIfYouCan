<template>
    <div class="paper-layout">

        <h1 class="paper-title">{{title}}</h1>

        <KGrid class="paper-authors" col-min="200" col-gap="10" row-gap="20">
            <div v-for="author in authors" :key="author.name"
                      class="author">
                <p class="name">{{ author.name }}</p>
                <p class="affiliation">{{ author.affiliation }}</p>
                <p class="location">{{ author.location }}</p>
                <p class="email"><a v-bind:href="'mailto:'+author.email"> {{author.email}}</a></p>
            </div>
        </KGrid>

        <img v-if="image!==''" class="paper-header-img" v-bind:src='"@/assets/img/"+image+""' />

        <div class="paper-section">
            <h3>Abstract</h3>
            <p class="text">{{abstract}}</p>
            <p class="text info">{{publication}}<br />{{isbn}}. <a target="_blank" v-bind:href="doi">{{doi}}</a></p>
        </div>

        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import KGrid from "@/components/k-grid/KGrid.vue";
    import KGridCell from "@/components/k-grid/KGridCell.vue";

    @Component({
        components: {KGrid, KGridCell}
    })
    export default class PaperLayout extends Vue {
        @Prop() private title!: string;
        @Prop() private authors!: any[]
        @Prop() private abstract!: string;
        @Prop() private publication!: string;
        @Prop() private isbn!: string;
        @Prop() private doi!: string;
        @Prop({default: ''}) image: string | undefined;
    }
</script>

<style lang="scss" src="./paperLayout.scss">
</style>
