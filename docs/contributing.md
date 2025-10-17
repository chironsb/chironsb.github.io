# Contributing

Mulțumim că vrei să contribui la proiectul nostru! Această pagină conține ghidurile pentru a contribui eficient.

## Cum să contribui

### Raportarea unui bug

Dacă ai găsit un bug, te rugăm să:

1. Verifici dacă bug-ul a fost deja raportat
2. Creezi un issue nou cu:
   - Descrierea clară a problemei
   - Pașii pentru reproducerea bug-ului
   - Comportamentul așteptat vs. cel actual
   - Informații despre sistemul tău

### Sugerarea unei îmbunătățiri

Pentru sugestii de îmbunătățire:

1. Verifică dacă ideea a fost deja discutată
2. Creează un issue cu:
   - Descrierea îmbunătățirii
   - Motivul pentru care este utilă
   - Exemple de implementare (dacă aplicabil)

### Contribuind cu cod

Pentru contribuții de cod:

1. Fork repository-ul
2. Creează o branch nouă pentru feature/bugfix
3. Fă modificările necesare
4. Adaugă teste dacă este cazul
5. Creează un Pull Request

## Ghiduri de cod

### Python

```python
# Folosește type hints
def process_data(data: List[str]) -> Dict[str, Any]:
    """Procesează datele și returnează rezultatul.
    
    Args:
        data: Lista de string-uri de procesat
        
    Returns:
        Dicționar cu rezultatele procesării
    """
    result = {}
    for item in data:
        # Logica de procesare
        result[item] = item.upper()
    
    return result
```

### Markdown

```markdown
# Titlu principal

## Subtitlu

Text normal cu **bold** și *italic*.

### Cod inline
Folosește `cod` pentru cod inline.

### Blocuri de cod
```python
def example():
    return "Hello World"
```

### Liste
- Item 1
- Item 2
  - Sub-item 2.1
  - Sub-item 2.2
```

## Structura proiectului

```
docs/
├── index.md              # Pagina principală
├── getting-started.md    # Ghid de început
├── features/             # Funcționalități
│   ├── custom-models.md
│   ├── extractors.md
│   └── proxy.md
├── api/                  # Documentație API
│   ├── getting-started.md
│   ├── output-types.md
│   └── proxy.md
└── contributing.md       # Această pagină
```

## Procesul de review

1. **Pull Request** - Creează un PR cu descrierea clară
2. **Review** - Codul va fi revizuit de maintaineri
3. **Feedback** - Vei primi feedback și sugestii
4. **Merge** - După aprobare, codul va fi integrat

## Comunicare

- **Issues** - Pentru bug-uri și sugestii
- **Discussions** - Pentru întrebări și discuții
- **Pull Requests** - Pentru contribuții de cod

## Recunoașterea contribuțiilor

Toate contribuțiile sunt apreciate și vor fi recunoscute în:

- Lista de contribuitori
- Release notes
- Documentația proiectului

## Contact

Pentru întrebări suplimentare:

- 📧 Email: chiron@example.com
- 🐦 Twitter: [@chiron](https://twitter.com/chiron)
- 🐙 GitHub: [chiron](https://github.com/chiron)

Mulțumim pentru contribuția ta! 🙏 