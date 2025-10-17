# :cd: Sample-uri Avansate

[← Înapoi la Index](00-Index.md){ .md-button }

!!! abstract "Obiectiv"
    Tot despre sample-uri în Strudel: default, custom, selectare, și bank-uri

## :drum: Sample-uri Default (Drum Machines)

!!! info "Biblioteca"
    Strudel vine cu biblioteca [tidal-drum-machines](https://github.com/ritchse/tidal-drum-machines)

### Tabel Scurtături Drums

| Instrument | Scurtătură | Exemplu |
|------------|------------|---------|
| Bass drum, Kick | `bd` | `s("bd")` |
| Snare drum | `sd` | `s("sd")` |
| Rimshot | `rim` | `s("rim")` |
| Clap | `cp` | `s("cp")` |
| Closed hi-hat | `hh` | `s("hh")` |
| Open hi-hat | `oh` | `s("oh")` |
| Crash | `cr` | `s("cr")` |
| Ride | `rd` | `s("rd")` |

### Percuție Extra

| Instrument | Scurtătură |
|------------|------------|
| Shakers, maracas | `sh` |
| Cowbell | `cb` |
| Tambourine | `tb` |
| Percussions | `perc` |

### Exemplu Beat

```javascript
s("bd sd [~ bd] sd, hh*16, misc")
```

## :bank: Sound Banks

!!! tip "Ce Sunt Bank-urile?"
    Sample-urile sunt organizate pe "bank-uri" (drum machine-uri diferite)

=== "Fără Bank (versiunea lungă)"

    ```javascript
    s("RolandTR808_bd RolandTR808_sd, RolandTR808_hh*16")
    ```

=== "Cu .bank() (scurt!)"

    ```javascript
    s("bd sd, hh*16").bank("RolandTR808")
    ```

### Pattern-uri de Bank-uri

```javascript
// Schimbă între două drum machines
s("bd sd, hh*16").bank("<RolandTR808 RolandTR909>")

// Bank diferit pentru fiecare sound
s("bd sd hh").bank("RolandTR808 RolandTR909 LinnDrum")
```

!!! warning "Atenție"
    Nu toate bank-urile au toate sunetele! Unele pot lipsi `cb`, `tb`, etc.

## :1234: Selectarea Sample-urilor

=== "Cu .n()"

    ```javascript
    // Selectează variante diferite (0-3)
    s("hh*8").bank("RolandTR909").n("0 1 2 3")
    
    // Numerele prea mari se întorc de la început
    s("hh*8").bank("RolandTR909").n("0 1 2 3 4 5 6 7")
    ```

=== "Cu : în Mini-Notation"

    ```javascript
    // Selectare directă în string
    s("bd*4, hh:0 hh:1 hh:2 hh:3").bank("RolandTR909")
    
    // Pattern complex
    s("bd:0 bd:1 bd:2").bank("RolandTR808")
    ```

## :globe_with_meridians: Sample-uri Custom (URL-uri)

### Încărcare din URL-uri

```javascript
samples({
  bassdrum: 'bd/BT0AADA.wav',
  hihat: 'hh27/000_hh27closedhh.wav',
  snaredrum: ['sd/rytm-01-classic.wav', 'sd/rytm-00-hard.wav'],
}, 'https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/')

// Folosește-le
s("bassdrum snaredrum:0 bassdrum snaredrum:1, hihat*16")
```

!!! info "Cum funcționează"
    - `bassdrum` → `https://raw.../bd/BT0AADA.wav`
    - `bassdrum` = **nume tău custom**
    - `'bd/BT0AADA.wav'` = **cale relativă**
    - URL-ul final = bază + cale

### Sample-uri din `strudel.json`

=== "Fișier JSON"

    ```json
    {
      "bassdrum": ["bd/BT0AADA.wav"],
      "hihat": ["hh27/000_hh27closedhh.wav"],
      "snaredrum": [
        "sd/rytm-01-classic.wav",
        "sd/rytm-00-hard.wav"
      ]
    }
    ```

=== "Încărcare"

    ```javascript
    samples('https://example.com/sounds/strudel.json')
    
    // Apoi folosești sample-urile
    s("bassdrum hihat snaredrum:1")
    ```

## :label: Aliasuri Custom

```javascript
// Definește alias
soundAlias("RolandTR808_bd", "kick")

// Folosește-l
s("kick kick ~ kick")
```

### Alias-uri Multiple

```javascript
soundAlias("RolandTR808_bd", "kick")
soundAlias("RolandTR808_sd", "snare")
soundAlias("RolandTR808_hh", "hat")

s("kick snare hat*4")
```

## :gear: Parametri Sample

=== ".speed()"

    ```javascript
    // Viteza de redare
    s("bd").speed("1 1.5 2 0.5")
    
    // Negativ = reverse
    s("bd").speed("-1")
    ```

=== ".begin() / .end()"

    ```javascript
    // Unde începe sample-ul (0-1)
    s("bd").begin("0 0.25 0.5")
    
    // Unde se termină (0-1)
    s("bd").end("0.5 0.75 1")
    
    // Combinat = slice
    s("bd").begin(0.25).end(0.5)
    ```

=== ".cut()"

    ```javascript
    // Sample-urile din același grup se opresc între ele
    s("hh*8").cut(1)
    ```

## :dart: Exemple Practice

!!! example "Beat Complet"

    ```javascript
    s("bd*4, sd(3,8), [hh oh]*4")
      .bank("<RolandTR808 RolandTR909>")
      .speed("1 0.95")
      .gain(0.8)
    ```

!!! example "Mix de Bank-uri"

    ```javascript
    stack(
      s("bd*4").bank("RolandTR808"),
      s("sd(3,8)").bank("RolandTR909"),
      s("hh*16").bank("LinnDrum").gain(0.5)
    )
    ```

---

<div class="grid" markdown>

[← Mini-Notation Avansată](06-Mini-Notation-Avansata.md){ .md-button }
[Synth-uri Avansate →](08-Synth-uri-Avansate.md){ .md-button .md-button--primary }

</div>
