<template>
  <div :class="classnames" :style="{ cursor, userSelect }" @mousedown="onMouseDown">
    <slot></slot>
  </div>
</template>

<script src="./multipane.js"></script>

<style lang="scss">
.multipane {
    display: flex;

    &.layout-h {
        flex-direction: column;
    }

    &.layout-v {
        flex-direction: row;
    }
}
</style>
