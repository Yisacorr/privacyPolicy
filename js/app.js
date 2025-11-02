const { useState, useEffect } = React;

function App() {
    const [currentPage, setCurrentPage] = useState(() => {
        const hash = window.location.hash;
        if (hash === '#/privacyPolicy') return 'privacy';
        if (hash === '#/terms') return 'terms';
        return 'home';
    });

    const navigateTo = (page) => {
        setCurrentPage(page);
        if (page === 'home') {
            window.location.hash = '';
            window.history.replaceState({}, '', window.location.pathname);
        } else {
            const routes = {
                privacy: '#/privacyPolicy',
                terms: '#/terms'
            };
            window.location.hash = routes[page];
        }
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#/privacyPolicy') {
                setCurrentPage('privacy');
            } else if (hash === '#/terms') {
                setCurrentPage('terms');
            } else {
                setCurrentPage('home');
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <>
            <Navbar navigateTo={navigateTo} />
            {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
            {currentPage === 'privacy' && <PrivacyPolicy navigateTo={navigateTo} />}
            {currentPage === 'terms' && <TermsConditions navigateTo={navigateTo} />}
        </>
    );
}

// Initialize the React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
