const fs = require('fs');
const path = require('path');
const { TextDecoder } = require('util');

// Add any directories here you want the script to check
const foldersToCheck = [
    './',
    './menus/view',
    './accordions/view',
    './contacts'
];

const decoder = new TextDecoder('windows-1251');

foldersToCheck.forEach(folder => {
    const fullPath = path.resolve(__dirname, folder);
    if (!fs.existsSync(fullPath)) return;

    fs.readdirSync(fullPath).forEach(file => {
        if (file.endsWith('.html') || file.endsWith('.php')) {
            const filePath = path.join(fullPath, file);

            // Read data as pure raw buffer
            const rawBuffer = fs.readFileSync(filePath);

            // Decode from windows-1251 into a modern utf-8 string
            let utf8String = decoder.decode(rawBuffer);

            // Replace the HTML meta tag definition
            utf8String = utf8String.replace(/charset=windows-1251/gi, 'charset=utf-8');

            // Save it back to disk safely in UTF-8
            fs.writeFileSync(filePath, utf8String, 'utf8');
            console.log(`Converted: ${filePath}`);
        }
    });
});

console.log("\nMigration complete! All HTML/PHP files are now fully UTF-8.");
