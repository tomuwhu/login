<script>
    export let data
</script>
{#if data.c_user}
<h1>Content</h1>
{data.c_user}
<hr>
Titkos tartalom:
<br><br>
{data.titkos_tartalom}
<hr>
<b>A globális számláló állása: <i>{data.gc}</i></b>
{:else}
Tartalom nem hozzáférhető
{/if}

<style>
    h1 {
        margin: 5px;
        color:rgb(30, 101, 77);
    }
    i {
        color: #a73945;
        text-shadow: 1px 1px 3px gray;
    }
</style>