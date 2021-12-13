// Package kata https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/go
package kata

import "strings"

func solution(str, ending string) bool {
	return strings.HasSuffix(str, ending)
}
