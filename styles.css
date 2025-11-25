/*
 * Stylesheet for Dr. Mohith Surya Kiran Kasula's portfolio
 * Defines the colour palette, layout and interactive effects for each section.
 */

/* Reset and global settings */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #0d1b2a;
  color: #e0e1dd;
  line-height: 1.6;
  overflow-x: hidden;
}

h1, h2, h3, h4 {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
}

a {
  color: #7fc8f8;
  text-decoration: none;
}

a:hover {
  color: #a9def9;
  text-decoration: underline;
}

section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Navigation bar */
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(13, 27, 42, 0.8);
  backdrop-filter: blur(5px);
  transition: background-color 0.3s ease;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 2rem;
}

.logo a {
  font-size: 1.2rem;
  font-weight: 700;
  color: #e0e1dd;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: #e0e1dd;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #7fc8f8;
}

/* Hero section styles */
#hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #e0e1dd;
  text-align: center;
  overflow: hidden;
}

#hero .hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('images/hero.png');
  background-size: cover;
  background-position: center;
  opacity: 0.4;
  z-index: -2;
}

#network-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero-content .tagline {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: #a9def9;
}

.cta-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #0080a4;
  color: #ffffff;
  border-radius: 30px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #00a8e8;
}

/* Section headings */
.section h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  color: #7fc8f8;
}

/* About section */
#about p {
  max-width: 900px;
  margin: 0 auto 1.5rem;
  font-size: 1.05rem;
  color: #cfd8dc;
}

/* Timeline styles */
.timeline {
  position: relative;
  margin-left: 1rem;
  padding-left: 2rem;
  border-left: 2px solid #00a8e8;
}

.timeline-item {
  margin-bottom: 2rem;
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -1.1rem;
  top: 0.3rem;
  width: 1rem;
  height: 1rem;
  background-color: #00a8e8;
  border-radius: 50%;
}

.timeline-item .timeline-date {
  display: block;
  font-weight: bold;
  color: #a9def9;
  margin-bottom: 0.25rem;
}

.timeline-item h3 {
  font-size: 1.3rem;
  margin-bottom: 0.2rem;
}

.timeline-item h4 {
  font-size: 1rem;
  font-weight: 500;
  color: #91b4c3;
  margin-bottom: 0.5rem;
}

.timeline-item ul {
  list-style: disc;
  padding-left: 1.5rem;
  color: #cfd8dc;
  line-height: 1.4;
}

/* Skills section */
.skills-intro {
  text-align: center;
  margin-bottom: 2rem;
  color: #cfd8dc;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

/* Secondary skills container uses two columns: tools on the left and interactive cards on the right */
.skills-grid-secondary {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin-top: 2rem;
  align-items: stretch;
}

/* When the viewport is narrower, stack the two columns */
@media (max-width: 900px) {
  .skills-grid-secondary {
    grid-template-columns: 1fr;
  }
}

/* Left column inherits from .skill-category styling */
.tp-column {
  display: flex;
  flex-direction: column;
}

/* Right column holds an inner grid for the interactive cards */
.interactive-column {
  display: flex;
  flex-direction: column;
}

.interactive-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 1.5rem;
  flex: 1;
}

/* Make the EHR card span across both columns */
.interactive-grid .span-two {
  grid-column: 1 / -1;
}

.skill-category {
  background-color: rgba(13, 27, 42, 0.6);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.skill-category h3 {
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  color: #7fc8f8;
}

.skill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: #e0e1dd;
}

.progress {
  position: relative;
  flex: 1;
  height: 0.4rem;
  margin-left: 1rem;
  background-color: #274472;
  border-radius: 4px;
  overflow: hidden;
}

.progress::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #00a8e8;
  /* Use a CSS custom property to control the filled width. JS will update --progress. */
  width: var(--progress, 0%);
  transition: width 1.2s ease-out;
}

.skill:hover .progress::before {
  background-color: #7fc8f8;
}

.standards-list {
  font-size: 0.95rem;
  color: #cfd8dc;
  line-height: 1.4;
}

/* Tag lists used for standards, processes and systems */
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.tag {
  display: inline-block;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  background-color: rgba(0, 168, 232, 0.1);
  color: #7fc8f8;
  font-size: 0.85rem;
  border: 1px solid #00a8e8;
  white-space: nowrap;
}

/* Cards for standards, process and systems */
.skill-card {
  background-color: rgba(13, 27, 42, 0.6);
  padding: 1.25rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 168, 232, 0.3);
}

.skill-card + .skill-card {
  margin-top: 1.5rem;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.card-icon {
  font-size: 1.4rem;
  margin-right: 0.6rem;
  color: #00a8e8;
}

.skill-card h4 {
  margin-bottom: 0;
  font-size: 1.15rem;
  color: #7fc8f8;
  font-weight: 600;
}

.skill-card p {
  font-size: 0.94rem;
  color: #cfd8dc;
  line-height: 1.45;
}

/* Flip cards used for standards, processes and systems */
.flip-card {
  background-color: transparent;
  perspective: 1000px;
  width: 100%;
  /* fixed height ensures consistent size for flip animation */
  height: 220px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner,
.flip-card:focus-within .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: rgba(13, 27, 42, 0.6);
  border-radius: 8px;
  border: 1px solid rgba(0, 168, 232, 0.3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.flip-card-front {
  color: #e0e1dd;
}

.flip-card-back {
  transform: rotateY(180deg);
  color: #cfd8dc;
}

.flip-icon {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #00a8e8;
}

.flip-card-front h4,
.flip-card-back h4 {
  margin-bottom: 0.4rem;
  font-size: 1.2rem;
  color: #7fc8f8;
}

.flip-card-front .flip-tagline {
  font-size: 0.9rem;
  color: #91b4c3;
}

.flip-card-back ul {
  list-style: none;
  padding-left: 1rem;
}

.flip-card-back ul li {
  position: relative;
  margin-bottom: 0.4rem;
  padding-left: 0.6rem;
  font-size: 0.9rem;
}

.flip-card-back ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  top: 0;
  color: #00a8e8;
}

/* Project cards */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: rgba(13, 27, 42, 0.6);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

.project-image {
  background-size: cover;
  background-position: center;
  height: 200px;
}

.project-content {
  padding: 1rem 1rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  color: #7fc8f8;
}

.project-duration {
  font-size: 0.9rem;
  color: #91b4c3;
  margin-bottom: 0.5rem;
}

.project-content p {
  font-size: 0.92rem;
  color: #cfd8dc;
  line-height: 1.4;
  flex-grow: 1;
}

.project-link {
  align-self: flex-start;
  margin-top: 0.75rem;
  color: #00a8e8;
  font-weight: 600;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #7fc8f8;
  text-decoration: underline;
}

/* Education section */
.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.education-item {
  background-color: rgba(13, 27, 42, 0.6);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.education-item h3 {
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
  color: #7fc8f8;
}

.education-institution {
  font-size: 1rem;
  color: #91b4c3;
  margin-bottom: 0.3rem;
}

.education-duration {
  font-size: 0.9rem;
  color: #a9def9;
  margin-bottom: 0.5rem;
}

.education-item p {
  font-size: 0.92rem;
  color: #cfd8dc;
  line-height: 1.4;
}

/* Publications */
.publications-list {
  list-style: none;
  max-width: 900px;
  margin: 0 auto;
}

/* Personal interests section */
.interests-intro {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.05rem;
  color: #cfd8dc;
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.interest-item {
  background-color: rgba(13, 27, 42, 0.6);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  border: 1px solid rgba(0, 168, 232, 0.3);
}

.interest-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 0.75rem;
}

.interest-item h3 {
  color: #7fc8f8;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.interest-item p {
  font-size: 0.92rem;
  color: #cfd8dc;
  line-height: 1.4;
}

.interests-conclusion {
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
  color: #cfd8dc;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.publications-list li {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  position: relative;
  color: #cfd8dc;
}

.publications-list li::before {
  content: '\2022';
  position: absolute;
  left: 0;
  top: 0;
  color: #00a8e8;
  font-size: 1.2rem;
  line-height: 1;
}

/* PDF links in publications */
.pdf-link {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #00a8e8;
  font-weight: 600;
}

.pdf-link:hover {
  color: #7fc8f8;
  text-decoration: underline;
}

.italic {
  font-style: italic;
}

/* Contact section */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  justify-items: start;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.05rem;
}

.contact-icon {
  font-size: 1.5rem;
  color: #00a8e8;
}

/* Footer */
footer {
  text-align: center;
  padding: 2rem 0;
  font-size: 0.9rem;
  color: #91b4c3;
  background-color: #0a1727;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .logo a {
    font-size: 1rem;
  }
  #hero .hero-content h1 {
    font-size: 2rem;
  }
  .skills-grid,
  .projects-grid,
  .education-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
}

/* Testimonials section */
.testimonials-section {
  padding: 4rem 0;
  background-color: #051c2c;
  color: #cfd8dc;
}

.testimonials-section h2 {
  text-align: center;
  margin-bottom: 0.5rem;
  color: #7fc8f8;
}

.testimonials-section .section-intro {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.testimonial-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

@media (max-width: 850px) {
  .testimonial-container {
    grid-template-columns: 1fr;
  }
}

.testimonial-form {
  background-color: #082545;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.testimonial-form .form-group {
  margin-bottom: 1rem;
}

.testimonial-form label {
  display: block;
  margin-bottom: 0.3rem;
  font-weight: 500;
  color: #7fc8f8;
}

.testimonial-form input,
.testimonial-form textarea {
  width: 100%;
  padding: 0.6rem 0.8rem;
  border-radius: 4px;
  border: 1px solid #274472;
  background-color: #0c3054;
  color: #cfd8dc;
  font-size: 1rem;
}

.testimonial-form textarea {
  resize: vertical;
}

.testimonial-form .consent-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.testimonial-form .btn-primary {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.7rem 1.4rem;
  background-color: #00a8e8;
  color: #051c2c;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.testimonial-form .btn-primary:hover,
.testimonial-form .btn-primary:focus {
  background-color: #7fc8f8;
}

.testimonial-display {
  background-color: #082545;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
}

.testimonial-carousel {
  display: flex;
  flex-direction: column;
  animation: scroll-testimonials 20s linear infinite;
}

.testimonial-item {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #274472;
}

.testimonial-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.testimonial-item h4 {
  margin: 0;
  color: #7fc8f8;
  font-weight: 600;
}

.testimonial-item p {
  margin: 0.4rem 0;
  line-height: 1.4;
}

.testimonial-item .role {
  font-style: italic;
  color: #b0bec5;
  font-size: 0.9rem;
}

.testimonial-item .relationship {
  font-size: 0.85rem;
  color: #90a4ae;
}

@keyframes scroll-testimonials {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}
