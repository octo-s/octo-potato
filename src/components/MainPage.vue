<template>
  <div class="maim">
    <div class="header" :class="{'header--tablet': isMobileVersion}">

    </div>
    <div class="page"></div>
    <div class="footer"></div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'MainPage',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters('config', ['isMobileVersion']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  background: url(../assets/background_desktop.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  background-position: center;
  &--tablet {
    background: url(../assets/background_tablet.png);
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
