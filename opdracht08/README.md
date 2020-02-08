# Javascript op3

## Opdracht 8

### Leerdoelen
1. [x] Ik kan met Javascript een variabele toekennen aan de innerHTML van een HTML element.  
2. [x] Ik kan met Javascript de achtergrond kleur van een HTML element veranderen door een string toe te kennen aan de `style.backgroundColor` property van een HTML element.  
3. [x] Ik kan een vanuit een button in HTML een functie aanspreken in Javascript die de achtergrond kleur van een HTML element veranderd.  
4. [x] Ik kan een conditie gebruiken om te testen of een HTML element een bepaalde kleur heeft of niet.  
5. [x] Ik maak gebruik van een boolean variabele binnen een conditie.  
6. [x] Ik kan nog steeds met Javascript een variabele (of nu een string) toekennen aan de innerHTML van een HTML element.  
7. [x] Ik kan een functie aanroepen en een waarde meegeven als parameter
8. [ ] Ik weet hoe ik snel een regel code kan kopieren en verplaatsen en hoe handig variabelen kunnen zijn.

### Uitleg

Als het goed is reageert stoplicht B nu goed op hoe je stoplicht A instelt. Alleen jammer dat je stoplicht A ook weer handmatig moet uitzetten. Dat werkt niet zoals je misschien zou verwachten, bij een stoplicht staat er altijd maar één licht aan. We gaan er nu voor zorgen dat als je stoplicht A van kleur veranderd de twee andere kleuren ook echt uit gaan (zonder dat je op de knop voor die kleur hoeft te klikken).

Je kan daarvoor bij elke `toggle<kleur>Light()` extra regels toevoegen die telkens alle lichten die niet aan moeten ook weer uitzetten. Dat zou er dan zo uitzien ongeveer:
```javascript
        document.getElementById("left-light-top").style.backgroundColor = "red";
        document.getElementById("left-light-middle").style.backgroundColor = "gray";
        document.getElementById("left-light-bottom").style.backgroundColor = "gray";
```

### Opdracht

Zorg ervoor dat er maar 1 licht tegelijk aanstaat bij stoplicht A.
>Dat is flink wat werk en je moet goed opletten dat je de juist id's meegeeft aan de `getElementByid()` functie én de juiste strings toekent. Misschien had je het al gezien maar er zijn 4 extra string variabelen toegevoegd aan `script.js`: `lichtUit`, `lichtRood`, `lichtOranje` en `lichtGroen`. Deze worden gebruik in de `verkeerMagRijdenStoplichtB()` functie maar je kunt ze natuurlijk vaker gebruiken. :wink: 
> Het voordeel hiervan is dat je minder kans hebt op typefouten én dat autocomplete in VS Code ze voor je aanvult.

> Gebruik <kbd>ALT</kbd><kbd>+</kbd><kbd>SHIFT</kbd><kbd>+</kbd><kbd>UP/DOWN ARROW</kbd> om een regel waar je cursor staat te kopieren.  
> En  <kbd>ALT</kbd><kbd>+</kbd><kbd>UP/DOWN ARROW</kbd> om een regel omhoog en omlaag te verplaatsen.


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

