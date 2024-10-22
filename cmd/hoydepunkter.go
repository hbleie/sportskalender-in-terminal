package cmd

import (
    "fmt"
    "os/exec"
    "github.com/spf13/cobra"
)

var hoydepunkterCmd = &cobra.Command{
    Use:   "høydepunkter",
    Short: "Returns highlight events",
    Run: func(cmd *cobra.Command, args []string) {
        scriptDir := getScriptDir()
        execCmd := exec.Command("node", scriptDir+"/hoydepunkter.js")
        output, err := execCmd.CombinedOutput()
        if err != nil {
            fmt.Println("Error:", err)
        }
        fmt.Println(string(output))
    },
}
