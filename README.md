### alkfejlmozi

A program egy mozi rendszer egyszerűsített változatát fogja reprezentálni.

## Funckionális Követelmények

  - Vendégként a főoldalon szeretnék látni véletlenszerűen 3 filmet.
  - Vendégként szeretnék tudni kategóriák szerint szűrni a filmeket.
  - Vendégként szeretnék tudni keresni a filmek között.
  - Vendégként szeretnék tudni részletes leírást olvasni egy filmről.
  - Vendégként szeretnék tudni helyet foglalni filmre.
  
  - Adminként szeretnék új filmeket kiírni.
  - Adminként szeretnék tudni filmeket törölni, ha még nincsen rá foglalva hely.
  - Adminként új adminok felvételére lehetőség.

## Nem funkcionális követelmények

  - Adatbázisba elmentett adatok (belépési azonosítók, filmek, rájuk foglalt helyek)
  - Gyors működés.
  - Felhasználóbarát, letisztult kinézet.

# Szerepkörök

felhasználó:
  - Filmkeresés
  - Böngészés
  - Filmleírás megtekintése
  - Helyfoglalás
  
admin ezeken felül:
  - Filmkiírás
  - Filmtörlés
  - Admin hozzáadása

# Használati esetdiagram

![alt tag](https://raw.githubusercontent.com/retimarcell/alkfejlmozi/master/images/usecase.png)

# Folyamatok meghatározása

- Bejelentkezés
![alt tag](https://raw.githubusercontent.com/retimarcell/alkfejlmozi/master/images/process_login.png)
- Új film hozzáadása
![alt tag](https://raw.githubusercontent.com/retimarcell/alkfejlmozi/master/images/process_new_movie.png)
- Film törlése

- Helyfoglalás
![alt tag](https://raw.githubusercontent.com/retimarcell/alkfejlmozi/master/images/process_reservation.png)
- Film böngészése

# Oldaltérkép

Publikus:
  -Főoldal
  - Filmböngészés
    - Kategóriákra szűkítés
    - Leírás megtekintése
    - Helyfoglalás
  - Belépés

Admin:
  - Kilépés
  - Filmek változtatása
    - Új film
    - Meglévő film törlése
  - Admin hozzáadás

# Végpontok

 - GET / --> főoldal
 - GET /login --> bejelentkezési oldal
 - POST /login --> bejelentkezési adatok felküldése
 - GET /movies --> filmek megtekintése
 - GET /movies/:id --> film adatainak megtekintése
 - GET /movies/:id/reserve --> helyfoglalás
 - POST /movies/:id/reserve --> foglalt helyek adatainak felküldése
 - GET /movies/create --> új film kitűzése
 - POST /movies/create --> új film adatainak felküldése
 - GET /create_admin --> admin hozzáadása
 - POST /create_admin --> új admin adatainak a felküldése

# Oldalvázlatok

 - Főoldal
![alt tag](https://raw.githubusercontent.com/retimarcell/alkfejlmozi/master/images/home_screen.jpg)
 - Filmek böngészése
![alt tag](https://raw.githubusercontent.com/retimarcell/alkfejlmozi/master/images/search.jpg)
 - Film adatai
![alt tag](https://raw.githubusercontent.com/retimarcell/alkfejlmozi/master/images/film.jpg)
 - Helyfoglalás
![alt tag](https://raw.githubusercontent.com/retimarcell/alkfejlmozi/master/images/reservation.jpg)
 - Új film felvétele
![alt tag](https://raw.githubusercontent.com/retimarcell/alkfejlmozi/master/images/new_film.jpg)
 - Új admin felvétele
![alt tag](https://raw.githubusercontent.com/retimarcell/alkfejlmozi/master/images/new_admin.jpg)

# Adatmodell

![alt tag](https://raw.githubusercontent.com/retimarcell/alkfejlmozi/master/images/data_structure.png)

# Adatbázismodell

![alt tag](https://raw.githubusercontent.com/retimarcell/alkfejlmozi/master/images/database%20structure.png)