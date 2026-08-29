import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, BadgeCheck } from 'lucide-react';
import './Feedback.css';

function Feedback() {
    const [[index, direction], setIndex] = useState([0, 0]);

    const testimonials = [
        {
            quote: "It was fabulous, awesome having training with MEDINI TECHNOLOGIES, the commitments were fulfilled as discussed on day one. The faculty was great and supportive. very happy with it. Will be definitely looking forward to do more course in early days. Thank you.",
            author: "Srikanth Raghu",
            title: "Bim Captain",
            company: "ALSTOM Transport",
            rating: 5
        },
        {
            quote: "Its an essential for the present day to have an added badge in our profile without which it will not show our interest in the technology we are into. I was knowing the software, but I came to know that knowing the software and getting professional in software has a huge difference. Which I learnt from MEDINI TECHNOLOGIES, supported me and my team to undergo the training and get certified. Thank you to the team of Medini Technologies for the support and patience, great to be a part of your trainings",
            author: "Bramarahmba M",
            title: "Design Engineer",
            company: "ATKINS",
            rating: 5
        },
    ];

    const total = testimonials.length;
    const wrap = (n) => ((n % total) + total) % total;
    const current = testimonials[wrap(index)];

    const paginate = (dir) => setIndex(([prev]) => [prev + dir, dir]);
    const goTo = (target) => setIndex(([prev]) => [target, target > prev ? 1 : -1]);

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
    };

    const initials = current.author.split(' ').map((n) => n[0]).join('');

    return (
        <section className="feedback-section testimonials-section">
            <div className="blueprint-grid" aria-hidden="true" />
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="eyebrow">
                        Field Reports
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-gray-600 max-w-7xl mx-auto">
                        Hear from engineers who took their certification from spec sheet to sign-off.
                    </p>
                </div>

                <div className="relative max-w-7xl mx-auto text-left px-4">
                    <div className="flex justify-between items-center mb-4">
                        <div className="counter" aria-hidden="true">
                            <span className="counter-current">{String(wrap(index) + 1).padStart(2, '0')}</span>
                            <span className="counter-sep">/</span>
                            <span className="counter-total">{String(total).padStart(2, '0')}</span>
                        </div>
                        <div className="flex space-x-3">
                            <button
                                onClick={() => paginate(-1)}
                                className="nav-btn nav-btn-ghost"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => paginate(1)}
                                className="nav-btn nav-btn-solid"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Testimonial Card */}
                    <div className="testimonial-frame">
                        <span className="corner corner-tl" aria-hidden="true" />
                        <span className="corner corner-tr" aria-hidden="true" />
                        <span className="corner corner-bl" aria-hidden="true" />
                        <span className="corner corner-br" aria-hidden="true" />

                        <div className="testimonial-card">
                            <Quote className="quote-mark" aria-hidden="true" />

                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={wrap(index)}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.35, ease: 'easeOut' }}
                                    className="testimonial-body"
                                >
                                    <div className="stars" aria-label={`${current.rating} out of 5 stars`}>
                                        {Array(5).fill(0).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`star ${i < current.rating ? 'star-filled' : 'star-empty'}`}
                                            />
                                        ))}
                                    </div>

                                    <p className="quote-text">
                                        {current.quote}
                                    </p>

                                    <div className="author-row">
                                        <div className="avatar">{initials}</div>
                                        <div className="author-meta">
                                            <div className="author-name-row">
                                                <h4 className="author-name">{current.author}</h4>
                                                <span className="stamp">
                                                    <BadgeCheck className="w-3.5 h-3.5" />
                                                    Verified Learner
                                                </span>
                                            </div>
                                            <div className="author-sub">
                                                <span>{current.title}</span>
                                                <span className="dot">•</span>
                                                <span className="author-company">{current.company}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="dots" role="tablist" aria-label="Choose testimonial">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`dot ${wrap(index) === i ? 'dot-active' : ''}`}
                                role="tab"
                                aria-selected={wrap(index) === i}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feedback;