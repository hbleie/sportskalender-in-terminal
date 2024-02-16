# sportskalender.plugin.zsh
# Get the directory of the current script
SCRIPT_DIR="${0:A:h}"

function sport() {
  node $SCRIPT_DIR/hoydepunkter.js
}

function fotball() {
  node $SCRIPT_DIR/fotball.js
}