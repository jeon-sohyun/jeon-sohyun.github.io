const projects = [
  { id: 'chroma-form', title: 'Chroma Form', kind: 'Art Direction', material: 'Glass, aluminum, image', year: '2026', image: './public/images/chroma-form.png', position: 'center' },
  { id: 'interval-type', title: 'Interval Type', kind: 'Identity · Exhibition', material: 'Fabric, ink, concrete', year: '2026', image: './public/images/interval-type.png', position: 'center' },
  { id: 'red-quiet', title: 'The Red Quiet', kind: 'Editorial · Campaign', material: 'Photography, print', year: '2025', image: './public/images/red-quiet.png', position: 'center' },
  { id: 'matter-study', title: 'Matter Study No. 02', kind: 'Objects · Research', material: 'Glass, steel, light', year: '2025', image: './public/images/chroma-form.png', position: '62% center' },
  { id: 'open-system', title: 'Open System', kind: 'Spatial Identity', material: 'Textile, type, space', year: '2024', image: './public/images/interval-type.png', position: '35% center' },
  { id: 'still-distance', title: 'Still Distance', kind: 'Image Making', material: 'Photography', year: '2024', image: './public/images/red-quiet.png', position: 'center 72%' }
];

const app = document.querySelector('#app');

function shell(content, page = '') {
  return `
    <a class="skip-link" href="#content">본문으로 건너뛰기</a>
    <header class="site-header">
      <a class="wordmark" href="#work" aria-label="홈">SJ<span>®</span></a>
      <nav aria-label="주요 메뉴">
        <a href="#work" class="${page === 'work' ? 'active' : ''}">Work</a>
        <a href="#about" class="${page === 'about' ? 'active' : ''}">About</a>
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
        <figcaption><span>${p.title}</span><span>${p.kind}</span><span>${p.year}</span></figcaption>
      </figure>
    </a>`).join('');

  app.innerHTML = shell(`
    <main id="content" class="work-page">
      <section class="landing-hero" aria-labelledby="landing-title">
        <div class="typing-lockup">
          <span class="typing-box" aria-hidden="true"></span>
          <h1 id="landing-title"><span class="typed-text">*jeonsohyun portfolio</span></h1>
        </div>
        <p>Scroll to explore <span aria-hidden="true">↓</span></p>
      </section>
      <aside class="project-index" aria-label="프로젝트 목록">${list}</aside>
      <section class="intro">
        <p>Independent designer working across identity, image and digital experiences.</p>
        <a href="mailto:hello@sohyeon.studio">hello@sohyeon.studio</a>
      </section>
      <div class="scroll-cue" aria-hidden="true">Scroll <span>↓</span></div>
      <section class="work-stream" aria-label="선택 작업">
        ${cards}
      </section>
      <footer id="contact" class="work-footer" aria-label="페이지 끝">
        <div class="footer-links">
          <div class="footer-group">
            <p class="footer-label">(Menu)</p>
            <div><a href="#work">Work</a><a href="#about">About</a></div>
          </div>
          <div class="footer-group">
            <p class="footer-label">(Contact)</p>
            <div>
              <a href="mailto:hello@sohyeon.studio">Email ↗</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a>
            </div>
          </div>
        </div>
        <p>jeonsohyun</p>
      </footer>
    </main>
  `, 'work');
  document.body.classList.add('landing-visible');
  initWorkObserver();
  initLandingObserver();
}

function renderAbout() {
  app.innerHTML = shell(`
    <main id="content" class="about-page">
      <p class="eyebrow">About / 2026</p>
      <h1 class="reveal-line">Ideas become visible<br>through form, rhythm<br>and close attention.</h1>
      <div class="about-grid">
        <p>전소현은 서울을 기반으로 활동하는 디자이너입니다. 브랜드 아이덴티티, 디지털 경험, 이미지 메이킹의 경계를 오가며 명료하면서도 오래 남는 시각 언어를 만듭니다.</p>
        <div>
          <p>Contact</p>
          <a href="mailto:hello@sohyeon.studio">hello@sohyeon.studio</a>
          <br><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
      </div>
    </main>
  `, 'about');
}

function renderProject(id) {
  const p = projects.find(item => item.id === id) || projects[0];
  const index = projects.indexOf(p);
  const next = projects[(index + 1) % projects.length];
  const gallery = [
    { image: p.image, position: p.position, className: 'wide' },
    { image: projects[(index + 1) % projects.length].image, position: 'center', className: 'half' },
    { image: p.image, position: index % 2 ? 'center 28%' : 'center 75%', className: 'half' },
    { image: projects[(index + 2) % projects.length].image, position: 'center', className: 'wide' }
  ];
  app.innerHTML = shell(`
    <main id="content" class="detail-page project-enter">
      <div class="detail-heading">
        <p>${p.kind}</p><p>${p.year}</p>
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
