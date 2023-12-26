const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name:'',
            NIK:'',
            confirmnik:''
        }
    },
    methods: {
        showAlert() {
            alert ('Iseng Amat...............');
        },
        setname(event, lastName) {
            return this.name = event.target.value + ' ' + lastName;
        },
        setnik(event, lastName) {
            return this.NIK = event.target.value + ' ' + lastName;
        },
        confirmedInput() {
            this.confirmnik = this.NIK;
        },
        submitForm() {
            alert('Iseng Amat');
        }
    }
});

app.mount('#assignment');