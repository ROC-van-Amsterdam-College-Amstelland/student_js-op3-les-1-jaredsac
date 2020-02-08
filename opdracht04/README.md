# Javascript op3

## Opdracht 4

### Leerdoelen
1. [x] Ik kan met Javascript een variabele toekennen aan de innerHTML van een HTML element.  
2. [x] Ik kan met Javascript de achtergrond kleur van een HTML element veranderen door een string toe te kennen aan de `style.backgroundColor` property van een HTML element.  
3. [x] Ik kan een vanuit een button in HTML een functie aanspreken in Javascript die de achtergrond kleur van een HTML element veranderd.  
4. [ ] Ik kan een conditie gebruiken om te testen of een HTML element een bepaalde kleur heeft of niet.  

### Uitleg

Het zou mooi zijn als je de lichten ook weer uit kan zetten als ze aan staan. Je kan hiervoor 3 extra knoppen toevoegen aan `index.html` zodat je per licht een aan en uit knop hebt. Maar wij gaan het zo maken dat dezelfde knop een licht aanzet *alleen* als het licht uit staat (en andersom). Dit doen we doen een conditie (if/else) in te bouwen in de functie die wordt aangeroepen als je op de knop drukt. 

### Opdracht

Zorg ervoor dat als je op een knop drukt het licht aan gaat als het uit staat en uit gaat als het aan staat. 

> TOELICHTING:  
> Wat je eigenlijk gaat doen is binnen elke functie die door een button wordt aangeroepen checken of de achtergrond kleur van een licht gelijk is aan een bepaalde string. Als de `style.backgroundColor` property gelijk is aan de string "gray" dan is het licht uit en zet je hem dus aan door de `style.backgroundColor` property van het element te veranderen naar "red". Als de `style.backgroundColor` property *NIET* gelijk is aan de string "gray" dan is het licht *aan* en zet je hem dus weer uit door de `style.backgroundColor` property van het element te veranderen naar "gray".
> Het rode licht werkt als, je hoeft dus alleen de functies `zetOranjeLichtAan()` en `zetGroenLichtAan()` nog aan te passen.
 

### Klaar?
> Val je iets op wanneer je je code test? De eerste keer dat je klikt gaat het licht niet aan. Pas als je nog een keer klikt lukt het. Waarom dat is zie je bij de volgende opdracht. 

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

[W3 Schools - JavaScript if else and else if](https://www.w3schools.com/js/js_if_else.asp)  
[W3 Schools - HTML DOM getElementById() Method](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)  
[W3 Schools - DOM Style backgroundColor Property](https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp)  

