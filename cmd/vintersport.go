package cmd

import (
    "fmt"
    "os/exec"
    "github.com/spf13/cobra"
)

var vintersportCmd = &cobra.Command{
    Use:   "vintersport",
    Short: "Returns winter sports events",
    Run: func(cmd *cobra.Command, args []string) {
        scriptDir := getScriptDir()
        execCmd := exec.Command("node", scriptDir+"/vintersport.js")
        output, err := execCmd.CombinedOutput()
        if err != nil {
            fmt.Println("Error:", err)
        }
        fmt.Println(string(output))
    },
}
