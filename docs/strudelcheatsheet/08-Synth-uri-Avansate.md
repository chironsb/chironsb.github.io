# :control_knobs: Synth-uri Avansate

[← Înapoi la Index](00-Index.md){ .md-button }

!!! abstract "Obiectiv"
    Motor de sinteză în timp real pentru sunete generate procedural

## :ocean: Waveform-uri de Bază

```javascript
// Cele 4 waveform-uri clasice
note("c2 eb2 g2").sound("sawtooth")
note("c2 eb2 g2").sound("square")
note("c2 eb2 g2").sound("triangle")
note("c2 eb2 g2").sound("sine")
```

!!! tip "Default"
    Dacă pui `note()` fără `sound()`, default = `triangle`!

## :bar_chart: Forme de Undă

| Waveform | Caracter | Uz |
|----------|----------|-----|
| `sine` | Pur, curat | Bass-uri, sub-bass |
| `triangle` | Cald, blând | Default, melodii |
| `sawtooth` | Ascuțit, bogat | Lead-uri, brass |
| `square` | Retro, digital | Chiptune, lead |

## :loud_sound: Noise (Zgomot)

=== "Tipuri de Noise"

    ```javascript
    sound("white")  // dur, strident
    sound("pink")   // mediu
    sound("brown")  // moale, grav
    ```

=== "Hi-hats din Noise"

    ```javascript
    sound("bd*2, <white pink brown>*8")
      .decay(0.04)
      .sustain(0)
    ```

=== ".noise() Parameter"

    ```javascript
    // Adaugă noise la orice oscilator
    note("c3").noise("<0.1 0.25 0.5>")
    
    // Pink noise peste synth
    note("c2 eb2 g2").sound("sawtooth").noise(0.2)
    ```

## :musical_score: Sinteza Aditivă

### Limitarea Armonicelor cu `.n()`

```javascript
// n = număr de partiale armonice
note("c2 eb2 g2").sound("sawtooth").n("<32 16 8 4>")

// Mai puține partiale = sunet mai moale
note("c2").sound("sawtooth").n(4)   // moale
note("c2").sound("sawtooth").n(32)  // ascuțit
```

!!! info "În Mini-Notation"
    ```javascript
    // Definește n direct în sound
    note("c2 eb2 g2").sound("sawtooth:<32 16 8 4>")
    ```

!!! warning "Notă pentru Tidal users"
    În Strudel `n` schimbă ÎNTOTDEAUNA timbrul, NU pitch-ul!

## :notes: Vibrato

```javascript
// Vibrato de bază
note("c3").vib("<0 2 4 8>")

// Cu depth
note("c3").vib(4).vibmod(0.5) // mai subtil
```

- `.vib()` - Vibrato speed
- `.vibmod()` - Modulează adâncimea

## :radio: FM Synthesis

!!! info "FM"
    Frecvența modulează frecvența = timbre nou!

=== "FM Index"

    ```javascript
    note("c2 eb2 g2").fm("<0 1 4 8>")
    
    // Index mare = sunet metalic
    note("c2").fm(10)
    ```

=== "FM Harmonicity"

    ```javascript
    note("c2 eb2").fm(4).fmh("<0.5 1 2 4>")
    
    // fmh < 1 = sunet grav
    // fmh = 1 = armonic natural
    // fmh > 1 = sunet ascuțit
    ```

=== "FM Envelope"

    ```javascript
    note("c2 eb2 g2")
      .fm(8)
      .fmattack(0.01)
      .fmdecay(0.2)
      .fmsustain(0.3)
      .fmrelease(0.5)
    ```

## :art: Tehnici Synth Avansate

!!! example "SuperSaw (Detune Multiple)"

    ```javascript
    note("c2 eb2 g2")
      .sound("sawtooth")
      .n(8)
      .detune("0 7 -7 12 -12")
      .gain(0.6)
    ```

!!! example "Bass Gras (FM + Filter)"

    ```javascript
    note("c1 eb1 g1")
      .sound("triangle")
      .fm(4)
      .fmh(0.5)
      .lpf(800)
      .lpq(10)
      .lpa(0.3)
    ```

!!! example "Lead Metalic (FM Înalt)"

    ```javascript
    note("c4 d4 e4 g4")
      .sound("square")
      .fm("<8 12 16>")
      .fmh(2)
      .hpf(1000)
      .delay(0.3)
    ```

!!! example "Pad Cald"

    ```javascript
    note("<c3 eb3 g3 bb3>")
      .sound("sawtooth")
      .n(4)
      .attack(0.8)
      .release(2)
      .room(0.8)
      .gain(0.5)
    ```

## :clipboard: Cheat Sheet Synth

| Parametru | Scop | Range |
|-----------|------|-------|
| `.sound()` | Waveform | sine/triangle/sawtooth/square |
| `.n()` | Partiale armonice | 1-64 |
| `.fm()` | FM index | 0-20 |
| `.fmh()` | FM harmonicity | 0.1-8 |
| `.vib()` | Vibrato speed | 0-20 |
| `.vibmod()` | Vibrato depth | 0-1 |
| `.noise()` | Pink noise amount | 0-1 |
| `.detune()` | Dezacordare | -50 - 50 |

---

<div class="grid" markdown>

[← Sample-uri Avansate](07-Sample-uri-Avansate.md){ .md-button }
[Modulări de Timp →](09-Modulare-Timp.md){ .md-button .md-button--primary }

</div>
