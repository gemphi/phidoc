---
id: phidoc-branding
title: Branding and Themes
description: Drive PhiDoc with puijs brand themes and the Apple theme style.
sidebar_position: 5
slug: /docs/phidoc/branding
---

# Branding and Themes

PhiDoc does not define application CSS. It renders through puijs and `PuiProvider`.

## Brand selection

```ts
brandId: 'phixum'
```

The provider resolves the brand palette, gradients, surfaces, borders, typography, and state colors. The site config selects the brand; pages do not restyle it.

## Theme style

`PhiDocSite` defaults to the Apple theme style:

- rounded controls and cards
- layered gradients
- soft borders and shadows
- system-aware light and dark mode

## Component contract

Use puijs layout and display primitives:

- `Page`, `Section`, `Container`, `Stack`, and `Grid`
- `Navbar`, `Sidebar`, `MenuItem`, and `Tabs`
- `Card`, `Badge`, `Callout`, `List`, and `Table`
- `Title`, `Text`, `Button`, and `Icon`

Application-level CSS files, hardcoded gradients, inline style objects, and custom wrappers are intentionally outside the PhiDoc model.
