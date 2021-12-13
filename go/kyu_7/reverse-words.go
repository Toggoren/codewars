// Package kata https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/go
package kata

import "strings"

func ReverseWords(str string) string {
	words := strings.Split(str, " ")
	for i := 0; i < len(words); i++ {
		runes := []rune(words[i])
		for j := 0; j < len(runes)/2; j++ {
			runes[j], runes[len(runes)-j-1] = runes[len(runes)-j-1], runes[j]
		}
		words[i] = string(runes)
	}
	return strings.Join(words, " ")
}
