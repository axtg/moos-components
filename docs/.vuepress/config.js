const { defaultTheme } = require('@vuepress/theme-default')
const { path } = require('@vuepress/utils')
const { viteBundler } = require('vuepress')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const pkg = require('../../package.json')

module.exports = {
    lang: 'en-US',
    title: `${pkg.name} (${pkg.version})`,
    description: pkg.description,
    dest: `www`,
    bundler: viteBundler({
        viteOptions: {
            css: {
                postcss: {
                    plugins: [
                        require('tailwindcss'),
                        require('autoprefixer')
                    ]
                }
            },
        }
    }),
    theme: defaultTheme({
        navbar: [
            // NavbarItem
            {
                text: 'Components',
                link: '/components/',
            },
            // NavbarGroup
            {
                text: 'Group',
                children: ['/group/foo.md', '/group/bar.md'],
            },
            // string - page file path
            {
                text: 'Github',
                link: 'https://github.com/axtg/moos-components',
            },
        ],

        sidebar: {
            '/components/': [
                {
                    title: 'Components',
                    collapsable: false,
                    children: [
                        'mbutton'
                    ]
                }
            ]
        }
    }),
    
    plugins: [
        [
            registerComponentsPlugin({
                components: {
                    MButton: path.resolve(__dirname, '../../src/components/MButton/MButton.vue'),
                },
                // componentsDir: path.resolve(__dirname, '../../src/components'),
                // componentsPatterns: ['**/*.vue']
            }),
        ]
    ],
}