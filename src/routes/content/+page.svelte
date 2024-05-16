<script>
    export let data
</script>
{#if data.c_user}
<h1>Content</h1>
{data.c_user}
<hr>
Titkos tartalom:
<br>
{data.titkos_tartalom}
{:else}
Tartalom nem hozzáférhető
{/if}

<style>
    h1 {
        margin: 5px;
        color:rgb(30, 101, 77);
    }
</style>