---
layout: default
title: Lesson 01 Questions
---

# Lesson 01 Question Paper

Select answers and submit. Scoring is done locally in your browser for MCQs only. Short answers are captured for review.

<form onsubmit="return false;">
  <fieldset>
    <legend>1. Which option best describes fine-tuning?</legend>
    <label><input type="radio" name="q1" value="A"> A. Adding external documents at inference time</label><br>
    <label><input type="radio" name="q1" value="B"> B. Updating model weights with task-specific examples</label><br>
    <label><input type="radio" name="q1" value="C"> C. Increasing the model size at inference</label><br>
    <label><input type="radio" name="q1" value="D"> D. Only changing the system prompt</label>
  </fieldset>

  <fieldset>
    <legend>2. The greedy decision path recommends trying which order first?</legend>
    <label><input type="radio" name="q2" value="A"> A. RAG, fine-tuning, prompting</label><br>
    <label><input type="radio" name="q2" value="B"> B. Fine-tuning, prompting, RAG</label><br>
    <label><input type="radio" name="q2" value="C"> C. Prompting, RAG, fine-tuning</label><br>
    <label><input type="radio" name="q2" value="D"> D. RAG, prompting, fine-tuning</label>
  </fieldset>

  <fieldset>
    <legend>3. What is the main risk of fine-tuning on low-quality data?</legend>
    <label><input type="radio" name="q3" value="A"> A. The model becomes faster</label><br>
    <label><input type="radio" name="q3" value="B"> B. The model improves on all tasks automatically</label><br>
    <label><input type="radio" name="q3" value="C"> C. The model learns mistakes and regressions</label><br>
    <label><input type="radio" name="q3" value="D"> D. The model cannot be evaluated</label>
  </fieldset>

  <fieldset>
    <legend>4. Which scenario most strongly suggests fine-tuning?</legend>
    <label><input type="radio" name="q4" value="A"> A. The model needs to cite the latest documents</label><br>
    <label><input type="radio" name="q4" value="B"> B. The model needs a consistent tone and structured output</label><br>
    <label><input type="radio" name="q4" value="C"> C. The model needs a bigger context window</label><br>
    <label><input type="radio" name="q4" value="D"> D. The model needs web search</label>
  </fieldset>

  <fieldset>
    <legend>5. Which is a reasonable minimum dataset size for a pilot fine-tune?</legend>
    <label><input type="radio" name="q5" value="A"> A. 1 to 5 examples</label><br>
    <label><input type="radio" name="q5" value="B"> B. 10 to 20 examples</label><br>
    <label><input type="radio" name="q5" value="C"> C. 50 to 200 examples</label><br>
    <label><input type="radio" name="q5" value="D"> D. 10,000+ examples</label>
  </fieldset>

  <fieldset>
    <legend>6. Which is a required evaluation practice for a safe pilot?</legend>
    <label><input type="radio" name="q6" value="A"> A. Only train loss</label><br>
    <label><input type="radio" name="q6" value="B"> B. A held-out evaluation set</label><br>
    <label><input type="radio" name="q6" value="C"> C. Only manual spot checks</label><br>
    <label><input type="radio" name="q6" value="D"> D. No evaluation needed for pilots</label>
  </fieldset>

  <fieldset>
    <legend>7. Explain the difference between prompting, RAG, and fine-tuning using one sentence each.</legend>
    <textarea id="q7" rows="4" style="width:100%;"></textarea>
  </fieldset>

  <fieldset>
    <legend>8. Give one reason prompting might fail on a task and one reason RAG might fail.</legend>
    <textarea id="q8" rows="4" style="width:100%;"></textarea>
  </fieldset>

  <fieldset>
    <legend>9. You want a customer support bot to always respond in a specific tone and format. The knowledge base is stable. Which approach would you try first, second, and third? Why?</legend>
    <textarea id="q9" rows="4" style="width:100%;"></textarea>
  </fieldset>

  <fieldset>
    <legend>10. You fine-tune a model and it improves on your task but gets worse on general questions. What would you do next?</legend>
    <textarea id="q10" rows="4" style="width:100%;"></textarea>
  </fieldset>

  <div style="margin-top:16px;">
    <button onclick="gradeLesson01()">Evaluate</button>
    <button onclick="submitLesson01ToGitHub()">Submit to GitHub</button>
  </div>

  <pre id="quiz_status" style="margin-top:12px;"></pre>
</form>

<script src="../assets/quiz.js"></script>
