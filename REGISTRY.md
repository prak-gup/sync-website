## Using shadcn/ui and registries

We’ve initialized shadcn/ui. You can now add components and optionally pull from registries listed on [registry.directory](https://registry.directory/).

### Add core shadcn/ui components

Run from the `sync-web` folder:

```bash
pnpm dlx shadcn@latest add button card input textarea select dialog sheet dropdown-menu alert toast avatar badge separator tabs tooltip accordion navigation-menu skeleton
```

You can also add one at a time, e.g.:

```bash
pnpm dlx shadcn@latest add button
```

### Using third‑party registries (via registry.directory)

Many registries on [registry.directory](https://registry.directory/) provide a custom registry URL or copy‑paste snippets. Typical options:

- If a registry provides a custom registry URL compatible with shadcn CLI, you can use the `--registry` flag:

```bash
pnpm dlx shadcn@latest add button --registry <REGISTRY_URL>
```

- If a registry provides copy‑paste code, follow their instructions to place files under `src/components/`, `src/hooks/`, or `src/lib/` and update imports to `@/*`.

### Notes

- Tailwind is already configured (v4). Global CSS is in `src/app/globals.css`.
- Utilities live in `src/lib/utils.ts` (created by shadcn init).
- Icons: `@radix-ui/react-icons` and `lucide-react` are installed.
- If a component asks to install an extra package, add it with `pnpm add <pkg>` (or `-D` for dev packages).





