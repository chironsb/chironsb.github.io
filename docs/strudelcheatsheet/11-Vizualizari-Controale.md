# :video_game: Vizualizări și Controale Interactive

[← Înapoi la Index](00-Index.md){ .md-button }

!!! abstract "Obiectiv"
    Tot despre vizualizări, MIDI, OSC, gamepads și control live în Strudel

## :art: Vizualizări (Visual Feedback)

### Tipuri de Vizualizări

!!! info "Două Variante"
    Strudel oferă **2 variante** pentru fiecare vizualizare:
    
    | Variantă | Unde apare | Exemplu |
    |----------|------------|---------|
    | **Fără prefix** | Background (fullscreen) | `.punchcard()` |
    | **Cu `_` prefix** | Inline în cod | `._punchcard()` |
    
    **Avantaj `_` prefix**: Poți avea **multiple vizualizări** simultan!

## :musical_keyboard: Punchcard / Pianoroll

!!! warning "Diferența"
    - **`pianoroll()`** - Arată pattern-ul ÎNAINTE de transformări
    - **`punchcard()`** - Arată pattern-ul DUPĂ transformări

=== "Exemplu Punchcard"

    ```javascript
    note("c a f e").color("white")
      ._punchcard()
      .color("cyan") // Vizibil în punchcard!
    ```

=== "Exemplu Pianoroll"

    ```javascript
    note("c a f e").color("white")
      ._pianoroll()
      .color("cyan") // NU e vizibil!
    ```

### Opțiuni Pianoroll/Punchcard

```javascript
note("c d e f")._pianoroll({
  vertical: 1,        // 1 = vertical, 0 = orizontal
  flipTime: 1,        // Inversează axa timp
  fill: 0,            // 0 = outline, 1 = umplut
  labels: 1,          // Arată labels (note names)
  strikeActive: 1,    // Highlight active notes
  fontFamily: 'monospace'
})
```

## :cyclone: Alte Vizualizări

=== "Spiral"

    ```javascript
    note("c d e f g a b c5")._spiral()
    
    // Cu opțiuni
    note("c e g")._spiral({
      cycles: 4,
      thickness: 2
    })
    ```

=== "Scope (Osciloscop)"

    ```javascript
    note("c2").sound("sawtooth")._scope()
    
    s("bd sd").color("red")._scope({
      thickness: 4,
      fill: 1
    })
    ```

=== "Pitchwheel"

    ```javascript
    note("c d e f").color("magenta")._pitchwheel()
    ```

=== "Spectrum"

    ```javascript
    note("c2 e2 g2")._spectrum()
    
    s("bd sd hh")._spectrum({
      height: 200,
      bars: 64
    })
    ```

## :art: Color - Highlight

```javascript
// Culoare simplă
note("c d e f").color("cyan")

// Pattern de culori
s("bd sd hh cp").color("red blue green yellow")

// Cu pattern complex
note("<c e g> <d f a>")
  .color("<cyan magenta> <yellow green>")
```

!!! tip "Highlight-uri"
    Mini-notation în `"quotes"` sau `` `backticks` `` = auto-highlight  
    Partea activă se evidențiază în culoarea setată

## :musical_keyboard: MIDI Control

### Conectare MIDI

=== "Output MIDI"

    ```javascript
    // Trimite la device MIDI
    note("c e g a").midi()
    
    // Specific device
    note("c e g a").midi('IAC Driver')
    ```

=== "Cu Opțiuni"

    ```javascript
    note("c e g a").midi('IAC Driver', {
      latencyMs: 34,
      midichannel: 1,
      velocity: 0.9,
      gain: 1
    })
    ```

=== "Input MIDI"

    ```javascript
    // Primește de la MIDI controller
    midin('My MIDI Controller')
      .s("sawtooth")
      .lpf(2000)
    ```

### MIDI Channel

```javascript
// Setează canal MIDI
note("c e g").midichan(2).midi()

// Pattern de canale
note("c e g").midichan("<1 2 3 4>").midi()
```

### Control Change (CC)

=== "Cu control()"

    ```javascript
    note("c a f e")
      .control([74, sine.slow(4)])
      .midi()
    ```

=== "Cu ccn + ccv"

    ```javascript
    note("c a f e")
      .ccn(74)
      .ccv(sine.slow(4))
      .midi()
    ```

=== "Separate CC Control"

    ```javascript
    $: note("c a f e").midi()
    $: ccv(sine.segment(16).slow(4))
       .ccn(74).midi()
    ```

!!! info "CC-uri Comune"
    - **1** - Mod wheel
    - **7** - Volume
    - **10** - Pan
    - **11** - Expression
    - **64** - Sustain
    - **74** - Filter cutoff

### Program Change

```javascript
// Schimbă presets (0-127)
note("c3 e3 g3")
  .progNum("<0 1 2>")
  .midi()
```

### MIDI Clock (Sync)

```javascript
// Trimite MIDI clock
midicmd("clock*48, <start stop>/2").midi('IAC Driver')

// Start/Stop/Continue
midicmd("start").midi()
midicmd("stop").midi()
```

## :video_game: Gamepad Control

```javascript
// Folosește gamepad pentru control
note("c d e f")
  .gain(gamepad(0).axis(1))
  .pan(gamepad(0).axis(0))
```

## :globe_with_meridians: OSC (Open Sound Control)

```javascript
// Trimite la SuperDirt (Tidal)
note("c e g").osc()

// Custom OSC target
note("c e g").osc({
  host: 'localhost',
  port: 57120
})
```

## :dart: Exemple Complete

!!! example "Beat cu Vizualizări Multiple"

    ```javascript
    stack(
      s("bd*4").color("red")._scope({thickness:4}),
      s("sd(3,8)").color("blue")._pianoroll({vertical:1}),
      note("c e g").color("cyan")._pitchwheel({circle:1})
    )
    ```

!!! example "MIDI Controller cu CC"

    ```javascript
    // Note + filter control
    $: note("c a f e")
       .midichan(1)
       .midi('My Synth')

    // Filter CC (separate)
    $: ccn(74)
       .ccv(sine.slow(4))
       .midichan(1)
       .midi('My Synth')
    ```

!!! example "Live Visual Performance"

    ```javascript
    note("c d e f g a b c5")
      .color("<red cyan green magenta>")
      ._punchcard({
        vertical: 1,
        flipTime: 1,
        fill: 0,
        labels: 1
      })
      ._spectrum()
      ._scope({thickness: 3})
    ```

## :clipboard: Cheat Sheet Vizualizări

| Funcție | Scop | Prefix `_` |
|---------|------|-----------|
| `.punchcard()` | Pianoroll cu transformări | `._punchcard()` |
| `.pianoroll()` | Pianoroll original | `._pianoroll()` |
| `.spiral()` | Spirală vinyl-style | `._spiral()` |
| `.scope()` | Osciloscop waveform | `._scope()` |
| `.pitchwheel()` | Roată pitch circular | `._pitchwheel()` |
| `.spectrum()` | Analizor frecvențe | `._spectrum()` |
| `.color()` | Highlight culoare | - |

## :clipboard: Cheat Sheet MIDI

| Funcție | Scop | Exemplu |
|---------|------|---------|
| `.midi()` | Trimite MIDI | `.midi('IAC Driver')` |
| `.midin()` | Primește MIDI | `midin('Controller')` |
| `.midichan()` | Canal MIDI | `.midichan(2)` |
| `.ccn()` + `.ccv()` | Control Change | `.ccn(74).ccv(0.5)` |
| `.progNum()` | Program Change | `.progNum(10)` |
| `midicmd()` | Clock/Start/Stop | `midicmd("start")` |

## :bulb: Tips

!!! tip "Sfaturi Practice"

    1. **Multiple visuals**: Folosește `_` prefix pentru inline
    2. **Performance**: `punchcard()` mai rapid decât `pianoroll()`
    3. **MIDI latency**: Ajustează `latencyMs` în `.midi()` options
    4. **CC values**: Normalizate 0-1 (Strudel convertește la 0-127)
    5. **Gamepad**: Ideal pentru live tweaking
    6. **OSC**: Perfect pentru integrare cu SuperCollider/Max

---

<div class="grid" markdown>

[← Signals și Modulare](10-Signals-Modulare.md){ .md-button }
[Lista Completă →](99-Lista-Completa.md){ .md-button .md-button--primary }

</div>
