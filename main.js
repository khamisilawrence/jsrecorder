const btn = document.querySelector('button');

btn.addEventListener("click", async () => {
  const media = await navigator.mediaDevices.getDisplayMedia();
  const mediaRecorder = new MediaRecorder(media);
  mediaRecorder.start();

  const [video] = media.getVideoTracks();
  video.addEventListener("ended", () => {
    mediaRecorder.stop();
  });

  mediaRecorder.addEventListener("dataavailable", (e) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(e.data);
    link.download = "capture.webm";
    link.click();
  });
});
