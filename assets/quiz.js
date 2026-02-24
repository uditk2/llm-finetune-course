function getValue(name) {
  var els = document.querySelectorAll('input[name="' + name + '"]:checked');
  return els.length ? els[0].value : '';
}

function getTextValue(id) {
  var el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

function gradeLesson01() {
  var answers = {
    q1: getValue('q1'),
    q2: getValue('q2'),
    q3: getValue('q3'),
    q4: getValue('q4'),
    q5: getValue('q5'),
    q6: getValue('q6'),
    q7: getTextValue('q7'),
    q8: getTextValue('q8'),
    q9: getTextValue('q9'),
    q10: getTextValue('q10')
  };

  var key = { q1: 'B', q2: 'C', q3: 'C', q4: 'B', q5: 'C', q6: 'B' };
  var correct = 0;
  var total = 6;
  Object.keys(key).forEach(function(k) {
    if (answers[k] && answers[k] === key[k]) correct += 1;
  });

  var scoreText = 'MCQ score: ' + correct + ' / ' + total + '. Short answers require review.';
  var status = document.getElementById('quiz_status');
  if (status) status.textContent = scoreText;

  return { answers: answers, scoreText: scoreText };
}

function submitLesson01ToGitHub() {
  var result = gradeLesson01();
  var body = [
    'Please record Lesson 01 answers and score:',
    '',
    result.scoreText,
    '',
    'Answers:',
    '```json',
    JSON.stringify(result.answers, null, 2),
    '```'
  ].join('\n');

  var title = 'Lesson 01 assessment submission';
  var url = 'https://github.com/uditk2/llm-finetune-course/issues/new'
    + '?title=' + encodeURIComponent(title)
    + '&body=' + encodeURIComponent(body);

  window.open(url, '_blank');
}
