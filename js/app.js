function active() {
  let blogs = document.querySelector('.blogs');
  blogs.classList.add('active');
}

// review from

document.getElementById('reviewForm').addEventListener('submit', function(e) {
  e.preventDefault();


  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const review = document.getElementById('review').value;

  if (!name || !email || !review) {
    alert('Please fill out all fields.');
  } else {
    alert('Thank you for your review!');
  }
});
