//api.openweathermap.org/data/2.5/weather?q=${citySearchInput.value}&appid=e417df62e04d3b1b111abeab19cea714


// Weather 
const input = document.querySelector(".weatherinput");
const result = document.querySelector(".cityweather");
const weatherTemp=document.querySelector('.weatherTemp')
const weather=document.querySelector('.weather')
const fetchData=async()=>{
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=Kyrgyzstan&appid=e417df62e04d3b1b111abeab19cea714`
) .then((data) => data.json())
.then((data) => (weatherTemp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273) + "&deg;C"
: "..."));
}
fetchData();

input.oninput = async (event) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=e417df62e04d3b1b111abeab19cea714`
  )
    .then((data) => data.json())
    .then((data) => (result.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273) + "&deg;C"
    : "..."));
};
const toggleWeather=()=>{
  weather.classList.toggle('hiddenDiv')
} 


// SLIDER
const slider = document.querySelector(".regions");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * 100 + "%";
  slider.style.transform = "translateX(" + offset + ")";
  
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

function nextSlide() {
  if (currentIndex < 6) {
    currentIndex++;
    updateSlider();
  }
}



// FAQ
  const faqs=document.querySelectorAll('.faq')

  faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
      faq.classList.toggle('active')
    })
  })




  //Sign up form
  function validateSignUp() {
    // Clear previous error messages
    clearErrors();

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate email
    if (email.trim() === '') {
      setError('emailError', 'Please enter your email.');
      return;
    }

    // Validate password
    if (password.trim() === '') {
      setError('passwordError', 'Please enter your password.');
      return;
    }

    // Validate confirmPassword
    if (confirmPassword.trim() === '') {
      setError('confirmPasswordError', 'Please confirm your password.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('passwordError', 'Passwords do not match.');
      setError('confirmPasswordError', 'Passwords do not match.');
      return;
    }
    hideSignUpForm();
    // If all validations pass, you can proceed with signup logic
    // For simplicity, just display an alert
    alert('Sign up successful!');
  }
  function hideSignUpForm() {
    document.getElementById('form').style.display = 'none';
  }

  function setError(elementId, message) {
    document.getElementById(elementId).innerText = message;
  }

  function clearErrors() {
    setError('emailError', '');
    setError('passwordError', '');
    setError('confirmPasswordError', '');
  }

  //Main Page background
  const backgroundImages = [
    'url(../assets/imgBcg.jpeg)',
    'url(../assets/imgRgn4.jpeg)',
    'url(../assets/imgTour1.jpeg)',
    'url(../assets/imgRgn3.jpeg)',
  ];

  const section = document.getElementById('main-block');
  let index = 0;

  function changeBackground() {
    section.style.backgroundImage = backgroundImages[currentIndex];
    currentIndex = (currentIndex + 1) % backgroundImages.length;
  }

  // Change background every 3 seconds
  setInterval(changeBackground, 3000);