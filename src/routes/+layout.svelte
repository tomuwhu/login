<script>
    export let data
    $: c_user = data.c_user
</script>
<div class="menu">
    {#if c_user}
    <a href="/content">Felhasználók listája</a>
    <a href="/readfromss">Google táblázat adatainak megjelenítése</a>
    <a href="/">Logout</a>
    {:else}
    <a href="/">Login</a>
    {/if}
</div>
<div class="c">
<slot/>
</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
    a {
        all: unset;
        margin: 0px;
        padding: 3px;
        padding-left: 10px;
        padding-right: 10px;
        display: inline-block;
        cursor: pointer;
        font-size: 13px;
        font-family: "Playfair Display", serif;
        font-optical-sizing: auto;
        font-weight: normal;
        font-style: normal;
    }
    a:hover {
        background-color: rgb(29, 69, 101);
        color: white;
    }
    div.menu {
        margin: 0px;
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