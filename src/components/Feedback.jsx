import React, { useEffect, useState, useRef } from "react";
import "./Feedback.css";

const feedbacks = [
  { name: "Rahul S.", text: "This course gave me incredible clarity on BIM modeling. I can now visualize project details in a way I never thought possible, which is a huge boost for my career." },
  { name: "Priya Prakash", text: "The hands-on training in BIM coordination was outstanding. Learning to avoid clashes between structural and MEP elements is a skill I'll use forever." },
  { name: "Amit Kumar", text: "I appreciated the clear, step-by-step lessons. The 3D walkthroughs helped me grasp complex designs much better than any textbook could." },
  { name: "Sneha Patel", text: "The course was perfectly paced and delivered on its promise. The precision of BIM planning is something I now use in all my projects. Truly professional training!" },
  { name: "Ravi Kumar", text: "This course taught me how to make informed decisions early in the design phase. The data-driven insights I gained have been a game-changer for me." },
  { name: "Neha Gowda", text: "I was impressed by how quickly the instructors responded to our questions and incorporated feedback into the lessons. It made me feel heard and valued as a student." },
  { name: "Vikram Joshi", text: "The modules on clash detection and quantity take-offs were spot on. I feel much more confident in my ability to reduce site errors and improve efficiency." },
  { name: "Kavya M.", text: "The course on BIM execution planning was clear and collaborative. It aligned perfectly with my career goals and made the learning process smooth." },
  { name: "Saurabh Jain", text: "Learning to integrate sustainability analysis into BIM models has helped me contribute to green building targets. Excellent and forward-thinking course!" },
  { name: "Ananya Das", text: "I’ve taken other courses before, but the practical skills and instructor engagement here stood out. I'm looking forward to taking more advanced courses with you!" },
];

// Typing speed (ms per character) and rotation duration derived from longest text
const TYPING_SPEED = 20; // faster typing so long messages finish
const ROTATION_MS = Math.max(...feedbacks.map(f => f.text.length)) * TYPING_SPEED + 1200; // add pause after complete

const TypewriterCard = ({ text, name, isVisible }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    setDisplayedText('');
    setShowName(false);
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setShowName(true);
      }
    }, TYPING_SPEED);

    return () => clearInterval(typingInterval);
  }, [text, isVisible]);

  return (
    <div className="feedback-card">
      <p className="feedback-text">
        “{displayedText}”<span className="cursor"></span>
      </p>
      {showName && <h4 className="feedback-name">- {name}</h4>}
    </div>
  );
};

const Feedback = () => {
  const [indexes, setIndexes] = useState([0, 1, 2]);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentElement = sectionRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!isSectionVisible) return;

    const interval = setInterval(() => {
      setIndexes((prev) => [
        (prev[0] + 3) % feedbacks.length,
        (prev[1] + 3) % feedbacks.length,
        (prev[2] + 3) % feedbacks.length,
      ]);
    }, ROTATION_MS); // Rotate after typing completes

    return () => clearInterval(interval);
  }, [isSectionVisible]);

  return (
    <section className="feedback-section" ref={sectionRef}>
      <h2>What Our Clients Say</h2>
      <div className="feedback-row">
        {indexes.map((feedbackIndex, i) => (
          <TypewriterCard
            key={feedbackIndex} // Use a more stable key
            text={feedbacks[feedbackIndex].text}
            name={feedbacks[feedbackIndex].name}
            isVisible={isSectionVisible}
          />
        ))}
      </div>

      <div className="stats-section">
        <h3>🌟 20,000+ Happy Learners</h3>
        <p>Building successful careers with real-world training and placements.</p>
      </div>
    </section>
  );
};

export default Feedback;
