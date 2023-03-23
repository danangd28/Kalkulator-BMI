let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let berat = document.getElementById('berat-input').value; 
    let tinggi = document.getElementById('tinggi-input').value;
    let finalbmi = (berat / (tinggi * tinggi) * 10000);
    document.getElementById('bmi-output').value = finalbmi;
})