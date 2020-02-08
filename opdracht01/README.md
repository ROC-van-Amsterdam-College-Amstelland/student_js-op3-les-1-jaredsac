# Javascript op3

## Opdracht 1

### Leerdoelen
1. [ ] Ik kan met Javascript een variabele toekennen aan de innerHTML van een HTML element.  

### Uitleg

In `script.js` zijn drie string variabelen gedefinieerd (`stop`, `maybe` en `go`) die elk een kleur bevatten (`"rood"`, `"oranje"`, `"groen"`).  

In `index.html` staan drie divs met een *unieke* id (`light-top`, `light-middle` en `light-bottom`).   
> TOELICHTING:  
> In **script.js** staan de variabelen al in een functie die ervoor zorgt dat de javascript code pas wordt uitgevoerd als het gehele HTML document is geladen. Wat er fout gaat als je dit niet doet is dat javascript probeert iets te doen met een HTML element dat nog niet is geladen. Je krijgt dan geen foutmelding in VS Code of Devtools dus het lijkt dan net alsof je code niet werkt.  
>
> ```javascript
> window.onload = function(){
>   // code hier wordt uitgevoerd als alle HTML is geladen.
> }
> ```
> Een andere (verouderde) oplossing hiervoor is de plaats waar een extern Javascript bestand wordt aangeroepen te veranderen naar net boven de sluit tag van de body. Hierdoor wordt de Javascript code pas geladen (en uitgevoerd) nadat de browser alle HTML heeft geladen.

### Opdracht  
Zorg ervoor dat de variabelen met de juiste inhoud worden toegekend aan `innerHTML` property van de bijbehorende divs.  

### Gelukt?
:+1: Lever je code in zodat je docent deze kan inzien op Github door je code te committen. Geef als commit message op: `"opdracht# KLAAR!"`, dus bv. `opdracht1 KLAAR!`, `opdracht2 KLAAR!`, etc. Push je code naar Github.

#### Bronnen

```javascript
//voorbeeld
document.getElementById("id-naam").innerHTML = variabele;
```

[W3 Schools - HTML DOM getElementById() Method](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)
