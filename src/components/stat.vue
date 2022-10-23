<template>
  <div>
    <div :class="'stat ' + disabled" >
      <div :class="'component ' + color">
        <div class="stat-icon material-icons-outlined">{{ icon }}</div>
        <div class="stat-header">{{ header }}</div>
        <div v-if="body || body === 0 || sub" class="stat-body">{{ body }}</div>
        <div v-if="sub" class="small px-4">
          {{ sub }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
div.disabled {
  filter: grayscale(1) !important;
}

.stat {
  width: 100%;
  padding: 0;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: none;
  cursor: pointer;

  .component {
    text-align: center;
    padding: 1em 0;
    display: flex;
    flex-direction: column;

    .stat-icon {
      font-size: 4em;
    }
    .stat-header {
      font-size: 1em;
      padding: 0.25em 0 1em 0;
      width: 90%;
      align-self: center;
    }
    .stat-body {
      border-top: 1px solid #0f0f0f60;
      font-size: 1.5em;
      padding-top: 0.5em;
    }
  }
}
</style>

<script>
export default {
  name: "Stat Component",
  props: ["header", "icon", "body", "color", "disabled", "sub"],

};
</script>