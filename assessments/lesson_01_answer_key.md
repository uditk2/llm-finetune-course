# Lesson 01 Answer Key (For Grading)

## Multiple Choice
1. B
2. C
3. C
4. B
5. C
6. B

## Short Answer (Rubric)
7. Expected points:
- Prompting: change instructions without changing weights.
- RAG: retrieve external info at inference and include it in context.
- Fine-tuning: update weights using task examples.

8. Expected points:
- Prompting can fail if the task needs consistent behavior that varies with prompts.
- RAG can fail if the task is more about style/behavior than knowledge retrieval or if retrieval quality is poor.

## Applied Scenario (Rubric)
9. Expected reasoning:
- Prompting first, then RAG if knowledge retrieval is needed, then fine-tune for consistent tone/format.
- Since knowledge base is stable and tone/format is key, fine-tuning is likely the final step.

10. Expected reasoning:
- Add regression tests and more diverse data.
- Use smaller learning rate / fewer steps / PEFT.
- Rebalance data to preserve general capabilities.
- Consider task-specific adapters instead of full fine-tune.
