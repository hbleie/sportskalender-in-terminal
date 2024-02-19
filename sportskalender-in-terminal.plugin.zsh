# sportskalender.plugin.zsh
# Get the directory of the current script
SCRIPT_DIR="${0:A:h}"

function sport() {
  case "$1" in
    "fotball")
      node "$SCRIPT_DIR/fotball.js"
      ;;
    "høydepunkter")
      node "$SCRIPT_DIR/hoydepunkter.js"
      ;;
    "--help")
      echo "Usage: sport <command>"
      echo "Available commands:"
      echo "  fotball        - Runs the football script"
      echo "  høydepunkter   - Runs the hoydepunkter script"
      ;;
    *)
      echo "Invalid command. Please see 'sport --help' for available commands."
      ;;
  esac
}