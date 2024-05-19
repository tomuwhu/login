<script>
    export let data
</script>
{#if data?.c_user}
    Bejelentkezve: {data.name} ({data.c_user})
{:else}
    Sikeres kijelentkezés
{/if}