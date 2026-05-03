import React from 'react';
import './Reviews.css';

const REVIEWS = [
  {
    id: 1,
    text: 'This platform helped me find my perfect BMW in under 10 minutes. The comparison feature is next level — I\'ve never used anything this clean and fast.',
    name: 'Kell Daxa',
    role: 'BMW Owner',
    initials: 'KD',
  },
  {
    id: 2,
    text: 'Finally a car website that respects your time. No clutter, no noise. Just stunning cars and the information you actually need.',
    name: 'Sara Mit',
    role: 'Car Enthusiast',
    initials: 'SM',
  },
  {
    id: 3,
    text: 'Bought my first Porsche after exploring it here. The photography and detail pages made me feel like I was already behind the wheel.',
    name: 'Lote Fox',
    role: 'Porsche Driver',
    initials: 'LF',
  },
];

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        {/* Section Header */}
        <div className="reviews__header">
          <span className="reviews__eyebrow">TESTIMONIALS</span>
          <h2 className="reviews__title">WHAT DRIVERS SAY</h2>
        </div>

        {/* Reviews Grid */}
        <div className="reviews__grid">
          {REVIEWS.map((review, index) => (
            <div
              key={review.id}
              className={`reviews__card fade-up ${index < 3 ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="reviews__quote">″</div>
              <p className="reviews__text">{review.text}</p>

              <div className="reviews__divider"></div>

              <div className="reviews__reviewer">
                <div
                  className="reviews__avatar"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #c9a84c, #8b6914)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    color: '#0a0a0f',
                    fontSize: '14px',
                    flexShrink: 0,
                  }}
                >
                  {review.initials}
                </div>
                <div className="reviews__reviewer-info">
                  <h4 className="reviews__reviewer-name">{review.name}</h4>
                  <p className="reviews__reviewer-role">{review.role}</p>
                </div>
              </div>

              <div className="reviews__rating">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
