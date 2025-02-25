module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontSize: {
            xs: '.75rem',
            sm: '.875rem',
            tiny: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3.5rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '8xl': '6rem',
            '9xl': '8rem',
        },
        colors: {
            red: {
                10: '#482C30',
                100: '#E0565F',
                200: '#CD343E',
            },
            green: {
                10: '#2D3730',
                100: '#93C497',
            },
            yellow: {
                100: '#FFE6BB',
                200: '#E5A024',
            },
            blue: {
                100: '#424152',
                200: '#5DADEC',
            },
            black: {
                100: '#141416',
                200: '#212121',
                300: '#323232',
                400: '#151516',
                500: '#0B0B0D',
            },
            grey: {
                100: '#E5E5E5',
                200: '#9E9E9E',
                300: '#585858',
            },
            white: {
                100: '#ffffff',
                200: '#F6F6F6',
            },
        },
        extend: {
            dropShadow: {
                'custom-black-100': '0px 4px 8px rgba(0, 0, 0, 0.25)',
                'custom-black-200': '0px 8px 16px rgba(0, 0, 0, 0.25);',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
/* Rectangle 23 */
