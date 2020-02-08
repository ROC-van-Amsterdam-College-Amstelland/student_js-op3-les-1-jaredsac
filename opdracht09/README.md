# Javascript op3

## Opdracht 9

### Leerdoelen
1. [x] Ik kan met Javascript een variabele toekennen aan de innerHTML van een HTML element.  
2. [x] Ik kan met Javascript de achtergrond kleur van een HTML element veranderen door een string toe te kennen aan de `style.backgroundColor` property van een HTML element.  
3. [x] Ik kan een vanuit een button in HTML een functie aanspreken in Javascript die de achtergrond kleur van een HTML element veranderd.  
4. [x] Ik kan een conditie gebruiken om te testen of een HTML element een bepaalde kleur heeft of niet.  
5. [x] Ik maak gebruik van een boolean variabele binnen een conditie.  
6. [x] Ik kan nog steeds met Javascript een variabele (of nu een string) toekennen aan de innerHTML van een HTML element.  
7. [x] Ik kan een functie aanroepen en een waarde meegeven als parameter
8. [x] Ik weet hoe ik snel een regel code kan kopieren en verplaatsen en hoe handig variabelen kunnen zijn.
9. [ ] Ik kan een waarde meegeven aan een functie en die binnen de functie gebruiken

### Uitleg

Het wordt al aardig wat code. En dat maakt het al snel complex. Vooral als je iets wilt aanpassen. Plus er klopt nog steeds iets niet helemaal: als je bij stoplicht A het licht weer uitzet dan verspringt het licht bij stoplicht B. Sowieso gek dat je stoplicht A kan uitzetten. We gaan de code die het stoplicht uitzet eruit halen en nog wat dingen versimpelen.

Het zou namelijk veel makkelijker zijn als je vanuit de HTML onclick gewoon aangeeft welke kleur stoplicht A moet hebben. Dit hebben we al eerder gedaan bij de `verkeerMagRijdenStoplichtB()` functie. Nu gaan we dit doen vanuit de `onclick` bij de buttons in `index.html`.

Er is wat veranderd in `index.html`:
Het `onclick` attribuut van de buttons heeft nu een nieuwe functie die wordt aangeroepen genaamd `zetStoplichtAOp(sKleur)`. Deze functie verwacht een string mee te krijgen, dit zijn `"rood"`, `"oranje"` en  `"groen"`. De volledige functie zoals die in `script.js` staat zie je hier:
```javascript
function zetStoplichtAOp(sKleur){
    if(sKleur == "rood"){
        document.getElementById(strStoplichtABoven).style.backgroundColor = lichtRood;
        document.getElementById(strStoplichtAMidden).style.backgroundColor = lichtUit;
        document.getElementById(strStoplichtAOnder).style.backgroundColor = lichtUit;
        verkeerMagRijdenStoplichtB(true);
    }
    else if(sKleur == "oranje"){
        //JOUW CODE HIER
    }
    else{
        //JOUW CODE HIER
    }
}
```
Zoals je ziet checked de `if/elseif/else` binnen deze functie wat de waarde is van de string die wordt meegegeven en zorgt er zo voor dat de juiste lichten worden aan of uitgezet. De oude code staat voor de volledigheid nog onderaan in `script.js` maar deze wordt dus niet meer gebruikt en de globale variabelen die we in de `toggle<kleur>Licht()` functie gebruiken zijn *uitgecomment* (niet verwijderd, want misschien zijn ze later nog handig).
> Misschien valt je nog iets op aan de nieuwe functie? Net zoals we de strings voor de kleur van de lichten in een variabele hebben gezet (`lichtUit`, `lichtRood`, `lichtOranje` en `lichtGroen`) staan nu ook de strings die we meegeven aan de `document.getElementById()` functie in een variabele (`strStoplichtABoven`, `strStoplichtAMidden` en `strStoplichtAOnder`). Dit kan omdat de `getElementById()` functie gewoon een string verwacht (de string die we hebben opgegeven in de HTML als id-naam van het element) en of die nu *hardcoded* wordt meegegeven op deze manier: `getElementById("top-left-light")` of via een variabele op deze manier `getElementById(strStoplichtABoven)` maakt niet uit, de functie werkt gewoon. De nieuwe variabelen zijn boven in `script.js` gedefinieerd. 


### Opdracht

Zorg ervoor dat de juiste strings worden meegegeven vanuit de `onclick` van de buttons in `index.html` en dat de code voor het oranje en groene licht in de `zetStoplichtAOp(sKleur)` functie in `script.js` wordt toegevoegd. Vergeet niet om ook stoplicht B te laten meewerken door de `verkeerMagRijdenStoplichtB` functie ergens vanuit de `if/elseif/else` structuur in de `zetStoplichtAOp(sKleur)` functie.

### Klaar?
:+1: Lever je code in zodat je docent deze kan inzien op Github door je code te committen. Geef als commit message mee: "opdracht # KLAAR!" 

#### Bronnen

```javascript
//voorbeeld javascript
document.getElementById("id-naam").innerHTML = "string";
```

[W3 Schools - JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)  
[W3 Schools - JavaScript Booleans](https://www.w3schools.com/JS/js_booleans.asp)  
[W3 Schools - JavaScript if else and else if](https://www.w3schools.com/js/js_if_else.asp)  
[W3 Schools - HTML DOM getElementById() Method](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)  
[W3 Schools - DOM Style backgroundColor Property](https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp)  

