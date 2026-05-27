# Monorepo template

### Adding Dependencies

To a specific package:

```bash
pnpm --filter client add lodash
```

To the root (tools like Prettier, ESLint, or TypeScript):

```bash
pnpm add -wD typescript
```

### Linking Internal Packages

If your web app needs to use the utils package, you can link them seamlessly without publishing to npm:

```bash
pnpm --filter client add shared@workspace:*
```

### Running Scripts

To run a dev or build script across all packages simultaneously:

```bash
pnpm -r dev
```
