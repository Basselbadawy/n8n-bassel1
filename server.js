
const { exec } = require('child_process');
exec('n8n', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${err}`);
        return;
    }
    console.log(stdout);
    console.error(stderr);
});
