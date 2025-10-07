# Ethics Archive — Directory Structure

## Overview
Scalable file organization system for ethical dilemma artifacts. Each dilemma has its own folder containing multiple interpretations/treatments.

## Structure

```
role-deck/
├── ethics-index.html                    # Main index (1960s bureaucratic aesthetic)
├── ethics-anthology.html                # Geometric films anthology (elevator transitions)
├── corporate-corruption-anthology.html  # Cinematic films anthology (elevator transitions)
│
├── 01-silenced-educator/
│   ├── index.html                       # Folder index page
│   ├── silenced-educator.html           # Geometric kinetic treatment
│   ├── silence-policy.html              # Cinematic narrative treatment
│   └── essay.html                       # Weberian satirical essay
│
├── 02-deadline-sovereign/
│   ├── index.html
│   ├── deadline-sovereign.html
│   ├── v2-will-fix.html
│   └── essay.html
│
├── 03-bounded-apprentice/
│   ├── index.html
│   ├── bounded-apprentice.html
│   ├── guild-gate.html
│   └── essay.html
│
├── 04-two-headed-compliance/
│   ├── index.html
│   ├── two-headed-compliance.html
│   ├── dark-pattern-choir.html
│   └── essay.html
│
├── 05-fragile-collective/
│   ├── index.html
│   ├── fragile-collective.html
│   ├── organizers-microphone.html
│   └── essay.html
│
├── 06-epistemic-rush/
│   ├── index.html
│   ├── epistemic-rush.html
│   ├── epistemic-noise-gate.html
│   └── essay.html
│
├── 07-conditional-person/
│   ├── index.html
│   ├── conditional-person.html
│   ├── maslow-lock.html
│   └── essay.html
│
└── 08-values-treasurer/
    ├── index.html
    ├── values-treasurer.html
    ├── tiered-principles.html
    └── essay.html
```

## Design System

### Color Palette (1960s Office Bureaucracy)
- **Background**: `#e8e4d8` (manila/aged paper)
- **Container**: `#f5f3eb` (off-white document)
- **Header**: `#5a6c57` (military green)
- **Accent**: `#3a4838` (darker green)
- **Metadata**: `#d8d4c8` (grey-beige)
- **Border**: `#a09580` (tan)

### Typography
- **Font**: Courier (monospace)
- **Headers**: Uppercase, wide letter-spacing
- **Body**: 0.85-0.95em, tight line-height

### Elements
- **File numbers**: Boxed labels (e.g., "FILE 01")
- **Borders**: Left-border accent on content blocks
- **Hover states**: Subtle shadows, color shifts
- **Footer**: Classification notice

## Adding New Artifacts

### 1. Create the artifact file
Place in appropriate folder: `0X-dilemma-name/new-artifact.html`

### 2. Update folder index
Edit `0X-dilemma-name/index.html`:
```html
<li class="artifact-item">
    <a href="new-artifact.html">
        <div class="artifact-title">New Artifact Title</div>
        <div class="artifact-type">Treatment Type</div>
    </a>
</li>
```

### 3. Update artifact count
In folder's `index.html` metadata:
```html
<span><strong>ARTIFACTS:</strong> 03</span>
```

In main `ethics-index.html`:
```html
<div class="file-count">3 artifacts archived</div>
```

## Mobile Optimization
All pages responsive with breakpoint at 768px:
- Reduced padding
- Stacked metadata
- Smaller typography
- Full-width on mobile

## Future Scalability
- Each folder contains 3+ artifacts per dilemma
- Consistent naming: `descriptive-name.html` or `essay.html`
- Types: Kinetic Film, Cinematic Film, Weberian Essay, Data Visualization, Interactive, etc.
- Essay format: satirical-but-grounded analysis using CHI '21 research framework
- Easy to add new categories to metadata
