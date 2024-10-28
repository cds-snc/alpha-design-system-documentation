const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs');
const path = require('path');
const pjson = require('../package.json');

async function downloadFile(url, outputDir, outputFileName) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }
        // Get initial file contents
        const fileContent = await response.text();

        // Add code formatting for code files
        const codeContent = `{% highlight html %}\n${fileContent}\n{% endhighlight %}`;

        // Replace version numbers in preview files
        let previewContent = fileContent.replace(/gcds-utility\@<version-number>/g, "gcds-utility@" + pjson.devDependencies['@cdssnc/gcds-utility'].replace(/^\^/, ''));
        previewContent = previewContent.replace(/gcds-components\@<version-number>/g, "gcds-components@" + pjson.devDependencies['@cdssnc/gcds-components'].replace(/^\^/, ''));

        fs.mkdirSync(outputDir, {recursive: true});
        const previewOutputPath = path.join(outputDir, outputFileName);
        const codeOutputPath = path.join(outputDir, 'code-' + outputFileName);

        fs.writeFileSync(previewOutputPath, previewContent, 'utf8');
        fs.writeFileSync(codeOutputPath, codeContent, 'utf8');
        console.log(`File saved to ${previewOutputPath} and ${codeOutputPath}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}
async function downloadTemplates() {
    const enTemplateFiles = [
        {
            url: 'https://raw.githubusercontent.com/cds-snc/gcds-examples/refs/heads/feat/add-basic-page-templates/templates/english/basic-page-template.html',
            outputFileName: 'basic-page-template.njk'
        }]

    const frTemplateFiles = [

        {
            url: 'https://raw.githubusercontent.com/cds-snc/gcds-examples/refs/heads/feat/add-basic-page-templates/templates/french/basic-page-template.html',
            outputFileName: 'basic-page-template.njk'
        }
    ]
    const outputDirectory = './src/_includes/partials/templates';
    const outputDirEn = outputDirectory + '/en';
    const outputDirFr = outputDirectory + '/fr';

    enTemplateFiles.forEach(file => {
        console.log('downloading english file', file.url, outputDirEn, file.outputFileName);
        downloadFile(file.url, outputDirEn, file.outputFileName);
    });

    frTemplateFiles.forEach(file => {
        console.log('downloading french file', file.url, outputDirFr, file.outputFileName);
        downloadFile(file.url, outputDirFr, file.outputFileName);
    });
}

exports.downloadTemplates = downloadTemplates;