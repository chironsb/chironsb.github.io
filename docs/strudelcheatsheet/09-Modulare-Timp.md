# :clock3: Modulări de Timp

[← Înapoi la Index](00-Index.md){ .md-button }

!!! abstract "Obiectiv"
    Funcții care modifică structura temporală a pattern-urilor

## :zap: Echivalențe Mini-Notation

| Funcție | Mini-Notation | Exemplu |
|---------|---------------|---------|
| `.slow(2)` | `/2` | `"c d e f"/2` |
| `.fast(2)` | `*2` | `"c d e f"*2` |
| `.euclid(3,8)` | `(3,8)` | `"bd(3,8)"` |
| `.euclidRot(3,8,1)` | `(3,8,1)` | `"bd(3,8,1)"` |

## :snail: Slow / Fast

=== ".slow(n)"

    ```javascript
    // Încetinește de n ori
    note("c d e f").slow(2)
    
    // Cu decimale
    note("c d e f").slow(1.5)
    
    // Pattern slow
    note("c d e f").slow("<1 2 4>")
    ```

=== ".fast(n)"

    ```javascript
    // Accelerează de n ori
    note("c d e f").fast(2)
    
    // Cu decimale
    note("c d e f").fast(3.5)
    
    // Pattern fast
    note("c d e f").fast("<1 2 4 8>")
    ```

!!! tip "Folosește `*` și `/` în mini-notation pentru același efect!"

## :clock9: Early / Late

=== ".early(n)"

    ```javascript
    // Mută pattern mai devreme cu n cicluri
    note("c d e f").early(0.25)
    
    // Cu pattern
    note("c d e f").early("<0 0.125 0.25>")
    ```

=== ".late(n)"

    ```javascript
    // Mută pattern mai târziu cu n cicluri
    note("c d e f").late(0.125) // swing
    
    // Swing pattern
    note("c d e f").late("0 0.1")
    ```

!!! info "Uz"
    Creează swing, groove, sau offset-uri între instrumente!

## :arrows_counterclockwise: Euclid (Ritmuri Euclidiene)

=== ".euclid(beats, segments)"

    ```javascript
    // Distribuie beats peste segments
    s("bd").euclid(3, 8) // bd ~ ~ bd ~ ~ bd ~
    
    // Echivalent cu:
    s("bd(3,8)")
    
    // Pattern euclid
    s("bd").euclid("<3 5 7>", 8)
    ```

=== ".euclidRot(beats, segments, offset)"

    ```javascript
    // Cu rotație/offset
    s("bd").euclidRot(3, 8, 2)
    
    // Echivalent:
    s("bd(3,8,2)")
    ```

## :leftwards_arrow_with_hook: Rev / Palindrome

=== ".rev()"

    ```javascript
    // Reversează pattern-ul
    note("c d e f").rev() // f e d c
    
    // Cu efecte
    note("c d e f").rev().gain(0.8)
    ```

=== ".palindrome()"

    ```javascript
    // Pattern + reverse
    note("c d e f").palindrome()
    // c d e f f e d c
    
    // Combinat cu slow
    note("c d e").palindrome().slow(2)
    ```

## :repeat: Iter / IterBack

=== ".iter(n)"

    ```javascript
    // Rotește pattern cu 1 step per ciclu
    note("c d e f").iter(4)
    // Ciclu 1: c d e f
    // Ciclu 2: d e f c
    // Ciclu 3: e f c d
    // Ciclu 4: f c d e
    ```

=== ".iterBack(n)"

    ```javascript
    // Iter invers
    note("c d e f").iterBack(4)
    // Ciclu 1: c d e f
    // Ciclu 2: f c d e
    // etc.
    ```

## :bar_chart: Compress / Zoom

=== ".compress(start, end)"

    ```javascript
    // Comprimă pattern-ul între start și end (0-1)
    note("c d e f").compress(0, 0.5)
    
    // A doua jumătate
    note("c d e f").compress(0.5, 1)
    
    // Pattern compress
    note("c d e f").compress("<0 0.25>", "<0.5 0.75>")
    ```

=== ".zoom(start, end)"

    ```javascript
    // Zoom între start și end
    note("c d e f").zoom(0, 0.5)
    
    // Zoom pattern
    note("c d e f").zoom("<0 0.25>", "<0.5 1>")
    ```

## :dart: Exemple Practice

!!! example "Swing Jazz"

    ```javascript
    note("c d e f g a b c5")
      .late("0 0.05")
      .gain("<1 0.8>")
    ```

!!! example "Polyrhythm"

    ```javascript
    stack(
      note("c d e").fast(3),
      note("f g a b").fast(4)
    )
    ```

!!! example "Euclidian Drums"

    ```javascript
    stack(
      s("bd").euclid(3, 8),
      s("sd").euclid(5, 8),
      s("hh").euclid(7, 8).gain(0.6)
    )
    ```

!!! example "Evolving Pattern (Iter)"

    ```javascript
    note("c eb g bb").iter(4).slow(4)
      .sound("sawtooth")
      .lpf(sine.range(200, 2000))
    ```

## :clipboard: Cheat Sheet

| Funcție | Efect | Exemplu |
|---------|-------|---------|
| `.slow(n)` | Încetinește | `.slow(2)` = /2 |
| `.fast(n)` | Accelerează | `.fast(2)` = *2 |
| `.early(n)` | Mai devreme | `.early(0.25)` |
| `.late(n)` | Mai târziu | `.late(0.1)` |
| `.rev()` | Reverse | `.rev()` |
| `.palindrome()` | Dus + întors | `.palindrome()` |
| `.iter(n)` | Rotește | `.iter(4)` |
| `.euclid(b,s)` | Euclidian | `.euclid(3,8)` |
| `.compress(a,b)` | Comprimă | `.compress(0, 0.5)` |
| `.ply(n)` | Repetă | `.ply(2)` |

---

<div class="grid" markdown>

[← Synth-uri Avansate](08-Synth-uri-Avansate.md){ .md-button }
[Signals și Modulare →](10-Signals-Modulare.md){ .md-button .md-button--primary }

</div>
