# :art: Combinații și Exemple Practice

[← Înapoi la Index](00-Index.md){ .md-button }

!!! abstract "Obiectiv"
    Cum să combini funcțiile pentru a crea muzică

## :dart: Chain-uri de Funcții

### Baza

```javascript
s("bd sd").gain(0.8).pan(0.5)
//  ^         ^          ^
//  sunet    efect1    efect2
```

!!! tip "Regula de Bază"
    **Dot `.` înseamnă "apoi aplică"**
    
    ```javascript
    note("c d e f")      // 1. Creează pattern de note
      .s("sawtooth")     // 2. Apoi alege synth
      .lpf(1000)         // 3. Apoi filtrează
      .room(0.5)         // 4. Apoi adaugă reverb
    ```

## :link: Combinații Frecvente

=== "Sunet + Efecte"

    ```javascript
    s("bd sd")
      .gain(0.9)
      .lpf(800)
      .room(0.3)
    ```

=== "Note + Synth + Efecte"

    ```javascript
    note("c e g")
      .s("sawtooth")
      .lpf(1000)
      .attack(0.1)
      .release(0.5)
      .room(0.4)
    ```

=== "Pattern + Transformări"

    ```javascript
    s("bd sd")
      .fast(2)
      .sometimes(rev)
      .jux(x => x.slow(2))
    ```

=== "Scale + Note + Efecte"

    ```javascript
    n("0 2 4 5 7")
      .scale("C:minor")
      .s("triangle")
      .lpf(sine.range(400, 2000))
      .room(0.6)
    ```

## :musical_score: Layering cu `stack()`

!!! example "Bass + Melodie"

    ```javascript
    stack(
      note("c2 g2").s("sawtooth").lpf(300),     // Bas
      note("c4 e4 g4").s("triangle").room(0.4)  // Melodie
    )
    ```

!!! example "Baterie Completă"

    ```javascript
    stack(
      s("bd*4").gain(1),                    // Kick
      s("~ sd ~ sd").gain(0.9),             // Snare
      s("hh*8").gain(0.6),                  // Hi-hat
      s("~ ~ ~ cp").gain(0.7)               // Clap
    )
    ```

## :ocean: Modulație cu Signals

=== "LFO pe Cutoff"

    ```javascript
    note("c e g")
      .s("sawtooth")
      .lpf(sine.range(200, 2000))
    ```

=== "LFO pe Pan"

    ```javascript
    s("bd sd")
      .pan(sine.range(-1, 1))
    ```

=== "Multiple LFOs"

    ```javascript
    note("c")
      .s("sawtooth")
      .lpf(sine.range(300, 3000))
      .resonance(tri.range(0.3, 0.8))
      .pan(saw.range(-0.5, 0.5))
    ```

=== "Random Modulation"

    ```javascript
    note("c e g")
      .s("square")
      .lpf(rand.range(500, 2000))
      .gain(perlin.range(0.6, 1))
    ```

## :game_die: Probabilitate și Condiții

=== "Variație Simplă"

    ```javascript
    s("bd sd")
      .sometimes(fast(2))
      .rarely(rev)
    ```

=== "Variație Complexă"

    ```javascript
    note("c d e f")
      .s("sawtooth")
      .sometimes(x => x.add(12))
      .often(x => x.lpf(500))
      .rarely(rev)
    ```

=== "Every"

    ```javascript
    s("bd sd")
      .every(4, fast(2))
      .every(8, rev)
    ```

## :musical_keyboard: ADSR Envelope

!!! example "Pluck Sound"

    ```javascript
    note("c e g")
      .s("triangle")
      .attack(0.01)
      .decay(0.3)
      .sustain(0)
      .release(0)
    ```

!!! example "Pad Sound"

    ```javascript
    note("c e g")
      .s("sawtooth")
      .attack(1)
      .decay(0.5)
      .sustain(0.7)
      .release(2)
      .lpf(800)
      .room(0.8)
    ```

## :circus_tent: Pattern-uri Complexe Complete

!!! example "Techno Bass"

    ```javascript
    note("c2 ~ ~ ~ c2 ~ g2 ~")
      .s("sawtooth")
      .lpf(sine.range(200, 1200))
      .resonance(0.8)
      .distort(0.3)
      .attack(0.01)
      .release(0.3)
    ```

!!! example "Ambient Texture"

    ```javascript
    note("c4 e4 g4")
      .slow(4)
      .s("sine")
      .attack(2)
      .release(3)
      .lpf(perlin.range(300, 1000))
      .room(0.9)
      .roomsize(10)
      .gain(0.5)
    ```

!!! example "Drum Pattern Complex"

    ```javascript
    stack(
      s("bd*4").gain("1 0.7 0.9 0.8"),
      s("~ sd ~ sd").gain(0.9),
      s("hh*8").gain(perlin.range(0.4, 0.7)),
      s("{bd(3,8), cp(5,8)}")
        .degradeBy(0.2)
        .gain(0.6)
    )
    ```

## :bulb: Tips pentru Combinații

!!! tip "Ordinea Contează (Uneori)"

    ```javascript
    // Bun:
    s("bd").gain(0.8).lpf(1000)
    
    // Același rezultat:
    s("bd").lpf(1000).gain(0.8)
    
    // Dar pattern transforms aplică pe tot:
    s("bd sd").fast(2).gain(0.8)  // fast afectează tot
    ```

!!! tip "Stack pentru Complexitate"

    ```javascript
    // În loc de un pattern complicat:
    s("bd sd hh cp bd sd hh oh...")
    
    // Folosește stack:
    stack(
      s("bd sd"),
      s("hh*8"),
      s("~ ~ oh ~")
    )
    ```

!!! tip "Signals pentru Variație"

    ```javascript
    // Static:
    note("c").lpf(1000)
    
    // Dinamic:
    note("c").lpf(sine.range(200, 2000))
    ```

---

<div class="grid" markdown>

[← Pattern Modifiers](04-Pattern-Modifiers.md){ .md-button }
[Mini-Notation Avansată →](06-Mini-Notation-Avansata.md){ .md-button .md-button--primary }

</div>
