<template>
    <div class="basic-layout">
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

    @Component({
        components: {}
    })
    export default class MainLayout extends Vue {
    }
</script>

<style scoped lang="scss" src="./basicLayout.scss">
</style>
