function PrivacyPolicy({ navigateTo }) {
    return (
        <div className="legal-page">
            <a href="#" className="back-btn" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>
                ← Back to Home
            </a>
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last updated: December 30, 2024</p>

            <p>
                FlavorTrail ("us", "we", or "our") operates the FlavorTrail platform (the "Service").
                This page informs you of our policies regarding the collection, use, and disclosure of
                personal information when you use our Service.
            </p>
            <p>By using the Service, you agree to the collection and use of information in accordance with this policy.</p>

            <h2>Information Collection and Use</h2>
            <p>We collect information you provide when you create an account and use our Service, including:</p>
            <ul>
                <li>Account information (name, email, profile photo) through Google Sign-In or Apple Sign-In</li>
                <li>User-generated content (restaurant experiences, photos, ratings, reviews, saved restaurants)</li>
                <li>Social interactions (following, likes, shared content)</li>
                <li>Location data for restaurant recommendations</li>
                <li>Device information and usage analytics</li>
            </ul>
            <p>This information is used to provide app functionality, personalized recommendations, social features, and to improve the Service.</p>

            <h2>Log Data</h2>
            <p>
                We collect information that your device sends whenever you interact with our Service ("Log Data").
                This may include your device's IP address, browser type, operating system, app interactions, and geolocation data.
            </p>
            <p>This data helps us analyze usage trends, improve the app's performance, and provide tailored experiences.</p>

            <h2>Cookies</h2>
            <p>
                Cookies are used to store session information, enhance functionality, and improve user experience.
                By using the Service, you agree to our use of cookies. You can manage cookie preferences in your device settings.
            </p>

            <h2>Location Data</h2>
            <p>
                The Service may collect precise location data to provide relevant restaurant recommendations,
                map navigation, and localized content. You can manage location settings through your device permissions.
            </p>

            <h2>Third-Party Services</h2>
            <p>We use third-party services to provide app functionality:</p>
            <ul>
                <li>Firebase (Google): Authentication, data storage, push notifications, and analytics</li>
                <li>Cloudinary: Image hosting and delivery</li>
                <li>Sightengine: Automated content moderation (images analyzed temporarily, not stored)</li>
                <li>Yelp: Restaurant information and discovery</li>
                <li>Apple/Google Maps: Location services and navigation</li>
                <li>Groq AI: AI-powered recommendations and personalized suggestions</li>
                <li>Tavily REST API: Enhanced search and discovery features</li>
            </ul>
            <p>These providers have access only to information necessary for their services. We do not sell your personal information.</p>

            <h2>Security</h2>
            <p>
                While we use encryption and secure technologies to protect your information, no system is 100% secure.
                By using the Service, you acknowledge this and agree to use the app at your own risk.
            </p>

            <h2>User-Generated Content</h2>
            <p>
                Users can share experiences, reviews, and photos within the app. By uploading content, you grant us
                a license to display this content as part of the Service. You are responsible for ensuring that your
                shared content complies with our Terms of Use.
            </p>

            <h2>Links to Other Sites</h2>
            <p>
                Our Service may contain links to third-party sites. We are not responsible for the content or privacy
                practices of these external platforms. Please review their policies before interacting with them.
            </p>

            <h2>Children's Privacy</h2>
            <p>
                Our Service is not intended for children under 13. We do not knowingly collect information from minors.
                If you believe a child has provided us with personal information, contact us immediately to have it removed.
            </p>

            <h2>Content Moderation</h2>
            <p>
                We use automated content moderation systems to ensure that user-uploaded images and text comply with
                our community guidelines. When you upload content such as profile photos or experiences:
            </p>
            <ul>
                <li>Your content may be automatically analyzed by third-party content moderation services (such as Sightengine) to detect potentially inappropriate, offensive, or harmful material.</li>
                <li>This analysis is performed in real-time before content is published to the Service, and content that violates our guidelines may be automatically rejected.</li>
                <li>The content moderation process involves temporarily sending your images and text to our service providers, who do not permanently store your content beyond the immediate analysis.</li>
                <li>We do not use your content to train AI models, and all moderation is conducted with privacy-preserving measures in place.</li>
            </ul>
            <p>The moderation system helps maintain a safe and positive community environment. You can find more details about prohibited content in our Terms and Conditions.</p>

            <h2>Your Rights and Choices</h2>
            <p>You can:</p>
            <ul>
                <li>Access and update your information through the app</li>
                <li>Delete your account through settings or by contacting help@travdiary.com</li>
                <li>Control location services and push notifications in device settings</li>
                <li>Make your content private or public</li>
            </ul>
            <p>EU users have rights under GDPR, and California residents have rights under CCPA. Contact us to exercise these rights or request a copy of your data.</p>

            <h2>Data Retention and Deletion</h2>
            <p>
                We retain your information while your account is active. After account deletion, we may retain certain
                data for up to 90 days for legal purposes, then permanently delete it. Aggregated analytics data may be
                retained indefinitely in a form that cannot identify you.
            </p>
            <p>Contact help@travdiary.com to request account deletion. We will respond within 30 days.</p>

            <h2>Contact Us</h2>
            <p>For privacy questions or data requests:</p>
            <p>Email: help@travdiary.com</p>
            <p>We respond within 30 days.</p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
                We reserve the right to update this Privacy Policy as necessary. Significant changes will be
                communicated via the app or email. The "Last updated" date at the top of this policy indicates
                when it was last revised.
            </p>
            <p>Continued use of the Service after changes take effect constitutes your acceptance of the updated Privacy Policy.</p>
        </div>
    );
}
