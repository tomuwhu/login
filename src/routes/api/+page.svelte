<script>
    export let data
</script>
{#if data?.c_user}
    Bejelentkezve: {data.c_user}
{:else}
    Sikeres kijelentkezés
{/if}