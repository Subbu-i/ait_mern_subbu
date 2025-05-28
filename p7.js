const trainer = {
	name : 'Nithin',
	tech1() { 
		console.log(this);
	}
};
trainer.tech1();
console.log(trainer)
let var1 = trainer.tech1 
var1() 