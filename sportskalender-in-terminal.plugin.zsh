#!/bin/zsh
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
    "vintersport")
      node "$SCRIPT_DIR/vintersport.js"
      ;;
    "--help")
      echo "Usage: sport <command>"
      echo "Available commands:"
      echo "  fotball        - Returns football events"
      echo "  høydepunkter   - Returns highlight events"
      echo "  vintersport   - Returns winter sports events"
      ;;
    *)
      echo "Invalid command. Please see 'sport --help' for available commands."
      ;;
  esac
}

# Call the function with the provided arguments
sport "$@"