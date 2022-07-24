const project = document.querySelector('.projects');
const modal = document.querySelector('.modal-container');
const featuredProject = document.querySelector('.featured-project');
const container = document.querySelector('.container-element');

const featuredProjectdata = {
  id: 0,
  name: 'Multi-Post Stories',
  image: '../images/featured.png',
  imageUrl: '../images/featured.png',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  languages: [
    'HTML',
    'Css',
    'Javascript',
  ],
  liveUrl: 'https://efiamotu-1.github.io/Portfolio-Mobile-Version-skeleton/',
  sourceUrl: 'https://github.com/Efiamotu-1/Portfolio-Mobile-Version-skeleton',

};

featuredProject.innerHTML = `
<div class="featured-image">
<img src="${featuredProjectdata.image}" alt="feature project">
</div>
<div class="featured-content">

 <h3 class="featured-content-title">${featuredProjectdata.name}</h3>
<p class="featured-content-para">${featuredProjectdata.description}</p>     
<ul class="works-categories">

  ${featuredProjectdata.languages.map((featLang) => `<li class="work-skills">${featLang}</li>`).join('')}
</ul>
<button class="btn button modal-button" id="${featuredProjectdata.id}"  type="button">
  See Projects         
</button>
</div>
`;

const projectData = [
  {
    id: 1,
    image: 'first',
    imageUrl: '../images/clear-bg.png',
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
    liveUrl: 'https://efiamotu-1.github.io/Portfolio-Mobile-Version-skeleton/',
    sourceUrl: 'https://github.com/Efiamotu-1/Portfolio-Mobile-Version-skeleton',

  },
  {
    id: 2,
    image: 'second',
    imageUrl: '../images/card-2.png',
    name: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
    liveUrl: 'https://efiamotu-1.github.io/Portfolio-Mobile-Version-skeleton/',
    sourceUrl: 'https://github.com/Efiamotu-1/Portfolio-Mobile-Version-skeleton',

  },
  {
    id: 3,
    name: 'Website Portfolio Project',
    image: 'third',
    imageUrl: '../images/card-3.png',

    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
    liveUrl: 'https://efiamotu-1.github.io/Portfolio-Mobile-Version-skeleton/',
    sourceUrl: 'https://github.com/Efiamotu-1/Portfolio-Mobile-Version-skeleton',

  },
  {
    id: 4,
    name: 'Data Dashboard Healthcare',
    image: 'fourth',
    imageUrl: '../images/card-bg.png',

    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
    liveUrl: 'https://efiamotu-1.github.io/Portfolio-Mobile-Version-skeleton/',
    sourceUrl: 'https://github.com/Efiamotu-1/Portfolio-Mobile-Version-skeleton',

  },
  {
    id: 5,
    name: 'Professional Art Printing Data',
    image: 'fifth',
    imageUrl: '../images/card-2.png',

    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
    liveUrl: 'https://efiamotu-1.github.io/Portfolio-Mobile-Version-skeleton/',
    sourceUrl: 'https://github.com/Efiamotu-1/Portfolio-Mobile-Version-skeleton',

  },
  {
    id: 6,
    name: 'Website Portfolio Project',
    image: 'sixth',
    imageUrl: '../images/card-3.png',

    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
    liveUrl: 'https://efiamotu-1.github.io/Portfolio-Mobile-Version-skeleton/',
    sourceUrl: 'https://github.com/Efiamotu-1/Portfolio-Mobile-Version-skeleton',

  },
];

project.innerHTML = projectData.map((project) => (
  `<div class="${project.image}-project project"> 
      <h4 class="project-title">${project.name}</h4>
      <p class="project-desc">
      ${project.description}
      </p>
      <ul class="project-techs">
        ${project.languages.map((lang) => `<li>${lang}</li>`).join('')}
      </ul>
      <button id=${project.id}  class="check-project modal-button">
      See Project
    </button>
    </div>
    `
)).join('');

const newArray = [featuredProjectdata, ...projectData];
const openModal = (id) => {
  container.style.filter = 'blur(5px)';
  modal.style.display = 'block';

  modal.innerHTML = `
          <div class="modal" id="modal">
          <div class="modal-header">
            <h2 id="modal-title">${newArray[id].name}</h2>
            <span class="modal-close" id ="modal-close">&times;</span>
          </div>
          <div id="modal-languages">
            <ul class="works-categories">
              ${newArray[id].languages.map((langSkill) => `<li class="work-skills">${langSkill}</li>`).join('')}     
              </ul>
          </div>
          <div class="modal-content">
            <div class="featured-image">
              <img id="project-image" src="${newArray[id].imageUrl}" alt="Project Preview">
            </div>
            <div class="content">
              <p id="modal-description"> 
               ${newArray[id].description}
              </p>
              <div id="link-container" class="link-container">
                <a id="live-link" class="button live-icon" href="${newArray[id].liveUrl}" target="new">See Live</a>
                <a id="source-link" class="button source-icon" href="${newArray[id].sourceUrl}" target="new">See Source</a>
              </div>
            </div>
          </div>
        </div>
          `;
};

const openModalButton = document.querySelectorAll('.modal-button');
const buttonsArray = [...openModalButton];
buttonsArray.forEach((button) => {
  button.addEventListener('click', (e) => {
    const { id } = e.target;

    openModal(id);
    const closeModal = document.getElementById('modal-close');
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
      container.style.filter = 'none';
    });
  });
});
