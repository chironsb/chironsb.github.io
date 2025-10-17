# :memo: Mini-Notation

[← Înapoi la Index](00-Index.md){ .md-button }

!!! abstract "Obiectiv"
    Sintaxa mini-notation pentru pattern-uri în Strudel

## :abc: Simboluri de Bază

### Spațiu ` ` - Secvență

```javascript
s("bd sd")         // bd apoi sd
s("bd sd hh cp")   // 4 sunete în secvență
```

### `[]` - Grupare/Subdiviziune

```javascript
s("bd [sd sd]")    // bd, apoi sd rapid sd rapid
s("bd [sd sd sd]") // bd, apoi 3 sd-uri rapide
s("[c e g]")       // Acord (simultan)
```

### `*` - Multiplicare/Repetiție

```javascript
s("bd*4")          // bd repetat de 4 ori
s("bd*2 sd*2")     // bd bd sd sd
note("c*3 e*2")    // c c c e e
```

### `/` - Diviziune/Încetinire

```javascript
s("bd/2")          // bd la fiecare 2 cicluri
s("bd/3")          // bd la fiecare 3 cicluri
note("c/2 e/2")    // Note mai rare
```

### `~` - Pauză/Rest/Silence

```javascript
s("bd ~ sd ~")     // bd, pauză, sd, pauză
s("bd sd ~ cp")    // Pauză în loc de al 3-lea sunet
```

### `,` - Stack/Layering (simultan)

```javascript
s("bd, hh*4")             // bd și hh simultan
s("bd sd, hh*8")          // Baterie + hi-hat
note("c, e, g")           // Acord (fiecare pe layer separat)
```

### `<>` - Alternare (schimbă la fiecare ciclu)

```javascript
s("<bd sd>")              // Ciclu 1: bd, Ciclu 2: sd
s("<bd sd hh cp>")        // Rotează prin toate
note("<c e g>")           // Alternează note
```

### `{}` - Poliritmuri (împarte timpul egal)

```javascript
s("{bd bd bd, hh hh hh hh}")  // 3 contra 4
s("{bd sd, hh*8}")            // Poliritmuri complexe
```

### `:` - Selectare Sample

```javascript
s("bd:0")          // Prima variantă de bd
s("bd:1")          // A doua variantă
s("bd:0 bd:1 bd:2 bd:3")  // Diferite variante
```

### `!` - Repetare Element

```javascript
s("bd!3")          // bd bd bd (repetă 3 ori)
s("bd!2 sd!2")     // bd bd sd sd
```

### `?` - Probabilitate (50%)

```javascript
s("bd?")           // 50% șansă să apară bd
s("bd sd? hh cp?") // sd și cp au 50% șansă
```

### `@` - Elongare

```javascript
s("bd@2 sd")       // bd de 2 ori mai lung
s("bd@3 sd@1")     // bd de 3x mai lung, sd normal
```

## :dart: Pattern-uri Euclidiene (în mini-notation)

```javascript
s("bd(3,8)")       // 3 pași din 8: x..x..x.
s("bd(5,8)")       // 5 pași din 8: x.x.x.x.x
s("bd(3,8,2)")     // Cu rotație de 2
```

## :link: Combinații Complexe

=== "Acorduri"

    ```javascript
    note("[c e g]")           // Acord C major
    note("[c e g]*2")         // Acord repetat
    note("[c e g] [f a c]")   // Progresie acorduri
    ```

=== "Poliritmuri"

    ```javascript
    s("{bd bd bd, sd sd sd sd, hh*8}")  
    // 3 layer-uri poliritmice
    ```

=== "Pattern Complex"

    ```javascript
    s("bd*2 [sd cp] hh!3 bd/2")
    // bd bd, (sd rapid cp rapid), hh hh hh, 
    // bd la fiecare 2 cicluri
    ```

=== "Alternare cu Grupări"

    ```javascript
    s("<bd [sd sd] [hh hh hh]>")
    // Ciclu 1: bd
    // Ciclu 2: sd sd
    // Ciclu 3: hh hh hh
    ```

## :bar_chart: Exemple Practice

!!! example "Ritmuri"

    === "Ritm Simplu"
    
        ```javascript
        s("bd sd bd sd")
        ```
    
    === "Ritm cu Hi-hat"
    
        ```javascript
        s("bd sd bd sd, hh*8")
        ```
    
    === "Pattern Complex"
    
        ```javascript
        s("bd*2 [sd cp] <hh oh> bd/2")
        ```

!!! example "Melodii"

    === "Melodie cu Pauze"
    
        ```javascript
        note("c d ~ e f ~ g ~")
        ```
    
    === "Acorduri cu Bass"
    
        ```javascript
        stack(
          note("[c e g] [f a c]").s("piano"),
          note("c2 f2").s("sawtooth")
        )
        ```

!!! example "Avansat"

    === "Poliritmuri"
    
        ```javascript
        s("{bd bd bd, cp cp cp cp cp, hh*16}")
        ```
    
    === "Euclidian Multilayer"
    
        ```javascript
        stack(
          s("bd(3,8)"),
          s("sd(5,8)"),
          s("hh(7,8)")
        )
        ```

## :bulb: Tips

!!! tip "Sfaturi Practice"

    1. **Folosește `[]` pentru subdiviziuni rapide**
       ```javascript
       s("bd [sd sd sd]")  // sd-uri rapide
       ```

    2. **`,` pentru layering**
       ```javascript
       s("bd sd, hh*8")    // Simultan
       ```

    3. **`<>` pentru variație**
       ```javascript
       s("<bd sd hh cp>")  // Schimbă la fiecare ciclu
       ```

    4. **`{}` pentru poliritmuri**
       ```javascript
       s("{bd bd bd, hh hh hh hh}")  // 3:4
       ```

    5. **Combină totul!**
       ```javascript
       s("bd*2 <[sd cp] sd> {hh*4, oh*2}@2")
       ```

---

<div class="grid" markdown>

[← Sunete și Note](01-Sunete-Note.md){ .md-button }
[Efecte Audio →](03-Efecte-Audio.md){ .md-button .md-button--primary }

</div>
