const core = require("@actions/core");
const github = require("@actions/github");

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet");
  const time = new Date().toTimeString();

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  core.setOutput("time", time);

  let branchName = payload.ref.replace('refs/heads/', '');

  console.log(`branch-name: ${branchName}`);

  console.log(`Hello ${nameToGreet}!`);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
