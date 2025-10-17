# :ocean: Signals și Modulare

[← Înapoi la Index](00-Index.md){ .md-button }

!!! abstract "Obiectiv"
    Pattern-uri cu valori continue pentru modulație și control

## :ocean: Ce Sunt Signals?

!!! info "Definiție"
    **Signals** = pattern-uri cu valori **continue** (teoretic infinite steps)

**Diferență vs pattern-uri normale:**

- **Pattern**: `"c d e f"` - valori discrete
- **Signal**: `sine` - valoare continuă de la 0 la 1

**Uz:** Modularea parametrilor în timp real!

## :chart_with_upwards_trend: Signals de Bază (0 → 1)

=== "saw"

    ```javascript
    // Rampă liniară 0 → 1
    note("c3").gain(saw)
    
    note("c3*8").cutoff(saw.range(200, 2000))
    ```

=== "sine"

    ```javascript
    // Undă sinusoidală smooth
    note("c3").lpf(sine.range(200, 3000))
    
    // Oscilație fluidă
    note("c3*4").pan(sine)
    ```

=== "tri (triangle)"

    ```javascript
    // Undă triunghiulară liniară
    note("c3").lpf(tri.range(500, 2000))
    ```

=== "square"

    ```javascript
    // Undă pătrată (0 sau 1)
    note("c3").gain(square.range(0.5, 1))
    
    s("bd*8").speed(square.range(1, 1.5))
    ```

## :game_die: Signals Random

=== "rand"

    ```javascript
    // Random 0 → 1 (nou la fiecare ciclu)
    note("c d e f").gain(rand)
    
    // Cutoff random
    note("c3*8").lpf(rand.range(200, 5000))
    ```

=== "irand(n)"

    ```javascript
    // Random INTEGER 0 → n-1
    note("c3").n(irand(8))
    
    // Sample random
    s("bd").n(irand(5))
    ```

=== "brand()"

    ```javascript
    // Binary random (0 sau 1)
    note("c d e f").gain(brand().range(0.5, 1))
    ```

=== "brandBy(probability)"

    ```javascript
    // Binary random cu probabilitate
    note("c d e f").gain(brandBy(0.3)) // 30% = 1
    
    s("hh*8").gain(brandBy(0.7).range(0.3, 1))
    ```

## :left_right_arrow: Signals Bipolare (-1 → 1)

!!! info "Versiunea `*2`"
    Pentru fiecare signal există versiunea `*2` care merge de la **-1 la 1**

| Signal | Range | Signal2 | Range |
|--------|-------|---------|-------|
| `saw` | 0 → 1 | `saw2` | -1 → 1 |
| `sine` | 0 → 1 | `sine2` | -1 → 1 |
| `tri` | 0 → 1 | `tri2` | -1 → 1 |
| `square` | 0 → 1 | `square2` | -1 → 1 |
| `rand` | 0 → 1 | `rand2` | -1 → 1 |

=== "Exemple"

    ```javascript
    // Pan bipolar (left to right)
    note("c3").pan(sine2)
    
    // Detune bipolar
    note("c3").detune(sine2.range(-50, 50))
    
    // Speed reverse random
    s("bd*4").speed(rand2.range(-2, 2))
    ```

## :art: Perlin Noise

```javascript
// Organic, smooth random (Perlin noise)
note("c3*8").lpf(perlin.range(200, 3000))

// Vs rand (steppy)
note("c3*8").lpf(rand.range(200, 3000))
```

!!! info "Diferență"
    - `rand` = schimbări bruște
    - `perlin` = schimbări organice, smooth

## :mouse: Mouse Input

=== "mouseX / mousex"

    ```javascript
    // Poziția mouse pe X (0 → 1)
    note("c d e f").lpf(mouseX.range(200, 5000))
    
    // Live control!
    ```

=== "mouseY / mousey"

    ```javascript
    // Poziția mouse pe Y (0 → 1)
    note("c3").room(mouseY)
    
    // Control reverb cu mouse
    note("c3*4").delay(mouseY.range(0, 0.8))
    ```

=== "Combinat"

    ```javascript
    // X = filter, Y = reverb
    note("c3 e3 g3")
      .lpf(mouseX.range(200, 5000))
      .room(mouseY.range(0, 0.9))
    ```

## :wrench: Modificatori de Signals

=== ".range(min, max)"

    ```javascript
    // Mapează signal la range custom
    sine.range(200, 2000)
    
    // Bipolar range
    sine2.range(-50, 50)
    
    note("c3").lpf(sine.range(100, 3000))
    ```

=== ".fast(n) / .slow(n)"

    ```javascript
    // Accelerează signal-ul
    note("c3").lpf(sine.fast(4).range(200, 2000))
    
    // Încetinește signal-ul
    note("c3").gain(saw.slow(2))
    ```

=== ".segment(n)"

    ```javascript
    // Transformă signal în steps
    note("c3").lpf(sine.segment(8).range(200, 2000))
    
    // Stepped LFO din signal smooth
    ```

## :dart: Exemple Practice

!!! example "Wobble Bass (Dubstep)"

    ```javascript
    note("c1*8")
      .sound("sawtooth")
      .n(16)
      .lpf(sine.fast(4).range(100, 3000))
      .lpq(30)
      .gain(0.8)
    ```

!!! example "Auto-Pan"

    ```javascript
    note("c4 e4 g4 b4")
      .sound("triangle")
      .pan(sine.slow(2))
      .room(0.3)
    ```

!!! example "Organic Filter (Perlin)"

    ```javascript
    note("c2 eb2 g2".slow(2))
      .sound("sawtooth")
      .n(8)
      .lpf(perlin.range(200, 4000))
      .lpq(10)
    ```

!!! example "Mouse-Controlled Synth"

    ```javascript
    note("c3*8")
      .sound("square")
      .n(mouseX.range(1, 32))
      .room(mouseY.range(0, 0.9))
    ```

## :clipboard: Cheat Sheet Signals

### Signals Standard (0 → 1)

| Signal | Formă | Uz |
|--------|-------|-----|
| `sine` | Sinusoid smooth | Modulație fluidă |
| `saw` | Rampă liniară | Crescător constant |
| `tri` | Triunghi | Linear up/down |
| `square` | Pătrat | Toggle 0/1 |
| `rand` | Random steps | Variație |
| `perlin` | Organic noise | Natural modulation |

### Random

| Signal | Output | Uz |
|--------|--------|-----|
| `rand` | 0 → 1 | Float random |
| `irand(n)` | 0 → n-1 | Integer random |
| `brand()` | 0 sau 1 | Binary random |
| `brandBy(p)` | 0/1 cu prob | Gating |

### Input

- `mouseX` / `mousex`: Poziție mouse X (0 → 1)
- `mouseY` / `mousey`: Poziție mouse Y (0 → 1)

## :bulb: Tips

!!! tip "Sfaturi Practice"

    1. **Combine signals**: `sine.fast(4)` pentru wobble rapid
    2. **Range corect**: `.range(min, max)` mapează valorile
    3. **Segment pentru steps**: `.segment(n)` = stepped LFO
    4. **Perlin pentru organic**: Mai natural decât `rand`
    5. **Mouse pentru live**: Control în timp real

---

<div class="grid" markdown>

[← Modulări de Timp](09-Modulare-Timp.md){ .md-button }
[Vizualizări și Controale →](11-Vizualizari-Controale.md){ .md-button .md-button--primary }

</div>
