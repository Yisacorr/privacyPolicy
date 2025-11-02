function HomePage({ navigateTo }) {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Track Your Culinary Journey</h1>
                        <p>
                            Discover, save, and share your favorite dining experiences.
                            Build your personal wanderlist and never forget a great meal again.
                        </p>
                        <a href="flavortrail://explore" className="app-store-btn">
                            <img src="Assets/logo1.png" alt="Download" /> Download on App Store
                        </a>
                    </div>
                    <div className="hero-image">
                        <div className="phone-mockup">
                            <div className="phone-screen">
                                <img src="Assets/logo1.png" alt="FlavorTrail" style={{width: '60%', height: 'auto'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="features-container">
                    <h2 className="section-title">Why FlavorTrail?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">📸</div>
                            <h3>Capture Moments</h3>
                            <p>
                                Take photos, add notes, and rate your dining experiences.
                                Keep track of what you ordered and how much you spent.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🍽️</div>
                            <h3>Discover & Explore</h3>
                            <p>
                                Find restaurants near you with Yelp integration.
                                Browse by category and build your wanderlist of places to try.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">👥</div>
                            <h3>Share with Friends</h3>
                            <p>
                                Follow friends, share your experiences, and see what others are enjoying.
                                Send restaurant invitations and build your foodie community.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Personal Feed</h3>
                            <p>
                                Swipe through dining experiences from your community.
                                Like, save, and get inspired by others' culinary adventures.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🤖</div>
                            <h3>AI-Powered Recommendations</h3>
                            <p>
                                Get personalized daily picks and smart suggestions on what to order at each restaurant.
                                Discover top nearby spots by cuisine type with intelligent recommendations.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><img src="Assets/map.jpg" alt="map" /></div>
                            <h3>Interactive Map & Collections</h3>
                            <p>
                                Visualize your wanderlist on an interactive map. Organize favorite spots into custom collections
                                for date nights, brunch spots, or any theme you like.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta">
                <h2>Start Your Food Journey Today</h2>
                <p>
                    Join thousands of food lovers tracking and sharing their culinary adventures.
                </p>
                <a href="flavortrail://explore" className="app-store-btn">
                    <img src="Assets/logo1.png" alt="Download" /> Download Now
                </a>
            </section>

            <footer className="footer">
                <p>&copy; 2025 FlavorTrail. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('privacy'); }}>
                        Privacy Policy
                    </a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('terms'); }}>
                        Terms & Conditions
                    </a>
                    <a href="mailto:help@travdiary.com">Contact</a>
                </div>
            </footer>
        </>
    );
}
