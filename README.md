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
Ik vond het echt vet om met sockets te werken. Het is zo gaaf om te zien dat je live samen iets kunt doen op je pagina. Eerlijk gezegd had ik nog nooit met sockets gewerkt voor deze opdracht en eigenlijk ook nog nooit met code gewerkt voor deze minor, dus het was echt wel een uitdaging. In de eerste week was het vooral proberen om de chat aan de praat te krijgen en te snappen hoe het precies werkt. Toen het uiteindelijk lukte, voelde dat echt heerlijk. In de tweede week zat ik vast hoe ik het spel werkend zou krijgen. Ik zat er toen wel echt doorheen. Gelukkig kreeg ik hulp van mijn klasgenoten en hebben we het probleem in de volgende week opgelost. Ik begon steeds beter te begrijpen hoe de sockets werken en ik denk dat ik in de toekomst veel vette dingen kan maken als ik hier weer mee ga werken.

# Resources
Lessen, Leraal & Leerlingen
W3 Schools
Socket.io




