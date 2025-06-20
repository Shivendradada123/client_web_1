const videoFiles = [
  "/video1.mp4",
  "/video2.mp4",
  "/video3.mp4",
  "/video4.mp4",
  "/video5.mp4",
  "/video6.mp4",
  "/video7.mp4",
  "/video8.mp4",
  "/video9.mp4",
  "/video10.mp4"
];

const container = document.getElementById("video-container");

videoFiles.forEach((file, index) => {
  const card = document.createElement("div");
  card.className = "video-card";

  card.innerHTML = `
    <video controls>
      <source src="${file}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p style="margin-top: 10px;">Video #${index + 1}</p>
  `;

  container.appendChild(card);
});
