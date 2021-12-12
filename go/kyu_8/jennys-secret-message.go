// Package kata https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/go
package kata

import (
	"fmt"
)

func Greet(name string) string {
	switch name {
	case "Johnny":
		return "Hello, my love!"
	default:
		return fmt.Sprintf("Hello, %s!", name)
	}
}
