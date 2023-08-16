window.onload = function() {
    showForm('luas');//saat buka pertama kali maka akan langsung form luas
  }
  
  function showForm(type) {
    const luasForm = document.getElementById('luasForm');
    const kelilingForm = document.getElementById('kelilingForm');
    const luasOption = document.getElementById('luasOption');
    const kelilingOption = document.getElementById('kelilingOption');
    
    if (type === 'luas') {
      luasForm.style.display = 'block';
      kelilingForm.style.display = 'none';
      luasOption.classList.add('active');
      kelilingOption.classList.remove('active');
    } else if (type === 'keliling') {
      luasForm.style.display = 'none';
      kelilingForm.style.display = 'block';
      luasOption.classList.remove('active');
      kelilingOption.classList.add('active');
    }
  }

function calculateLuas() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const luas = 0.5 * alas * tinggi;
    document.getElementById('luasResult').innerText = 'Luas: ' + luas;
}

function calculateKeliling() {
    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);
    const sisi3 = parseFloat(document.getElementById('sisi3').value);
    const keliling = sisi1 + sisi2 + sisi3;
    document.getElementById('kelilingResult').innerText = 'Keliling: ' + keliling;//mirip console log untuk mengeluarkan hasil keliling di html
}
function resetLuasForm() {
    document.getElementById('alas').value = '';//mengosongkan nilai form 
    document.getElementById('tinggi').value = '';
    document.getElementById('luasResult').innerText = '';
}

function resetKelilingForm() {
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
    document.getElementById('kelilingResult').innerText = '';
}
function validateLuasForm() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(alas) || isNaN(tinggi)||alas==0 || tinggi==0) {
        alert('Masukkan angka valid untuk Alas dan Tinggi');
    } else {
        calculateLuas();
    }
}

function validateKelilingForm() {
    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);
    const sisi3 = parseFloat(document.getElementById('sisi3').value);

    if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)||sisi1==0 || sisi2==0||sisi3==0) {
        alert('Masukkan angka valid untuk semua sisi');
    } else {
        calculateKeliling();
    }
}


