# Javascript op3

## Opdracht 5

### Leerdoelen
1. [x] Ik kan met Javascript een variabele toekennen aan de innerHTML van een HTML element.  
2. [x] Ik kan met Javascript de achtergrond kleur van een HTML element veranderen door een string toe te kennen aan de `style.backgroundColor` property van een HTML element.  
3. [x] Ik kan een vanuit een button in HTML een functie aanspreken in Javascript die de achtergrond kleur van een HTML element veranderd.  
4. [x] Ik kan een conditie gebruiken om te testen of een HTML element een bepaalde kleur heeft of niet.  
5. [ ] Ik maak gebruik van een boolean variabele binnen een conditie.  

### Uitleg

Misschien heb je gezien dat je de code uit opdracht 4 niet voor 100% werkt. De eerste keer dat je een button klikt om een licht aan te doen werkt het niet :worried: Pas na nog een keer de button klikken veranderd de achtergrond kleur van het licht. Daarna werkt het zoals verwacht, aan/uit/aan/uit/etc. De reden hiervoor is voor nu even niet belangrijk maar we gaan wel in deze opdracht de code zo aanpassen dat deze *bug* er niet meer in zit.

>Naast dat je javascript code doet wat het moet doen is het ook belangrijk dat de code goed leesbaar is. Dit doe je door logische, goed beschrijvende namen te verzinnen voor je variabelen en functies (zoals `zetOranjeLichtAan()` voor een functie die een oranje licht aan zet). Als dan iemand anders jouw code leest, stel een medestudent tijdens een groepsproject, dan kan die gemakkelijk de code begrijpen en snel een bijdrage leveren. 

Voor deze opdracht gaan we gebruik maken van een boolean variabele (TRUE/FALSE) in de conditie binnen de drie functies die het licht aan en uit zetten. In `script.js` zijn bovenaan het script 3 boolean variabelen gedeclareert (`roodLichtStaatAan`, `oranjeLichtStaatAan` en `groenLichtStaatAan`). Om te beginnen hebben ze alle drie de waarde `false`. Ook zijn de namen van de functie veranderd van `zet<kleur>LichtAan()` naar een beter beschrijvende naam `toggle<kleur>Licht()`.  

### Opdracht

Zorg ervoor dat je de `toggleOranjeLicht()` en `toggleGroenLicht()` functies zo aanpast dat ze gebruik maken van de juiste boolean variabelen in plaats rechtstreeks de `style.backgroundColor` property op te vragen in de condities. Zie de code bij `toggleRoodLicht()` voor een voorbeeld.

> TOELICHTING:  
> In elke `toggle<kleur>Licht()` functie test je dus met een conditie of een bepaalde variabele `true` of `false` is en pas je op basis daarvan aan welke achtergrond kleur een licht krijgt. Omdat je de keuze of een licht aan of uit moet niet meer laat afhangen van de huidige achtergrond kleur van een licht maar van die variabele moet je wel de variabele zelf ook telkens veranderen van aan (`true`) en uit (`false`)!

### Klaar?
:+1: Lever je code in zodat je docent deze kan inzien op Github door je code te committen. Geef als commit message mee: "opdracht # KLAAR!" 

#### Bronnen

```javascript
//voorbeeld javascript
if(waarde == anderewaarde){
    //conditie is TRUE
}
else{
    //conditie is FALSE
}
```

[W3 Schools - JavaScript Booleans](https://www.w3schools.com/JS/js_booleans.asp)  

[W3 Schools - JavaScript if else and else if](https://www.w3schools.com/js/js_if_else.asp)  
[W3 Schools - HTML DOM getElementById() Method](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)  
[W3 Schools - DOM Style backgroundColor Property](https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp)  

