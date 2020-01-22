const core = require("@actions/core");
const github = require("@actions/github");

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet");
  const time = new Date().toTimeString();

  const branchName = core
    .getInput("prefix")
    .split(",")
    .map(prefix => prefix.trim())
    .reduce((acc, curr) => acc.replace(curr, ""), process.env.GITHUB_HEAD_REF);
  
  console.log("prefix", core.getInput("prefix");
  console.log("process.env.GITHUB_HEAD_REF:" process.env.GITHUB_HEAD_REF);
  console.log(`branch-name: ${branchName}`);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  core.setOutput("time", time);

  console.log(`Hello ${nameToGreet}!`);
  console.log(`The event payload----------->: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
