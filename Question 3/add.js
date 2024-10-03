const fs = require('fs');
const path = require('path');


const logsDirec = path.join(__dirname, 'Logs');
console.log(`Logs directory path: ${logsDirec}`);

if (!fs.existsSync(logsDirec)) {
    fs.mkdirSync(logsDirec);
}

process.chdir(logsDirec);
console.log(`Current working directory: ${process.cwd()}`);

for (let i = 0; i < 10; i++) {
    const logFileNum = `log${i}.txt`;
    fs.writeFileSync(logFileNum, `This is the log file number ${i}.`);
    console.log(logFileNum);
}
