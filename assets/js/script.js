'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile (guarded)
if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function (guarded)
const testimonialsModalFunc = function () {
  if (!modalContainer || !overlay) return;
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items (guarded)
if (testimonialsItem.length > 0 && modalContainer) {
  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
      const avatar = this.querySelector("[data-testimonials-avatar]");
      const title = this.querySelector("[data-testimonials-title]");
      const text = this.querySelector("[data-testimonials-text]");

      if (modalImg && avatar) {
        modalImg.src = avatar.src || "";
        modalImg.alt = avatar.alt || "";
      }

      if (modalTitle && title) modalTitle.innerHTML = title.innerHTML || "";
      if (modalText && text) modalText.innerHTML = text.innerHTML || "";

      testimonialsModalFunc();
    });
  }
}

  // --- Stack carousel population (merged from script2.js) ---
  const stacks = {
    row1: [
      { icon: '🎭', name: 'Figma', color: '#f24e1e' },
      { icon: '🅰️', name: 'Angular', color: '#dd0031' },
      { icon: '⚡', name: 'Next.js', color: '#fff' },
      { icon: '⚛️', name: 'React', color: '#61dafb' },
      { icon: '🔷', name: 'TypeScript', color: '#3178c6' },
      { icon: '🎭', name: 'Figma', color: '#f24e1e' }
    ],
    row2: [
      { icon: '💻', name: 'Termius', color: '#00d9ff' },
      { icon: '📊', name: 'Jira', color: '#0052cc' },
      { icon: '🔀', name: 'Git', color: '#f05032' },
      { icon: '📮', name: 'Postman', color: '#ff6c37' },
      { icon: '🐳', name: 'Docker', color: '#2496ed' },
      { icon: '💻', name: 'Termius', color: '#00d9ff' }
    ],
    row3: [
      { icon: '🔗', name: 'n8n', color: '#ea4b71' },
      { icon: '🤖', name: 'Claude', color: '#d97757' },
      { icon: '✨', name: 'Cursor', color: '#7c3aed' },
      { icon: '📦', name: 'Strapi', color: '#4945ff' },
      { icon: '📦', name: 'Webpack', color: '#8dd6f9' },
      { icon: '🔥', name: 'Firebase', color: '#ffca28' },
      { icon: '🔗', name: 'n8n', color: '#ea4b71' }
    ]
  };

  function createTechItem(tech) {
    return `
      <div class="tech-item">
        <div class="tech-icon">${tech.icon}</div>
        <div class="tech-name" style="color: ${tech.color}">${tech.name}</div>
      </div>
    `;
  }

  function populateTrack(trackId, techArray) {
    const track = document.getElementById(trackId);
    if (!track || !Array.isArray(techArray)) return;
    // Duplicate content for infinite effect
    const content = techArray.map(createTechItem).join('');
    track.innerHTML = content + content;
  }

  // Initialize the carousel tracks (guarded)
  populateTrack('track1', stacks.row1);
  populateTrack('track2', stacks.row2);
  populateTrack('track3', stacks.row3);

  // --- end merged script2.js ---

// add click event to modal close button (guarded)
if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items (guarded)
if (selectItems.length > 0 && selectValue) {
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  }
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
// add event in all filter button items for large screen (guarded)
if (filterBtn.length > 0) {
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      if (lastClickedBtn && lastClickedBtn.classList) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }
}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field (guarded)
if (form && formInputs.length > 0 && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      // check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
}

// Form submit handler: open user's mail client with prefilled message (mailto) as a zero-backend solution
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect values safely
    const fullname = (form.querySelector('input[name="fullname"]') || {}).value || '';
    const email = (form.querySelector('input[name="email"]') || {}).value || '';
    const message = (form.querySelector('textarea[name="message"]') || {}).value || '';

    // Recipient (default to the contact email shown in the page)
    const recipient = 'dcheikhmbacke00@gmail.com';

    const subject = encodeURIComponent(`Website contact from ${fullname || email || 'visitor'}`);
    const bodyLines = [
      `Name: ${fullname}`,
      `Email: ${email}`,
      '',
      'Message:',
      message
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    // Build mailto link and open mail client
    const mailto = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Try opening default mail client
    window.location.href = mailto;

    // Optional: provide in-page feedback
    if (formBtn) {
      formBtn.setAttribute('disabled', '');
      formBtn.innerHTML = '<ion-icon name="checkmark-done"></ion-icon><span>Opening mail client...</span>';
    }

    // Reset form after short delay (user may cancel mail client) — keep minimal
    setTimeout(() => {
      form.reset();
      if (formBtn) {
        formBtn.innerHTML = '<ion-icon name="paper-plane"></ion-icon><span>Send Message</span>';
        formBtn.setAttribute('disabled', '');
      }
    }, 3000);
  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link (guarded and fixed variable scoping)
if (navigationLinks.length > 0 && pages.length > 0) {
  navigationLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const target = this.textContent.trim().toLowerCase();

      pages.forEach((page, idx) => {
        const match = target === (page.dataset.page || "");
        page.classList.toggle("active", match);
        // keep nav buttons in sync with pages by index
        if (navigationLinks[idx]) navigationLinks[idx].classList.toggle("active", match);
      });

      window.scrollTo(0, 0);
    });
  });
}