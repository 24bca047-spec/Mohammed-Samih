// Handle image preview
const upload = document.getElementById("upload");
const previewImg = document.getElementById("preview-img");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

upload.addEventListener("change", () => {
  const file = upload.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      previewImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Simulate AI Fit Check
checkBtn.addEventListener("click", () => {
  if (!previewImg.src) {
    result.textContent = "⚠️ Please upload an outfit first!";
    return;
  }

  // Random playful rating
  const score = Math.floor(Math.random() * 100) + 1;
  let comment = "";

  if (score > 80) comment = "🔥 Stylish! Fit on point!";
  else if (score > 50) comment = "👌 Decent vibes, nice effort!";
  else comment = "😅 Needs a little more drip!";

  result.textContent = `AI Score: ${score}/100 — ${comment}`;
});