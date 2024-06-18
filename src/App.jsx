import { Headline } from "./headline";
import { ArticleContent } from "./article-content";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { Footer } from "./footer";

function App() {
  return (
    <div>
      {/* thẻ mở + thẻ đóng */}
      <Header></Header>

      {/* thẻ vừa mở vừa đóng */}
      <Header />
      <ArticleContent />
      <Headline />
      <Sidebar />

      <Footer />
    </div>
  );
}

export default App;
