const maxTries = 3;
const targetNumber = Math.floor(Math.random() * 10) + 1;
let numberOfTries = 0;

function guessNumber() {
  const guess = parseInt(prompt('Tebak angka antara 1 dan 10:'));
  numberOfTries++;

  if (isNaN(guess) || guess < 1 || guess > 10) {
    alert('Masukkan harus berupa angka antara 1 dan 10.');
    guessNumber();
  } else if (guess < targetNumber) {
    alert('Angka terlalu rendah. Coba lagi.');
    checkTries();
  } else if (guess > targetNumber) {
    alert('Angka terlalu tinggi. Coba lagi.');
    checkTries();
  } else {
    alert(`Selamat! Kamu berhasil menebak angka ${targetNumber}.`);
  }
}

function checkTries() {
  if (numberOfTries < maxTries) {
    alert(`Kesempatan kamu: ${maxTries - numberOfTries} kesempatan.`);
    guessNumber();
  } else {
    alert(`Maaf, kesempatan kamu sudah habis. Jawaban yang benar adalah ${targetNumber}.`);
  }
}

// Memulai permainan
guessNumber();