function getLocal(key, fallback) {
  try {
    var raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function setLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadProfileIntoForm() {
  var profile = getLocal('learning_profile', {});
  if (profile.ml_knowledge) document.getElementById('ml_knowledge').value = profile.ml_knowledge;
  if (profile.coding_comfort) document.getElementById('coding_comfort').value = profile.coding_comfort;
  if (profile.math_comfort) document.getElementById('math_comfort').value = profile.math_comfort;
  if (profile.weekly_time) document.getElementById('weekly_time').value = profile.weekly_time;
  if (profile.goal_style) document.getElementById('goal_style').value = profile.goal_style;
  if (profile.use_case) document.getElementById('use_case').value = profile.use_case;
  if (profile.budget) document.getElementById('budget').value = profile.budget;
}

function saveProfile() {
  var profile = {
    ml_knowledge: document.getElementById('ml_knowledge').value,
    coding_comfort: document.getElementById('coding_comfort').value,
    math_comfort: document.getElementById('math_comfort').value,
    weekly_time: document.getElementById('weekly_time').value,
    goal_style: document.getElementById('goal_style').value,
    use_case: document.getElementById('use_case').value,
    budget: document.getElementById('budget').value
  };
  setLocal('learning_profile', profile);
  var status = document.getElementById('profile_status');
  if (status) status.textContent = 'Profile saved locally.';
}

function exportProfile() {
  var profile = getLocal('learning_profile', {});
  var text = JSON.stringify(profile, null, 2);
  var status = document.getElementById('profile_status');
  if (status) status.textContent = text;
}

function openProfileIssue() {
  var profile = getLocal('learning_profile', {});
  var body = [
    'Please add this learning profile to progress/learning_profile.md:',
    '',
    '```json',
    JSON.stringify(profile, null, 2),
    '```'
  ].join('\n');
  var title = 'Learning profile update';
  var url = 'https://github.com/uditk2/llm-finetune-course/issues/new'
    + '?title=' + encodeURIComponent(title)
    + '&body=' + encodeURIComponent(body);
  window.open(url, '_blank');
}

function initProgressForm() {
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var dd = String(today.getDate()).padStart(2, '0');
  var dateInput = document.getElementById('progress_date');
  if (dateInput && !dateInput.value) dateInput.value = yyyy + '-' + mm + '-' + dd;
}

function saveProgressEntry() {
  var entry = {
    date: document.getElementById('progress_date').value,
    lesson: document.getElementById('progress_lesson').value,
    confidence: document.getElementById('progress_confidence').value,
    notes: document.getElementById('progress_notes').value
  };
  var entries = getLocal('progress_entries', []);
  entries.push(entry);
  setLocal('progress_entries', entries);
  var status = document.getElementById('progress_status');
  if (status) status.textContent = 'Progress entry saved locally.';
}

function exportProgress() {
  var entries = getLocal('progress_entries', []);
  var text = JSON.stringify(entries, null, 2);
  var status = document.getElementById('progress_status');
  if (status) status.textContent = text;
}

function openProgressIssue() {
  var entries = getLocal('progress_entries', []);
  var body = [
    'Please add this progress log to progress/state.json or a new progress file:',
    '',
    '```json',
    JSON.stringify(entries, null, 2),
    '```'
  ].join('\n');
  var title = 'Progress update';
  var url = 'https://github.com/uditk2/llm-finetune-course/issues/new'
    + '?title=' + encodeURIComponent(title)
    + '&body=' + encodeURIComponent(body);
  window.open(url, '_blank');
}
