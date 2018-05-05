<template lang="pug">
  #sidebar-wrapper
    ul
      li
        router-link.icon-link(to='/sites')
          icon(name='regular/window-maximize')
          span Sites

    ul
      li
        router-link.icon-link(to='/config')
          icon(name='cog')
          span Config
</template>

<script>
  import 'vue-awesome/icons/regular/window-maximize'
  import 'vue-awesome/icons/cog'

  export default {
    name: 'sidebar'
  }
</script>

<style lang="sass">
  @import ../../../element-variables

  #sidebar-wrapper
    background-color: $--color-primary-light-9
    height: calc(100% - 4em)
    padding: 2em 1em

    ul
      list-style: none
      padding: 0
      margin: 0 0 2em 0
</style>
