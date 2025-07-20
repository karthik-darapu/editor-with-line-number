📝 Text Editor with Line Numbers and Jump-to-Line Feature
This is a simple, lightweight text editor built using HTML, CSS, and JavaScript. It displays line numbers alongside a text area and allows users to jump directly to a specific line, making it ideal for editing and navigating long blocks of text or code.

🚀 Features
✅ Real-time line number updates as you type

🔢 Jump to a specific line using the input box

🧭 Auto-scroll to the specified line

📜 Clean and scrollable layout

🎨 Responsive and minimal design

📸 Demo

📁 Project Structure
bash
Copy
Edit
text-editor/
├── index.html         # Main HTML structure
├── style.css          # Editor styling
└── script.js          # JS logic for line jump and numbering
🛠️ Installation
No installation required. Just open index.html in any modern browser.

Or use a live server:

bash
Copy
Edit
# Using VS Code Live Server extension or Python's http server:
python -m http.server
Then visit http://localhost:8000 in your browser.

📌 Usage
Type or paste any text in the editor.

Line numbers will update automatically.

Enter a line number in the input box and click "Go" to scroll to that line.

📂 Example Code Snippet
js
Copy
Edit
function jumpToLine(lineNumber) {
  const lines = textarea.value.split('\n');
  const charCount = lines.slice(0, lineNumber - 1).join('\n').length;
  textarea.setSelectionRange(charCount, charCount);
  textarea.focus();
}
✅ TODO
 Add file upload/download support

 Syntax highlighting

 Error handling for invalid line numbers

🧑‍💻 Author
Karthik Darapu

📄 License
This project is licensed under the MIT License.

