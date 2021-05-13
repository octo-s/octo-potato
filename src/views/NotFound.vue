<template>
    <div class="wrap">
        <div class="error-page">
            <h1>{{ $t('not_found.resource_not_found') }}</h1>
            <p><small>{{ $t('not_found.error') }}</small></p>
            <p class="message">{{ $t('not_found.message') }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotFound"
}
</script>

<style scoped>
    .wrap {
        display: block;
        margin: 0 auto;
    }
    .error-page {
        vertical-align: middle;
        padding: 0 20px;
    }
    h1 {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: inherit;
        font-size: 36px;
    }
    p small {
        font-size: 68%;
        font-weight: 400;
        line-height: 1;
        color: #777;
    }
    .message {
        color: silver;
        font-size: 21px;
        line-height: 1.4;
    }
</style>