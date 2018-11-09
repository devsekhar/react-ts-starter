const shell = require("shelljs");

if (!shell.which("npm")) {
  shell.echo("Sorry, this script requires npm");
  shell.exit(1);
}
