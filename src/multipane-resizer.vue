<template>
<div class="multipane-resizer" @mousedown="onMouseDown"><slot></slot></div>
</template>
<script>
export default {
    name: 'multipane-resizer',
    methods: {
        onMouseDown({ pageX: initialPageX, pageY: initialPageY }) {
            let resizer = this.$el;
            let pane = resizer.previousElementSibling;
            this.$emit('paneResizeBeforeStart', pane, resizer, pageX, pageY);
        }
    }
}
</script>

