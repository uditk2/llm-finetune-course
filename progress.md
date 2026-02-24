---
layout: default
title: Progress Tracker
---

# Progress Tracker

Track your daily learning and export updates to share with the agent.

## Daily Check-In

<label>Date (YYYY-MM-DD)</label>
<input id="progress_date" type="text" placeholder="2026-02-24" />

<label>Lesson completed</label>
<input id="progress_lesson" type="text" placeholder="lesson_01" />

<label>Confidence (1-5)</label>
<input id="progress_confidence" type="number" min="1" max="5" />

<label>Notes</label>
<textarea id="progress_notes" rows="4" placeholder="What was clear? What was hard?"></textarea>

<div style="margin-top:16px;">
  <button onclick="saveProgressEntry()">Save Entry</button>
  <button onclick="exportProgress()">Export Progress JSON</button>
  <button onclick="openProgressIssue()">Save to GitHub</button>
</div>

<pre id="progress_status" style="margin-top:12px;"></pre>

<script src="assets/progress.js"></script>
<script>
  initProgressForm();
</script>
