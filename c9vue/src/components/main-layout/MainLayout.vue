<template>
    <div class="main-layout">

        <div class="header-container">
            <div class="header">
                <div class="nav-left">
                    <NavButton text="Home" link="/"></NavButton>
                </div>

                <div class="nav-right">
                    <NavButton text="4 Students" link="/students"></NavButton>
                    <NavButton text="Pub" link="/trustsounds"></NavButton>
                </div>
            </div>
        </div>

        <div class="content">
            <slot></slot>
        </div>

        <div class="footer">
            <router-link to="/" class="link">Home</router-link>
            <router-link to="/impressum" class="link">Impressum</router-link>
            <router-link to="/privacy" class="link">Datenschutz</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import KGrid from "@/components/k-grid/KGrid.vue";
    import KGridCell from "@/components/k-grid/KGridCell.vue";
    import NavButton from "@/components/main-layout/nav-button/NavButton.vue";

    @Component({
        components: {KGridCell, KGrid, NavButton}
    })
    export default class MainLayout extends Vue {
        @Prop() private subTitle!: string;
    }
</script>

<style scoped lang="scss" src="./mainLayout.scss">
</style>
