<template lang="pug">
  #app
    router-view
    aside.sidebar
      sidebar
</template>

<script>
  import Sidebar from '@/components/Sidebar'

  export default {
    name: 'incite',
    components: {
      Sidebar
    }
  }
</script>

<style lang="sass">
  @import ../../element-variables

  body
    font-family: $roboto
    margin: 0

    #app
      display: grid
      grid-template-columns: 200px calc(100% - 200px)
      grid-template-rows: 100vh

      main
        grid-column: 2/3
        grid-row: 1/2
        background-color: $--background-color-base
        padding: 2em

        .form-item
          margin: 0.5em 0

        .form-actions
          margin-top: 2em

      .sidebar
        grid-column: 1/2
        grid-row: 1/2

      a
        color: $--color-text-primary
        text-decoration: none

      .icon-link
        svg
          width: 20px
          height: 20px
          vertical-align: middle
          padding-right: 0.5em

        span
          display: inline-block
          height: 20px
          vertical-align: middle

        &:hover,
        &.router-link-active
          color: $--color-primary
</style>
