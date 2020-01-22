const core = require("@actions/core");
const github = require("@actions/github");

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet");
  const branchName = core.getInput("branch-name");
  const time = new Date().toTimeString();

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  core.setOutput("time", time);

  console.log(`Hello ${nameToGreet}!`);
  console.log(`branch-name: ${branchName}`);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
