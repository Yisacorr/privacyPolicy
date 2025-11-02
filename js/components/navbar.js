function Navbar({ navigateTo }) {
    return React.createElement(
        'nav',
        { className: 'navbar' },
        React.createElement(
            'div',
            {
                className: 'logo',
                onClick: () => navigateTo('home')
            },
            React.createElement('img', {
                src: 'Assets/logo1.png',
                alt: 'Logo'
            }),
            React.createElement('span', { className: 'logo-text' }, 'FlavorTrail')
        )
    );
}
