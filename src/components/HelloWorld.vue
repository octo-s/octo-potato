<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <h3>{{ $t('hello_world.installed_cli_plugins') }}</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress" target="_blank" rel="noopener">e2e-cypress</a></li>
        </ul>
        <h3>{{ $t('hello_world.essential_links') }}</h3>
        <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">{{ $t('hello_world.core_docs') }}</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">{{ $t('hello_world.forum') }}</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">{{ $t('hello_world.community_chat') }}</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">{{ $t('hello_world.twitter') }}</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">{{ $t('hello_world.news') }}</a></li>
        </ul>
        <h3>{{ $t('hello_world.ecosystem') }}</h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
            <li><a href="https://kazupon.github.io/vue-i18n/" target="_blank" rel="noopener">vue-i18n</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
