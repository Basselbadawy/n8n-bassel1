const { exec } = require("child_process");
exec("n8n start", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});