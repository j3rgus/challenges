function readAllNotifications() {
  const notifications = document.querySelectorAll("#notifications div");
  const notificationNumEl = document.getElementById("notifications-num");

  notificationNumEl.textContent = 0;
  notifications.forEach((notif) => {
    notif.classList.remove("bg-lgrayishbluea");
    const notifSignalEl = notif.querySelector(".notif-dot");
    if (notifSignalEl !== null) {
      notifSignalEl.remove();
    }
    console.log(notif.querySelector("div:nth-child(2)"));
  });
}

document
  .getElementById("notifications-read-all")
  .addEventListener("click", readAllNotifications);
