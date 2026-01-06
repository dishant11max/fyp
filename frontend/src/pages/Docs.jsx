
import React, { useState } from "react";
import { 
  Search, 
  BookOpen, 
  FileCode, 
  Hash, 
  Braces, 
  FileText, 
  Zap, 
  Layers, 
  ChevronRight, 
  Share2, 
  Copy 
} from "lucide-react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const DocCodeBlock = ({ lang, code, title }) => (
  <div className="my-6 rounded-lg overflow-hidden border border-zinc-800 bg-[#1e1e1e] group">
    <div className="px-4 py-2 bg-zinc-900 border-b border-zinc-800 text-xs text-zinc-500 font-mono flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
        <span className="w-2 h-2 rounded-full bg-yellow-500/50"></span>
        <span className="w-2 h-2 rounded-full bg-green-500/50"></span>
        <span className="ml-2 text-zinc-400">{title || lang}</span>
      </div>
      <button className="flex items-center gap-1 opacity-60 hover:opacity-100 hover:text-white transition-opacity">
        <Copy size={12} /> <span className="text-[10px]">Copy</span>
      </button>
    </div>
    <pre className="p-4 overflow-x-auto text-sm font-mono text-zinc-300 leading-relaxed scrollbar-thin scrollbar-thumb-zinc-700">
      <code>{code}</code>
    </pre>
  </div>
);

const DocSection = ({ title, children }) => (
  <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="text-3xl font-bold text-white mb-6 pb-4 border-b border-zinc-800 flex items-center gap-3">
      {title}
    </h2>
    <div className="text-zinc-400 space-y-6 leading-relaxed">
      {children}
    </div>
  </div>
);

const SubHeader = ({ children }) => (
  <h3 className="text-xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
    <ChevronRight size={18} className="text-violet-500" />
    {children}
  </h3>
);

const DocsPage = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('intro');

  const navItems = [
    { id: 'intro', label: 'Introduction', icon: <BookOpen size={16} /> },
    { type: 'divider', label: 'Web Development' },
    { id: 'html', label: 'HTML5', icon: <FileCode size={16} /> },
    { id: 'css', label: 'CSS3', icon: <Hash size={16} /> },
    { id: 'js', label: 'JavaScript', icon: <Braces size={16} /> },
    { type: 'divider', label: 'Programming' },
    { id: 'python', label: 'Python 3', icon: <FileText size={16} /> },
  ];

  return (
    <div className="bg-black text-zinc-300 min-h-screen font-sans selection:bg-violet-900/30 selection:text-white">
      <Navbar onNavigate={onNavigate} currentView="docs" />
      
      <div className="max-w-7xl mx-auto pt-24 px-6 flex items-start gap-12">
        {/* Sidebar Navigation */}
        <aside className="hidden md:block w-64 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto border-r border-zinc-800 pr-6 scrollbar-thin scrollbar-thumb-zinc-800">
          <div className="mb-6 relative">
            <Search className="absolute left-3 top-2.5 text-zinc-500" size={14} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-md py-2 pl-9 pr-4 text-sm text-zinc-300 focus:outline-none focus:border-violet-600 focus:bg-zinc-900 transition-colors"
            />
          </div>
          
          <nav className="space-y-1">
            {navItems.map((item, idx) => {
              if (item.type === 'divider') {
                return (
                  <div key={idx} className="pt-6 pb-2 text-xs font-bold text-zinc-600 uppercase tracking-widest pl-3">
                    {item.label}
                  </div>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all duration-200 ${
                    activeTab === item.id 
                      ? "bg-violet-600/10 text-violet-300 font-medium border-l-2 border-violet-500" 
                      : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/50"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-h-[calc(100vh-8rem)] pb-20">
          
          {/* INTRODUCTION */}
          {activeTab === 'intro' && (
            <DocSection title="Introduction">
              <p className="text-lg">Welcome to the <strong>.repl documentation</strong>. This guide serves as a comprehensive reference for the technologies supported by our platform.</p>
              
              <SubHeader>Getting Started</SubHeader>
              <p>To begin, simply navigate to the <strong>IDE</strong> tab. Select your desired language from the file explorer, or create a new file.</p>
            </DocSection>
          )}

          {/* HTML5 */}
          {activeTab === 'html' && (
            <DocSection title="HTML5 Documentation">
              <p className="text-lg"><strong>HyperText Markup Language (HTML)</strong> defines the structure of web pages. It uses "markup" to annotate text, images, and other content for display in a web browser.</p>
              
              <SubHeader>Document Structure</SubHeader>
              <p>Every HTML5 document requires a specific structure including the `doctype`, `html`, `head`, and `body` tags.</p>
              <DocCodeBlock lang="html" title="index.html" code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>`} />

              <SubHeader>Semantic Elements</SubHeader>
              <p>Semantic HTML introduces tags that clearly describe their meaning to both the browser and the developer.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                  <code className="text-violet-400 font-bold block mb-2">&lt;header&gt;</code>
                  <span className="text-sm">Container for introductory content or navigation links.</span>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                  <code className="text-violet-400 font-bold block mb-2">&lt;nav&gt;</code>
                  <span className="text-sm">Defines a set of navigation links.</span>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                  <code className="text-violet-400 font-bold block mb-2">&lt;article&gt;</code>
                  <span className="text-sm">Independent, self-contained content.</span>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                  <code className="text-violet-400 font-bold block mb-2">&lt;section&gt;</code>
                  <span className="text-sm">Thematic grouping of content, typically with a heading.</span>
                </div>
              </div>

              <SubHeader>Forms & Inputs</SubHeader>
              <p>Forms are used to collect user input.</p>
              <DocCodeBlock lang="html" title="Form Example" code={`<form action="/submit" method="POST">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="pass">Password:</label>
  <input type="password" id="pass" name="password">
  
  <button type="submit">Log In</button>
</form>`} />
            </DocSection>
          )}

          {/* CSS3 */}
          {activeTab === 'css' && (
             <DocSection title="CSS3 Documentation">
               <p className="text-lg"><strong>Cascading Style Sheets (CSS)</strong> describe how HTML elements should be displayed. CSS3 introduces powerful new features for layout and animation.</p>
               
               <SubHeader>The Box Model</SubHeader>
               <p>All HTML elements can be considered as boxes. The CSS box model consists of margins, borders, padding, and the actual content.</p>
               <DocCodeBlock lang="css" title="Box Model" code={`.box {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
  /* Total width = 300 + 30 + 100 + 40 = 470px */
}`} />

               <SubHeader>Flexbox Layout</SubHeader>
               <p>Flexbox provides a more efficient way to lay out, align, and distribute space among items in a container.</p>
               <DocCodeBlock lang="css" title="Flexbox" code={`.container {
  display: flex;
  justify-content: center; /* Horizontally center */
  align-items: center;     /* Vertically center */
  gap: 1rem;               /* Space between items */
}

.item {
  flex: 1;                 /* Grow to fill space */
}`} />

              <SubHeader>CSS Grid</SubHeader>
              <p>CSS Grid Layout is a two-dimensional layout system for the web.</p>
              <DocCodeBlock lang="css" title="Grid Layout" code={`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 Equal columns */
  grid-gap: 20px;
}

.header {
  grid-column: 1 / -1; /* Span all columns */
}`} />
             </DocSection>
          )}

          {/* JAVASCRIPT */}
          {activeTab === 'js' && (
            <DocSection title="JavaScript Documentation">
              <p className="text-lg"><strong>JavaScript</strong> is the programming language of the Web. It is an interpreted, lightweight language used to create dynamic content.</p>
              
              <SubHeader>Modern Variables (ES6+)</SubHeader>
              <p>Always prefer <code>let</code> and <code>const</code> over <code>var</code> for better scope management.</p>
              <DocCodeBlock lang="javascript" title="Variables" code={`const PI = 3.14159; // Cannot be reassigned
let score = 0;      // Can be reassigned

// Template Literals
console.log(\`Current score is \${score}\`);`} />

              <SubHeader>DOM Manipulation & Events</SubHeader>
              <p>JavaScript can change the HTML content and styles in response to user events.</p>
              <DocCodeBlock lang="javascript" title="DOM & Events" code={`const btn = document.querySelector('#myBtn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.style.backgroundColor = '#1e1e1e';
  alert('Dark Mode Activated!');
});`} />

              <SubHeader>Asynchronous JavaScript</SubHeader>
              <p>Handling operations that take time (like fetching data) using Promises and Async/Await.</p>
              <DocCodeBlock lang="javascript" title="Async/Await" code={`async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}`} />
              
              <SubHeader>Array Methods</SubHeader>
              <p>Essential functional methods for data manipulation.</p>
              <DocCodeBlock lang="javascript" title="Map & Filter" code={`const numbers = [1, 2, 3, 4, 5];

// Map: Transform elements
const doubled = numbers.map(num => num * 2); 
// Result: [2, 4, 6, 8, 10]

// Filter: Select elements
const evens = numbers.filter(num => num % 2 === 0);
// Result: [2, 4]`} />
            </DocSection>
          )}

          {/* PYTHON */}
          {activeTab === 'python' && (
            <DocSection title="Python 3 Documentation">
              <p className="text-lg"><strong>Python</strong> is a high-level, general-purpose programming language known for its readability and vast standard library.</p>
              
              <SubHeader>Data Structures</SubHeader>
              <p>Python includes powerful built-in data structures like Lists, Dictionaries, and Tuples.</p>
              <DocCodeBlock lang="python" title="Dictionaries & Lists" code={`# Lists (Mutable)
fruits = ["apple", "banana", "cherry"]
fruits.append("date")

# Dictionaries (Key-Value Pairs)
user = {
    "name": "Alex",
    "age": 25,
    "role": "Admin"
}

print(user["name"]) # Output: Alex`} />

              <SubHeader>Control Flow</SubHeader>
              <p>Standard conditional logic and loops.</p>
              <DocCodeBlock lang="python" title="Logic" code={`def check_status(age):
    if age >= 18:
        return "Adult"
    else:
        return "Minor"

# Loop through a list
for i in range(5):
    print(f"Index: {i}")`} />

              <SubHeader>Object-Oriented Programming (OOP)</SubHeader>
              <p>Python supports classes and inheritance.</p>
              <DocCodeBlock lang="python" title="Classes" code={`class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
    
    def bark(self):
        return f"{self.name} says Woof!"

my_dog = Dog("Buddy", "Golden Retriever")
print(my_dog.bark())`} />

              <SubHeader>Error Handling</SubHeader>
              <p>Gracefully handle exceptions using try/except blocks.</p>
              <DocCodeBlock lang="python" title="Try/Except" code={`try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
finally:
    print("Execution complete.")`} />
            </DocSection>
          )}

          <div className="mt-20 pt-8 border-t border-zinc-800 flex justify-between text-sm text-zinc-500">
             <span>© 2026 .repl Docs</span>
             <a href="#" className="flex items-center gap-2 hover:text-violet-400 transition-colors">
               <Share2 size={14} /> Share this page
             </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default DocsPage;