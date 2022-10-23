<template>
    <div class="row m-0 p-0 d-block d-md-none bg-dark">
          <Links class="row-nav" />
    </div>
</template>


<script>

export default ({
    data() {
        
    },
})
</script>


<style lang="scss" >
.row-nav {
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  padding: 0.5em !important;

  .links {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    padding-bottom: 0.5em;
    a {
      min-width: 100px;
      padding: 0.5em 0;
      align-self: center;
      line-height: 0.5em;
      color: white;
      text-decoration: none;
      transition: (
        color 200ms ease-out,
        padding 200ms ease-out
      );
      &:hover, &:active, &.router-link-active {
        padding: 0.5em 0.5em;
        color: gold;
      }
    }
    .material-icons {
      padding-bottom: 0.35em;
    }

    .text {
      white-space: pre;
      font-size: 0.75em;
      text-transform: uppercase;
      font-weight: lighter;

      &:before {
        content: "\A";
      }
    }
  }
}
</style>
