# EKONIA: Landing Page Copywriting & Design Dokumentáció (v2, casual hangvétel)

**Célközönség:** polgármesterek, jegyzők, kommunikációs vezetők (kisvárosok, nagyközségek)
**Megszólítás:** Ön / Önök, de közvetlen, beszélgetős stílusban, nem hivatali fogalmazványként
**Mi változott ehhez a verzióhoz képest:** kiszedtük a "korporát AI-copy" jellegzetes elemeit: a hármas felsorolásokat, a "Hisszük, hogy…" típusú mondatokat, a túl szimmetrikus címsorokat, a mindenhol egyforma badge-eket. Helyettük konkrétabb, esetlegesebb, emberibb megfogalmazás, mintha tényleg valaki leült volna megírni, nem egy sablon töltötte volna ki.

---

## 0. Design Tokenek (v5: letisztultabb, kevésbé "kockás" Svájci rendszer)

**Mi változott a v4-hez képest:** eltűnt a teljes oldalt körbefogó, folyamatos függőleges keretvonal ("grid frame"): az oldal most inkább nagyvonalú fehértérrel (whitespace) tagolt, nem minden elem van bekeretezve. A Rólunk szekció csapattag-blokkjai fotóhelyet is kaptak.

**v6: a nagy sorszámok teljesen eltűntek, mindenhonnan.** A fájdalompontok szekció most egy tiszta kétoszlopos (cím + leírás) sorlista, halvány hover-kiemeléssel (a sor háttere és a cím színe finoman elmozdul rá- állás közben). Emellett a "smooth SPA" hatás érdekében: a fejléc `sticky` + üveghatású (`backdrop-blur`) lett; a navigáció-linkeken egy vékony, balról jobbra kirajzolódó aláhúzás jelenik meg hoverre; a fő szekció-bevezetők (hero, minden szekció cím-blokkja) finoman, egyszer, felfelé úsznak be a képbe, amikor görgetéskor a látótérbe érnek (`IntersectionObserver`, `prefers-reduced-motion`-t tiszteletben tartva, JS nélkül is minden látszik).

**v7: a "Videó Demó" szekció teljesen kikerült az oldalból** (a nav, a mobilmenü, a lábléc és a hero másodlagos CTA-ja is ennek megfelelően frissült; utóbbi most a "Funkciók" szekcióra mutat). A korábbi 9 szekció most 8, a sorszámozás ennek megfelelően eltolódott.

**Színpaletta: zöld/narancssárga**
| Név | Hex | Szerep |
|---|---|---|
| Papír (Paper) | `#F7F6F2` | Fő háttér |
| Erdő (Ink, mélyzöld) | `#1B4D3A` | Elsődleges szöveg, keretvonalak, a "Funkciók" szekció sötét háttere; ez adja az oldal "zöld" alaphangját |
| Narancs (Accent) | `#C2410C` | Elsődleges interakciós szín: gomb-hover, fókuszgyűrű, FAQ "+" jelek, "3 hónapig ingyen" jelvény, a "Funkciók" szekció felső csík-vonala, **és minden szekció-eyebrow felirat** (A jelenlegi helyzet, Rólunk, Menetrend, GYIK, Kapcsolat). A sötét zöld szekcióban ("A megoldás" felirat, kis négyzet-jelölők) egy világosabb narancs tónus (`#F2914B`) szerepel ugyanezen logika mentén, hogy a sötét háttéren is jól olvasható maradjon. |
| Zöld akcent (Accent2) | `#2FAE68` | Másodlagos kiemelés: link-hoverek, apró jelölő-pöttyök (hero-vizuál, idővonal) |

[Design Note: a narancs szándékosan a *cselekvésre ösztönző* elemeken jelenik meg (gombok, FAQ-interakció, promó jelvény), a zöld pedig az *informatív/másodlagos* elemeken (eyebrow-k, linkek, jelölőpontok); így a két szín nem keveredik össze véletlenszerűen, hanem funkciója van.]

**Tipográfia:** Space Grotesk (cím) / Inter (törzsszöveg) / IBM Plex Mono (apró feliratok), változatlan.

**Szerkezeti elvek (v5)**
- Nincs teljes oldalt körbefogó keret: a szekciók egyszerű `max-w-[1320px]` konténerben ülnek, csak a nagyobb tartalmi egységek között van egy-egy vékony vízszintes elválasztó vonal.
- **Nincsenek sorszámok sehol:** a Funkciók szekcióban egy apró zöld négyzet-jelölő, a Menetrendben egy időrendi címke ("Elsőként / Utána / Aztán / Végül") és egyetlen vízszintes idővonal-vonal adja a sorrendiséget, a fájdalompontoknál pedig egy egyszerű, két oszlopos (cím + leírás) sorlista.
- A Rólunk szekció csapattag-blokkjai most fotó + szöveg elrendezésűek: egy bekeretezett, "Fotó" feliratú placeholder-doboz balra, mellette a név/pozíció/bemutatkozás; ide kerül majd a valós portré.
- Gombok: szögletes sarkú, tömör tinta-fekete alap, hover állapotban zöldre vált.
- Az űrlapmezők alsó vonalas (underline) stílusúak.

[Design Note: a `[Design Note: ...]` jelölésű korábbi utasítások közül a "teljes oldalas keret" és a "minden szekció bekeretezve" elvek már nem érvényesek. Ez a rész az aktuális `index.html`-t írja le.]

---

## 1. Fejléc & Hero

**Navigáció:** Logó | Miért mi? | Funkciók | Kapcsolat

**H1:**
> Amit fontos elmondani, azt nem bízzuk egy Facebook-algoritmusra.

**Alcím:**
> Ismerős: kiposztol valamit a hivatal, és három ember látja. Az Ekonia egy saját alkalmazást ad a településnek. A hír push értesítésként landol a lakosok telefonján, nem egy hírfolyamban elveszve.

**Elsődleges CTA:**
> Kérem a demót

**Másodlagos CTA (link):**
> Megnézem, hogyan működik ↓

[Design Note: Hero alatt egy interaktív mini-szimuláció, ami a felhasználó saját kezű vezérlésével mutatja meg a "egy kattintás, azonnal megjelenik" ígéretet: egy fogható hírkártya áthúzható (egérrel, érintéssel vagy koppintással is) a "Közzététel" mezőbe. Sikeres behúzáskor a mező reagál (szín-visszajelzés, "Feltöltve" → "Közzétéve ✓"), majd a hírkártya egy rövid, természetes animációval megjelenik a telefon-mockupban, mintha most publikálták volna. "Próbáld ki újra" gomb bármikor visszaállítja a kiindulóállapotot. Mobilon a húzás mellett az egyszerű koppintás/kattintás is elküldi a kártyát (Pointer Events API egységesíti az egér/érintés/toll bemenetet), billentyűzettel is aktiválható (Enter/Space). A drag közbeni finom emelkedés + árnyék kivétel a szigorú "nincs árnyék" szabály alól: itt funkcionális visszajelzés, nem dekoráció.]

---

## 2. Fájdalompontok

**Cím:**
> Ezt biztos ismeri

**Bevezető:**
> Nem Önökön múlik. Csak épp a jelenlegi eszközök tíz évvel le vannak maradva.

**1. Kiposztolja, és senki se látja**
> Anno elég volt kiírni egy hírt a Facebook oldalra, és mindenki tudott róla. Ma az elérés a töredékére esett, hiába a hirdetőtábla, hiába a szórólap, a lakosok jó része egyszerűen nem találkozik a hírrel.

**2. Ugyanaz a kérdés, tizedszer aznap**
> "Mikor jön vissza a víz?", "Hol veszem át a papírt?", "Mikor van a testületi ülés?", ismerős kérdések, amikre naponta többször válaszolnak telefonon és a pultnál, ahelyett hogy dolgozhatnának.

**3. A bejelentés valahol elvész**
> Valaki felhívja a hivatalt egy kátyú miatt, vagy ír egy e-mailt, de hogy pontosan hol a probléma? Az már összejön telefonon, aztán a papír elkeveredik, és senki nem tudja, kimentek-e már megnézni.

**4. A helyi újság drága, és egyre kevesebben olvassák**
> Minden hónapban fizetnek a nyomtatásért és a kihordásért, mire a hír megjelenik, már két hete aktuális. A fiatalabbak meg amúgy is a telefonjukról tájékozódnak, ha egyáltalán.

---

## 3. Megoldás / Termékbemutató

**Cím:**
> Egy app a lakosoknak. Egy egyszerű felület a hivatalnak.

**Bevezető:**
> A kettő ugyanabból a rendszerből él, csak más oldalról nézve. A lakos egy letisztult appot lát, Önök egy admin felületet, amit tényleg öt perc alatt megtanulnak.

**1. Azonnali push értesítés** *(ezt a lakosok kapják)*
> Egy kattintás, és a közlemény azonnal megjelenik a lakosok telefonján. Nincs algoritmus, ami eldönti, ki lássa. Sürgős esetben (pl. vízkimaradás) hangjelzéssel járó riasztás is küldhető.

**2. Hibabejelentés fotóval és GPS-szel** *(ezt is a lakosok használják)*
> A lakos lefotózza a kátyút, az app pedig automatikusan hozzácsapja a helyet. A bejelentés azonnal ott van az admin felületen, térképre rakva. Nem kell találgatni, hova is kellene kimenni.

**3. Hírek és események egy helyen** *(ezt mindkét oldal használja)*
> Falunap, testületi ülés, nyitvatartás-változás, pályázati felhívás: egy rendezett, kereshető felület, amit a lakosok maguktól átböngésznek, ahelyett hogy felhívnák a hivatalt.

**4. Admin felület, informatikus nélkül** *(ez a hivatal oldala)*
> Ha valaki tud e-mailt írni, ezt is tudja kezelni. A közlemény megírása vagy egy bejelentés lezárása pár kattintás, böngészőből, bármilyen eszközről.

---

## 4. Rólunk

**Cím:**
> Miért csináljuk ezt

**Szöveg:**
> Onnan indult az egész, hogy megnéztünk pár önkormányzati Facebook-oldalt: 200-300 követő, egy fontos közlemény alatt alig pár lájk. Gondoltuk, ennek nem így kéne mennie. Egy település és a lakosai közti kapcsolat nem múlhat azon, hogy épp mennyi elérést enged egy platform, amit nem is a mi igényeinkre találtak ki. Szóval megcsináltuk azt, amire tényleg szükség volt: egy saját csatornát, ami a településé, nem egy techcégé.

**Csapattag #1 (placeholder)**
- Név: [Név megadása]
- Pozíció: Alapító
- Bemutatkozás: *"[2-3 mondat: honnan jött az ötlet, mi motivál a projektben.]"*

**Csapattag #2 (placeholder)**
- Név: [Név megadása]
- Pozíció: Termékfejlesztés
- Bemutatkozás: *"[2-3 mondat: szakmai háttér, mit tart fontosnak az önkormányzatokkal való munkában.]"*

---

## 5. Menetrend

**Cím:**
> Így néz ki az egész, elejétől a végéig

**Elsőként: beszélgetünk**
> Leülünk (vagy videóhívunk), és elmondja, mi megy most, mi nem. Nem kötelezettség, csak egy őszinte beszélgetés.

**Utána: beállítjuk**
> A rendszer felveszi a település arculatát, elnevezését, a saját ügytípusait, hogy az app elsőre is otthonosnak tűnjön.

**Aztán: megtanítjuk**
> Egy rövid, gyakorlatias alkalom a munkatársaknak. Nem kell hozzá informatikus, tényleg.

**Végül: elindul, 3 hónapig ingyen**
> A lakosok letöltik az appot, Önök pedig 3 hónapig díjmentesen próbálják, mielőtt bármit is eldöntenének.

---

## 6. GYIK

**Kell hozzá informatikus vagy külön eszköz a hivatalban?**
> Nem. Böngészőből megy, bármilyen gépről vagy telefonról. Ha valaki tud e-mailt írni, ezt is fogja tudni.

**Mi a helyzet a GDPR-ral?**
> Rendben van. A lakosok adatait csak a szükséges mértékben kezeljük, EU-s szervereken tároljuk, és minden önkormányzattal kötünk adatkezelési tájékoztatót, ha kell, adatfeldolgozói szerződést is.

**Mennyi idő, mire elindul?**
> Pár hét, a település méretétől és attól függően, mennyi testreszabást kérnek. A pontos menetet a Menetrend részben írtuk le.

**Mennyibe kerül, és mennyire kötelezem el magam?**
> Ez a lakosságszámtól és a kért funkcióktól függ, ezt a konzultáción beszéljük át, testre szabva. Az első 3 hónap mindenképp ingyenes, elköteleződés nélkül.

**Mi van, ha a lakosok nem töltik le?**
> Adunk egy kis kampányanyagot a bevezetéshez: plakát, posztminta, szórólap. De valljuk be, egy azonnali riasztás és egy működő hibabejelentés önmagában is elég ok a letöltésre.

---

## 7. Záró CTA & Kapcsolati Űrlap

**Cím:**
> Írjon pár sort, és jelentkezünk

**Alcím:**
> Nem eladni akarunk, csak beszélgetni róla, mire lenne szükség Önöknél. 1 munkanapon belül jelentkezünk.

**Űrlap mezők:** Teljes név, Település neve, Beosztás (Polgármester / Jegyző / Kommunikációs vezető / Egyéb), E-mail cím, Telefonszám (opcionális), Üzenet (opcionális)

**CTA gomb:**
> Küldés

**Apró szöveg a gomb alatt:**
> Se spam, se erőltetés, csak egy hívás, ha érdekli.

---

## 8. Lábazat

**Oszlop 1, Márka:** Ekonia logó + "Közvetlen kapcsolat a település és a lakosai között."
**Oszlop 2, Navigáció:** Miért mi? / Funkciók / Kapcsolat
**Oszlop 3, Jogi:** Adatvédelmi tájékoztató / ÁSZF / Impresszum
**Oszlop 4, Elérhetőség:** info@ekonia.hu / +36 XX XXX XXXX / [Cím megadása]
**Copyright sor:** © 2026 Ekonia. Minden jog fenntartva.
