<template>
    <div class="page-404">
        <h1>Page not found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p><span><=</span> <RouterLink to="/">Back to Home</RouterLink></p>
    </div>
</template>

<script>
export default {
    name: 'Page404View',
}
</script>

<style scoped>
.page-404 {
    margin-top: 50px;
    color: #333;
    font-size: 24px;
    line-height: 1.5;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 40px;
}
</style>