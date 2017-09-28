<template>
<div class="multipane-resizer"><slot></slot></div>
</template>

<style lang="scss">
.multipane > div {
  position: relative;
  z-index: 1;
}

.multipane-resizer {
  display: block;
  position: relative;
  z-index: 2;
}

.layout-h > .multipane-resizer {
  width: 100%;
  height: 10px;
  margin-top: -10px;
  top: 5px;
  cursor: row-resize;
}

.layout-v > .multipane-resizer {
  width: 10px;
  height: 100%;
  margin-left: -10px;
  left: 5px;
  cursor: col-resize;
}
</style>
