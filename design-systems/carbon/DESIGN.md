---
version: alpha
name: Carbon
description: Atlas compilation of the Carbon white theme for a pilot. Not IBM's official DESIGN.md. Sources are @carbon/themes 11.82.0 (white), @carbon/type 11.68.0 (productive styles), and @carbon/layout 11.60.0.
updated: "2026-09-24"
updatedBy: Aaron Cabrera
colors:
  primary: "#0F62FE"
  on-primary: "#FFFFFF"
  primary-hover: "#0050E6"
  primary-active: "#002D9C"
  secondary: "#393939"
  on-secondary: "#FFFFFF"
  text: "#161616"
  text-secondary: "#525252"
  surface: "#FFFFFF"
  layer: "#F4F4F4"
  layer-accent: "#E0E0E0"
  shell: "#161616"
  error: "#DA1E28"
typography:
  heading-compact-01:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.28572
    letterSpacing: 0.16px
  heading-03:
    fontFamily: IBM Plex Sans
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px
  heading-04:
    fontFamily: IBM Plex Sans
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.28572
    letterSpacing: 0px
  heading-05:
    fontFamily: IBM Plex Sans
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0px
  body-01:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.42857
    letterSpacing: 0.16px
  body-02:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  label-01:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33333
    letterSpacing: 0.32px
  code-01:
    fontFamily: IBM Plex Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33333
    letterSpacing: 0.32px
rounded:
  none: 0px
  sm: 2px
  md: 4px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  margin: 16px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-01}"
    rounded: "{rounded.none}"
    height: 40px
    padding: 16px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    height: 40px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    height: 40px
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.body-01}"
    rounded: "{rounded.none}"
    height: 40px
    padding: 16px
  input:
    backgroundColor: "{colors.layer}"
    textColor: "{colors.text}"
    typography: "{typography.body-01}"
    rounded: "{rounded.none}"
    height: 40px
  input-error:
    backgroundColor: "{colors.layer}"
    textColor: "{colors.error}"
    typography: "{typography.label-01}"
    rounded: "{rounded.none}"
  checkbox:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    size: 16px
  radio:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    size: 16px
  list:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-01}"
  list-meta:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.label-01}"
  data-table:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-01}"
    rounded: "{rounded.none}"
  data-table-header:
    backgroundColor: "{colors.layer-accent}"
    textColor: "{colors.text}"
    typography: "{typography.heading-compact-01}"
    rounded: "{rounded.none}"
  ui-shell:
    backgroundColor: "{colors.shell}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-01}"
    height: 48px
  tooltip:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-01}"
    rounded: "{rounded.none}"
---

## Overview

Carbon is a dense information UI. Geometry stays square, type stays productive, and the pieces that make a screen feel like Carbon are the data table and the UI shell.

This file is the white theme. Gray 10, Gray 90, and Gray 100 are the other public themes and are not tokenized here. The type is IBM Plex Sans for UI and IBM Plex Mono for code. Productive styles are the default. Expressive display type is a separate set.

## Colors

White theme roles from the published theme. Primary is Blue 60.

- **Primary (`#0F62FE`):** Primary buttons, links, and selected controls. Hover is `#0050E6`. Active is `#002D9C`.
- **On primary (`#FFFFFF`):** Text on primary and on the shell.
- **Secondary (`#393939`):** Secondary buttons and tooltips, with white text.
- **Text (`#161616`) and text secondary (`#525252`):** Primary copy and metadata.
- **Surface (`#FFFFFF`):** Pages and table bodies.
- **Layer (`#F4F4F4`):** Fields.
- **Layer accent (`#E0E0E0`):** Table headers.
- **Shell (`#161616`):** The UI shell header.
- **Error (`#DA1E28`):** Error text.

## Typography

Productive styles. Sizes follow the Carbon type scale. Weights are light 300, regular 400, and semibold 600.

- **Heading compact 01:** 14px semibold, for table headers.
- **Heading 03, 04, and 05:** 20px, 28px, and 32px regular, for page titles.
- **Body 01 and 02:** 14px and 16px regular. Body 01 is the default UI text.
- **Label 01:** 12px, for helper text.
- **Code 01:** IBM Plex Mono at 12px.

## Layout

The mini unit is 8px. Spacing steps used here are 4, 8, 16, 24, and 32px. From the large breakpoint the grid is 16 columns with a 16px margin. Keep density even. Do not loosen a data table to look like a marketing page.

## Elevation & Depth

Depth is a layer change. A field is layer on surface. A table header is layer-accent. Menus may use the theme shadow. Do not add a soft card shadow under every panel.

## Shapes

Controls in this file are square. The published scale also has 2px and 4px radii for rarer cases. Buttons, fields, tables, and the shell stay at 0.

## Components

- **Buttons:** Primary, secondary, and the primary hover and active fills. Height 40px, horizontal padding 16px, body-01 type, square corners.
- **Input fields:** 40px on layer, square. Errors use the error color for the message.
- **Checkboxes and radio buttons:** Selected fill is primary with an on-primary mark. The box is 16px and square.
- **Lists:** Rows on surface. Metadata uses text secondary and label-01.
- **Data table:** Body on surface in body-01. Header on layer-accent in heading-compact-01.
- **UI shell:** Header is 48px, shell background, on-primary text.
- **Tooltips:** Secondary fill, on-secondary text, square.

## Do's and Don'ts

- Do keep one primary button in a toolbar or form footer.
- Do use the productive type set for product UI.
- Don't round buttons or fields in this theme.
- Don't put body text on primary blue. Primary is a fill, and the label is on-primary.
- Do meet WCAG AA. White on primary blue does.
