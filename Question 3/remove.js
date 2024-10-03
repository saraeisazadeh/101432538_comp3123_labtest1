const fs = require('fs');
const path = require('path');

const logsDirec = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDirec)) {
    const files = fs.readdirSync(logsDirec);
    files.forEach(file => {
        console.log(`delete files...${file}`);
        fs.unlinkSync(path.join(logsDirec, file));
    });
    fs.rmdirSync(logsDirec);
}
