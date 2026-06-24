# Samples — the extraction contract

Each sample is a **self-contained, hand-off-ready** folder. Goal: when a client
asks for the code, you copy the one folder and it works anywhere — zero ties to
the rest of the portfolio app.

## Rules (keep every sample portable)

```
samples/<name>/
  index.tsx     default-exports a pure component
  styles.css    all selectors scoped under one root class (.<name>)
  assets/       images/fonts used by this sample, imported relatively
```

1. **No imports from outside the folder.** Not portfolio data, not shared
   components, nothing under `../../`. Only `./styles.css`, `./assets/*`, and
   npm deps.
2. **Scope all CSS under one root class** (e.g. `.sample-01`). Samples are
   bundled together at build time, so unscoped/generic classes would collide.
   The root class also sets the sample's own background + font (no global reset).
3. **Know nothing about routing.** No slug, no `noindex`, no title logic in the
   sample — `DraftRouter` + `registry.ts` own all of that.

## Add a sample

1. Create `samples/<name>/` following the rules above.
2. Register it in `../registry.ts`: `slug → { title, lazy(() => import('./samples/<name>')) }`.
   Slug ≠ folder name on purpose — name the folder after the client/brand;
   keep the slug an unguessable token (`openssl rand -hex 4`).

## Hand off a sample

Copy `samples/<name>/` out. It's a standalone component with its own styles and
assets. Drop the `registry.ts` line behind — that's the only portfolio glue.
