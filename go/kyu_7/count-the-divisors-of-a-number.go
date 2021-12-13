// Package kata https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/go
package kata

func Divisors(n int) int {
	count := 0
	for i := 1; i <= n; i++ {
		if n%i == 0 {
			count += 1
		}
	}
	return count
}
