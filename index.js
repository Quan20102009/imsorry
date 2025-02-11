const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "Tớ thật sự xin lỗi cậu rất rất nhiều🥹",
    "I miss you",
    "To me, you are perfect",
    "Thank god I found you",
    "Cậu tha lỗi cho tớ nha 😭",
    "Tớ có hơi khờ khờ, ngốc ngốc khi lỡ lời làm cậu giận",
    "No regrets, just love",
    " Linh ơi, cậu cho tớ 1 cơ hội sửa sai được không  (˘･_･˘)",
    "Được nhắn tin với cậu là tớ vui lắm luôn đấy",
    "Tớ hứa sẽ cố gắng thay đổi",
    "Tớ sẽ chú trọng lời nói, quan tâm cảm xúc của cậu hơn🥹",
    "...to the moon and back",
    "You are the reason for my smile",
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})