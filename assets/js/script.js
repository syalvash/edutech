(function() {
    // Tanggal akhir untuk countdown (misalnya, 31 Desember tahun berikutnya)
    var endDate = new Date(((new Date()).getFullYear() + 1) + "/12/31 23:59:59").getTime();
  
    // Fungsi untuk mengupdate timer setiap detik
    function updateTimer() {
      var now = new Date().getTime();
      var timeRemaining = endDate - now;
  
      if (timeRemaining <= 0) {
        // Countdown selesai, lakukan tindakan yang sesuai
        clearInterval(timerInterval);
        document.getElementById("counter").innerHTML = "Countdown Selesai";
      } else {
        // Hitung waktu yang tersisa dalam hari, jam, menit, dan detik
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        // Update elemen HTML dengan nilai yang dihitung
        document.querySelector(".days .value").innerText = padZero(days);
        document.querySelector(".hours .value").innerText = padZero(hours);
        document.querySelector(".minutes .value").innerText = padZero(minutes);
        document.querySelector(".seconds .value").innerText = padZero(seconds);
      }
    }
  
    // Fungsi untuk menambahkan "0" di depan angka jika kurang dari 10
    function padZero(number) {
      return (number < 10 ? "0" : "") + number;
    }
  
    // Jalankan fungsi updateTimer() untuk pertama kali
    updateTimer();
  
    // Set interval untuk memperbarui timer setiap 1 detik
    var timerInterval = setInterval(updateTimer, 1000);
  })();