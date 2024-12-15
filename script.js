// Definisikan CPT (Conditional Probability Tables)
const cpt = {
    Gejala_Flu: { true: 0.8, false: 0.2 },
    Gejala_Demam: { true: 0.7, false: 0.3 },
    Penyakit_Flu: {
      true: { true: 0.9, false: 0.4 },
      false: { true: 0.1, false: 0.6 }
    }
  };
  
  // Fungsi untuk menghitung probabilitas Penyakit_Flu berdasarkan gejala
  function calculateProbability(gejalaFlu, gejalaDemam) {
    const probGejalaFlu = gejalaFlu ? cpt.Gejala_Flu.true : cpt.Gejala_Flu.false;
    const probGejalaDemam = gejalaDemam ? cpt.Gejala_Demam.true : cpt.Gejala_Demam.false;
  
    const probPenyakitFluTrue =
      probGejalaFlu * probGejalaDemam * cpt.Penyakit_Flu.true.true;
    const probPenyakitFluFalse =
      probGejalaFlu * probGejalaDemam * cpt.Penyakit_Flu.false.true;
  
    return {
      true: probPenyakitFluTrue,
      false: probPenyakitFluFalse
    };
  }
  
  // Fungsi untuk menampilkan hasil
  function checkDisease() {
    const gejalaFlu = document.getElementById('gejalaFlu').checked;
    const gejalaDemam = document.getElementById('gejalaDemam').checked;
  
    const result = calculateProbability(gejalaFlu, gejalaDemam);
  
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result');
    const recommendation = document.getElementById('recommendation');
  
    // Menampilkan hasil prediksi
    resultContainer.style.display = 'block';
  
    if (result.true > result.false) {
      resultText.innerText = `Probabilitas Penyakit Flu: ${Math.round(result.true * 100)}%`;
      recommendation.innerText = "Disarankan untuk segera memeriksakan diri ke dokter untuk diagnosis lebih lanjut.";
    } else {
      resultText.innerText = `Probabilitas Penyakit Flu: ${Math.round(result.false * 100)}%`;
      recommendation.innerText = "Kemungkinan Anda tidak menderita flu. Jaga kesehatan dengan pola hidup sehat.";
    }
  }
  