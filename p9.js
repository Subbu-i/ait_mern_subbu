const trainer = {
	name : 'Nithin',
	techTrainer() {
		console.log(this);
	}
};

trainer[undefined] = 'hello' 
console.log(trainer.undefined)
console.log(trainer)