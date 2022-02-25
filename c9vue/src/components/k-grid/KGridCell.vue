<template>
    <div :class="'k-grid-cell ' +
        (colSpan !== '' ? 'col-span-'+colSpan : '') +
        (rowSpan !== '' ? 'row-span-'+rowSpan : '')"

         :style="'' +
         (justify !== '' ? 'justify-self: '+justify+';' : '') +
         (align !== '' ? 'align-self: '+align+';' : '')">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class KGridCell extends Vue {
        @Prop({default: ''}) colSpan: string | undefined;
        @Prop({default: ''}) rowSpan: string | undefined;
        @Prop({default: ''}) justify: string | undefined;
        @Prop({default: ''}) align: string | undefined;
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/ -->
<style lang="scss">
    .k-grid-cell {

        // create span options 1 .. 12
        @for $i from 1 through 12 {
            &.col-span-#{$i} {
                grid-column: auto / span $i;
            }
            &.row-span-#{$i} {
                grid-column: auto / span $i;
            }
        }
    }
</style>
