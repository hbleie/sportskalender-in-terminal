# sportskalender.plugin.zsh
# Get the directory of the current script
SCRIPT_DIR="${0:A:h}"

function sport() {

  cd $SCRIPT_DIR
  node hoydepunkter.js
}

function fotball() {
  cd $SCRIPT_DIR
  node fotball.js
}