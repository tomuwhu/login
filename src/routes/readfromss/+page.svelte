<script>
    import { onMount } from 'svelte';
    import PublicGoogleSheetsParser  from 'public-google-sheets-parser'
    const spreadsheetId = '1t-fzy8ZfbPG2_i304zQTnRG28TMtVoAqSRt4fjRkOBM'
    var ss = []
    onMount(() => {
        const parser = new PublicGoogleSheetsParser(spreadsheetId)
        parser.parse().then(v => ss = v)
    })
    const mf = {
        fx: (x) => {
            if (x) {
                var d = x.split("(")[1]
                var l = d.substr(0, d.length - 1).split(",")
                if (l[1].length == 1) l[1] = '0' + l[1]
                if (l[2].length == 1) l[2] = '0' + l[2]
                return l.join(". ") + ". "
            } else return "---"
        }
    }
</script>
<h1>Google táblázat megjelenítése</h1>
<a href=http://docs.google.com/spreadsheets/d/{spreadsheetId} target=_blank>Táblázat</a>
<hr>
<table>
{#each ss as row}
    <tr>
        <td>{mf.fx(row.Kezdete)}</td>
        <td>{row.Verseny || '---'}</td>
        <td>{row.Város || '---'}</td>
        <td>{row.Helyszín || '---'}</td>
    </tr>
{:else}
    Nincs adat
{/each}
</table>

<style>
    table {
        margin: auto;
        border-spacing: 4px;
        box-shadow: 1px 1px 3px black;
        background-color: rgb(46, 96, 114);
        padding: 2px;
        border-radius: 10px;
    }
    td {
        padding: 5px;
        padding-left: 20px;
        padding-right: 20px;
        background-color: aliceblue;
        border-radius: 6px;
        box-shadow: 1px 1px 3px inset black;
    }
</style>