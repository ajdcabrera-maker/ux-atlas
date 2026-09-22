---
title: "The UX Constitution"
description: "The root operating system for all design decisions, covering interaction psychology, perception, and accessibility."
---

## 🎯 Intent

This is the root operating system for all design decisions. These universal laws—covering interaction, psychology, perception, and accessibility—supersede all component-level rules.

## 📏 1. Interaction Guidelines (Applied Nielsen Heuristics)

### 1.1 Visibility of System Status (Feedback)

The system must always keep users informed about what is going on through appropriate feedback within reasonable time. The user should never ask, "Did my click register?"

- **✅ DO:** Use skeleton loaders for data fetching that takes longer than 1 second. Provide a determinate progress bar for file uploads.
- **✅ DO:** Transform the clicked button into a loading state (e.g., swapping the label for a spinner) while an async mutation resolves.
- **🚫 DON'T:** Freeze the UI or rely purely on hidden background network requests without visual indication.
- **⚠️ EDGE CASE (The Flash of Loading):** If an API response is incredibly fast (< 300ms), immediately showing a loading spinner will cause a strobe effect, which increases perceived wait time and anxiety. *Solution:* Use a CSS/JS delay to only show the spinner if the request takes longer than 300ms.



### 1.2 Match Between System and Real World (Speak Human)

The system should speak the user's language, with words, phrases, and concepts familiar to the user, rather than system-oriented terms.

- **✅ DO:** Use action-oriented, precise verbs for buttons. If a button deletes a project, label it "Delete Project", not "Submit" or "Confirm".
- **🚫 DON'T:** Expose raw database schemas or error codes to the user. Never show `Error: NullPointerException at line 42`.
- **⚠️ EDGE CASE (Cognitive Translation):** When designing sorting filters, avoid database terminology like "Ascending" or "Descending." Users have to pause and translate this mentally. *Solution:* Use "Price: Low to High" or "Date: Newest First."



### 1.3 User Control and Freedom (Emergency Exits)

Users often choose system functions by mistake. They need a clearly marked "emergency exit" to leave the unwanted state without having to go through an extended dialogue.

- **✅ DO:** Provide a "Back" button in wizards, a "Cancel" button in forms, and an easily clickable "X" or backdrop-click to close modals.
- **✅ DO:** Rely on "Undo" toasts (e.g., "Email deleted. [Undo]") for low-to-medium consequence actions to keep workflows fast.
- **🚫 DON'T:** Trap users in a dead-end screen or force them to use the browser's back button as the primary navigation method.
- **⚠️ EDGE CASE (High-Destruction Actions):** An "Undo" toast is not enough for deleting a core account or purging a database. *Solution:* Implement a hard confirmation modal that requires the user to type the name of the object being deleted. However, always prefer a "Soft Delete" (moving to a Trash/Archive state for 30 days) on the backend over a permanent immediate purge.



### 1.4 Error Prevention (Smart Constraints)

Even better than good error messages is a careful design which prevents a problem from occurring in the first place. 

- **✅ DO:** Use input masks and auto-formatting (e.g., phone numbers automatically adding dashes). 
- **✅ DO:** Use structured inputs (like a Date Picker or segmented DD/MM/YYYY fields) instead of free-text inputs for strict formats.
- **🚫 DON'T:** Wait until the user clicks submit to tell them the username they picked 10 fields ago is already taken.
- **⚠️ EDGE CASE (The Disabled Button Debate):** Many systems disable the "Submit" button until the form is perfectly valid. This is an anti-pattern. If a user misses a field and the button is dead, they don't know *why*. *Solution:* Keep the Submit button active. When clicked, prevent submission, automatically scroll the user to the first invalid field, and highlight it with a clear, descriptive error message.



### 1.5 Recognition Rather Than Recall (Contextual Persistence)

Minimize the user's memory load by making objects, actions, and options visible. The user should not have to remember information from one part of the dialogue to another.

- **✅ DO:** Keep password criteria visible at all times while the user is typing, visually checking off requirements as they are met.
- **✅ DO:** Highlight the currently active item in a sidebar or navigation tree to orient the user within the system architecture.
- **🚫 DON'T:** Use placeholder text (`<input placeholder="...">`) as a replacement for field labels. The moment the user starts typing, the label disappears, forcing them to rely on recall.
- **⚠️ EDGE CASE (Multi-step Modals/Wizards):** When a user is in step 3 of a checkout or configuration wizard, they shouldn't have to hit "Back" to remember what they selected in step 1. *Solution:* Use a persistent right-hand drawer or sidebar summary that tallies their choices and running costs as they progress.



### 1.6 Consistency and Standards (Platform Conventions)

Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform and industry conventions.

- **✅ DO:** Maintain strict visual tokens. A primary action button must look and behave exactly the same on the dashboard as it does on the settings page.
- **✅ DO:** Respect OS-level conventions. If building a mobile web view, remember that iOS users expect to swipe right to go back, while Android users rely on a system back button.
- **🚫 DON'T:** Reinvent the wheel for established patterns to be "creative." Don't put a user profile menu in the bottom-left corner when the entire internet has trained users to look in the top-right.
- **⚠️ EDGE CASE (Intentional Friction):** You *should* break consistency to snap a user out of "autopilot" mode. If your app uses standard modals for normal actions, use a visually distinct, high-friction, full-screen takeover for a highly destructive action.



### 1.7 Flexibility and Efficiency of Use (Accelerators)

Interfaces must cater to both inexperienced and expert users. Accelerators can dramatically speed up interaction for experts.

- **✅ DO:** Provide keyboard shortcuts (e.g., `Cmd/Ctrl + K` for global search, `Esc` to close modals) and support standard tab-indexing.
- **✅ DO:** Allow bulk actions (select all, bulk delete/edit) in data tables and lists.
- **🚫 DON'T:** Hide critical functionality *exclusively* behind an accelerator or gesture (like a long-press). The action must always be accessible via a visible UI element for beginners.
- **⚠️ EDGE CASE (The "Advanced" Toggle):** SaaS platforms often suffer from feature bloat. Use progressive disclosure: show a clean, basic form by default, with an "Advanced Settings" toggle that reveals complex configurations for power users.



### 1.8 Aesthetic and Minimalist Design (Signal-to-Noise Ratio)

Interfaces should not contain information that is irrelevant or rarely needed. Every extra unit of information competes with relevant units.

- **✅ DO:** Treat whitespace (negative space) as an active structural element. Use it to group related elements instead of relying on heavy borders and lines.
- **🚫 DON'T:** Fill every available pixel with "Pro Tips," secondary metrics, or marketing banners. If everything shouts, nothing is heard.
- **⚠️ EDGE CASE (Data-Dense Environments):** Minimalism does not mean "few elements on the screen." In financial dashboards or CRMs, users *need* high density. In these cases, minimalism means a high *signal-to-noise ratio*: strip out decorative icons, use tabular figures, and eliminate redundant labels.



### 1.9 Help Users Recognize, Diagnose, and Recover from Errors

Error messages must be expressed in plain language (no codes), precisely indicate the problem, and constructively suggest a solution.

- **✅ DO:** Highlight the exact field that caused the error and provide actionable microcopy (e.g., "Password must contain at least one number").
- **✅ DO:** Preserve the user's input when an error occurs. Never clear a form just because one field failed validation.
- **🚫 DON'T:** Use a generic, dead-end error state like "Something went wrong." Tell the user if it's a network issue or bad data.
- **⚠️ EDGE CASE (Security vs. Helpfulness):** The one time you *should* use a vague error message is during authentication (e.g., "Invalid email or password") to prevent threat actors from discovering registered emails.



### 1.10 Help and Documentation

While it is best if a system can be used without documentation, it may be necessary to provide help for complex tasks.

- **✅ DO:** Provide contextual, just-in-time help. Use info-icon tooltips next to complex form labels or empty states explaining how to use a feature.
- **🚫 DON'T:** Force the user to leave the app and read a 10-page Knowledge Base article to complete a core workflow.
- **⚠️ EDGE CASE (The Onboarding Tour Trap):** Do not throw a 7-step modal tour at a user the second they log in. Trigger contextual help *only* when the user navigates to a specific feature for the first time.

---



## 🧠 2. Cognitive Psychology (Laws of UX)



### 2.1 Fitts’s Law (Target Acquisition)

The time required to rapidly move to a target area is a function of distance and target width.

- **✅ DO:** Make primary interactive targets large. The minimum touch target size must be 44x44 CSS pixels (Apple/WCAG) or 48x48 CSS pixels (Material).
- **✅ DO:** Place primary actions in highly reachable areas (e.g., bottom third on mobile).
- **🚫 DON'T:** Place destructive actions immediately adjacent to primary actions without sufficient padding.
- **⚠️ EDGE CASE (The "Infinite" Edge):** Elements placed at the absolute edge of a screen (like a sticky mobile checkout bar) effectively have "infinite" depth because the user's cursor/thumb cannot move past the screen's edge. Leverage this for critical CTAs.



### 2.2 Hick’s Law (Decision Fatigue)

The time it takes to make a decision increases with the number and complexity of choices.

- **✅ DO:** Break complex workflows into smaller, sequential steps (Progressive Disclosure).
- **✅ DO:** Categorize large menus or convert dropdowns with >10 items into searchable comboboxes.
- **🚫 DON'T:** Present a flat wall of 10+ top-level navigation links.
- **⚠️ EDGE CASE (Expert Interfaces):** For expert systems (like terminals or pro design software), users rely on spatial memory. Hiding tools to reduce cognitive load hurts efficiency here; prioritize density and visibility for pros.



### 2.3 Jakob’s Law (Mental Models)

Users spend most of their time on other sites, meaning they expect your product to work like those they already know.

- **✅ DO:** Use standardized UI patterns (cart in top right, magnifying glass for search).
- **✅ DO:** Leverage mental models of physical objects (folders for files, trash can for deletion).
- **🚫 DON'T:** Invent novel interactions for standard tasks just to be unique.
- **⚠️ EDGE CASE (When to Innovate):** Only break Jakob's Law if your new interaction pattern is exponentially better *and* provides a competitive advantage.



### 2.4 Miller’s Law (Working Memory)

The average person can only keep 7 (plus or minus 2) items in working memory.

- **✅ DO:** Chunk information (format phone numbers as `(555) 123-4567`, format credit cards in groups of four).
- **✅ DO:** Group UI elements into distinct clusters (cards, sections with headings).
- **🚫 DON'T:** Force users to remember filter settings or data points across screen transitions.
- **⚠️ EDGE CASE (Search vs. Sort):** When displaying 50+ items, users forget what is at the top by the time they scroll to the bottom. Always provide sticky column headers and faceted filtering.



### 2.5 The Peak-End Rule (Experience Memory)

People judge experiences based on how they felt at their peak and at their end, rather than the average of every moment.

- **✅ DO:** Celebrate task completion (micro-interactions, success states, "Zero Inbox" messages).
- **✅ DO:** Ensure the final step of any workflow provides a clear "What's Next" direction.
- **🚫 DON'T:** End a multi-step flow with a sterile, generic screen that lacks receipts or return paths.
- **⚠️ EDGE CASE (Negative Peaks):** Negative peaks (data loss, timeouts) ruin the entire perception of an app. Invest heavily in graceful error handling.



### 2.6 The Zeigarnik Effect (Unfinished Tasks)

People remember uncompleted or interrupted tasks better than completed tasks because the brain craves closure.

- **✅ DO:** Use progress bars or step indicators (`Step 2 of 4`).
- **✅ DO:** Provide "Getting Started" checklists for new users, pre-checking the first completed item.
- **🚫 DON'T:** Hide the scope of a task or exploit this effect via dark patterns (fake progress bars or hidden cancellation buttons).



### 2.7 Von Restorff Effect (The Isolation Effect)

When multiple similar objects are present, the one that differs most is remembered and interacted with.

- **✅ DO:** Ensure your primary CTA is visually distinct (solid fill vs. outlined secondary buttons).
- **✅ DO:** Highlight unread counts or alert badges using semantic colors.
- **🚫 DON'T:** Make everything "pop." If every element is brightly colored and bold, nothing stands out.
- **⚠️ EDGE CASE (Banner Blindness):** If you isolate an element too much by making it look like an ad, users will subconsciously ignore it. Keep isolated items feeling native.

---



## 👁️ 3. Perception (Gestalt Principles)



### 3.1 Law of Proximity (Spacing as Structure)

Objects closer together are perceived as more related. Proximity overrules color, shape, and borders.

- **✅ DO:** Use optical spacing. The margin below a section heading must be smaller than the margin above it so it hugs its content.
- **✅ DO:** Keep form labels closer to their input fields than to preceding fields.
- **🚫 DON'T:** Use uniform, equidistant spacing everywhere, which creates a wall of unstructured noise.
- **⚠️ EDGE CASE (Mobile Touch Targets):** Grouped action icons must look close together visually, but their invisible bounding touch targets must remain at least 44x44px.



### 3.2 Law of Similarity (Visual Consistency)

Elements sharing visual characteristics are perceived as having the same function.

- **✅ DO:** Establish a strict semantic token system (e.g., if interactive links are blue, *only* interactive text is blue).
- **✅ DO:** Use similarity to link related data clusters across complex layouts.
- **🚫 DON'T:** Style static, non-interactive elements (like status pills) to look like clickable tags.
- **⚠️ EDGE CASE (The Ghost Button Trap):** Outlined ghost buttons often look identical to empty input fields. Ensure buttons have heavier weights, distinct hover states, or centered text to separate them from left-aligned inputs.



### 3.3 Law of Common Region (Containers and Surfaces)

Elements sharing a clearly defined boundary or surface area are perceived as a group.

- **✅ DO:** Use subtle background surfaces (e.g., a 2% tint) or delicate borders to group settings or widgets.
- **🚫 DON'T:** Build "Matryoshka UI" (nesting boxes inside boxes). Rely on whitespace and proximity before adding borders.
- **⚠️ EDGE CASE (Dark Mode Elevation):** Drop shadows are invisible in dark mode. Use surface elevation (lighter gray shades) to establish common regions.



### 3.4 Law of Figure-Ground (Foreground vs. Background)

People instinctively perceive objects as either in the foreground (focus) or background (resting plane).

- **✅ DO:** Use semi-transparent dark scrims (40–60% black) behind modals and drawers to push the main app into the background.
- **✅ DO:** Maintain high contrast between text and its container.
- **🚫 DON'T:** Use low-contrast floating elements that blend into scrolling content.
- **⚠️ EDGE CASE (Image Backgrounds):** Placing text directly over photography destroys figure-ground contrast. Always use a gradient overlay, solid scrim, or background pill.



### 3.5 Law of Continuity (Alignment and Flow)

Elements arranged on a line or curve are perceived to be related. The eye seeks the smoothest path.

- **✅ DO:** Use strict left-alignment for forms and text (right-align numbers). A hard left edge gives the eye a continuous scanning axis.
- **✅ DO:** Use partial visibility ("peeking") in carousels to signal that content extends off-screen.
- **🚫 DON'T:** Center-align blocks of text longer than three lines, as the ragged left edge destroys the scanning path.
- **⚠️ EDGE CASE (Sequential Steppers):** A connecting line between steps implies a required sequence. If steps can be completed in any order, remove the connecting line and use isolated tabs.



### 3.6 Law of Closure (Minimalism and Simplification)

The human brain prefers complete shapes, filling in missing visual information automatically.

- **✅ DO:** Rely on closure to strip clutter. You do not need heavy borders around every data table cell; standard horizontal row dividers are enough.
- **✅ DO:** Design minimalist icons using simple geometric lines.
- **🚫 DON'T:** Over-explain visual hierarchy if it results in broken-looking skeleton loaders or unanchored data charts.

---



## ♿ 4. Inclusivity (WCAG P.O.U.R.)



### 4.1 Perceivable (Information cannot be invisible to all senses)

Users must be able to perceive information through multiple senses.

- **✅ DO:** Maintain strict contrast ratios (4.5:1 for standard text, 3:1 for large text and interactive UI borders).
- **✅ DO:** Provide meaningful alt text for informational images, and empty strings (`alt=""`) for purely decorative images.
- **🚫 DON'T:** Use color as the sole indicator of meaning (e.g., a red border for an error must be paired with an icon and text message).
- **⚠️ EDGE CASE (Disabled States):** Dropping disabled button opacity to 30% causes it to fail contrast checks. Keep buttons fully visible or use "Read-Only" states, triggering inline errors on click if incomplete.



### 4.2 Operable (Interfaces cannot require impossible interactions)

User interfaces and navigation must be operable across all input devices.

- **✅ DO:** Ensure 100% keyboard navigability (`Tab`, `Shift + Tab`, `Enter`, `Space`).
- **✅ DO:** Design high-visibility focus states (`:focus-visible` offset outlines).
- **🚫 DON'T:** Trap keyboard focus inside modals or dialogs without a cyclic trap and escape route.
- **⚠️ EDGE CASE (Hover-Only Menus):** Dropdown menus that open *only* on hover are completely inaccessible to touch and keyboard users. They must also open on click and keyboard focus.



### 4.3 Understandable (Predictable operations and clear language)

Information and operation of the UI must be logical and predictable.

- **✅ DO:** Make states predictable. Toggling a switch should not automatically trigger major context shifts or form submissions without warning.
- **✅ DO:** Keep navigation layouts completely consistent across the product.
- **🚫 DON'T:** Hijack scrolling behavior via custom JavaScript scrolljacking.
- **⚠️ EDGE CASE (Dynamic DOM Updates):** Screen readers miss silent background DOM changes (like toast notifications). Use `aria-live="polite"` attributes on dynamic regions so assistive tech announces them.



### 4.4 Robust (Reliable interpretation across technologies)

Content must be robust enough to be interpreted by diverse user agents and assistive tools.

- **✅ DO:** Write semantic HTML first (`<button>`, `<nav>`, `<main>`, `<aside>`).
- **✅ DO:** Ensure custom components have a programmatic Name, Role, and Value using ARIA attributes when native HTML falls short.
- **🚫 DON'T:** Use generic `<div>` or `<span>` tags with click handlers as buttons.
- **⚠️ EDGE CASE (ARIA Over-Engineering):** "No ARIA is better than bad ARIA." Only use ARIA attributes to bridge gaps when native elements fail.

---



## 🤖 AI Prompt Context (The System Directive)

> **SYSTEM INSTRUCTION: THE UX CONSTITUTION**
> You are an expert Design Ops agent. You must apply the following universal heuristics simultaneously to all generated UI, superseding all component-level rules:
>
> 1. **Interaction:** Always provide immediate visual feedback (loading/success/error states). Prevent user error through constrained inputs. Always provide a non-destructive exit path (Cancel/Undo).
> 2. **Psychology:** Minimize cognitive load. Break complex forms into steps. Ensure primary actions are large (min 44x44px) and easily reachable.
> 3. **Perception:** Group related elements using Proximity (spacing) and Common Regions (surfaces). Maintain visual consistency; interactive elements must look distinct from static ones.
> 4. **Inclusivity:** Treat WCAG 2.1 AA as a hard constraint. Use semantic HTML natively. Ensure a 4.5:1 text contrast ratio. Never suppress `:focus-visible` without a high-contrast replacement. Ensure all dynamic DOM updates utilize `aria-live` regions.
>
> If you violate these rules, the interface is considered broken.

