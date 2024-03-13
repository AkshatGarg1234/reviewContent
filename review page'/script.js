// const commentView = document.getElementById('comment-view');
// const ratingView = document.getElementById('rating-view');
// const suggestionView = document.getElementById('suggestion-view');
// const commentSection = document.getElementById('comment-section');
// const ratingSection = document.getElementById('rating-section');
// const suggestionSection = document.getElementById('suggestion-section');

// const submitComment = document.getElementById('submit-comment');
// const submitRating = document.getElementById('submit-rating');
// const submitSuggestion = document.getElementById('submit-suggestion');

// const viewButtons = document.querySelectorAll('.view-buttons .btn');

// viewButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     viewButtons.forEach(btn => btn.classList.remove('active-view'));
//     button.classList.add('active-view');

//     const targetSection = document.querySelector(`#${button.id.replace('-view', '-section')}`);
//     const sections = document.querySelectorAll('.review-section');
//     sections.forEach(section => section.style.display = 'none');
//     targetSection.style.display = 'block';
//   });
// });

// submitComment.addEventListener('click', () => {
//   const name = document.getElementById('name').value;
//   const comment = document.getElementById('comment').value;
//   // Handle comment submission here (e.g., send data to server)
//   console.log(`Name: ${name}, Comment: ${comment}`);
//   document.getElementById('name').value = '';
//   document.getElementById('comment').value = '';
// });

// submitRating.addEventListener('click', () => {
//   const rating = document.querySelector('input[name="rating"]:checked');
//   if (rating) {
//     // Handle rating submission here (e.g., send data to server)
//     console.log(`Rating: ${rating.value}`);
//   } else {
//     alert('Please select a rating');
//   }
// });

// submitSuggestion.addEventListener('click', () => {
//   const suggestion = document.getElementById('suggestion').value;
//   // Handle suggestion submission here (e.g., send data to server)
//   console.log(`Suggestion: ${suggestion}`);
//   document.getElementById('suggestion').value = '';
// });
const commentView = document.getElementById('comment-view');
const ratingView = document.getElementById('rating-view');
const suggestionView = document.getElementById('suggestion-view');
const commentSection = document.getElementById('comment-section');
const ratingSection = document.getElementById('rating-section');
const suggestionSection = document.getElementById('suggestion-section');

const submitComment = document.getElementById('submit-comment');
const submitRating = document.getElementById('submit-rating');
const submitSuggestion = document.getElementById('submit-suggestion');

const viewButtons = document.querySelectorAll('.view-buttons .btn');

viewButtons.forEach(button => {
  button.addEventListener('click', () => {
    viewButtons.forEach(btn => btn.classList.remove('active-view'));
    button.classList.add('active-view');

    const targetSection = document.querySelector(`#${button.id.replace('-view', '-section')}`);
    const sections = document.querySelectorAll('.review-section');
    sections.forEach(section => section.style.display = 'none');
    targetSection.style.display = 'block';
  });
});

submitComment.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  // Handle comment submission here (e.g., send data to server)
  console.log(`Name: ${name}, Comment: ${comment}`);
  document.getElementById('name').value = '';
  document.getElementById('comment').value = '';
});

submitRating.addEventListener('click', () => {
  const contentRating = document.querySelector('input[name="content-rating"]:checked');
  const videoQualityRating = document.querySelector('input[name="video-quality-rating"]:checked');
  const overallRating = document.querySelector('input[name="overall-rating"]:checked');

  if (contentRating && videoQualityRating && overallRating) {
    // Handle rating submission here (e.g., send data to server)
    console.log(`Content Rating: ${contentRating.value}, Video Quality Rating: ${videoQualityRating.value}, Overall Rating: ${overallRating.value}`);
  } else {
    alert('Please select all ratings');
  }
});

submitSuggestion.addEventListener('click', () => {
  const suggestion = document.getElementById('suggestion').value;
  // Handle suggestion submission here (e.g., send data to server)
  console.log(`Suggestion: ${suggestion}`);
  document.getElementById('suggestion').value = '';
});
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const reviewsContainer = document.querySelector('.reviews-container');

let currentIndex = 0;
const reviewCards = Array.from(reviewsContainer.children);

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + reviewCards.length) % reviewCards.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % reviewCards.length;
  updateCarousel();
});

function updateCarousel() {
  reviewCards.forEach((card, index) => {
    card.style.display = index === currentIndex ? 'flex' : 'none';
  });
}

updateCarousel();