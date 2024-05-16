<script>
    export let data
</script>
{#if data.c_user}
<h1>Content</h1>
{data.c_user}
{data.s_user}
{:else}
Tartalom nem hozzáférhető
{/if}