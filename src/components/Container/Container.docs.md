# Container component

The Container component adds padding to wrapped components, use this everywhere you need padding instead of adding padding to elements (where you can).

- All containers will have left/right padding by default unless 'full' is used.

```react
plain: true
---
<Container>
  <p className="highlight">Container contents</p>
</Container>
```

### Component props

- `margin`: `array` - Settings for margin
- `padding`: `array` - Settings for padding
- `align`: `string` - Controls text-align of contents
- `full`: `boolean` - Removes side padding
- `autocenter`: `boolean` - Centers component based on max-width

```react
plain: true
---
<Container full>
  <p className="highlight">This container is full, so it has no margins</p>
</Container>
```

```react
plain: true
---
<Container margin={['top', 'bottom']}>
  <p className="highlight">This container has top and bottom margin</p>
</Container>
```

```react
plain: true
---
<Container margin={['top-half', 'bottom-double']}>
  <p className="highlight">This container has half and doubled margin</p>
</Container>
```

```react
plain: true
---
<Container margin={['left-double', 'right-double']}>
  <p className="highlight">This container has doubled side margins</p>
</Container>
```

```react
plain: true
---
<div className="highlight-wrapper">
  <Container full padding={['top', 'bottom', 'left', 'right']}>
    <p className="highlight">This container is full (has no side margins), but has padding</p>
  </Container>
</div>
```

```react
plain: true
---
<Container limited="baby">
  <p className="highlight">This container has a set max width</p>
</Container>
```

```react
plain: true
---
<Container limited="baby" autocenter>
  <p className="highlight">This container has a set max width and is autocentered</p>
</Container>
```

```react
plain: true
---
<Container align="right">
  <p className="highlight">This container has right-aligned text</p>
</Container>
```

#### Layout examples

```react
plain: true
---
<div>
  <Container margin={['top', 'bottom']}>
    <p className="highlight">These containers shows vertical margins collapsing</p>
  </Container>
  <Container margin={['top', 'bottom']}>
    <p className="highlight">These containers shows vertical margins collapsing</p>
  </Container>
</div>
```

```react
plain: true
---
<div className="flexBox">
  <Container margin={['top', 'bottom']}>
    <p className="highlight">Horizontal margins never collapse</p>
  </Container>
  <Container margin={['top', 'bottom']}>
    <p className="highlight">Horizontal margins never collapse</p>
  </Container>
</div>
```
