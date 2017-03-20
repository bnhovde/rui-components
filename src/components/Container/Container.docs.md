# Container component

The Container component is a generic utility component to be used for the following:
- Adding global margin/padding to wrapped components/elements
- Adding global max-width to wrapped components/elements
- Adding alignment to wrapped components/elements

Use this everywhere you need padding instead of adding padding to elements (where you can).

NB: All containers will have left/right padding by default unless 'full' is used.

## Example

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
<Container margin={['left-fluid', 'right-fluid']}>
  <p className="highlight">This container has fluid left/right margins</p>
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

#### Use cases

Here's an example of composing other components using the container component.
-> Notice how none of the other elements used have any margin/padding

```react
plain: true
---
<div>
  <Container margin={['top', 'bottom']}>
    <h1 className="highlight">Component title</h1>
  </Container>
  <Container margin={['top', 'bottom']}>
    <strong className="highlight">Component subtitle</strong>
  </Container>
  <Container margin={['top', 'bottom']}>
    <div className="highlight">
      <Container full margin={['top', 'bottom']} padding={['top', 'right', 'bottom', 'left']}>
        <p>Component contents (padded)</p>
        <Container margin={['top', 'bottom', 'left-double']}>
          <ul>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
        </Container>
      </Container>
    </div>
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
