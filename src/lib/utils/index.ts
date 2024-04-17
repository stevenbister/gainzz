export function padNumber(num: number, size: number = 2): string {
	let s = num + '';
	while (s.length < size) s = '0' + s;
	return s;
}
