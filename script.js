// script.js

// Save Interview Form
const interviewForm = document.getElementById('interviewForm');
if (interviewForm) {
  interviewForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = {
      title: document.getElementById('title').value,
      reference: document.getElementById('ref').value,
      date: document.getElementById('date').value,
      venue: document.getElementById('venue').value
    };

    if (!data.title || !data.reference || !data.date || !data.venue) {
      alert('Please fill in all fields.');
      return;
    }

    localStorage.setItem('interviewData', JSON.stringify(data));
    alert('Interview saved (mock)');
    interviewForm.reset();
  });
}

// Submit Score Form
const scoreForm = document.getElementById('scoreForm');
if (scoreForm) {
  scoreForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const score = document.getElementById('q1').value;
    const comment = document.getElementById('comment1').value;

    if (!score) {
      alert('Please select a score.');
      return;
    }

    const data = {
      candidate: 'John Doe',
      question: 'Case Study',
      score: score,
      comment: comment
    };

    localStorage.setItem('scoreData', JSON.stringify(data));
    alert('Score submitted (mock)');
    scoreForm.reset();
  });
}
