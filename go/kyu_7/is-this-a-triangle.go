// Package kata https://www.codewars.com/kata/56606694ec01347ce800001b/train/go
package kata

func IsTriangle(a, b, c int) bool {
	if a+b > c && b+c > a && a+c > b {
		return true
	}
	return false
}
