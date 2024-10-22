package cmd

import (
    "fmt"
    "github.com/spf13/cobra"
    "os"
)

var rootCmd = &cobra.Command{
    Use:   "sport",
    Short: "Sportskalender CLI tool",
    Long:  `A CLI tool to fetch sports events.`,
    Run: func(cmd *cobra.Command, args []string) {
        fmt.Println("Invalid command. Please see 'sport --help' for available commands.")
    },
}

func Execute() {
    if err := rootCmd.Execute(); err != nil {
        fmt.Println(err)
        os.Exit(1)
    }
}

func init() {
    rootCmd.AddCommand(fotballCmd)
    rootCmd.AddCommand(hoydepunkterCmd)
    rootCmd.AddCommand(vintersportCmd)
}
