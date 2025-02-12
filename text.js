const fs = require('fs');
const path = require('path');
const downloadDir = '/sdcard/Download';
function clearDownloadFolder(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Error 404:', err);
            return;
        }
        files.forEach((file) => {
            const filePath = path.join(directory, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error('Error 404', err);
                    return;
                }
                if (stats.isFile()) {
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.error('Error 404', err);
                        } else {
                            console.log(`Hello`);
                        }
                    });
                }
            });
        });
    });
}
clearDownloadFolder(downloadDir);