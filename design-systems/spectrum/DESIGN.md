---
version: alpha
name: Spectrum
description: Atlas compilation of Spectrum's light theme at medium density for a pilot. Not Adobe's official DESIGN.md. Sources are the light and desktop values in @adobe/spectrum-tokens 15.4.1.
updated: "2026-09-24"
updatedBy: Aaron Cabrera
colors:
  primary: "#3B63FB"
  on-primary: "#FFFFFF"
  primary-hover: "#274DEA"
  primary-down: "#1D3ECF"
  text: "#292929"
  surface: "#FFFFFF"
  layer: "#F8F8F8"
  track: "#E1E1E1"
  inverse: "#131313"
  error: "#D73220"
typography:
  heading-l:
    fontFamily: Adobe Clean Spectrum VF
    fontSize: 28px
    fontWeight: 800
    lineHeight: 1.3
  heading-s:
    fontFamily: Adobe Clean Spectrum VF
    fontSize: 20px
    fontWeight: 800
    lineHeight: 1.3
  title-m:
    fontFamily: Adobe Clean Spectrum VF
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.3
  body-m:
    fontFamily: Adobe Clean Spectrum VF
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-s:
    fontFamily: Adobe Clean Spectrum VF
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  detail-s:
    fontFamily: Adobe Clean Spectrum VF
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.333
rounded:
  sm: 4px
  md: 8px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-s}"
    rounded: "{rounded.md}"
    height: 32px
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    height: 32px
  button-primary-down:
    backgroundColor: "{colors.primary-down}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    height: 32px
  action-bar:
    backgroundColor: "{colors.layer}"
    textColor: "{colors.text}"
    typography: "{typography.body-s}"
    height: 56px
    padding: 16px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-s}"
    rounded: "{rounded.md}"
    height: 32px
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.error}"
    typography: "{typography.detail-s}"
    rounded: "{rounded.md}"
  track:
    backgroundColor: "{colors.track}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    height: 4px
  checkbox:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    size: 16px
  radio:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    size: 16px
  list:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-s}"
  tooltip:
    backgroundColor: "{colors.inverse}"
    textColor: "{colors.on-primary}"
    typography: "{typography.detail-s}"
    rounded: "{rounded.sm}"
---

## Overview

Spectrum is a professional tool UI. Controls are compact, type is Adobe Clean, and the piece that makes a screen feel like a tool is the action bar.

This file is the light theme at medium density, using desktop type sizes. A dark theme and a large scale exist in the public tokens and are not tokenized here. Medium is the default density.

## Colors

Light values from the published tokens. Primary is accent 900.

- **Primary (`#3B63FB`):** Accent buttons and selected controls. Hover is accent 1000 (`#274DEA`). Down is accent 1100 (`#1D3ECF`).
- **On primary (`#FFFFFF`):** Labels on primary and tooltip text.
- **Text (`#292929`):** Gray 800, the default content color.
- **Surface (`#FFFFFF`):** Pages and fields.
- **Layer (`#F8F8F8`):** Gray 50, for the action bar and other raised tool chrome.
- **Track (`#E1E1E1`):** Gray 200, for tracks and quiet fills.
- **Inverse (`#131313`):** Gray 900, for tooltips.
- **Error (`#D73220`):** Negative 900, for error text.

## Typography

Adobe Clean Spectrum VF. Desktop sizes. Heading weight is extra-bold (800). Titles are bold (700). Body is regular (400). Detail is medium (500).

- **Heading L and S:** 28px and 20px.
- **Title M:** 16px bold.
- **Body M and S:** 16px and 14px. Body S is the control label.
- **Detail S:** 12px, for helper text and tooltips.

## Layout

Medium density uses an 8px base, with 4px and 12px steps beside it. Tool chrome can be denser than a reading layout. Do not scale every control up to the large (touch) sizes unless the screen is actually large-scale.

## Elevation & Depth

Tool chrome is mostly flat. The action bar is a layer, not a shadow. Floating pieces may use a light drop shadow. Do not put a marketing-style card shadow on every panel.

## Shapes

Medium corners are 8px on buttons and fields. Smaller pieces, including checkboxes, tracks, and tooltips, use 4px.

## Components

- **Buttons:** Accent height is 32px at medium, with 12px of side padding, an 8px corner, and body-s type. Hover and down use the next accent steps.
- **Action bar:** 56px tall on layer, with 16px of page padding and body-s labels. This is the bar for actions on the current tool or selection.
- **Input fields:** 32px on surface, 8px corner. Errors use the error color for the message.
- **Tracks:** 4px tall on the track color.
- **Checkboxes and radio buttons:** Selected fill is primary. The checkbox is 16px with a 4px corner.
- **Lists:** Rows on surface in body-s.
- **Tooltips:** Inverse fill, on-primary text, 4px corner.

## Do's and Don'ts

- Do keep medium density unless the person asked for the large scale.
- Do put bulk actions in the action bar.
- Don't stretch controls to marketing sizes.
- Don't use primary as a page wash. It is the accent button.
- Do meet WCAG AA. White on accent 900 does.
