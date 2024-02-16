## Sportskalender in Terminal

Displays the highlight page or football page from VGs sportskalender in the terminal.

# Sportskalender Zsh Plugin

This is a Zsh plugin that provides commands to run the `hoydepunkter.js` and `fotball.js` scripts from the `sportskalender-in-terminal` repository.

## Installation

### Oh My Zsh

1. Clone this repository into `$ZSH_CUSTOM/plugins` (by default `~/.oh-my-zsh/custom/plugins`)

2. Add the plugin to the list of plugins for Oh My Zsh to load
    plugins=(... sportskalender-in-terminal)

3. Start a new terminal session.

### Antigen

1. Add `antigen bundle johannsl/sportskalender-in-terminal` to your `.zshrc` with your other bundle commands.

2. Start a new terminal session.

### Zgen

1. Add `zgen load johannsl/sportskalender-in-terminal` to your `.zshrc` in the same function you're doing your other `zgen load` calls in.

2. Start a new terminal session.

### Manual

1. Clone this repository somewhere on your machine.

2. Source the file `sportskalender-in-terminal.plugin.zsh` in your `.zshrc` file.

    ```zsh
    source /path/to/sportskalender-in-terminal.plugin.zsh
    ```

3. Start a new terminal session.

## Usage

### `hoydepunkter`

Displays the highlight page from VGs sportskalender in the terminal.

Run the command `sport` to display the highlight page.

### `fotball`

Displays the football page from VGs sportskalender in the terminal.

Run the command `fotball` to display the football page.
