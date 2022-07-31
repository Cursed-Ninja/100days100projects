import "./App.css";
import data from "./items.json";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function App() {
  const items = data.map((item) => {
    return (
      <div className="link-items">
        <div>{item.Day}</div>
        <div>{item.Name}</div>
        {item.LiveSite !== "No Link" ? (
          <a href={item.LiveSite} target="/">
            Link
          </a>
        ) : (
          <div className="no-link">No Link</div>
        )}
        <a href={item.Github} target="/">
          Link
        </a>
      </div>
    );
  });

  return (
    <div className="App">
      <header>
        <h1>100 days 100 projects</h1>
        <h3>Made with ❤️ by Shivam Mahajan</h3>
      </header>
      <div className="link-container">
        <div className="link-header">
          <div>Day</div>
          <div>Project Name</div>
          <div>Live site</div>
          <div>Github</div>
        </div>
        {items}
      </div>
      <footer>
        <h3>Made with ❤️ by Shivam Mahajan</h3>
        <div className="social-links">
          <a href="https://github.com/Cursed-Ninja" target="/">
            <GitHubIcon className="icon"/>
          </a>
          <a href="https://www.linkedin.com/in/cursed-ninja/" target="/">
            <LinkedInIcon className="icon"/>
          </a>
          <a href="mailto:shivam.sm2002@gmail.com" target="/">
            <EmailIcon className="icon"/>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
