<template>
    <div class="nav-button">
        <router-link v-bind:to="link">
            <p class="text">{{text}}</p>
            <div class="stroke"></div>
        </router-link>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({
        components: {}
    })
    export default class NavButton extends Vue {
        @Prop() private text!: string;
        @Prop() private link?: string;
    }
</script>

<style scoped lang="scss" src="./navButton.scss">
</style>
