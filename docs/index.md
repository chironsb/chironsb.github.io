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
            <h1>Documenting the process</h1>
            <p>Documenting technical work, projects, and experiments. This knowledge base consolidates learning through documentation - building systems, writing code, and exploring various technical domains.</p>
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
        <div class="md-typeset">
          <p>This knowledge base serves as a way to consolidate technical work through documentation. By writing about projects, experiments, and various technical domains, the process of documenting becomes part of the learning itself.</p>
        </div>
        
        <div class="mdx-expect">
          <ul class="mdx-expect__list">
            <li class="mdx-expect__item md-typeset">
              <div class="mdx-expect__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9-.33-.33-.61-.7-.86-1.1H6V4h7v5h5v1.18c.71.16 1.39.43 2 .82V8zm6.31 16.9c1.33-2.11.69-4.9-1.4-6.22-2.11-1.33-4.91-.68-6.22 1.4-1.34 2.11-.69 4.89 1.4 6.22 1.46.93 3.32.93 4.79.02L22 23.39 23.39 22zm-3.81.1a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5"></path>
                </svg>
              </div>
              <div class="mdx-expect__description">
                <h2>Projects</h2>
                <p>
                  Technical projects and implementations, from web scrapers to AI systems and various experiments.
                </p>
              </div>
            </li>
            
            <li class="mdx-expect__item md-typeset">
              <div class="mdx-expect__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.56 18H3.44C2.65 18 2 17.37 2 16.59V7.41C2 6.63 2.65 6 3.44 6h17.12c.79 0 1.44.63 1.44 1.41v9.18c0 .78-.65 1.41-1.44 1.41M6.81 15.19v-3.66l1.92 2.35 1.92-2.35v3.66h1.93V8.81h-1.93l-1.92 2.35-1.92-2.35H4.89v6.38zM19.69 12h-1.92V8.81h-1.92V12h-1.93l2.89 3.28z"></path>
                </svg>
              </div>
              <div class="mdx-expect__description">
                <h2>Learning Notes</h2>
                <p>
                  Notes and documentation on various technical topics, concepts, and approaches encountered during work.
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
                <h2>Technical Work</h2>
                <p>
                  Documentation of technical implementations, system designs, and practical solutions to various problems.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>
