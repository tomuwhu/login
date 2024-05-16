<script>
    export let data
    $: c_user = data.c_user
</script>
<div class="menu">
    {#if c_user}
    <a href="/">Logout</a>
    <a href="/content">Tartalom</a>
    {:else}
    <a href="/">Login</a>
    {/if}
</div>
<div class="c">
<slot/>
</div>
<style>
    a {
        all: unset;
        margin: 5px;
        padding: 5px;
        display: inline-block;
        cursor: pointer;
    }
    div.menu {
        display: flex;
        background-color: black;
        color: white;
    }
    div.c {
        padding: 10px;
        margin: 10px;
        border: solid 2px red;
        border-radius: 10px;
        background-color: lightgray;
        color: rgb(29, 69, 101);
        text-align: center;
    }
</style>