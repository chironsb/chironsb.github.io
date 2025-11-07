# :musical_note: Strudel - Lecții Complete

!!! info "Despre acest ghid"
    De la bază la avansat - Documentație completă Strudel în limba română

## :books: Lecții (în ordine)

### :seedling: Nivel Începător

<div class="grid cards" markdown>

-   :musical_keyboard: __Lecția 1: Sunete și Note__

    ---

    `s()`, `note()`, prescurtări

    [:octicons-arrow-right-24: Accesează](01-Sunete-Note.md)

-   :memo: __Lecția 2: Mini-Notation__

    ---

    Simboluri: `* / ~ [] {} <>`

    [:octicons-arrow-right-24: Accesează](02-Mini-Notation.md)

</div>

### :chart_with_upwards_trend: Nivel Intermediar

<div class="grid cards" markdown>

-   :loud_sound: __Lecția 3: Efecte Audio__

    ---

    Filtre, ADSR, distortion

    [:octicons-arrow-right-24: Accesează](03-Efecte-Audio.md)

-   :arrows_counterclockwise: __Lecția 4: Pattern Modifiers__

    ---

    `slow()`, `fast()`, `rev()`

    [:octicons-arrow-right-24: Accesează](04-Pattern-Modifiers.md)

</div>

### :rocket: Nivel Avansat

<div class="grid cards" markdown>

-   :art: __Lecția 5: Combinații și Exemple__

    ---

    Cum să combini totul

    [:octicons-arrow-right-24: Accesează](05-Combinatii-Exemple.md)

</div>

### :star: Nivel Expert

<div class="grid cards" markdown>

-   :gear: __Lecția 6: Mini-Notation Avansată__

    ---

    Euclidian, nesting, randomizare

    [:octicons-arrow-right-24: Accesează](06-Mini-Notation-Avansata.md)

-   :cd: __Lecția 7: Sample-uri Avansate__

    ---

    Banks, custom, aliasuri

    [:octicons-arrow-right-24: Accesează](07-Sample-uri-Avansate.md)

-   :control_knobs: __Lecția 8: Synth-uri Avansate__

    ---

    FM, waveforms, additive

    [:octicons-arrow-right-24: Accesează](08-Synth-uri-Avansate.md)

-   :clock3: __Lecția 9: Modulări Timp__

    ---

    iter, compress, euclid

    [:octicons-arrow-right-24: Accesează](09-Modulare-Timp.md)

-   :ocean: __Lecția 10: Signals și Modulare__

    ---

    LFO, rand, perlin, mouse

    [:octicons-arrow-right-24: Accesează](10-Signals-Modulare.md)

-   :video_game: __Lecția 11: Vizualizări & Controale__

    ---

    Pianoroll, MIDI, OSC, gamepad

    [:octicons-arrow-right-24: Accesează](11-Vizualizari-Controale.md)

</div>

### :bookmark_tabs: Referință

<div class="grid cards" markdown>

-   :clipboard: __Lista Completă Alfabetică__

    ---

    Toate ~200 funcțiile

    [:octicons-arrow-right-24: Accesează](99-Lista-Completa.md)

</div>

---

## :rocket: Quick Start

=== "Sunete Simple"

    ```javascript
    // Sunete simple
    s("bd sd")
    ```

=== "Note cu Synth"

    ```javascript
    // Note cu synth
    note("c d e f").s("sawtooth")
    ```

=== "Cu Efecte"

    ```javascript
    // Cu efecte
    s("bd sd").gain(0.8).lpf(1000).room(0.5)
    ```

=== "Stack (Layering)"

    ```javascript
    // Stack (layering)
    stack(
      s("bd sd"),
      note("c e g").s("triangle")
    )
    ```

## :book: Cum să Înveți

!!! tip "Parcurs Recomandat"

    === "Începător (1-2)"
    
        1. **[Sunete și Note](01-Sunete-Note.md)** - Bazele absolute
        2. **[Mini-Notation](02-Mini-Notation.md)** - Simboluri esențiale

    === "Intermediar (3-5)"
    
        3. **[Efecte Audio](03-Efecte-Audio.md)** - Adaugă culoare
        4. **[Pattern Modifiers](04-Pattern-Modifiers.md)** - Transformări
        5. **[Combinații și Exemple](05-Combinatii-Exemple.md)** - Practică

    === "Expert (6-11)"
    
        6. **[Mini-Notation Avansată](06-Mini-Notation-Avansata.md)** - Euclidian + advanced syntax
        7. **[Sample-uri Avansate](07-Sample-uri-Avansate.md)** - Banks, custom, control total
        8. **[Synth-uri Avansate](08-Synth-uri-Avansate.md)** - FM synthesis, waveform design
        9. **[Modulări de Timp](09-Modulare-Timp.md)** - Transformări temporale complexe
        10. **[Signals și Modulare](10-Signals-Modulare.md)** - Modulație continuă, LFO-uri
        11. **[Vizualizări & Controale](11-Vizualizari-Controale.md)** - Vizualizări, MIDI, OSC, live control

    === "Referință"
    
        - **[Lista Completă](99-Lista-Completa.md)** - când cauți ceva anume

---

## :clipboard: Progresul Tău

!!! success "Progres"

    **Începător**:
    
    - [ ] Lecția 1: Sunete și Note
    - [ ] Lecția 2: Mini-Notation

    **Intermediar**:
    
    - [ ] Lecția 3: Efecte Audio
    - [ ] Lecția 4: Pattern Modifiers
    - [ ] Lecția 5: Combinații și Exemple

    **Expert**:
    
    - [ ] Lecția 6: Mini-Notation Avansată
    - [ ] Lecția 7: Sample-uri Avansate
    - [ ] Lecția 8: Synth-uri Avansate
    - [ ] Lecția 9: Modulări Timp
    - [ ] Lecția 10: Signals și Modulare
    - [ ] Lecția 11: Vizualizări & Controale

---

!!! quote ""
    *Vault creat din documentația oficială Strudel - Octombrie 2025*
