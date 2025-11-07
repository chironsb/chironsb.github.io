<div class="mdx-parallax" data-mdx-component="parallax">
  <section class="mdx-parallax__group" data-md-color-scheme="slate">
    <!-- Background Layers for Parallax -->
    <!-- 4.png - Fundal (cel mai departe, mare) -->
    <div class="mdx-parallax__layer" style="--md-parallax-depth: 8;--md-image-position: 70%; height: 350vh; top: -20vh; z-index: 1;">
      <img src="assets/images/layers/4.png" alt="" class="mdx-parallax__image" style="width: 120vw; height: 130vh; object-fit: cover; top: 5vh; left: 50%; transform: translateX(-50%);">
    </div>

    <!-- 3.png - Statuie (plan mediu-departe, după birou) -->
    <div class="mdx-parallax__layer" style="--md-parallax-depth: 5;--md-image-position: 25%; height: 300vh; top: -10vh; z-index: 2;">
      <img src="assets/images/layers/3.png" alt="" class="mdx-parallax__image" style="width: 100vw; height: 110vh; object-fit: cover; top: 15vh; left: 12vw;">
    </div>

    <!-- 2.png - Birou + personaj (plan mediu-apropiat) -->
    <div class="mdx-parallax__layer" style="--md-parallax-depth: 3;--md-image-position: 20%; height: 300vh; top: -5vh; z-index: 3;">
      <img src="assets/images/layers/2.png" alt="" class="mdx-parallax__image" style="width: 95vw; height: 105vh; object-fit: cover; top: 13vh; left: 14vw;">
    </div>

    <!-- 1.png - Iarba (prim-plan, jos) -->
    <div class="mdx-parallax__layer" style="--md-parallax-depth: 1;--md-image-position: 30%; height: 300vh; top: -30vh; z-index: 4;">
      <img src="assets/images/layers/1.png" alt="" class="mdx-parallax__image" style="width: 100vw; height: calc(100vh + 15vw); object-fit: cover; object-position: center bottom; top: calc(45vh - 5vw); left: 0; transform: none;">
      <!-- Fade overlay directly on grass layer -->
      <div style="position: absolute; width: 100vw; height: 120vh; top: 80vh; left: 0; background: linear-gradient(to bottom, transparent 0%, transparent 20%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 60%, var(--md-default-bg-color) 65%, var(--md-default-bg-color) 100%); pointer-events: none; z-index: 1;"></div>
    </div>
    
    <!-- Top fade overlay - darkens the top when scrolling past it -->
    <div class="mdx-parallax__layer mdx-parallax__blend" style="height: 80vh; top: -30vh; background: linear-gradient(to bottom, var(--md-default-bg-color) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.1) 80%, transparent 100%); z-index: 7; border: none; outline: none; pointer-events: none;"></div>
    

    

    
    <!-- Hero Content -->
    <div class="mdx-hero" data-mdx-component="hero" style="padding-top: 80px; position: relative; z-index: 10;">
      <div class="mdx-hero__scrollwrap md-grid">
        <div class="mdx-hero__inner">
          <div class="mdx-hero__teaser md-typeset">
            <h1>Blogul care inspiră și documentează</h1>
            <p>Scriu despre tehnologie, programare și experiențele mele digitale într-un format elegant și accesibil – cu căutare avansată, personalizabil și optimizat pentru toate dispozitivele.</p>
            <a href="getting-started/" class="md-button">
              Începe explorarea
            </a>
            <a href="#everything-you-would-expect" class="md-button md-button--secondary">
              Află mai multe
            </a>
          </div>
          <div class="mdx-hero__more">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M11 4h2v12l5.5-5.5 1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5 11 16z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>



  <section class="mdx-parallax__group" data-md-color-scheme="slate" data-md-color-primary="indigo">
    <div class="md-content md-grid" data-md-component="content">
      <div class="md-content__inner">
        <header class="md-typeset">
          <h1 id="everything-you-would-expect">
            Tot ce te-ai aștepta de la un blog modern
            <a href="#everything-you-would-expect" class="headerlink" title="Permanent link">¶</a>
          </h1>
        </header>
        
        <div class="mdx-expect">
          <ul class="mdx-expect__list">
            <li class="mdx-expect__item md-typeset">
              <div class="mdx-expect__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.56 18H3.44C2.65 18 2 17.37 2 16.59V7.41C2 6.63 2.65 6 3.44 6h17.12c.79 0 1.44.63 1.44 1.41v9.18c0 .78-.65 1.41-1.44 1.41M6.81 15.19v-3.66l1.92 2.35 1.92-2.35v3.66h1.93V8.81h-1.93l-1.92 2.35-1.92-2.35H4.89v6.38zM19.69 12h-1.92V8.81h-1.92V12h-1.93l2.89 3.28z"></path>
                </svg>
              </div>
              <div class="mdx-expect__description">
                <h2>Conținut în Markdown</h2>
                <p>
                  Concentrează-te pe conținut și creează articole profesionale în minute. Nu e nevoie să știi HTML, CSS sau JavaScript – lasă tehnologia să lucreze pentru tine.
                </p>
              </div>
            </li>
            
            <li class="mdx-expect__item md-typeset">
              <div class="mdx-expect__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5M22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1m-1 10h-4v-8h4z"></path>
                </svg>
              </div>
              <div class="mdx-expect__description">
                <h2>Responsiv pe toate dispozitivele</h2>
                <p>
                  Design-ul se adaptează perfect indiferent de dispozitiv – desktop, tabletă sau telefon. Experiența de lectură rămâne excelentă pe orice ecran.
                </p>
              </div>
            </li>
            
            <li class="mdx-expect__item md-typeset">
              <div class="mdx-expect__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M17 8h3v12h1v1h-4v-1h1v-3h-4l-1.5 3H14v1h-4v-1h1zm1 1-3.5 7H18zM5 3h5c1.11 0 2 .89 2 2v11H9v-5H6v5H3V5c0-1.11.89-2 2-2m1 2v4h3V5z"></path>
                </svg>
              </div>
              <div class="mdx-expect__description">
                <h2>Personalizabil</h2>
                <p>
                  Schimbă culorile, fonturile, limba și iconițele cu doar câteva linii de configurare. Blogul poate fi ușor extins și personalizat după preferințe.
                </p>
              </div>
            </li>
            
            <li class="mdx-expect__item md-typeset">
              <div class="mdx-expect__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M4 10a1 1 0 0 1-1-1 1 1 0 0 1 1-1h8a2 2 0 0 0 2-2 2 2 0 0 0-2-2c-.55 0-1.05.22-1.41.59a.973.973 0 0 1-1.42 0c-.39-.39-.39-1.03 0-1.42C9.9 2.45 10.9 2 12 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4zm15 2a1 1 0 0 0 1-1 1 1 0 0 0-1-1c-.28 0-.53.11-.71.29a.996.996 0 0 1-1.41 0c-.38-.39-.38-1.02 0-1.41C17.42 8.34 18.17 8 19 8a3 3 0 0 1 3 3 3 3 0 0 1-3 3H5a1 1 0 0 1-1-1 1 1 0 0 1 1-1zm-1 6H4a1 1 0 0 1-1-1 1 1 0 0 1 1-1h14a3 3 0 0 1 3 3 3 3 0 0 1-3 3c-.83 0-1.58-.34-2.12-.88-.38-.39-.38-1.02 0-1.41a.996.996 0 0 1 1.41 0c.18.18.43.29.71.29a1 1 0 0 0 1-1 1 1 0 0 0-1-1"></path>
                </svg>
              </div>
              <div class="mdx-expect__description">
                <h2>Rapid și ușor</h2>
                <p>
                  Nu lăsa cititorii să aștepte – folosește una dintre cele mai rapide teme disponibile cu performanțe excelente și SEO optimizat.
                </p>
              </div>
            </li>
            
            <li class="mdx-expect__item md-typeset">
              <div class="mdx-expect__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9-.33-.33-.61-.7-.86-1.1H6V4h7v5h5v1.18c.71.16 1.39.43 2 .82V8zm6.31 16.9c1.33-2.11.69-4.9-1.4-6.22-2.11-1.33-4.91-.68-6.22 1.4-1.34 2.11-.69 4.89 1.4 6.22 1.46.93 3.32.93 4.79.02L22 23.39 23.39 22zm-3.81.1a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5"></path>
                </svg>
              </div>
              <div class="mdx-expect__description">
                <h2>Căutare integrată</h2>
                <p>
                  Găsește instant orice conținut cu sistemul de căutare rapid și personalizabil care funcționează complet în browser, fără costuri suplimentare.
                </p>
              </div>
            </li>
            
            <li class="mdx-expect__item md-typeset">
              <div class="mdx-expect__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M7.75 11c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 102.5 0v-1.5C9 11.56 8.44 11 7.75 11zm1.27 4.5a.469.469 0 01.48-.5h5a.47.47 0 01.48.5c-.116 1.316-.759 2.5-2.98 2.5s-2.864-1.184-2.98-2.5zm7.23-4.5c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 102.5 0v-1.5c0-.69-.56-1.25-1.25-1.25z"></path>
                  <path fill-rule="evenodd" d="M21.255 3.82a1.725 1.725 0 00-2.141-1.195c-.557.16-1.406.44-2.264.866-.78.386-1.647.93-2.293 1.677A18.442 18.442 0 0012 5c-.93 0-1.784.059-2.569.17-.645-.74-1.505-1.28-2.28-1.664a13.876 13.876 0 00-2.265-.866 1.725 1.725 0 00-2.141 1.196 23.645 23.645 0 00-.69 3.292c-.125.97-.191 2.07-.066 3.112C1.254 11.882 1 13.734 1 15.527 1 19.915 3.13 23 12 23c8.87 0 11-3.053 11-7.473 0-1.794-.255-3.647-.99-5.29.127-1.046.06-2.15-.066-3.125a23.652 23.652 0 00-.689-3.292zM20.5 14c.5 3.5-1.5 6.5-8.5 6.5s-9-3-8.5-6.5c.583-4 3-6 8.5-6s7.928 2 8.5 6z"></path>
                </svg>
              </div>
              <div class="mdx-expect__description">
                <h2>Open Source</h2>
                <p>
                  Alătură-te unei comunități mature și active, construită cu tehnologii open source de ultimă generație și licențiat sub MIT.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>
