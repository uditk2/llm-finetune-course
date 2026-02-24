---
layout: default
title: Learning Profile
---

# Learning Profile

Fill this in so the daily agent can choose the best next lesson. Your entries are saved in your browser only (localStorage). You can export and paste them back into the repo if needed.

## Profile Form

<label>Prior ML knowledge</label>
<select id="ml_knowledge">
  <option value="">Select</option>
  <option>none</option>
  <option>basic</option>
  <option>solid</option>
  <option>expert</option>
</select>

<label>Coding comfort</label>
<select id="coding_comfort">
  <option value="">Select</option>
  <option>scripts</option>
  <option>notebooks</option>
  <option>production</option>
</select>

<label>Math comfort</label>
<select id="math_comfort">
  <option value="">Select</option>
  <option>low</option>
  <option>medium</option>
  <option>high</option>
</select>

<label>Weekly time available (hours)</label>
<input id="weekly_time" type="number" min="0" step="1" />

<label>Goal style</label>
<select id="goal_style">
  <option value="">Select</option>
  <option>quick win</option>
  <option>deep mastery</option>
</select>

<label>Target use case</label>
<input id="use_case" type="text" placeholder="e.g., customer support bot" />

<label>Budget constraints</label>
<input id="budget" type="text" placeholder="e.g., low / moderate / flexible" />

<div style="margin-top:16px;">
  <button onclick="saveProfile()">Save Profile</button>
  <button onclick="exportProfile()">Export JSON</button>
  <button onclick="openProfileIssue()">Save to GitHub</button>
</div>

<pre id="profile_status" style="margin-top:12px;"></pre>

<script src="assets/progress.js"></script>
<script>
  loadProfileIntoForm();
</script>
