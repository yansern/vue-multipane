<template>
<multipane class="horizontal-panes" layout="horizontal">
  <div class="pane" :style="{ minHeight: '100px', height: '200px', maxHeight: '300px' }">
    <div>
      <h6 class="title is-6">Pane 1</h6>
      <p class="subtitle is-6">Fixed height.</p>
      <p>
        <small>
          <strong>Configured with:</strong><br/>
          minHeight: 100px<br/>
          height: 200px<br/>
          maxHeight: 300px<br/>
        </small>
      </p>
    </div>
  </div>
  <multipane-resizer></multipane-resizer>
  <div class="pane" :style="{ height: '40%', maxHeight: '60%' }">
    <div>
      <h6 class="title is-6">Pane 2</h6>
      <p class="subtitle is-6">Fluid height.</p>
      <p>
        <small>
          <strong>Configured with:</strong><br/>
          height: 40%<br/>
          maxHeight: 60%<br/>
        </small>
      </p>
    </div>
  </div>
  <multipane-resizer></multipane-resizer>
  <div class="pane" :style="{ flexGrow: 1 }">
    <div>
      <h6 class="title is-6">Pane 3</h6>
      <p class="subtitle is-6">Takes remaining available space.</p>

      <p>
        <small>
          <strong>Configured with:</strong><br/>
          flex-grow: 1<br/>
        </small>
      </p>
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

<style>
.horizontal-panes {
  width: 100%;
  height: 600px;
  border: 1px solid #ccc;
}

.horizontal-panes > .pane {
  text-align: left;
  padding: 15px;
  overflow: hidden;
  background: #eee;
}

.horizontal-panes > .pane ~ .pane {
  border-top: 1px solid #ccc;
}
</style>
