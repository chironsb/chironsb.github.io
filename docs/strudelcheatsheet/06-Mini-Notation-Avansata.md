# :gear: Mini-Notation Avansată

[← Înapoi la Index](00-Index.md){ .md-button }

!!! abstract "Obiectiv"
    Sintaxa completă pentru crearea pattern-urilor ritmice complexe

## :clipboard: Rezumat Rapid

| Simbol | Funcție | Exemplu |
|--------|---------|---------|
| `[ ]` | Subdivide timpul | `note("e5 [b4 c5] d5")` |
| `< >` | Secvență lentă | `note("<c d e f>")` |
| `*` | Multiplicare | `note("c*4")` |
| `/` | Diviziune | `note("c/2")` |
| `~` | Pauză | `note("c ~ d ~")` |
| `,` | Acorduri | `note("c,e,g")` |
| `@` | Alungire | `note("c@2 d e")` |
| `!` | Replicare | `note("c!3")` |
| `?` | Randomizare 50% | `note("c?")` |
| `?0.3` | Randomizare 30% | `note("c?0.3")` |
| `\|` | Alegere random | `note("c \| d \| e")` |
| `(3,8)` | Euclidian | `s("bd(3,8)")` |
| `:` | Selectare sample | `s("bd:0 bd:1")` |

## :musical_note: Secvențe și Cicluri

!!! info "Regula de aur"
    Un ciclu are întotdeauna aceeași durată. Mai multe note = note mai scurte!

=== "Secvențe Simple"

    ```javascript
    // 4 note într-un ciclu
    note("c e g b")
    
    // 7 note (mai rapide)
    note("c d e f g a b")
    ```

## :1234: Multiplicare și Diviziune

=== "Multiplicare (*)"

    ```javascript
    // Pattern-ul se joacă de 2 ori per ciclu
    note("[e5 b4 d5 c5]*2")
    
    // Funcționează cu decimale
    note("[e5 b4]*2.75")
    ```

=== "Diviziune (/)"

    ```javascript
    // Pattern-ul durează 2 cicluri
    note("[e5 b4 d5 c5]/2")
    
    // Cu decimale
    note("[c d e]/3.5")
    ```

## :triangular_ruler: Angle Brackets (<>)

!!! tip "Angle Brackets"
    Definește lungimea pe baza numărului de evenimente

```javascript
// Un element per ciclu (rotație)
note("<e5 b4 d5 c5>")

// Echivalent cu:
note("[e5 b4 d5 c5]/4")

// 8 note per ciclu
note("<e5 b4 d5 c5>*8")
```

## :nesting_dolls: Subdivizarea (Nesting)

!!! example "Nested Sequences"

    ```javascript
    // Simplu
    note("e5 b4 c5 d5")
    
    // b4 și c5 împart timpul unui singur event
    note("e5 [b4 c5] d5")
    
    // Subdivizări multiple
    note("e5 [b4 c5] d5 [c5 b4]")
    
    // Nested în nested
    note("e5 [b4 c5] d5 [c5 b4 [d5 e5]]")
    ```

## :musical_keyboard: Polifonie (Acorduri)

=== "Acord Simplu"

    ```javascript
    note("[g3,b3,e4]")
    
    // Sau fără paranteze
    note("g3,b3,e4")
    ```

=== "Secvență de Acorduri"

    ```javascript
    note("<[g3,b3,e4] [a3,c3,e4] [b3,d3,f#4]>*2")
    ```

## :clock3: Alungire și Replicare

=== "Alungire (@)"

    ```javascript
    // Primul acord e de 2x mai lung
    note("<[g3,b3,e4]@2 [a3,c3,e4] [b3,d3,f#4]>*2")
    
    // Default weight = 1
    note("c@3 d e") // c = 3x mai lung
    ```

=== "Replicare (!)"

    ```javascript
    // c se repetă de 3 ori (fără să devină mai rapid)
    note("c!3 d e")
    
    // Vs multiplicare (devine mai rapid):
    note("c*3 d e")
    ```

## :game_die: Randomizare

=== "? - 50% șansă"

    ```javascript
    note("c? d? e? f?")
    ```

=== "?0.1 - 10% șansă"

    ```javascript
    note("c?0.1")
    note("[g3,b3,e4]*8?0.1")
    ```

=== "| - Alegere random"

    ```javascript
    // Alege random între acorduri
    note("[g3,b3,e4] | [a3,c3,e4] | [b3,d3,f#4]")
    
    // Între note simple
    note("c | d | e | f")
    ```

## :gear: Euclidian Rhythms

!!! info "Format: `(beats, segments, offset)`"

=== "Beats și Segments"

    ```javascript
    // 3 beats peste 8 segments
    s("bd(3,8)")
    // Output: bd ~ ~ bd ~ ~ bd ~
    
    // Mai multe beats
    s("bd(5,8)") // bd ~ bd bd ~ bd bd ~
    s("bd(7,8)") // bd bd bd bd bd bd bd ~
    ```

=== "Cu Offset"

    ```javascript
    // Offset = 0 (default)
    s("bd(3,8,0)")
    
    // Offset = 3
    s("bd(3,8,3)")
    ```

=== "Exemple Muzicale"

    ```javascript
    // Ritm complex
    note("e5(2,8) b4(3,8) d5(2,8) c5(3,8)").slow(2)
    
    // Poliritm
    s("bd(3,8), sd(5,13), hh(7,16)")
    ```

## :books: Recapitulare Pattern-uri

!!! example "Compară diferențele"

    ```javascript
    // Pattern de bază
    note("<g3 b3 e4 [a3,c3,e4] [b3,d3,f#4]>*2")
    
    // Acorduri în loc de note separate
    note("<[g3,b3,e4] [a3,c3,e4] [b3,d3,f#4]>*2")
    
    // Primul acord încetinit (/)
    note("<[g3,b3,e4]/2 [a3,c3,e4] [b3,d3,f#4]>*2")
    
    // Cu weight (@)
    note("<[g3,b3,e4]@2 [a3,c3,e4] [b3,d3,f#4]>*2")
    
    // Cu replicare (!)
    note("<[g3,b3,e4]!2 [a3,c3,e4] [b3,d3,f#4]>*2")
    ```

---

<div class="grid" markdown>

[← Combinații și Exemple](05-Combinatii-Exemple.md){ .md-button }
[Sample-uri Avansate →](07-Sample-uri-Avansate.md){ .md-button .md-button--primary }

</div>
