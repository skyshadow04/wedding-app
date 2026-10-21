export default function Home() {
  return (
    <main className="site-shell" id="home">
      <header className="site-header">
        <a className="brand-mark" href="#home" aria-label="Christine and JR, home">
          C<span>&</span>J
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#our-story">Our story</a>
          <a href="#the-day">The day</a>
          <a className="nav-cta" href="#the-day">
            Celebrate with us <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            A celebration of love
          </p>
          <h1 id="hero-title">
            JR
            <span className="name-ampersand">&</span>
            <span className="second-name">Christine</span>
          </h1>
          <p className="hero-intro">
            With full hearts, we invite you to join us as we begin our forever
            together.
          </p>
          <div className="hero-date">
            <span className="date-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3.75" y="5.75" width="16.5" height="14.5" rx="1.5" />
                <path d="M7.75 3.75v4M16.25 3.75v4M4 10h16M8 14h2m4 0h2m-8 3h2" />
              </svg>
            </span>
            <span>
              <span className="date-label">Save the date</span>
              <span className="date-value">October 23, 2026 · 10:00 AM</span>
            </span>
          </div>
          <a className="text-link" href="#the-day">
            Find the details <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div
          className="hero-image"
          role="img"
          aria-label="A couple standing together in a flower field"
        >
          <div className="image-wash" />
          <div className="image-caption">
            <span className="caption-rule" aria-hidden="true" />
            <span>Our next chapter</span>
          </div>
          <div className="image-date">
            <span>THE WEDDING OF</span>
            <strong>J &amp; C</strong>
            <span>10 · 23 · 26</span>
          </div>
        </div>

        <span className="hero-index" aria-hidden="true">
          01 <span />
          02
        </span>
      </section>

      <section className="story-strip">
        <span className="story-flourish" aria-hidden="true">
          ✳
        </span>
        <p>
          Two hearts, one beautiful beginning.
          <span> We can’t wait to celebrate with you.</span>
        </p>
        <span className="story-flourish" aria-hidden="true">
          ✳
        </span>
      </section>

      <section className="our-story" id="our-story" aria-labelledby="story-title">
        <div className="story-heading">
          <p className="eyebrow">A little about love</p>
          <h2 id="story-title">
            The best stories
            <br />
            <em>are shared.</em>
          </h2>
        </div>
        <div className="story-copy">
          <p>
            Every love story is made of a thousand little moments: laughter
            that comes easily, kindness on ordinary days, and the quiet comfort
            of knowing you have someone by your side.
          </p>
          <p>
            With time, those moments become a life built together — full of
            hopes, small traditions, new adventures, and the promise to keep
            choosing one another along the way.
          </p>
          <p>
            A wedding is a chance to pause, celebrate that promise, and bring
            the people we love together. Christine and JR would be delighted to
            share the beginning of their next chapter with you.
          </p>
          <span className="story-signoff">With love, Christine &amp; JR</span>
        </div>
      </section>

      <section className="details-section" id="the-day" aria-labelledby="details-title">
        <div className="details-heading">
          <p className="eyebrow">The day we say “I do”</p>
          <h2 id="details-title">
            A date to
            <br />
            <em>remember.</em>
          </h2>
          <p className="details-intro">
            It would mean the world to have you by our side for the start of
            this new chapter.
          </p>
        </div>
        <div className="details-card">
          <div className="detail-row">
            <span className="detail-number">01</span>
            <div>
              <p className="detail-label">The date</p>
              <p className="detail-value">Friday, October 23, 2026</p>
            </div>
            <span className="detail-flower" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-number">02</span>
            <div>
              <p className="detail-label">The time</p>
              <p className="detail-value">10:00 in the morning</p>
            </div>
            <span className="detail-flower" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-number">03</span>
            <div>
              <p className="detail-label">The place</p>
              <p className="detail-value">Location details coming soon</p>
            </div>
            <span className="detail-flower" aria-hidden="true">
              ✳
            </span>
          </div>
          <p className="details-note">
            More celebration details will be shared soon.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <span>Made with love</span>
        <p>
          JR <span>&</span> Christine
        </p>
        <span>October 23, 2026</span>
      </footer>
    </main>
  );
}
