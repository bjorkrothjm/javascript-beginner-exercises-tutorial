/*Exercise closely resembles 10 - consider introducing another concept here? */

function getRandomInt()
{
	let randomNumber = Math.random();
	randomNumber = Math.floor((randomNumber * 10) + 1)
	return randomNumber;
}


console.log(getRandomInt());
