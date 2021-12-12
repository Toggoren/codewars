// Package kata https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/go
package kata

import "strings"

func ReverseWords(str string) string {
	words := strings.Split(str, " ")
	for i := 0; i < len(words)/2; i++ {
		words[i], words[len(words)-i-1] = words[len(words)-i-1], words[i]
	}
	return strings.Join(words, " ")
}
