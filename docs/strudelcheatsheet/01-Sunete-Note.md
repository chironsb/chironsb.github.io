# :musical_note: Sunete și Note

[← Înapoi la Index](00-Index.md){ .md-button }

!!! abstract "Obiectiv"
    Cum să creezi sunete și note în Strudel

## :musical_keyboard: Funcții de Bază

### `s()` sau `sound()`

=== "Scurtătură (Recomandat)"

    ```javascript
    s("bd sd")
    ```

=== "Forma Lungă"

    ```javascript
    sound("bd sd")
    ```

!!! info "Sunt identice!"
    Cele două forme sunt complet echivalente. Recomandăm forma scurtă `s()` pentru rapiditate.

### `note()` sau `n()`

=== "Note Muzicale"

    ```javascript
    note("c d e f")      // Note muzicale
    ```

=== "MIDI Numbers"

    ```javascript
    n("60 64 67")        // MIDI numbers
    ```

=== "Sample Numbers"

    ```javascript
    s("bd").n("0 1 2 3") // Diferite variante de bd
    ```

## :memo: Prescurtări Confirmate

| Funcție Lungă | Prescurtare | Exemplu |
|--------------|-------------|---------|
| `sound()` | `s()` | `s("bd sd")` |
| `note()` | `n()` | `n("60 64 67")` |
| `lpattack()` | `lpa()` | `lpa(0.1)` |
| `lpdecay()` | `lpd()` | `lpd(0.2)` |
| `lpsustain()` | `lps()` | `lps(0.5)` |
| `lprelease()` | `lpr()` | `lpr(0.3)` |
| `lpenv()` | `lpe()` | `lpe(4)` |

## :musical_score: Note Muzicale

### Sintaxă

=== "Note Simple"

    ```javascript
    note("c d e f g a b")     // Note simple
    ```

=== "Cu Octave"

    ```javascript
    note("c4 e4 g4")          // Cu octave
    ```

=== "Diez"

    ```javascript
    note("c# d# f#")          // Diez
    ```

=== "Bemol"

    ```javascript
    note("db eb gb")          // Bemol
    ```

### Octave

!!! tip "Octave"
    - **Default:** octava 3
    - **Range:** 0-9

```javascript
note("c3 c4 c5 c6")       // Diferite octave
```

### Alterări

```javascript
note("c#")     // Do diez
note("db")     // Re bemol
note("c# d# e f# g# a# b")  // Scală cromatică
```

## :control_knobs: Sample-uri

### Sample names

<div class="grid cards" markdown>

-   :drum: **Drums**

    ---

    ```javascript
    s("bd")        // Bass drum
    s("sd")        // Snare drum
    s("hh")        // Hi-hat
    s("cp")        // Clap
    ```

-   :cymbal: **Cymbals**

    ---

    ```javascript
    s("oh")        // Open hi-hat
    s("cr")        // Crash
    s("ride")      // Ride cymbal
    ```

</div>

### Variante de sample (cu `:`)

=== "Cu colon (:)"

    ```javascript
    s("bd:0")      // Prima variantă
    s("bd:1")      // A doua variantă
    s("bd:0 bd:1 bd:2 bd:3")  // Diferite variante
    ```

=== "Cu n()"

    ```javascript
    s("bd").n("0 1 2 3")
    ```

## :musical_keyboard: Synths

=== "Waveforms"

    ```javascript
    s("sine")      // Val sinusoidal
    s("sawtooth")  // Dinți de ferăstrău
    s("square")    // Val pătrat
    s("triangle")  // Triunghiular (default)
    ```

=== "Cu Note"

    ```javascript
    // Cu note:
    note("c e g").s("sawtooth")
    ```

## :musical_score: Scale și Tonal

### `scale()`

```javascript
n("0 2 4 5 7").scale("C:major")
n("0 2 4 5 7").scale("C:minor")
n("0 2 4 5 7").scale("C:pentatonic")
```

!!! info "Scale disponibile"
    major, minor, dorian, phrygian, lydian, mixolydian, locrian, pentatonic, minorPentatonic, blues, wholetone

### Funcții tonale

```javascript
note("c e g").voicing()    // Voicing acorduri
note("c e g").arp()        // Arpegiu
```

## :wrench: Combinații Frecvente

=== "Melodie Simplă"

    ```javascript
    note("c d e f").s("piano")
    ```

=== "Bas + Baterie"

    ```javascript
    stack(
      s("bd sd bd sd"),
      note("c2 c2 g2 g2").s("sawtooth")
    )
    ```

=== "Note cu Efecte"

    ```javascript
    note("c e g")
      .s("sawtooth")
      .lpf(1000)
      .attack(0.1)
      .release(0.5)
    ```

=== "Scale cu Pattern"

    ```javascript
    n("0 2 4 5 7 5 4 2")
      .scale("C:minor")
      .s("triangle")
    ```

---

<div class="grid" markdown>

[← Înapoi](00-Index.md){ .md-button }
[Mini-Notation →](02-Mini-Notation.md){ .md-button .md-button--primary }

</div>
