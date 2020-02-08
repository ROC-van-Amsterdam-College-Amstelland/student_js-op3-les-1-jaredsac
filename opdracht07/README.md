# Javascript op3

## Opdracht 7

### Leerdoelen
1. [x] Ik kan met Javascript een variabele toekennen aan de innerHTML van een HTML element.  
2. [x] Ik kan met Javascript de achtergrond kleur van een HTML element veranderen door een string toe te kennen aan de `style.backgroundColor` property van een HTML element.  
3. [x] Ik kan een vanuit een button in HTML een functie aanspreken in Javascript die de achtergrond kleur van een HTML element veranderd.  
4. [x] Ik kan een conditie gebruiken om te testen of een HTML element een bepaalde kleur heeft of niet.  
5. [x] Ik maak gebruik van een boolean variabele binnen een conditie.  
6. [x] Ik kan nog steeds met Javascript een variabele (of nu een string) toekennen aan de innerHTML van een HTML element.  
7. [ ] Ik kan een functie aanroepen en een waarde meegeven als parameter

### Uitleg

Bij de meeste kruispunten is het zo dat als de ene richting mag rijden dan stopt de andere en andersom. Er is een functie toegevoegd aan `script.js` genaamd `verkeerMagRijdenStoplichtB()`. De gehele functie staat hieronder:
```javascript
function verkeerMagRijdenStoplichtB(booleanVerkeerMagRijden){
    if(booleanVerkeerMagRijden == true){
        document.getElementById("right-light-bottom").style.backgroundColor = lichtGroen;
        document.getElementById("right-light-top").style.backgroundColor = lichtUit;
    }
    else{
        document.getElementById("right-light-bottom").style.backgroundColor = lichtUit;
        document.getElementById("right-light-top").style.backgroundColor = lichtRood;
    }
}
```
Zoals je ziet kun je aan deze functie een waarde meegeven. De parameter `booleanVerkeerMagRijden` is van het type Boolean. Om de functie op te roepen vanuit een willekeurige plek in `script.js` gebruik je onderstaande code.
```javascript
verkeerMagRijdenStoplichtB(true);
```
> In bovenstaand voorbeeld wordt de waarde `true` meegegeven. Je ziet aan de naam van de parameter `booleanVerkeerMagRijden` dat de maker van die functie verwacht dat je een boolean waarde (dus `true` of `false`) meegeeft. Vaak wordt dit afgekort naar `bool` maar voor de duidelijkheid is het nu even helemaal uitgeschreven. Dit is een conventie die niet door javascript wordt herkent, je kan prima een string of integer meegeven, alleen is er dan een grote kans dat de functie niet werkt zoals je verwacht. 

### Opdracht

Zorg ervoor dat stoplicht B op rood springt als je stoplicht A op groen zet en op groen springt als je stoplicht A op rood zet. Oftewel zoals stoplichten normaal zouden werken op een kruising. Oranje laten we voor nu even buiten beschouwing.

>TOELICHTING:  
Doe dit door op de juiste plekken in je code de `verkeerMagRijdenStoplichtB()` functie aan te roepen en `true` of `false` mee te geven. 

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

