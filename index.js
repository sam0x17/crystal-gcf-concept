const child_process = require("child_process")

function cmd(command) {
  console.log('$ '+command);
  var ret = child_process.execSync(command).toString();
  if(ret.length > 0) console.log(ret);
  return ret;
}

/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.explore = function (req, res) {
  console.log('running crystal...');
  res.send(cmd("./hello_world"));
};
