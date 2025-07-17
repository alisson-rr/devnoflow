import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"index":{"outputDir":"./","lang":"pt","title":"Seu Conteúdo Merece Palco VIP","cacheVersion":10,"meta":[{"name":"title","content":"Seu Conteúdo Merece Palco VIP"},{"name":"description","content":"Transforme seu Infoproduto em uma Experiência Premium"},{"name":"image","content":"/images/4.png?_wwcv=10"},{"itemprop":"name","content":"Seu Conteúdo Merece Palco VIP"},{"itemprop":"description","content":"Transforme seu Infoproduto em uma Experiência Premium"},{"itemprop":"image","content":"/images/4.png?_wwcv=10"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Seu Conteúdo Merece Palco VIP"},{"name":"twitter:description","content":"Transforme seu Infoproduto em uma Experiência Premium"},{"name":"twitter:image","content":"/images/4.png?_wwcv=10"},{"property":"og:title","content":"Seu Conteúdo Merece Palco VIP"},{"property":"og:description","content":"Transforme seu Infoproduto em uma Experiência Premium"},{"property":"og:image","content":"/images/4.png?_wwcv=10"},{"property":"og:site_name","content":"Seu Conteúdo Merece Palco VIP"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n<!-- Tag do Google (gtag.js) --> \r\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-16613367170\"></script> \r\n<script>\r\n    window.dataLayer = window.dataLayer || [];\r\n    function gtag(){dataLayer.push(arguments);}\r\n    gtag('js', new Date());\r\n    gtag('config', 'AW-16613367170');\r\n</script>\r\n<!-- Hotjar Tracking Code for https://devnoflow.com.br/ -->\r\n<script>\r\n    (function(h,o,t,j,a,r){\r\n        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\r\n        h._hjSettings={hjid:6429671,hjsv:6};\r\n        a=o.getElementsByTagName('head')[0];\r\n        r=o.createElement('script');r.async=1;\r\n        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\r\n        a.appendChild(r);\r\n    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\r\n</script>","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://d1a48f4a-e207-47cd-add0-851647bf7d19.weweb-preview.io/"},{"rel":"alternate","hreflang":"pt","href":"https://d1a48f4a-e207-47cd-add0-851647bf7d19.weweb-preview.io/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rollupOptionsInput = {};
for (const pageName in pages) {
    rollupOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

export default defineConfig(() => {
    return {
        plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder'] }), vue()],
        base: "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rollupOptions: {
                input: rollupOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    return next(entry);
                },
                maxParallelFileOps: 900,
            },
        },
        logLevel: 'warn',
    };
});
