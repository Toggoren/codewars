// Package kata https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/go
package kata

func NbYear(p0 int, percent float64, aug int, p int) int {
	year := 0
	currentPopulation := float64(p0)
	for currentPopulation < float64(p) {
		currentPopulation += currentPopulation*(percent/100.0) + float64(aug)
		year += 1
	}
	return year
}
