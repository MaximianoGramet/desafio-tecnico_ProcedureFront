import { Route, Switch } from "wouter";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserView from "./pages/UserView";
import AdminView from "./pages/AdminView";
import NotFound from "./pages/NotFound";
import TaskView from "./pages/ProcessTracking";

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/user" component={UserView} />
        <Route path="/admin" component={AdminView} />
        <Route path="/Request" component={TaskView} />
        <Route path="/notFound" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
