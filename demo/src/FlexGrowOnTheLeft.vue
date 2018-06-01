<template>
    <multipane layout="vertical" class="container">
        <div class="left">
            <h6 class="title is-6">Pane 1</h6>
            <p class="subtitle is-6">Takes remaining available space.</p>
            <p>
              <small>
                <strong>Configured with:</strong><br/>
                flex-grow: 1<br/>
              </small>
            </p>
        </div>
        <multipane-resizer></multipane-resizer>
        <div class="right">
            <h6 class="title is-6">Pane 2</h6>
            <p class="subtitle is-6">Fluid width.</p>
            <p>
              <small>
                <strong>Configured with:</strong><br/>
               width: 400px;<br/>
              min-width: 100px;<br/>
              max-width: 800px;<br/>
              </small>
            </p>
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

<style scoped>
.container {
  height: 600px;
  width: 100%;
}

.left {
  flex-grow: 1;
  height: 600px;
  border: 1px solid #ccc;
  background: #eee;
}

.right {
  width: 400px;
  min-width: 100px;
  max-width: 800px;
  height: 600px;
  border: 1px solid #ccc;
  background: #eee;
}
</style>