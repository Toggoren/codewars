// Package kata https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/go
package kata

import (
	"sort"
	"strings"
)

func TwoToOne(s1 string, s2 string) string {
	letters2count := make(map[string]bool)
	for _, char := range strings.Split(s1+s2, "") {
		letters2count[string(char)] = true
	}
	var sb strings.Builder
	for char := range letters2count {
		sb.WriteString(char)
	}
	result := strings.Split(sb.String(), "")
	sort.Strings(result)
	return strings.Join(result, "")
}
