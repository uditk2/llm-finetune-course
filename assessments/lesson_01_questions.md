---
layout: default
title: Lesson 01 Questions
---

# Lesson 01 Question Paper

Answer all questions. Keep short answers to 3-5 sentences.

## Multiple Choice (choose one)
1. Which option best describes fine-tuning?
   A. Adding external documents at inference time
   B. Updating model weights with task-specific examples
   C. Increasing the model size at inference
   D. Only changing the system prompt

2. The greedy decision path in this course recommends trying which order first?
   A. RAG, fine-tuning, prompting
   B. Fine-tuning, prompting, RAG
   C. Prompting, RAG, fine-tuning
   D. RAG, prompting, fine-tuning

3. What is the main risk of fine-tuning on low-quality data?
   A. The model becomes faster
   B. The model improves on all tasks automatically
   C. The model learns mistakes and regressions
   D. The model cannot be evaluated

4. Which scenario most strongly suggests fine-tuning?
   A. The model needs to cite the latest documents
   B. The model needs a consistent tone and structured output
   C. The model needs a bigger context window
   D. The model needs web search

5. Which is a reasonable minimum dataset size for a pilot fine-tune?
   A. 1 to 5 examples
   B. 10 to 20 examples
   C. 50 to 200 examples
   D. 10,000+ examples

6. Which is a required evaluation practice for a safe pilot?
   A. Only train loss
   B. A held-out evaluation set
   C. Only manual spot checks
   D. No evaluation needed for pilots

## Short Answer
7. Explain the difference between prompting, RAG, and fine-tuning using one sentence each.

8. Give one reason prompting might fail on a task and one reason RAG might fail.

## Applied Scenario
9. You want a customer support bot to always respond in a specific tone and format. The knowledge base is stable. Which approach would you try first, second, and third? Why?

10. You fine-tune a model and it improves on your task but gets worse on general questions. What would you do next?
