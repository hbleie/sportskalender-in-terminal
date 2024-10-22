package cmd

import (
    "fmt"
    "os/exec"
    "github.com/spf13/cobra"
)

var fotballCmd = &cobra.Command{
    Use:   "fotball",
    Short: "Returns football events",
    Run: func(cmd *cobra.Command, args []string) {
        scriptDir := getScriptDir()
        execCmd := exec.Command("node", scriptDir+"/fotball.js")
        output, err := execCmd.CombinedOutput()
        if err != nil {
            fmt.Println("Error:", err)
        }
        fmt.Println(string(output))
    },
}
