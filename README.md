# barebonechat
It's a barebone chat app used as an example in a course on realtime web apps.

**Dinsdag 18/4**
Ik heb de repo van Justus Sturkenboom gecloned en de stijling aangepast naar een thema gebasseerd op het Rijksmuseum.
Vervolgens heb ik de chat gestijld gebasseerd op de stijl van het Rijksmuseum:
![image](https://user-images.githubusercontent.com/90199203/232750542-dbee719d-30ca-4a33-91d5-05a03dbd8fe4.png)

Ik heb voorbamelijk de code geleerd. Ik snap nu het concept en weet de basis voor het eindproject.

Ik moet 3 concepten bedenken voor vrijdag

**Idee 1:**
Omdat ik de vorige opdrachten heb gewerkt met de Rijksmuseum api wilde ik dat voortzetten bij Real time web. 
Concept 1 heet 'Raad de schilder'. Je ziet een schilderij, en je moet binnen 5 beurten de schilder raden.

**Idee 2:**
Teken je eigen schilderij gebasseerd op 1 schilderij en dan kan je voten wie het mooiste resultaat heeft.

**Idee 3:**
Je krijgt een schilders naam te zien. De volgende stap is om zo veel mogelijk schilderijen op te noemen van de schilder. Degene met de meest geraade schilderijen, wint.

**Gekozen Concept:**
Ik heb voor de 'Raad de schilder' gekozen. Het lijkt me leuk en uitdagend om zoiets te maken. Ook omdat het miscchien een leuk concept is voor het Rijksmuseum.

**App features**
- Kunststukken van het Rijksmuseum bekijken
- Kennis verbeteren van de geschiedenis en cultuur.
- Users opslaan in array

**Future features**
- improved interactive Room UX/UI
- Users opslaan in een array optimaliseren
- More interactives for the users
- Add your own profile picture and username
- Turn on Service worker and optimisation

**API**
De Rijks Data API is vrij te gebruiken en op https://data.rijksmuseum.nl/object-metadata/api/ te vinden. Meer informatie over deze API is te vinden op: https://data.rijksmuseum.nl/

**API Response**
![image](https://user-images.githubusercontent.com/90199203/233979023-03573fe8-585b-477f-a853-72fc28897391.png)
![image](https://user-images.githubusercontent.com/90199203/233978885-a52880c1-0dd3-43c3-b9ec-3453fe0bffce.png)
Ik haal hier via de URL het id van het schilderij op.

**Data Model API**
[hier komt visualisatie]

**Data Lifecycle Diagram**
[hier komt visualisatie]

# Real time events

**Connection**
Als een user connect wordt dit serverside gelogd, ook wordt het laten zien in de chat als er een nieuwe speler wordt toegevoegd.

**Message**
Als er een bericht verstuurd wordt zie je dit bericht in de chat.

**Disconnect**
Als er een gebruiker disconnect wordt is dat te zien in de chat, ook wordt het serverside gelogd.

# Reflectie
Ik vond het echt leuk om te werken met sockets. Het is super leuk om te zien dat je live met elkaar iets kan doen op je pagina. Ik heb voor deze opdracht nog nooit met sockets gewerkt en voor deze minor nog nooit met code gewerkt dus het was wel echt een uitdaging. De eerste week was het vooral proberen de chat aan de praat te krijgen met namen, het was echt heel nice toen dit gelukt was. in de tweede week zat ik een hele dag vast om het werkend te krijgen van het bewegen van de karakters, hier zat ik er toen wel echt doorheen. Maar met hulp van klasgenoten was dit opgelost de volgende week. De werking van de sockets begon ik steeds beter te begrijpen en ik denk dat ik veel vette dingen kan maken de volgende keer als ik hier weer mee zou gaan werken.

# Resources
Lessen, Leraal & Leerlingen
W3 Schools
Socket.io




