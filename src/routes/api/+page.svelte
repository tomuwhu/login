<script>
    export let form, data
    import { browser } from '$app/environment'
    import { goto } from '$app/navigation'
    if (browser && form?.success) goto('/content')
</script>
{#if data?.c_user}
    Bejelentkezve: {data.name} ({data.c_user})
{:else}
    Sikeres kijelentkezés
{/if}