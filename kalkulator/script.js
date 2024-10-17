let result = document.getElementById('screen');
let currentOperation = ''; // Variabel untuk menyimpan operasi yang dipilih

const display = (a) => {
    if (a === 'clear') {
        result.value = '';
        currentOperation = ''; // Reset operasi saat di-clear
    } else if (a === 'del') {
        result.value = result.value.slice(0, -1);
    } else {
        result.value += a; // Menampilkan angka yang ditekan
    }
};

// Fungsi untuk menangani operasi tanpa menampilkannya
const performOperation = (operation) => {
    if (result.value) { // Pastikan ada nilai yang ditampilkan
        currentOperation = operation; // Simpan operasi yang dipilih
        // Operasi tidak ditampilkan di layar
        if (operation === '^') {
            result.value += '^'; // Tambahkan simbol pangkat ke layar
        } else {
            result.value += operation; // Tambahkan operasi lain ke input
        }
    }
};

// Fungsi untuk menghitung hasil
const calculateResult = () => {
    try {
        if (result.value.includes('^')) { 
            // Pisahkan angka sebelum dan sesudah simbol '^'
            let [base, exponent] = result.value.split('^');
            result.value = Math.pow(parseFloat(base), parseFloat(exponent)); // Hitung pangkat
        } else {
            result.value = eval(result.value); // Hitung hasil dari ekspresi lainnya
        }
        currentOperation = ''; // Reset operasi setelah hasil ditampilkan
    } catch (error) {
        alert('Error');
    }
};
