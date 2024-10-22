package cmd

import (
    "path/filepath"
    "runtime"
)

func getScriptDir() string {
    _, b, _, _ := runtime.Caller(0)
    return filepath.Dir(b)
}
