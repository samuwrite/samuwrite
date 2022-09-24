# @samuwrite/tailwind

[@tailwind/typography](https://tailwindcss.com/docs/typography-plugin)
as a static, standalone CSS file.

## Features

- Include scoped [preflight](https://tailwindcss.com/docs/preflight) styles
  under `.tailwind`
- Support
  [class-based](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually)
  dark mode with `.tailwind-dark`
- Support all
  [gray scales](https://tailwindcss.com/docs/typography-plugin#choosing-a-gray-scale)
- Support all
  [type scales](https://tailwindcss.com/docs/typography-plugin#applying-a-type-scale)
  but only at the default corresponding break points
  - e.g. Only `lg:prose-xl`, no `prose-xl`, `md:prose-xl` or `2xl:prose-xl`

## Usage

### npm

```
npm install @samuwrite/tailwind
```

```ts
// app.ts
import "@samuwrite/tailwind/dist/index.css";
```

```html
<!-- app.html -->
<div class="tailwind">
  <div class="prose">Hello <b>world</b></div>
</div>
```

### Unpkg

```html
<!-- app.html -->
<head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/@samuwrite/tailwind/dist/index.css"
  />
</head>
<body>
  <div class="tailwind">
    <div class="prose">Hello <b>world</b></div>
  </div>
</body>
```

## Contributing

Run `npm run build` to build `dist/index.css`
