# Javascript op3

## Opdracht 10

### Leerdoelen
1. [x] Ik kan met Javascript een variabele toekennen aan de innerHTML van een HTML element.  
2. [x] Ik kan met Javascript de achtergrond kleur van een HTML element veranderen door een string toe te kennen aan de `style.backgroundColor` property van een HTML element.  
3. [x] Ik kan een vanuit een button in HTML een functie aanspreken in Javascript die de achtergrond kleur van een HTML element veranderd.  
4. [x] Ik kan een conditie gebruiken om te testen of een HTML element een bepaalde kleur heeft of niet.  
5. [x] Ik maak gebruik van een boolean variabele binnen een conditie.  
6. [x] Ik kan nog steeds met Javascript een variabele (of nu een string) toekennen aan de innerHTML van een HTML element.  
7. [x] Ik kan een functie aanroepen en een waarde meegeven als parameter
8. [x] Ik weet hoe ik snel een regel code kan kopieren en verplaatsen en hoe handig variabelen kunnen zijn.
9. [x] Ik kan een waarde meegeven aan een functie en die binnen de functie gebruiken
10. [ ] Ik heb iets met een timer gedaan in javascript.

### Uitleg

Tot nu toe hebben we het oranje licht een beetje overgeslagen. Dit komt omdat in het echt een oranje licht altijd maar een tijdje aanblijft en dan verspring naar rood. Dit kunnen we nabootsen door een timer toe te voegen aan `script.js`. Op regel 55 van `script.js` is een timer toegevoegd die na 2000 milliseconden de functie `zetStoplichtAOp("rood")` aanroept. De code zier er zo uit:
```javascript
window.setTimeout(zetStoplichtAOp, 2000, "rood");
```
Het ziet er een beetje gek uit maar het is gewoon een ingebouwde javascript functie die in dit geval 3 parameters meekrijgt. Eerst geef je aan welke functie moet worden aangeroepen als de timer is afgelopen, in dit geval is dat `zetStoplichtAOp`. De tweede is het aantal milliseconden dat de timer moet wachten tot het de meegegeven functie aanroept, in dit geval `2000`. En de derde parameter die wordt meegegeven aan de `setTimeout` functie is een parameter die je wilt meegeven aan de opgegeven functie. Wat?!? :confounded: Eigenlijk wil je gewoon dit doen:
```javascript
window.setTimeout(zetStoplichtAOp("rood"), 2000);
```
Maar zo werkt het niet binnen de `setTimeout` functie helaas. Als je dit doet wordt de meegegeven functie *meteen* uitgevoerd en dus niet na de opgegeven `2000` milliseconden pas. Het gevolg hiervan is dat het licht heeel kort op oranje staat en daarna meteen rood wordt. We zouden dit kunnen oplossen door een nieuwe functie aan te maken met als enig doel het rode licht van stoplicht A aan te zetten. Maar we hebben al een functie die dit doet dus waarom die niet hergebruiken? Voor nu onthoud dat als je een functie meegeeft aan `setTimeout()` je alleen de naam van de functie meegeeft, dus zonder `()` en dat als je een parameter wilt meegeven aan de op te roepen functie je deze meegeeft aan `setTimeout()` als de derde parameter. (of als je meer parameters wilt meegeven de vierde en vijfde etc).

### Opdracht

Zet stoplicht A op groen. Dan op oranje en wacht 2 seconden. Wat gebeurt er na 2 seconden?

Op basis van stoplicht A reageert stoplicht B nog steeds zoals het zou moeten. Zorg ervoor door timers te gebruiken dat stoplicht B wanneer die groen wordt dat 3 seconden blijft, dan naar oranje springt, dat 2 seconden blijft, en dan naar rood. En zorg er dan ook voor dat als stoplicht B op rood is gegaan stoplicht A weer op groen springt.
> TOELICHTING  
> Er is nog geen code die stoplicht B op oranje zet. Als je de code die dat doet in een functie zet dan kan je die aanroepen via `window.setTimeout()` wanneer stoplicht B 3 seconden op groen heeft gestaan. Daarna kan je vanuit die functie een nieuwe timer maken die stoplicht A op groen zet als de 2 seconden die het oranje licht van stoplicht B aan moet staan zijn gepasseert.

### Klaar?
:+1: Lever je code in zodat je docent deze kan inzien op Github door je code te committen. Geef als commit message mee: "opdracht # KLAAR!" 

#### Bronnen

```javascript
//voorbeeld javascript

//De functie die je opgeeft bij naamVanFunctie wordt 
//aangeroepen als het aantal opgegeven milliseconden is verstreken 
//(1000 milliseconden = 1 seconde)
window.setTimeout(naamVanFunctie, aantalMilliseconden);


window.setTimeout(naamVanFunctie, aantalMilliseconden, parameter1, parameter2, etc);
```

[W3 Schools - JavaScript Timing Events](https://www.w3schools.com/js/js_timing.asp)  
[W3 Schools - JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)  
[W3 Schools - JavaScript Booleans](https://www.w3schools.com/JS/js_booleans.asp)  
[W3 Schools - JavaScript if else and else if](https://www.w3schools.com/js/js_if_else.asp)  
[W3 Schools - HTML DOM getElementById() Method](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)  
[W3 Schools - DOM Style backgroundColor Property](https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp)  

