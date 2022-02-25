<template>
    <MainLayout>
        <div class="students-container">
            <Tile class="tile-item" title="Topics" text="Current topics for thesis, practical courses or other forms of collaboration"
                  link="exposee"></Tile>
            <Tile class="tile-item"  title="How to write" text="Some basic guidelines for writing a master or bachelor thesis"
                  link="how-to-write"></Tile>
        </div>
    </MainLayout>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import MainLayout from "@/components/main-layout/MainLayout.vue";
    import Tile from "@/components/main-layout/tile/Tile.vue";

    @Component({
        components: {MainLayout, Tile}
    })
    export default class Students extends Vue {

    }
</script>

<style scoped lang="scss">
    @import "@/scss/_styles.scss";

    .students-container {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        align-content: center;
        justify-items: center;
        justify-content: center;

        .tile-item {
            margin: 10px;
        }
    }

</style>
