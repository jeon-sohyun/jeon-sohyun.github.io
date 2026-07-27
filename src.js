const projects = [
  {
    id: 'leaning-against',
    title: 'Leaning Against',
    kind: 'Art Direction',
    material: 'Photography, image',
    year: '2026',
    image: './images/leaning%20against_img2.JPG',
    position: 'center',
    gallery: [
      './images/leaning%20against_img1.JPG',
      './images/leaning%20against_img3.JPG',
      './images/leaning%20against_img4.JPG'
    ]
  },
  {
    id: 'relationship',
    title: 'Relationship',
    kind: 'Identity · Exhibition',
    material: 'Image, print, installation',
    year: '2026',
    image: './images/relationship_img1.JPG',
    position: 'center',
    gallery: [
      './images/relationship_img2.JPG',
      './images/elationship_img3.JPG',
      './images/elationship_img4.JPG',
      './images/elationship_img5.JPG',
      './images/elationship_img6.JPG'
    ]
  },
  {
    id: 'expectations-and-misunderstandings',
    title: 'Expectations and Misunderstandings',
    kind: '',
    material: 'Photography, installation',
    year: '2025',
    image: './public/images/expectations-1.jpg',
    position: 'center',
    gallery: [
      './public/images/expectations-2.jpg',
      './public/images/expectations-3.jpg',
      './public/images/expectations-4.jpg',
      './public/images/expectations-5.jpg',
      './public/images/expectations-6.jpg'
    ],
    galleryLayout: ['wide', 'half', 'half', 'wide', 'wide']
  },
  {
    id: 'formless-hole',
    title: 'Formless Hole',
    kind: 'Objects · Research',
    material: 'Photography, installation',
    year: '2025',
    image: './public/images/formless-hole-1.jpg',
    position: 'center',
    gallery: [
      './public/images/formless-hole-2.jpg',
      './public/images/formless-hole-3.jpg',
      './public/images/formless-hole-4.jpg',
      './public/images/formless-hole-5.jpg',
      './public/images/formless-hole-6.jpg'
    ],
    galleryLayout: ['wide', 'half', 'half', 'wide', 'wide']
  },
  {
    id: 'shared-emotion-spite',
    title: 'Shared Emotion_Spite',
    kind: 'Moving Image',
    type: 'Video',
    material: 'Video, sound, installation',
    year: '2024',
    image: './public/images/shared-emotion-spite-1.png',
    position: 'center',
    gallery: [
      './public/images/shared-emotion-spite-2.png',
      './public/images/shared-emotion-spite-3.png',
      './public/images/shared-emotion-spite-4.png',
      './public/images/shared-emotion-spite-5.png'
    ],
    galleryLayout: ['wide', 'half', 'half', 'wide']
  },
  {
    id: 'what-i-want-to-say',
    title: 'What I want to say',
    kind: 'Moving Image',
    type: 'Video',
    material: 'Video, sound, image',
    year: '2024',
    image: './public/images/what-i-want-to-say-1.jpg',
    position: 'center',
    gallery: [
      './public/images/what-i-want-to-say-2.jpg',
      './public/images/what-i-want-to-say-3.jpg',
      './public/images/what-i-want-to-say-4.png'
    ],
    galleryLayout: ['wide', 'half', 'half']
  },
  {
    id: 'endless',
    title: 'Endless',
    kind: 'Image Installation',
    material: 'Photography, image',
    year: '2024',
    image: './public/images/endless-1.jpg',
    position: 'center',
    gallery: [
      './public/images/endless-2.jpg',
      './public/images/endless-3.jpg'
    ],
    galleryLayout: ['half', 'half']
  },
  {
    id: 'posture-corrector',
    title: 'Posture Corrector',
    kind: 'Image Installation',
    material: 'Photography, object',
    year: '2024',
    image: './public/images/posture-corrector-1.jpg',
    position: 'center',
    gallery: [
      './public/images/posture-corrector-2.jpg',
      './public/images/posture-corrector-3.jpg',
      './public/images/posture-corrector-4.jpg',
      './public/images/posture-corrector-5.jpg'
    ],
    galleryLayout: ['half', 'half', 'half', 'half']
  },
  {
    id: 'uncontrollable-moment',
    title: 'Uncontrollable moment',
    kind: 'Installation · Moving Image',
    type: 'Installation&Video',
    material: 'Video, installation, image',
    year: '2024',
    image: './public/images/uncontrollable-moment-1.jpg',
    position: 'center',
    gallery: [
      './public/images/uncontrollable-moment-2.jpg',
      './public/images/uncontrollable-moment-3.jpg',
      './public/images/uncontrollable-moment-4.jpg'
    ],
    galleryLayout: ['wide', 'half', 'half']
  }
];

const app = document.querySelector('#app');

function shell(content, page = '') {
  return `
    <a class="skip-link" href="#content">본문으로 건너뛰기</a>
    <header class="site-header">
      <a class="wordmark" href="#work" aria-label="홈">SJ<span>®</span></a>
      <nav aria-label="주요 메뉴">
        <a href="#work" class="${page === 'work' ? 'active' : ''}">Work</a>
        <a href="#about" class="${page === 'about' ? 'active' : ''}">CV</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    ${content}
  `;
}

function renderWork() {
  const list = projects.map((p, i) => `
    <a href="#project/${p.id}" class="project-link ${i === 0 ? 'is-active' : ''}" data-project="${p.id}">
      <span>${String(i + 1).padStart(2, '0')}</span>${p.title}
    </a>`).join('');

  const cards = projects.map((p, i) => `
    <a href="#project/${p.id}" class="work-card ${i === 0 ? 'is-active' : ''}" data-project="${p.id}" aria-label="${p.title} 프로젝트 보기">
      <figure>
        <img src="${p.image}" alt="${p.title} 프로젝트 비주얼" style="object-position:${p.position}" ${i === 0 ? '' : 'loading="lazy"'}>
        <figcaption><span>${p.title}</span><span>${p.year}</span></figcaption>
      </figure>
    </a>`).join('');

  app.innerHTML = shell(`
    <main id="content" class="work-page">
      <section class="landing-hero" aria-labelledby="landing-title">
        <div class="typing-lockup">
          <span class="typing-box" aria-hidden="true"></span>
          <h1 id="landing-title"><span class="typed-text">*Jeonsohyun Portfolio*</span></h1>
        </div>
        <p>Scroll to explore <span aria-hidden="true">↓</span></p>
      </section>
      <aside class="project-index" aria-label="프로젝트 목록">${list}</aside>
      <section class="intro">
        <p>Independent designer working across identity, image and digital experiences.</p>
        <a href="mailto:ssosossos@naver.com">ssosossos@naver.com</a>
      </section>
      <div class="scroll-cue" aria-hidden="true">Scroll <span>↓</span></div>
      <section class="work-stream" aria-label="선택 작업">
        ${cards}
      </section>
      <footer id="contact" class="work-footer" aria-label="페이지 끝">
        <div class="footer-links">
          <div class="footer-group">
            <p class="footer-label">(Menu)</p>
            <div><a href="#work">Work</a><a href="#about">CV</a></div>
          </div>
          <div class="footer-group">
            <p class="footer-label">(Contact)</p>
            <div>
              <a href="mailto:ssosossos@naver.com">Email ↗</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a>
            </div>
          </div>
        </div>
        <p>Jeonsohyun</p>
      </footer>
    </main>
  `, 'work');
  document.body.classList.add('landing-visible');
  initWorkObserver();
  initLandingObserver();
}

function renderAbout() {
  app.innerHTML = shell(`
    <main id="content" class="about-page cv-page">
      <header class="cv-intro">
        <h1>SOHYUN JEON</h1>
        <p>Born 2003 in Seoul, Korea<br>Lives and works in Seoul, Korea</p>
      </header>

      <section class="cv-section" aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        <div class="cv-row">
          <time>2024~</time>
          <p>B.F.A. College of Fine Arts, Hongik University, Seoul, Korea</p>
        </div>
      </section>

      <section class="cv-section" aria-labelledby="exhibitions-title">
        <h2 id="exhibitions-title">Group Exhibitions</h2>
        <button class="cv-row exhibition-row" type="button" data-poster="./public/posters/seed-space.svg" data-title="正답은 定답일 뿐 症답을 뽑아">
          <time>2024</time><span>《正답은 定답일 뿐 症답을 뽑아》, Seed Space Gallery, Seoul, Korea</span>
        </button>
        <button class="cv-row exhibition-row" type="button" data-poster="./public/posters/open-studio.svg" data-title="Hongik University Open Studio">
          <time>2024</time><span>Hongik University Open Studio, Hongik University, Seoul, Korea</span>
        </button>
        <button class="cv-row exhibition-row" type="button" data-poster="./public/posters/hertz.svg" data-title="2025 HCMY Hertz">
          <time>2025</time><span>2025 HCMY 《Hertz》, Hongik University, Seoul, Korea</span>
        </button>
        <button class="cv-row exhibition-row" type="button" data-poster="./public/posters/jijibaebae.svg" data-title="지지배배">
          <time>2025</time><span>《지지배배》, OhOn Gallery, Seoul, Korea</span>
        </button>
      </section>

      <footer class="cv-contact">
        <span>Contact</span>
        <a href="mailto:ssosossos@naver.com">ssosossos@naver.com</a>
      </footer>

      <button class="poster-backdrop" type="button" aria-label="포스터 닫기" tabindex="-1"></button>
      <aside class="poster-panel" aria-hidden="true" aria-label="전시 포스터">
        <button class="poster-close" type="button" aria-label="포스터 닫기">Close ×</button>
        <img src="" alt="">
        <p></p>
      </aside>
    </main>
  `, 'about');
  initCvPosters();
}

function initCvPosters() {
  const rows = [...document.querySelectorAll('.exhibition-row')];
  const panel = document.querySelector('.poster-panel');
  const backdrop = document.querySelector('.poster-backdrop');
  const image = panel?.querySelector('img');
  const caption = panel?.querySelector('p');
  const close = panel?.querySelector('.poster-close');
  if (!panel || !backdrop || !image || !caption || !close) return;

  const closePoster = () => {
    document.body.classList.remove('poster-open');
    panel.setAttribute('aria-hidden', 'true');
  };
  const openPoster = row => {
    image.src = row.dataset.poster;
    image.alt = `${row.dataset.title} 전시 포스터`;
    caption.textContent = row.dataset.title;
    panel.setAttribute('aria-hidden', 'false');
    document.body.classList.add('poster-open');
    close.focus();
  };

  rows.forEach(row => row.addEventListener('click', () => openPoster(row)));
  close.addEventListener('click', closePoster);
  backdrop.addEventListener('click', closePoster);
  document.onkeydown = event => {
    if (event.key === 'Escape' && document.body.classList.contains('poster-open')) closePoster();
  };
}

function renderProject(id) {
  const p = projects.find(item => item.id === id) || projects[0];
  const index = projects.indexOf(p);
  const next = projects[(index + 1) % projects.length];
  const gallery = p.gallery
    ? p.gallery.map((image, galleryIndex) => ({
        image,
        position: 'center',
        className: `${p.galleryLayout?.[galleryIndex] || 'wide'} contain`
      }))
    : [
        { image: p.image, position: p.position, className: 'wide' },
        { image: projects[(index + 1) % projects.length].image, position: 'center', className: 'half' },
        { image: p.image, position: index % 2 ? 'center 28%' : 'center 75%', className: 'half' },
        { image: projects[(index + 2) % projects.length].image, position: 'center', className: 'wide' }
      ];
  app.innerHTML = shell(`
    <main id="content" class="detail-page project-enter">
      <div class="detail-heading">
        <p>${p.type || 'Installation'}</p><p>${p.year}</p>
        <h1>${p.title}</h1>
      </div>
      <img class="detail-hero" src="${p.image}" alt="${p.title} 프로젝트 대표 이미지" style="object-position:${p.position}">
      <section class="detail-copy">
        <p>형태와 물성의 관계를 탐구한 시각 연구입니다. 제한된 요소와 정교한 비례를 통해 간결하지만 선명한 인상을 구축했습니다.</p>
        <dl>
          <dt>Material</dt><dd>${p.material}</dd>
          <dt>Year</dt><dd>${p.year}</dd>
        </dl>
      </section>
      <section class="project-gallery" aria-label="${p.title} 추가 이미지">
        ${gallery.map((item, i) => `<figure class="${item.className}"><img src="${item.image}" alt="${p.title} 프로젝트 상세 이미지 ${i + 1}" loading="lazy" style="object-position:${item.position}"></figure>`).join('')}
      </section>
      <a class="next-project" href="#project/${next.id}"><span>Next project</span><strong>${next.title} →</strong></a>
    </main>
  `);
  window.scrollTo(0, 0);
}

function initWorkObserver() {
  const cards = [...document.querySelectorAll('.work-card')];
  const links = [...document.querySelectorAll('.project-link')];
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const activeProject = visible.target.dataset.project;
    links.forEach(link => link.classList.toggle('is-active', link.dataset.project === activeProject));
    cards.forEach(card => card.classList.toggle('is-active', card.dataset.project === activeProject));
  }, { rootMargin: '-30% 0px -30% 0px', threshold: [0, .25, .5, .75] });
  cards.forEach(card => observer.observe(card));
}

function initLandingObserver() {
  const landing = document.querySelector('.landing-hero');
  if (!landing) return;
  const observer = new IntersectionObserver(([entry]) => {
    document.body.classList.toggle('landing-visible', entry.isIntersecting && entry.intersectionRatio > .35);
  }, { threshold: [.35] });
  observer.observe(landing);
}

function router() {
  document.body.classList.remove('landing-visible');
  const route = location.hash.slice(1) || 'work';
  if (route === 'about') renderAbout();
  else if (route.startsWith('project/')) renderProject(route.split('/')[1]);
  else {
    renderWork();
    if (route === 'contact') requestAnimationFrame(() => document.querySelector('#contact')?.scrollIntoView());
  }
}

window.addEventListener('hashchange', router);
router();
