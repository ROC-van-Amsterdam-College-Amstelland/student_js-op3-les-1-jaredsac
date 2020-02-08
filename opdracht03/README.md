# Javascript op3

## Opdracht 3

### Leerdoelen
1. [x] Ik kan met Javascript een variabele toekennen aan de innerHTML van een HTML element.  
2. [x] Ik kan met Javascript de achtergrond kleur van een HTML element veranderen door een string toe te kennen aan de `style.backgroundColor` property van een HTML element.  
3. [ ] Ik kan een vanuit een button in HTML een functie aanspreken in Javascript die de achtergrond kleur van een HTML element veranderd.  

### Uitleg

De lichten die aanstonden na opdracht 2 zijn weer uitgezet en er zijn drie buttons toegevoegd aan **index.html**. Je ziet dat de code om de lichten aan te zetten niet is weggehaald in script.js maar alleen is veranderd naar een comment. 
> Gebruik <kbd>CTRL</kbd><kbd>+</kbd><kbd>/</kbd> als je op een regel staat om de regel te veranderen van code die wordt uitgevoerd naar code die 'uitgecomment' is en dus *niet* wordt uitgevoerd.  

In `script.js` zijn ook drie functies aangemaakt:
```javascript
function zetRoodLichtAan(){
    document.getElementById("light-top").style.backgroundColor = "red";
}

function zetOranjeLichtAan(){
     //JOUW CODE HIER
}

function zetGroenLichtAan(){
    //JOUW CODE HIER
}
```
Als voorbeeld werkt het rode licht al zoals het moet. Bij het oranje licht mist de Javascript code om de kleur te veranderen en bij het groene licht mist de Javascript code én in `index.html` de `onclick` bij de button.

### Opdracht

Zorg ervoor dat wanneer je op een knop klikt het bijbehorende licht aan gaat. 

> TOELICHTING:  
> Dit doe je door in `index.html` bij de button een `onclick` attribuut toe te voegen met een verwijzing naar de juiste javascript functie én in `script.js` bij die functie code te plaatsen die de achtergrond kleur van het juiste licht veranderd.


### Klaar?
:+1: Lever je code in zodat je docent deze kan inzien op Github door je code te committen. Geef als commit message mee: "opdracht # KLAAR!" 

#### Bronnen
```html
<!-- voorbeeld HTML button onclick attribuut-->
<button onclick="functieNaam()"></button>
```

```javascript
//voorbeeld javascript
document.getElementById("id-naam").style.backgroundColor = "Kleur";
```

[W3 Schools - HTML DOM getElementById() Method](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)  
[W3 Schools - DOM Style backgroundColor Property](https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp)  

