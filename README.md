# Sportskalender Zsh Plugin

This is a Zsh plugin that provides commands to display the highlight page, football page or winter sports from VGs sportskalender in the terminal. The plugin is based on the [sportskalender](https://www.vg.no/sport/kalender) from VG.

<img width="713" alt="image" src="https://github.com/hbleie/sportskalender-in-terminal/assets/92336221/bc93acb7-247d-4646-a50b-c84c761c0ffd">


## Installation

### Oh My Zsh

1. Clone this repository into `$ZSH_CUSTOM/plugins` (by default `~/.oh-my-zsh/custom/plugins`)

2. Add the plugin to the list of plugins for Oh My Zsh to load
    plugins=(... sportskalender-in-terminal)

3. Start a new terminal session.

### Antigen

1. Add `antigen bundle hbleie/sportskalender-in-terminal` to your `.zshrc` with your other bundle commands.

2. Start a new terminal session.

### Zgen

1. Add `zgen load hbleie/sportskalender-in-terminal` to your `.zshrc` in the same function you're doing your other `zgen load` calls in.

2. Start a new terminal session.

### Manual

1. Clone this repository somewhere on your machine.

2. Source the file `sportskalender-in-terminal.plugin.zsh` in your `.zshrc` file.

    ```zsh
    source /path/to/sportskalender-in-terminal.plugin.zsh
    ```

3. Start a new terminal session.

## Usage

### `høydepunkter`

Displays the highlight page from VGs sportskalender in the terminal.

Run the command `sport høydepunkter` to display the highlight page.

### `fotball`

Displays the football page from VGs sportskalender in the terminal.

Run the command `sport fotball` to display the football page.

### `vintersport`

Displays all winter sports in VGs sportskalender in the terminal.

Run the command `sport vintersport` to display vintersport events

