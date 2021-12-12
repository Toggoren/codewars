// Package kata https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/go
package kata

func ReverseSeq(n int) []int {
	var result []int
	for i := n; i > 0; i-- {
		result = append(result, i)
	}
	return result
}
