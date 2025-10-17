# :loud_sound: Efecte Audio

[← Înapoi la Index](00-Index.md){ .md-button }

!!! abstract "Obiectiv"
    Efecte audio oficiale din Strudel

## :control_knobs: Filtre

### Low-Pass Filter

```javascript
note("c d e f").s("sawtooth").lpf(1000)
```

- `lpf(freq)` - Low-pass filter cutoff
- `lpq(q)` - Low-pass Q/resonance

### High-Pass Filter

```javascript
s("bd sd").hpf(300).hpq(5)
```

- `hpf(freq)` - High-pass filter cutoff
- `hpq(q)` - High-pass Q/resonance

### Band-Pass Filter

- `bpf(freq)` - Band-pass filter cutoff
- `bpq(q)` - Band-pass Q/resonance

### Altele

```javascript
note("c e g").s("saw").vowel("a e i o u")
```

- `ftype(type)` - Filter type
- `vowel(char)` - Vowel filter

## :chart_with_upwards_trend: ADSR Envelope

### Amplitude Envelope

=== "Parametri Separați"

    ```javascript
    note("c e g")
      .attack(0.1)
      .decay(0.2)
      .sustain(0.5)
      .release(0.3)
    ```

=== "Toate Împreună"

    ```javascript
    note("c").adsr(0.01, 0.1, 0.5, 0.5)
    ```

!!! info "Parametri ADSR"
    - `attack(time)` - Attack time
    - `decay(time)` - Decay time
    - `sustain(level)` - Sustain level (0-1)
    - `release(time)` - Release time
    - `adsr(a,d,s,r)` - Toate împreună

### Filter Envelope (Lowpass)

!!! tip "Prescurtări disponibile"
    - `lpattack(time)` / `lpa(time)`
    - `lpdecay(time)` / `lpd(time)`
    - `lpsustain(level)` / `lps(level)`
    - `lprelease(time)` / `lpr(time)`
    - `lpenv(depth)` / `lpe(depth)`

### Pitch Envelope

- `pattack(time)`
- `pdecay(time)`
- `prelease(time)`
- `penv(depth)` - Pitch envelope depth
- `pcurve(curve)` - Pitch curve
- `panchor(note)` - Pitch anchor

## :zap: Distorsiune și Waveshaping

=== "Distortion"

    ```javascript
    note("c e g").s("bass").distort(0.5)
    ```

=== "Bit Crushing"

    ```javascript
    s("bd sd").crush(4)
    ```

=== "Coarse & Shape"

    ```javascript
    note("c").s("saw").coarse(8).shape(0.3)
    ```

!!! info "Parametri"
    - `distort(amount)` - Distortion
    - `crush(bits)` - Bit crushing
    - `coarse(reduction)` - Sample rate reduction
    - `shape(amount)` - Wave shaping

## :ocean: Delay și Reverb

### Delay

```javascript
note("c e g")
  .delay(0.5)
  .delaytime(0.25)
  .delayfeedback(0.7)
```

- `delay(amount)` - Delay send amount
- `delaytime(time)` - Delay time
- `delayfeedback(fb)` - Delay feedback

### Reverb

```javascript
s("bd sd").room(0.8).roomsize(10)
```

!!! info "Parametri Reverb"
    - `room(amount)` - Reverb send amount
    - `roomsize(size)` - Room size
    - `roomfade(fade)` - Room fade
    - `roomlp(freq)` - Room lowpass
    - `roomdim(dim)` - Room dimensions
    - `iresponse(ir)` - Impulse response

## :cyclone: Modulation Effects

### Tremolo

```javascript
note("c").s("sine").vib(0.5)
```

- `am(freq)` - Amplitude modulation
- `tremolosync(sync)` - Tremolo sync
- `tremolodepth(depth)` - Tremolo depth
- `tremoloskew(skew)` - Tremolo skew
- `tremolophase(phase)` - Tremolo phase
- `tremoloshape(shape)` - Tremolo shape

### Phaser

```javascript
s("bd sd").phaser(0.8).phaserdepth(10)
```

- `phaser(amount)` - Phaser effect
- `phaserdepth(depth)` - Phaser depth
- `phasercenter(freq)` - Phaser center
- `phasersweep(sweep)` - Phaser sweep

### Vibrato

- `vib(depth)` - Vibrato
- `vibmod(mod)` - Vibrato modulation

## :level_slider: Dynamics

```javascript
s("bd sd").gain(0.8)
note("c d e f").velocity(0.9)
s("bd").compressor(0.5)
```

- `gain(amount)` - Volume/Gain
- `velocity(vel)` - MIDI velocity
- `compressor(amount)` - Compressor
- `postgain(amount)` - Post-gain (după efecte)
- `xfade(amount)` - Crossfade

## :left_right_arrow: Panning

```javascript
s("bd sd").pan(0.5)
note("c d e f").jux(rev)
s("bd sd").juxBy(0.7, fast(2))
```

- `pan(position)` - Pan (-1 la 1)
- `jux(func)` - Aplică func pe dreapta
- `juxBy(amount, func)` - Jux cu control

## :duck: Ducking

```javascript
s("bd*4").duckorbit(2)
```

- `duckorbit(orbit)` - Duck orbit sursă
- `duckattack(time)` - Duck attack
- `duckdepth(depth)` - Duck depth

## :wrench: Altele

```javascript
s("bd sd").orbit(2)
s("hh*8").cut(1)    // Oprește sample-uri anterioare
s("bd").speed(2)    // Redă de 2x mai rapid
```

- `orbit(num)` - Output orbit
- `cut(group)` - Cut group
- `speed(rate)` - Sample playback speed
- `tune(amount)` - Pitch tuning

---

<div class="grid" markdown>

[← Mini-Notation](02-Mini-Notation.md){ .md-button }
[Pattern Modifiers →](04-Pattern-Modifiers.md){ .md-button .md-button--primary }

</div>
