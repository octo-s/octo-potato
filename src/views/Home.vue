<template>
    <div class="home">
        <MainPage :msg="$t('message')"/>
    </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "../components/MainPage";

export default {
    name: 'home',
    components: {
      MainPage
    }
}
</script>
