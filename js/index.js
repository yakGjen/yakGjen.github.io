(function() {
  
  const transitionDurationContent = 200;
  
  let content = document.getElementById('content');
  let main = document.getElementById('main');
  let summary = null;
  let skills = null;
  let experience = null;
  let education = null;
  let contacts = null;
  
  let classSummaryImg = 'summary-img';
  let classContactsImg = 'contacts-img';
  let classContactsSpan = 'contacts-span';
  let classContentH6 = 'content-h6';
  let classContentH6P = 'content-h6-p';
  
  
  document.onclick = function(event) {
    if (event.target.closest('.menu-home')) {
      toogleContent('main');
      window.history.replaceState("", document.title, window.location.origin);
    }
    if (event.target.closest('.main-btn') || event.target.closest('.menu-summary')) {
      toogleContent('summary');
      window.history.replaceState({page: "summary"}, "summary page", "summary");
    }
    if (event.target.closest('.menu-skills')) {
      toogleContent('skills');
      window.history.replaceState({page: "skills"}, "skills page", "skills");
    }
    if (event.target.closest('.menu-experience')) {
      toogleContent('experience');
      window.history.replaceState({page: "experience"}, "experience page", "experience");
    }
    if (event.target.closest('.menu-education')) {
      toogleContent('education');
      window.history.replaceState({page: "education"}, "education page", "education");
    }
    if (event.target.closest('.menu-contacts')) {
      toogleContent('contacts');
      window.history.replaceState({page: "contacts"}, "contacts page", "contacts");
    }
  }
  
  let currentContent = main;
  
  // скрытие открытого контента
  function toogleContent(data) {
    content.classList.toggle('opacity');
    setTimeout(() => {
      currentContent.classList.toggle('hidden');
      replaceContent(data);
    }, transitionDurationContent);
  }
  
  // показ открытого контента
  function openContent() {
    content.classList.toggle('opacity');
  }
  
  // замена контента
  function replaceContent(data) {
    if (data === 'main') {
      addWelcome();
    }
    if (data === 'summary') {
      addSummary(data);
    }
    if (data === 'skills') {
      addSkills(data);
    }
    if (data === 'experience') {
      addExperience(data);
    }
    if (data === 'education') {
      addEducation(data);
    }
    if (data === 'contacts') {
      addContacts(data);
    }
  }
  
  function addWelcome() {
    main.classList.toggle('hidden');
    currentContent = main;
    openContent();
  }
  
  function addSummary(data) {
    if (summary === null) {
      let div = document.createElement('div');
      div.innerHTML = `<p><img class="${classSummaryImg}" src="./img/photo.jpg" alt="my photo"></p>
                      <p>Здравствуйте!</p>
                      <p>Меня зовут Якимчук Евгений Валентинович. Проходил обучение в Образовательном центре Парка высоких технологий по специальности Front-end developer. Выпускным проектом была игра «Теннис» с сохранением данных на сервере с помощью AJAX. Там же проходил стажировку на проекте subbotnik.by. Моя роль заключалась в написании авто-тестов с использованием Protractor по сценариям. На данный момент нахожусь в стадии применении знаний по Angular на практике по созданию приложения «Домашняя бухгалтерия». А также прохожу онлай-курс JAVASCRIPT DEVELOPMENT Q3-2018 (EPAM)</p>
                      <p>Благодарю за внимание.</p>
      `;
      div.id = data;
      div.className = data;
      content.appendChild(div);
      summary = document.getElementById(data);
    } else {
      summary.classList.toggle('hidden');
    }
    currentContent = summary;
    openContent();
  }
  
  function addSkills(data) {
    if (skills === null) {
      let div = document.createElement('div');
      div.innerHTML = `
        <ul>
          <li>Html/Css</li>
          <li>Less</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Protractor</li>
          <li>Angular</li>
          <li>Git</li>
          <li>English: Pre-intermediate</li>
          <li>Портфолио: github.com/yakGjen</li>
        </ul>`;
      div.id = data;
      div.className = data;
      content.appendChild(div);
      skills = document.getElementById(data);
    } else {
      skills.classList.toggle('hidden');
    }
    currentContent = skills;
    openContent();
  }
  
  function addExperience(data) {
    if (experience === null) {
      let div = document.createElement('div');
      div.innerHTML = `
        <h6 class="${classContentH6}">2018г. - Робота с Angular</h6>
        <p class="${classContentH6P}">Изучение и практическая отработка навыков</p>
        
        <h6 class="${classContentH6}">09.2017г. - 02.2018г. – Стажёр, Практическая лаборатория Образовательного центра ПВТ</h6>
        <p class="${classContentH6P}">Роль: Автоматическое тестирование на проекте Subbotnik.by</p>
        <p class="${classContentH6P}">Описание: Автоматическое тестирование с использованием Protractor</p>
        
        <h6 class="${classContentH6}">2017г. - Trainee, Educational Center of HTP</h6>
        <p class="${classContentH6P}">Отработка навыков на выпускном проекте</p>
      `;
      content.appendChild(div);
      div.id = data;
      div.className = data;
      experience = document.getElementById(data);
    } else {
      experience.classList.toggle('hidden');
    }
    currentContent = experience;
    openContent();
  }
  
  function addEducation(data) {
    if (education === null) {
      let div = document.createElement('div');
      div.innerHTML = `
        <h6 class="${classContentH6}">2018г. - Онлайн-курс по Angular</h6>
        <p class="${classContentH6P}">Angular 4</p>
        
        <h6 class="${classContentH6}">2016г. – 2017г. – Образовательный центр ПВТ</h6>
        <p class="${classContentH6P}">Course: Front-end developer</p>
        <p class="${classContentH6P}">10.2016г. – 12.2016г. «Разработка веб-сайтов с использованием HTML и CSS»</p>
        <p class="${classContentH6P}">02.2017г. – 05.2017г. «Разработка веб-приложений на JavaScript»</p>
        
        <h6 class="${classContentH6}">2008г. – 2012г. - ПолесГУ</h6>
        <p class="${classContentH6P}">Specialization: Оздоровительная и адаптивная физическая культура</p>
      `;
      content.appendChild(div);
      div.id = data;
      div.className = data;
      education = document.getElementById(data);
    } else {
      education.classList.toggle('hidden');
    }
    currentContent = education;
    openContent();
  }
  
  function addContacts(data) {
    if (contacts === null) {
      let div = document.createElement('div');
      div.innerHTML = `
        <p>
          <img class="${classContactsImg}" src="./img/phone.png" alt="number phone">
          <span class="${classContactsSpan}">+375445506338</span>
        </p>
        <p>
          <img class="${classContactsImg}" src="./img/email.png" alt="email">
          <span class="${classContactsSpan}">yak.gjen@gmail.com</span>
        </p> 
        <p>
          <img class="${classContactsImg}" src="./img/skype.png" alt="skype">
          <span class="${classContactsSpan}">evgeniy.yakimchuk</span>
        </p>
        <p>
          <img class="${classContactsImg}" src="./img/viber.png" alt="viber">
          <span class="${classContactsSpan}">+375445506338</span>
        </p>
      `;
      content.appendChild(div);
      div.id = data;
      div.className = data;
      contacts = document.getElementById(data);
    } else {
      contacts.classList.toggle('hidden');
    }
    currentContent = contacts;
    openContent();
  }
  
})();
