function getRandomInt()
{
	let randomNumber = Math.random();
	randomNumber = Math.floor((randomNumber * 6) + 1)
	return randomNumber;
}
console.log(getRandomInt());