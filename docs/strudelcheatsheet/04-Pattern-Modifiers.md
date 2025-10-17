# :arrows_counterclockwise: Pattern Modifiers

[← Înapoi la Index](00-Index.md){ .md-button }

!!! abstract "Obiectiv"
    Funcții pentru modificarea pattern-urilor

## :clock3: Timp

```javascript
s("bd sd").slow(2)
s("bd sd").fast(4)
note("c d e f").early(0.1)
```

- `slow(n)` - Încetinește de n ori
- `fast(n)` - Accelerează de n ori
- `early(time)` - Start mai devreme
- `late(time)` - Start mai târziu
- `hurry(n)` - Accelerează și pitch

## :arrows_counterclockwise: Transformări

=== "Reverse & Palindrome"

    ```javascript
    note("c d e f").rev()
    s("bd sd hh").palindrome()
    ```

=== "Invert & Compress"

    ```javascript
    note("c e g").invert()
    s("bd sd").compress(0, 0.5)
    ```

!!! info "Funcții disponibile"
    - `rev()` - Reverse (inversare)
    - `palindrome()` - Pattern + reverse
    - `invert()` - Inversează intervale
    - `compress(start, end)` - Comprimă în interval
    - `expand(start, end)` - Expandează din interval
    - `zoom(start, end)` - Zoom în porțiune

## :game_die: Probabilitate

=== "Șanse Prestabilite"

    ```javascript
    s("bd sd").sometimes(fast(2))      // 50%
    note("c d e f").often(rev)         // 75%
    s("hh*8").rarely(x => x.gain(0.3)) // 25%
    ```

=== "Șanse Custom"

    ```javascript
    s("bd sd").sometimesBy(0.3, fast(4))
    note("c e g").someCyclesBy(0.6, rev)
    ```

!!! info "Funcții probabilitate"
    - `sometimes(func)` - 50% probabilitate
    - `often(func)` - 75% probabilitate
    - `rarely(func)` - 25% probabilitate
    - `almostAlways(func)` - 90% probabilitate
    - `almostNever(func)` - 10% probabilitate
    - `sometimesBy(prob, func)` - Probabilitate specificată

## :dart: Condiționat

```javascript
s("bd sd").every(4, fast(2))
note("c d e f").when(x => Math.random() > 0.5, rev)
```

- `when(test, func)` - Când condiția e true
- `every(n, func)` - La fiecare n cicluri
- `firstOf(n, func)` - Prima dată din n
- `lastOf(n, func)` - Ultima dată din n

## :repeat: Euclidian

```javascript
s("bd").euclid(3, 8)  // x..x..x.
s("sd").euclidRot(5, 8, 2)
```

- `euclid(steps, pulses)` - Ritm euclidian
- `euclidLegato(steps, pulses)` - Euclidian legato
- `euclidRot(steps, pulses, rotation)` - Euclidian cu rotație

## :chart_with_downwards_trend: Degradare

```javascript
s("bd sd hh cp").degradeBy(0.3)
```

- `degrade()` - Degradare 50%
- `degradeBy(prob)` - Degradare cu probabilitate
- `undegrade()` - Restore degradat
- `undegradeBy(prob)` - Restore cu prob

## :link: Combinare

=== "Stack & Cat"

    ```javascript
    stack(
      s("bd sd"),
      note("c e g").s("piano")
    )

    cat(s("bd sd"), s("hh*4"))
    ```

=== "Fast Cat & Seq"

    ```javascript
    fastcat(
      s("bd sd"),
      s("hh*4")
    )
    ```

!!! info "Funcții de combinare"
    - `stack(...patterns)` - Suprapune (simultan)
    - `cat(...patterns)` - Concatenează (secvențial)
    - `fastcat(...patterns)` - Concat rapid
    - `seq(...patterns)` - Secvență
    - `polymeter(...patterns)` - Polymeter

## :performing_arts: Layering

```javascript
note("c e g").superimpose(x => x.add(12))
s("bd sd").off(0.25, fast(2))
```

- `layer(func1, func2, ...)` - Layer-uri cu funcții
- `superimpose(func)` - Suprapune cu transformare
- `off(time, func)` - Offset cu transformare

## :repeat: Iterare

```javascript
note("c d e f").iter(4)
s("bd sd").ply(2)  // bd bd sd sd
```

- `iter(n)` - Iterează în n cicluri
- `iterBack(n)` - Iterează backward
- `ply(n)` - Repetă fiecare element n ori

## :scissors: Segmentare

```javascript
s("bd").chop(8)
note("c e g").striate(16)
s("bd sd").chunk(2, fast(2))
```

- `chop(n)` - Împarte în n bucăți
- `slice(n, pattern)` - Slice cu pattern
- `splice(n, pattern)` - Splice cu pattern
- `striate(n)` - Striate (granular)
- `chunk(n, func)` - Chunk cu funcție

## :circus_tent: Altele

```javascript
note("c d e f").jux(rev)
s("bd").stut(4, 0.8, 0.125)
note("c e g").struct("1 0 1 1")
```

- `jux(func)` - Aplică pe dreapta
- `juxBy(amount, func)` - Jux cu control
- `echoWith(n, time, func)` - Echo cu func
- `stut(n, decay, time)` - Stutter
- `segment(n)` - Segmentează
- `struct(binary)` - Structură binară
- `mask(pattern)` - Maschează cu pattern

## :wrench: Utilitate

```javascript
hush()  // Oprește totul
```

- `reset()` - Reset pattern
- `restart()` - Restart pattern
- `hush()` - Oprește tot

---

<div class="grid" markdown>

[← Efecte Audio](03-Efecte-Audio.md){ .md-button }
[Combinații și Exemple →](05-Combinatii-Exemple.md){ .md-button .md-button--primary }

</div>
