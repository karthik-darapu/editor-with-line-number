const textArea = document.getElementById('textArea');
const lineNumbers = document.getElementById('lineNumbers');
const lineInput = document.getElementById('lineInput');
const fileInput = document.getElementById('fileInput');

function updateLineNumbers() {
  const lines = textArea.value.split('\n').length;
  lineNumbers.innerHTML = '';
  for (let i = 1; i <= lines; i++) {
    const line = document.createElement('div');
    line.textContent = i;
    lineNumbers.appendChild(line);
  }
}

function syncScroll() {
  lineNumbers.scrollTop = textArea.scrollTop;
}

function jumpToLine() {
  const line = parseInt(lineInput.value);
  const lines = textArea.value.split('\n');
  if (isNaN(line) || line < 1 || line > lines.length) {
    alert('Invalid line number');
    return;
  }

  const lineHeight = parseFloat(getComputedStyle(textArea).lineHeight);
  textArea.scrollTop = (line - 1) * lineHeight;

  highlightLine(line);
}

function highlightLine(lineNumber) {
  const lines = textArea.value.split('\n');
  const highlightedText = lines
    .map((line, index) =>
      index + 1 === lineNumber ? `>>> ${line}` : line
    )
    .join('\n');
  const originalCursor = textArea.selectionStart;

  textArea.value = highlightedText;
  updateLineNumbers();

  setTimeout(() => {
    textArea.selectionStart = textArea.selectionEnd = originalCursor;
  }, 10);
}

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    textArea.value = event.target.result;
    updateLineNumbers();
  };
  reader.readAsText(file);
});

function highlightCurrentLine() {
  const cursorPos = textArea.selectionStart;
  const textBeforeCursor = textArea.value.slice(0, cursorPos);
  const lineIndex = textBeforeCursor.split('\n').length;
  highlightLine(lineIndex);
}

window.onload = updateLineNumbers;
