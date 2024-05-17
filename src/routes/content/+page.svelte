<script>
    export let data
</script>
{#if data.c_user}
<h1>Content</h1>
{data.c_user}
<hr>
<h3>Összes felhasználó</h3>
<div class="c">
{#each data.res as row}
    <span>
        <div class="name">{row.name}</div>
        <div>{row.email}</div>
    </span>
{/each}
</div>
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
    .c {
        display: inline-flex;
        flex-wrap: wrap;
    }
    span {
        white-space: nowrap;
        display: inline-block;
        background-color: rgb(174, 197, 217);
        border: solid 1px gray;
        padding: 2px;
        margin: 2px;
        border-radius: 9px;
        box-shadow: 1px 1px 3px black;
    }
    .c span div {
        padding: 5px;
        margin: 5px;
        background-color: aqua;
        border-radius: 6px;
        box-shadow: 1px 1px 3px inset black;
        white-space: nowrap;
    }
    .c span div.name {
        background-color: black;
        color:aliceblue
    }
</style>