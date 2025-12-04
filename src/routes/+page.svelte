<script lang="ts">
    import BusinessCard from '$lib/components/BusinessCard.svelte';
</script>

<div class="home-container">
    <BusinessCard/>
</div>

<style>
    .home-container {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 200px);
        gap: 3rem;
    }
</style>
