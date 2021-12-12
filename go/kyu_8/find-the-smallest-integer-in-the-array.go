// Package kata https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/go
package kata

func SmallestIntegerFinder(numbers []int) int {
	min := numbers[0]
	for i := 1; i < len(numbers); i++ {
		if numbers[i] < min {
			min = numbers[i]
		}
	}
	return min
}
