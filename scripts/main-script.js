const App = {
	data() {
		return {
			counter: true,
			numbers: ["1.25", "3.9", "1.43", "2.85", "1000"],
			buttonNumbers: [],
			alert: '',
			inversion: []
		}
	},
	methods: {
		buttonClick() {
			if (this.numbers.length === 5) {
				for (let i = 0; i < 5; i++) {
					this.buttonNumbers[i] = this.numbers[i];
				}
				this.inversionSum();
				this.counter = false;
			} else {
				this.alert = 'Заполните все поля!';
			}
		},
		inversionSum() {
			this.inversion[0] = (1 / Number(this.buttonNumbers[0])) + (1 / Number(this.buttonNumbers[1]));
			this.inversion[1] = (1 / Number(this.buttonNumbers[2])) + (1 / Number(this.buttonNumbers[3]));
			this.inversion[0] = this.inversion[0].toFixed(3);
			this.inversion[1] = this.inversion[1].toFixed(3);
		}
	}
}

Vue.createApp(App).mount('#app');