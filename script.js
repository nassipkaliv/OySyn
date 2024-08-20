const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.close');

// Tabs
const authTab = document.getElementById('authTab');
const regTab = document.getElementById('regTab');
const authContent = document.getElementById('authContent');
const regContent = document.getElementById('regContent');

// Open the modal
openModalBtn.addEventListener('click', function() {
    modal.classList.add('show');
});

// Close the modal when clicking the "x" button
closeModalBtn.addEventListener('click', function() {
    modal.classList.remove('show');
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.classList.remove('show');
    }
});

// Switch between tabs
authTab.addEventListener('click', function() {
    authTab.classList.add('active');
    regTab.classList.remove('active');
    authContent.style.display = 'block';
    regContent.style.display = 'none';
});

regTab.addEventListener('click', function() {
    regTab.classList.add('active');
    authTab.classList.remove('active');
    authContent.style.display = 'none';
    regContent.style.display = 'block';
});


document.addEventListener('DOMContentLoaded', function() {
  // Get all password inputs and toggle buttons
  const passwordInputs = document.querySelectorAll('.password');
  const toggleButtons = document.querySelectorAll('.toggle-password');

  toggleButtons.forEach((toggleButton, index) => {
    const passwordInput = passwordInputs[index];
    const svgIcon = toggleButton.querySelector('.icon');

    toggleButton.addEventListener('click', function() {
      // Toggle password visibility
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        svgIcon.innerHTML = `
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1_38" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
              <rect width="25" height="25" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1_38)">
              <path d="M12.4583 17.0354C13.7604 17.0354 14.8672 16.5237 15.7786 15.5003C16.6901 14.4768 17.1458 13.2341 17.1458 11.7721C17.1458 10.3101 16.6901 9.06738 15.7786 8.04397C14.8672 7.02055 13.7604 6.50885 12.4583 6.50885C11.1562 6.50885 10.0495 7.02055 9.13802 8.04397C8.22656 9.06738 7.77083 10.3101 7.77083 11.7721C7.77083 13.2341 8.22656 14.4768 9.13802 15.5003C10.0495 16.5237 11.1562 17.0354 12.4583 17.0354ZM12.4583 14.9301C11.6771 14.9301 11.013 14.6231 10.4661 14.009C9.91927 13.395 9.64583 12.6493 9.64583 11.7721C9.64583 10.8949 9.91927 10.1493 10.4661 9.53522C11.013 8.92118 11.6771 8.61415 12.4583 8.61415C13.2396 8.61415 13.9036 8.92118 14.4505 9.53522C14.9974 10.1493 15.2708 10.8949 15.2708 11.7721C15.2708 12.6493 14.9974 13.395 14.4505 14.009C13.9036 14.6231 13.2396 14.9301 12.4583 14.9301ZM12.4583 20.5442C9.92361 20.5442 7.61458 19.7499 5.53125 18.1611C3.44792 16.5724 1.9375 14.4427 1 11.7721C1.9375 9.10149 3.44792 6.97182 5.53125 5.38309C7.61458 3.79436 9.92361 3 12.4583 3C14.9931 3 17.3021 3.79436 19.3854 5.38309C21.4687 6.97182 22.9792 9.10149 23.9167 11.7721C22.9792 14.4427 21.4687 16.5724 19.3854 18.1611C17.3021 19.7499 14.9931 20.5442 12.4583 20.5442ZM12.4583 18.205C14.4201 18.205 16.2214 17.6251 17.862 16.4652C19.5026 15.3053 20.7569 13.741 21.625 11.7721C20.7569 9.80326 19.5026 8.2389 17.862 7.07903C16.2214 5.91916 14.4201 5.33923 12.4583 5.33923C10.4965 5.33923 8.69531 5.91916 7.05469 7.07903C5.41406 8.2389 4.15972 9.80326 3.29167 11.7721C4.15972 13.741 5.41406 15.3053 7.05469 16.4652C8.69531 17.6251 10.4965 18.205 12.4583 18.205Z" fill="#00A6C8" />
            </g>
          </svg>
        `;
      } else {
        passwordInput.type = 'password';
        svgIcon.innerHTML = `
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_1_71" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
            <rect width="25" height="25" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_1_71)">
            <path d="M16.7721 13.1477L15.2617 11.8845C15.418 11.202 15.1836 10.5631 14.5586 9.9678C13.9336 9.37248 13.1263 9.14015 12.1367 9.27083L10.6263 8.00758C10.9214 7.89141 11.2209 7.80429 11.5247 7.74621C11.8286 7.68813 12.1541 7.65909 12.5013 7.65909C13.8034 7.65909 14.9102 8.04025 15.8216 8.80256C16.7331 9.56487 17.1888 10.4905 17.1888 11.5795C17.1888 11.87 17.1541 12.1422 17.0846 12.3963C17.0152 12.6504 16.911 12.9009 16.7721 13.1477ZM20.1055 15.892L18.5951 14.6723C19.2548 14.2513 19.8407 13.7902 20.3529 13.2893C20.865 12.7884 21.3034 12.2184 21.668 11.5795C20.7999 10.113 19.5543 8.94776 17.931 8.08381C16.3077 7.21986 14.4978 6.78788 12.5013 6.78788C11.9978 6.78788 11.503 6.81692 11.0169 6.875C10.5308 6.93308 10.0534 7.0202 9.58463 7.13636L7.97005 5.78599C8.68186 5.53914 9.41102 5.35401 10.1576 5.23059C10.9041 5.10717 11.6853 5.04545 12.5013 5.04545C15.1228 5.04545 17.4579 5.65167 19.5065 6.86411C21.5551 8.07655 23.0395 9.64836 23.9596 11.5795C23.5603 12.4362 23.0352 13.2312 22.3841 13.9645C21.7331 14.6978 20.9735 15.3403 20.1055 15.892ZM20.6263 21.25L16.2513 17.6345C15.6437 17.7942 15.0317 17.914 14.4154 17.9938C13.799 18.0737 13.161 18.1136 12.5013 18.1136C9.87977 18.1136 7.5447 17.5074 5.49609 16.295C3.44748 15.0825 1.96311 13.5107 1.04297 11.5795C1.40755 10.81 1.86762 10.0949 2.42318 9.43419C2.97873 8.77352 3.61241 8.18182 4.32422 7.65909L1.45964 5.2197L2.91797 4L22.0846 20.0303L20.6263 21.25ZM5.78255 8.87879C5.27908 9.25631 4.81901 9.67014 4.40234 10.1203C3.98568 10.5704 3.62977 11.0568 3.33464 11.5795C4.20269 13.0461 5.44835 14.2113 7.07161 15.0753C8.69488 15.9392 10.5048 16.3712 12.5013 16.3712C12.8485 16.3712 13.1871 16.3531 13.5169 16.3168C13.8468 16.2805 14.1853 16.2405 14.5326 16.197L13.5951 15.3693C13.4041 15.4129 13.2218 15.4456 13.0482 15.4673C12.8746 15.4891 12.6923 15.5 12.5013 15.5C11.1992 15.5 10.0924 15.1188 9.18099 14.3565C8.26953 13.5942 7.8138 12.6686 7.8138 11.5795C7.8138 11.4198 7.82682 11.2674 7.85286 11.1222C7.87891 10.977 7.91797 10.8245 7.97005 10.6648L5.78255 8.87879Z" fill="#333333" fill-opacity="0.3" />
          </g>
        </svg>
        `;
      }
    });
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('.checkbox');

  checkboxes.forEach(checkbox => {
      checkbox.addEventListener('click', function() {
          const uncheckedIcon = checkbox.querySelector('.unchecked');
          const checkedIcon = checkbox.querySelector('.checked');

          if (uncheckedIcon.style.display === 'none') {
              uncheckedIcon.style.display = 'block';
              checkedIcon.style.display = 'none';
          } else {
              uncheckedIcon.style.display = 'none';
              checkedIcon.style.display = 'block';
          }
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const getCodeBtn = document.getElementById('get-code-btn');
  const codeInput = document.getElementById('codeInput');
  const buttonSubmitContainer = document.querySelector('.button-submit-container');
  const receiveCode = document.getElementById('receiveCode');
  const resendCodeContainer = document.getElementById('resendCodeContainer');
  const timerElement = document.getElementById('timer');
  const registerBtn = document.querySelector('.button-submit-container .submit-btn.inactive');

  let timerInterval;
  let timeRemaining = 80;

  function updateTimer() {
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      receiveCode.style.display = 'none'; // Hide the timer text
      resendCodeContainer.style.display = 'block'; // Show the resend link
      return;
    }
    timerElement.textContent = timeRemaining;
    timeRemaining--;
  }

  getCodeBtn.addEventListener('click', function() {
    // Hide the "Получить код" button
    getCodeBtn.style.display = 'none';

    // Show the input field and timer message
    codeInput.style.display = 'block';
    receiveCode.style.display = 'block';

    // Hide the resend link initially
    resendCodeContainer.style.display = 'none';

    // Activate the "Зарегистрироваться" button
    registerBtn.classList.remove('inactive');

    // Start the timer
    timeRemaining = 80; // Reset timer
    timerElement.textContent = timeRemaining; // Set initial value
    updateTimer(); // Call immediately to avoid delay
    timerInterval = setInterval(updateTimer, 1000);
  });
});
