// Package kata https://www.codewars.com/kata/56541980fa08ab47a0000040/train/go
package kata

import "fmt"

func PrinterError(s string) string {
	errorsCounter := 0
	for _, char := range s {
		switch string(char) {
		case "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m":
			continue
		default:
			errorsCounter += 1
		}
	}
	return fmt.Sprintf("%d/%d", errorsCounter, len(s))
}
