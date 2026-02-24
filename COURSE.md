---
layout: default
title: Course Design
---

# Course Design: Greedy Path

## North Star
By the end of this course, you can:
- Select the right adaptation approach (prompting, RAG, or fine-tuning).
- Prepare high-quality training data.
- Fine-tune efficiently (preferably with PEFT/LoRA) and evaluate safely.
- Deploy and monitor a tuned model for a real task.

## Greedy Learning Algorithm (Path Selection)
At each step, we choose the next lesson that maximizes immediate learning value given your current ability and constraints.

We compute a score for each candidate lesson:

`score = (impact * fit * urgency) / (cognitive_load + time_cost)`

Definitions:
- `impact`: How much the lesson advances the north star.
- `fit`: How well it matches your current skill level.
- `urgency`: Whether it unblocks near-term tasks.
- `cognitive_load`: Mental difficulty based on your background.
- `time_cost`: Time required vs your available weekly time.

We choose the lesson with the highest score (greedy choice). After each assessment, we recompute.

## Learning Ability Inputs
We tune `fit`, `cognitive_load`, and `time_cost` based on your profile:
- Prior ML knowledge (none / basic / solid / expert)
- Coding comfort (scripts / notebooks / production)
- Math comfort (low / medium / high)
- Weekly time available (hours)
- Goal style (quick win / deep mastery)

Fill these on the site in `Learning Profile`. The site stores data locally in your browser; export JSON if you want the agent to update the repo.

## Progress Tracking
Use the `Progress Tracker` page to save daily check-ins. Export JSON to share with the agent so it can pick the best next lesson.

## Course Map (Candidate Lessons)
1. Fundamentals: What fine-tuning is and when to use it.
2. Data: Collecting, cleaning, and labeling.
3. Evaluation: Metrics, baselines, and sanity checks.
4. Methods: SFT vs PEFT/LoRA vs full fine-tune.
5. Practical Pipeline: End-to-end training workflow.
6. Safety & Risk: Overfitting, leakage, toxicity, IP.
7. Deployment: Serving, cost, monitoring, rollback.
8. Case Study: From raw data to tuned model.

The greedy algorithm may skip or reorder lessons if that yields a better path for you.

## Audio Generation Options
We can store audio in `assets/audio/` if you want listening versions. If we generate locally, we need a text-to-speech engine (e.g., `espeak-ng`). I can install and generate `lesson_01.wav` once you approve. If you prefer, you can generate audio elsewhere and drop it in this folder.
