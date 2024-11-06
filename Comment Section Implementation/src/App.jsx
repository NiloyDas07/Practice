import "./App.css";
import CommentSection from "./components/CommentSection";

function App() {
  return (
    <>
      <h1>Blog Post</h1>

      <p className="container blog-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolor.
        Quos labore, ab ducimus neque nihil maiores laborum voluptates, eveniet
        nemo optio, itaque ipsam temporibus architecto sint debitis facere.
        Repellat!
      </p>

      <CommentSection />
    </>
  );
}

export default App;
