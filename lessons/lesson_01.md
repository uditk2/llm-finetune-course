---
layout: default
title: Lesson 01
---

# Lesson 01: Fine-Tuning Fundamentals

## Audio

<audio controls preload="metadata" style="width: 100%;">
  <source src="../assets/audio/lesson_01.wav" type="audio/wav">
  Your browser does not support the audio element. You can download the file directly:
  <a href="../assets/audio/lesson_01.wav">lesson_01.wav</a>
</audio>

## Objectives
By the end of this lesson you can:
- Explain what fine-tuning is (and what it is not).
- Decide when fine-tuning beats prompting or RAG.
- Describe the minimum data and evaluation you need to start.

## Listening-Friendly Lesson (Script)

### 1) The Big Picture
Imagine a model like a talented intern. Prompting is giving it better instructions. RAG is giving it better reference material. Fine-tuning is training it on *your* examples so it consistently behaves the way you want.

Pause for a second: if your task mostly needs knowledge retrieval, RAG is often the cheapest win. If your task needs a consistent *style* or *behavior*, fine-tuning becomes attractive.

### 2) What Fine-Tuning Changes
Fine-tuning adjusts model weights so the model *internalizes* your examples. That means:
- It follows your style with less prompting.
- It learns patterns that were inconsistent before.
- It can reduce prompt length and latency.

But it also means:
- You can accidentally teach it mistakes.
- It can overfit and regress in general capability.

### 3) When to Fine-Tune (The Greedy Choice)
Ask this quick sequence:
1. Can prompting alone solve it? If yes, do that first.
2. If prompting fails, can RAG fix it? If yes, do that next.
3. If you need consistent behavior, tone, or structured outputs, then fine-tune.

This is the greedy path: choose the lowest-cost step that moves you closest to the north star *right now*.

### 4) Minimum Data to Start
You do not need a massive dataset to begin a pilot. You need:
- 50 to 200 high-quality examples.
- A clear input/output format.
- A held-out evaluation set (even 10 to 30 examples) to measure improvement.

Think quality over quantity. Your early wins come from clean, consistent examples.

### 5) Minimum Evaluation to Stay Safe
Before you celebrate, check:
- Accuracy on your held-out set.
- Regression tests on baseline tasks.
- A few red-team prompts (edge cases).

If the tuned model gets better on your task but worse on basics, you need to adjust.

### 6) Quick Recap
- Prompting and RAG first. Fine-tuning when behavior needs to be consistent.
- Start small with clean data and a simple evaluation.
- The greedy algorithm is about the *best next step*, not the perfect long-term step.

## Mini Exercise
Pick one real task you care about. Answer in 2-3 sentences:
- Why might prompting fail here?
- Why might RAG fail here?
- What behavior would you want fine-tuning to lock in?
