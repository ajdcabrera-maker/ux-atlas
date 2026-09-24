---
version: alpha
name: Material 3
description: Atlas compilation of the Material 3 baseline light scheme for a pilot. Not Google's official DESIGN.md. Sources are the public baseline color roles, type scale, and shape scale on m3.material.io.
updated: "2026-09-24"
updatedBy: Aaron Cabrera
colors:
  primary: "#6750A4"
  on-primary: "#FFFFFF"
  on-surface: "#1D1B20"
  on-surface-variant: "#49454F"
  surface: "#FEF7FF"
  surface-container: "#F3EDF7"
  surface-container-high: "#ECE6F0"
  surface-container-highest: "#E6E0E9"
  inverse-surface: "#322F35"
  inverse-on-surface: "#F5EFF7"
  error: "#B3261E"
typography:
  display-sm:
    fontFamily: Roboto
    fontSize: 36px
    fontWeight: 400
    lineHeight: 44px
    letterSpacing: 0px
  headline-lg:
    fontFamily: Roboto
    fontSize: 32px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: 0px
  headline-sm:
    fontFamily: Roboto
    fontSize: 24px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: 0px
  title-lg:
    fontFamily: Roboto
    fontSize: 22px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  title-md:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0.15px
  body-lg:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0.5px
  body-md:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0.25px
  label-lg:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0.1px
  label-md:
    fontFamily: Roboto
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 28px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    height: 40px
    padding: 24px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  navigation-bar:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-md}"
    height: 80px
  navigation-bar-active:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
  sheet:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.xl}"
  input:
    backgroundColor: "{colors.surface-container-highest}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.xs}"
    height: 56px
  input-error:
    backgroundColor: "{colors.surface-container-highest}"
    textColor: "{colors.error}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
  checkbox:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
    size: 18px
  radio:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    size: 20px
  list:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
  tooltip:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
---

## Overview

Material 3 is an expressive product UI. Color is a tonal scheme, corners grow with the size of the object, and the pieces that make a screen feel like Material are the navigation bar and the sheet.

This file is the baseline light scheme. A dark scheme exists in the public system and is not tokenized here. Roboto is the default brand and plain typeface. Hover and pressed states are state layers on the same fill, not a second palette.

## Colors

The baseline light roles, with primary as the high-emphasis fill.

- **Primary (`#6750A4`):** Filled buttons, selected controls, and the active navigation label.
- **On primary (`#FFFFFF`):** Text and icons on primary.
- **Surface (`#FEF7FF`):** The page.
- **Surface container (`#F3EDF7`):** Navigation bars.
- **Surface container high (`#ECE6F0`):** Sheets.
- **Surface container highest (`#E6E0E9`):** Filled fields.
- **On surface (`#1D1B20`):** Default text.
- **On surface variant (`#49454F`):** Supporting navigation labels.
- **Inverse surface (`#322F35`) and inverse on surface (`#F5EFF7`):** Tooltips.
- **Error (`#B3261E`):** Error text on a field.

## Typography

Roboto across the scale. Display and headline stay at regular weight. Titles and labels from title-medium down use medium weight.

- **Display small:** 36px / 44px, for a short hero.
- **Headline large and small:** 32px and 24px, for section titles.
- **Title large and medium:** 22px regular, and 16px medium for app-bar titles.
- **Body large and medium:** 16px and 14px.
- **Label large and medium:** 14px and 12px medium, for buttons and navigation.

## Layout

Space sits on a 4px grid. Use 16px as the compact window margin and 24px from medium windows up. Group related controls inside a surface container instead of inventing a new gap.

## Elevation & Depth

Hierarchy is tonal. A sheet sits on surface-container-high, a navigation bar on surface-container, and the page on surface. Do not stack drop shadows to fake that order.

## Shapes

Corners scale with the component. Extra-small is 4px for fields, checkboxes, and tooltips. Extra-large is 28px for sheets. Filled buttons are fully rounded.

## Components

- **Buttons:** One filled primary button per view. Height 40px, label padding 24px, label-large type. Hover and press add a state layer on the same primary fill.
- **Navigation:** A navigation bar is 80px tall, on surface-container. Inactive labels use on-surface-variant. The active destination uses primary.
- **Sheets:** A modal or bottom sheet uses surface-container-high and a 28px corner.
- **Input fields:** Filled fields are 56px on surface-container-highest, with a 4px corner. Errors use the error color for the message.
- **Checkboxes and radio buttons:** The selected control is primary with an on-primary mark. Checkbox corners are 4px.
- **Lists:** Rows sit on the page surface in body-large.
- **Tooltips:** Inverse surface with inverse on-surface text.

## Do's and Don'ts

- Do use primary for the single high-emphasis action.
- Do keep body text on surface, not on primary.
- Don't invent a second accent beside the baseline primary.
- Don't mix fully rounded buttons with sharp sheets in the same view.
- Do meet WCAG AA for text on a fill. Primary with on-primary does.
