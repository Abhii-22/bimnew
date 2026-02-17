import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './Feedback.css';

function Feedback() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
        {
            quote: "It was fabulous, awesome having training with MEDINI School of design, the commitments were fulfilled as discussed on day one. The faculty was great and supportive. very happy with it. Will be definitely looking forward to do more course in early days. Thank you.",
            author: "Srikanth Raghu",
            title: "Bim Captain",
            company: "ALSTOM Transport",
            rating: 5
        },
        {
            quote: "Its an essential for the present day to have an added badge in our profile without which it will not show our interest in the technology we are into. I was knowing the software, but I came to know that knowing the software and getting professional in software has a huge difference. Which I learnt from MEDINI SCHOOL OF DESIGN (MSD), supported me and my team to undergo the training and get certified. Thank you to the team of Medini School of Design(MSD) for the support and patience, great to be a part of your trainings",
            author: "Bramarahmba M",
            title: "Design Engineer",
            company: "ATKINS",
            rating: 5
        },
    ];

    const handleNext = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const renderStars = (count) => {
        return Array(5).fill(0).map((_, i) => (
            <Star 
                key={i} 
                className={`w-5 h-5 ${i < count ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
            />
        ));
    };

    return (
        <section className="feedback-section testimonials-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 text-sm font-medium text-amber-600 bg-amber-50 rounded-full mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-gray-600 max-w-7xl mx-auto">
                        Hear from businesses that have transformed their operations with our solutions.
                    </p>
                </div>

                <div className="relative max-w-7xl mx-auto text-left px-4">
                    {/* Navigation Arrows */}
                    <div className="flex justify-end space-x-3 mb-4">
                        <button 
                            onClick={handlePrev}
                            className="p-2 rounded-full bg-gray-200 text-gray-400 shadow-md hover:bg-gray-300 transition-all duration-300"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button 
                            onClick={handleNext}
                            className="p-2 rounded-full bg-amber-500 text-white shadow-md hover:bg-amber-600 transition-all duration-300"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Testimonial Card */}
                    <div 
                        key={currentTestimonial}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500"
                    >
                        <div className="p-6 md:p-8 relative">
                            <div className="absolute top-6 right-6 text-gray-200">
                                <Quote className="w-20 h-20" />
                            </div>
                            
                            <div className="relative z-10 text-left">
                                {/* Rating */}
                                <div className="flex justify-start mb-4">
                                    {renderStars(testimonials[currentTestimonial].rating)}
                                </div>

                                {/* Quote */}
                                <p className="text-xl text-gray-700 leading-relaxed mb-6 max-w-2xl">
                                    "{testimonials[currentTestimonial].quote}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center pt-4 border-t border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">
                                        {testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-gray-900 text-lg">
                                            {testimonials[currentTestimonial].author}
                                        </h4>
                                        <div className="text-sm text-gray-600">
                                            <span>{testimonials[currentTestimonial].title}</span>
                                            <span className="mx-2">•</span>
                                            <span className="text-amber-500 font-medium">
                                                {testimonials[currentTestimonial].company}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`h-3 rounded-full transition-all duration-300 ${
                                    currentTestimonial === index
                                        ? 'w-8 bg-amber-500'
                                        : 'w-3 bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feedback;
