import React from 'react';
import './legal.css';

function About() {
    return (
        <div className="legal-container">
            <h1>About Us</h1>
            
            <div className="legal-section">
                <div className="about-content">
                    <p>
                        Welcome to Skool Games — your trusted platform for educational gaming and entertainment.
                    </p>
                    
                    <p>
                        At Skool Games, we are committed to creating a safe, engaging space where students 
                        can explore a world of fun and learning through games. Every title featured on 
                        Skool Games is carefully selected to ensure it's both school-appropriate and 
                        highly enjoyable.
                    </p>
                    
                    <p>
                        Whether you're in the classroom or at home, Skool Games offers a unique blend 
                        of education and excitement that keeps students motivated and entertained.
                    </p>
                    
                    <p>
                        Discover why students and educators alike choose Skool Games as their go-to 
                        source for learning through play.
                    </p>

                    <div className="about-features">
                        <div className="feature-card">
                            <h3>Safe Environment</h3>
                            <p>All games are thoroughly vetted to ensure they're appropriate for school use.</p>
                        </div>
                        
                        <div className="feature-card">
                            <h3>Educational Value</h3>
                            <p>Games that combine learning with entertainment for maximum engagement.</p>
                        </div>
                        
                        <div className="feature-card">
                            <h3>Accessible Platform</h3>
                            <p>Easy to use interface that works great in classrooms and at home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
