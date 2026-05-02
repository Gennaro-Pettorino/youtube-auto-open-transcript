function openTranscript() {
  const buttons = document.querySelectorAll('button');
  
  for (let btn of buttons) {
    const text = btn.innerText.toLowerCase();
    if (text.includes("trascrizione") || text.includes("transcript")) {
      btn.click();
      return true;
    }
  }
  return false;
}

const observer = new MutationObserver(() => {
  if (openTranscript()) {
    observer.disconnect();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});