---
name: design-pipeline
description: Turn a design request into a sequence of decisions with the person who asked. Use when asked to design, redesign, critique, or add a screen, flow, feature, or product, and when a prompt jumps straight to a layout. Covers framing, requirements, research, benchmarks, prototyping, and high fidelity. Guided mode runs one stage at a time and waits for a decision. When the partner says to decide, write the remaining stages and record each decision. Offer Accept and Correct as a choice. Run this before any component skill.
metadata:
  updated: "2026-09-24"
  updatedBy: Aaron Cabrera
---

Run this on any request to design, redesign, critique, or add a screen, flow, or feature.

Guided is the default. Do one stage per turn. End the turn with the work from that stage and one decision for the partner. Do not start the next stage in the same turn.

Express starts when the partner says "you decide," or writes a sentence that hands you the remaining decisions. Begin with "Deciding the remaining stages." Write the open stage, then each following stage, in that same turn. Each stage is its own block. Do not fold them into one result. Do not start express before they ask. The turn ends at the record, after Surface.

The partner is the person in the conversation. They decide, until they start express. The end user is the person who will use the product. They are often absent. Do not invent what either of them said, did, or preferred.

The constitution judges the interface. This skill decides what to make and when it is ready. If they conflict about the interface, the constitution wins. A component skill applies only in Surface.

## Where to start

- A request that only asks for interface words, with no change to the flow or the screen, is not a design request. Do not start this skill.
- A new request with no agreed problem starts at Frame.
- If the partner has already confirmed a stage, start at the next open one and name it.
- A critique of an existing design starts at Check.
- A request to raise fidelity starts at Surface only after the partner has accepted the structure. Otherwise restate the structure and ask to accept it.
- When the partner is answering the question you asked, continue that stage. Do not restart at Frame.

## How to move

The stops are Frame, Define, Scope, Structure, Check, and Surface, in that order. Surface starts only after the partner accepts the structure. If Check fails, return to Define or Structure. Do not repair a failed flow by decorating it. In express, record that return and continue.

The waits under each stage are guided stops. In express, skip the wait. End a decision with "Decided:" and the decision. End an assumption with "Assumed:" and the assumption. A question only the partner knows stays a typed question in guided mode. In express it becomes an assumption. Do not turn it into Accept or Correct.

Learn, Benchmark, Another direction, and Test are optional. Propose one only when its rule says to. Say why, what you will do, and what you need from the partner. If they skip it, record the assumption and continue. Do not run it in silence.

Ask one question. Ask only what you cannot responsibly assume. State every assumption you are keeping.

## The choice

Do both, in this order. Write the whole stage in the message first. Then present the clickable choice. The message is what the partner reads. The choice is how they answer. The stage stays in the message. The choice does not replace it, and the message does not replace the choice.

Do not present the choice before the stage is written. Do not send the choice in a turn that has no stage text. Do not end the turn with the stage and free text alone.

When the only decision is accept or correct, the choices are these.
- Accept the stage. It opens the next stage on the next turn.
- Correct this stage. It stays on that stage.
- Any other answer is typed. Treat that answer as continuing this stage.

If they correct the stage, or the choice does not accept it, say "Stay on this stage. Say what to change." Do not open the next stage.

To leave express, the partner names the stage, for example "Change Structure." Answer "Express ended. Structure is open." Express stays off, and that stage waits. Express cannot be stopped while a response is still being written.

## 1. Frame

Restate the request as a person, a situation, and an outcome.
- Separate what the partner asked for from what you are assuming.
- Ask for the audience, the outcome, or a constraint only they know, when it is missing.
- Do not draw a layout, a flow, or a component in this turn.
- If the request is already a visual, say what decision it is hiding and ask about that.

## 2. Define

Write the problem and the outcome in one short statement.
- Name who it is for and what changes for them when this works.
- Say if there is no user need. Stopping is a valid outcome.
- Do not add features in order to make the problem feel larger.
- Wait for the partner to accept or correct the statement.

## 3. Scope

List what is in, what is out, and what is later.
- Every item in the list must serve the outcome from Define.
- Say what you are not building.
- A constraint from the partner beats a preference of yours.
- Wait for the partner to accept the cut.

## 4. Structure

Describe one flow: the steps, the primary action, and the empty, error, and exit states.
- Name the alternative you rejected and why.
- Stay at the level of structure. No visual style, no component anatomy.
- A component skill does not apply here.
- Wait for the partner to accept the flow before Check or Surface.

## 5. Check

Judge the accepted flow against the brief and the constitution.
- Say what passed and what failed. Name the constitution rule when one fails.
- If it fails, return to Define or Structure and say which.
- A critique with the partner is this stage. It is not a test with end users.
- Do not offer a restyled screen as the fix.

## 6. Surface

Specify the interface only after the partner accepts the structure.
- Apply the constitution. Apply a component skill only for an element the screen actually needs.
- Specify the states that element can be in: default, hover, focus, loading, success, and error, where those exist.
- Use the product's existing visual language. Do not invent a one-off system.
- Leave unresolved questions listed. Do not hide them in the mock.

## Optional moves

### Learn
Propose a look at evidence when the audience is unknown, Define changed the problem, or the cost of being wrong is high. High means money, health, safety, irreversible loss, or a market you do not know.
- Scale it to the one or two assumptions that would change the design.
- Skip it when the partner already has evidence, or the change is a known pattern on a product you both know.
- If end users are unavailable, say so. The partner may confirm an assumption. That confirmation is not a usability test.
- Do not invent quotes, counts, or findings.

### Benchmark
Propose two or three existing products that do the same job, and what you would adopt, when the job is familiar. Familiar jobs include sign-in, checkout, search, settings, and onboarding.
- Skip it when nothing comparable exists, or the change sits inside a pattern the partner already accepted.
- Adopt the familiar pattern unless a departure is clearly better. Say what you are copying and what you are not.
- Wait only if you are proposing to break the convention.

### Another direction
Propose a second structure when Define changed the problem, or more than one structure could satisfy the scope.
- A second structure is a different flow, not a different color.
- Skip it when one familiar pattern fits and the partner has accepted it.
- Recommend one and say why. The partner chooses.

### Test
Propose a test with end users before calling a new or critical flow done.
- Skip it for a small, reversible change that already passed Check.
- Say what you want to learn, with whom, and what decision the result will change.
- If the test cannot happen, record that the flow is unchecked with end users. Do not describe it as validated.

## Record

When the partner asks for the record, or accepts Surface, give them the problem, the scope, the decisions, the flow, the interface, the open questions, and what was not tested.
