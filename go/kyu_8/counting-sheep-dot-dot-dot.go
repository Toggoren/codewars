// Package kata https://www.codewars.com/kata/54edbc7200b811e956000556/train/go
package kata

func CountSheeps(numbers []bool) int {
	sheeps := 0
	for _, number := range numbers {
		if number {
			sheeps += 1
		}
	}
	return sheeps
}
