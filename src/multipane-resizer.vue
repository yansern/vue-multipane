<template>
<div :class="classnames"><slot></slot></div>
</template>

<script>
export default {
  name: 'multipane-resizer',

  props: {
    affectFollower: {
      type: Boolean,
      default: false,
    },
  },  
  computed: {
    classnames() {
      return [
        'multipane-resizer',
        this.affectFollower ? 'affect-follower' : '',
      ];
    },
  }
}
</script>