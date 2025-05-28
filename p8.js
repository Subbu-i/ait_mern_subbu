const student = {
	name : 'mani',
	techStudent() {
		console.log(this);
	}
};

const trainer = {
	name : 'Nithin',
	techTrainer() {
		console.log(this);
	}
};

const walk1 = trainer.techTrainer.bind(student); 
walk1();