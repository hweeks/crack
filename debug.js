/**
 * DEBUG
 *
 * This file is a helper for dealing with differences between launching jest debug
 * scripts on windows versus nix/darwin computers. Windows doesn't use bash it uses cmd (command)
 * which is similar but not interoperable. To say this simply, there is one jest command for windows
 * and one for all other platforms (that are able to handle shell commands). This file provides
 * a bridge to do that for us!
 */
const os = require('os')
// execSync is a poor choice from a performance perspective, it's synchronous!
const { execSync } = require('child_process')

const isWin = os.platform() === 'win32'
// these commands are in package.json
const properCommand = isWin ? 'yarn test:debug:win' : 'yarn test:debug:nix'
/**
 * The way this works is not immediately obvious. When you use node to call a javascript file,
 * there are a few arguments (argv) that you pass. For example:
 * index.js:
 * ```js
 * console.log(process.argv)
 * ```
 * and we run it like this:
 * ```bash
 * $ node ./index.js
 * [
 *    'path to node installation executable',
 *    'file you called, "index.js" here'
 * ]
 * ```
 * but if you were to add additional options to the command like:
 * ```bash
 * $ node ./index.js hello
 * [
 *    'path to node installation executable',
 *    'file you called, "index.js" here',
 *    'hello'
 * ]
 * ```
 *
 * This is all a long way of saying that this line simply preserves any arguments that
 * we passed to our debug command. Normally this would be a test suite or single file.
 */
const extraArg = process.argv.slice(2)

/**
 * stdio: 'inherit' is more or less saying 'pipe' stdout, stderr, stdin to parent process
 *
 * to put this in simpler terms, when you run this command, using 'inherit' will make
 * it look like you ran the command we've selected and not this command. That makes this
 * helper work transparently!
 */
execSync(`${properCommand} ${extraArg.join(' ')}`, {
  cwd: __dirname,
  stdio: 'inherit'
})
