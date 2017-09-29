<template>
<multipane class="custom-resizer" layout="vertical">
  <div class="pane">
    <div>
      <h6 class="title is-6">Pane 1</h6>
    </div>
  </div>
  <multipane-resizer></multipane-resizer>
  <div class="pane">
    <div>
      <h6 class="title is-6">Pane 2</h6>
    </div>
  </div>
  <multipane-resizer></multipane-resizer>
  <div class="pane" :style="{ flexGrow: 1 }">
    <div>
      <h6 class="title is-6">Pane 3</h6>
    </div>
  </div>
</multipane>
</template>

<script>
import { Multipane, MultipaneResizer } from '@/src';

export default {
  components: {
    Multipane,
    MultipaneResizer,
  },
};
</script>

<style lang="scss">
.custom-resizer {
  width: 100%;
  height: 400px;
}

.custom-resizer > .pane {
  text-align: left;
  padding: 15px;
  overflow: hidden;
  background: #eee;
  border: 1px solid #ccc;
}

.custom-resizer > .pane ~ .pane {
}

.custom-resizer > .multipane-resizer {
  margin: 0; left: 0;
  position: relative;

  &:before {
    display: block;
    content: "";
    width: 3px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -20px;
    margin-left: -1.5px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }

  &:hover {
    &:before {
      border-color: #999;
    }
  }
}
</style>
