# Container component

The Container component adds padding to wrapped components, use this everywhere you need padding instead of adding padding to elements (where you can).

- All containers will have left/right padding by default unless 'full' is used.

```react
<Container>
  <p>Container contents</p>
</Container>
```

### Component props

- `padding`: `array` - Settings for padding
- `align`: `string` - Controls text-align of contents
- `full`: `boolean` - Removes side padding
- `autocenter`: `boolean` - Centers component based on max-width

```react
<Container padding={['top', 'bottom']}>
  <p>This container has top and bottom gutters</p>
</Container>
```

```react
<Container padding={['top-half', 'bottom-double']}>
  <p>This container has half and doubled gutters</p>
</Container>
```

```react
<Container full>
  <p>This container is full (has no side padding)</p>
</Container>
```

```react
<Container limited="baby">
  <p>This container has a set max width</p>
</Container>
```

```react
<Container limited="baby" autocenter>
  <p>This container has a set max width and is autocentered</p>
</Container>
```

```react
<Container align="right">
  <p>This container has right-aligned text</p>
</Container>
```
