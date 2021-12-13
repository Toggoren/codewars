// Package kata https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/go
package kata

import (
	"math"
	"strings"
)

func FindShort(s string) int {
	words := strings.Split(s, " ")
	shortestWordLen := math.MaxInt64
	for i := 0; i < len(words); i++ {
		if len(words[i]) < shortestWordLen {
			shortestWordLen = len(words[i])
		}
	}
	return shortestWordLen
}
