<template>
    <multipane layout="vertical" class="container">
        <div class="left">
            <h6 class="title is-6">Pane 1</h6>
        </div>
        <multipane-resizer></multipane-resizer>
        <multipane layout="horizontal" class="right">
            <div class="top">
              <h6 class="title is-6">Pane 2</h6>
            </div>
            <multipane-resizer></multipane-resizer>
            <div class="bottom">
              <h6 class="title is-6">Pane 3</h6>
            </div>
        </multipane>
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

<style>
.container {
  height: 600px;
  width: 100%;
}

.left {
  width: 50%;
  min-width: 20%;
  max-width: 80%;
  height: 600px;
  border: 1px solid #ccc;
  background: #eee;
}

.right {
  flex-grow: 1;
  height: 600px;
  border: 1px solid #ccc;
  background: #eee;
}

.top {
  height: 300px;
  min-height: 20%;
  max-height: 80%;
  width: 100%;
  border: 1px solid #ccc;
  background: #eee;
}
.bottom {
  flex-grow: 1;
  width: 100%;
  border: 1px solid #ccc;
  background: #eee;
}
</style>