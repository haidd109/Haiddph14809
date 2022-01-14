import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import AdminNews from "./pages/admin/news";
import AdminAddNews from "./pages/admin/news/add";
import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print("About Page");
    },
    "/product": () => {
        print("Product Page");
    },
    "/news/:id": (value) => {
        console.log(value.data.id);
        print(DetailNewsPage.render(value.data.id));
    },
    "/admin/dashboard": () => print(Dashboard.render()),
    "/admin/news": () => print(AdminNews.render()),
    "/admin/news/add": () => print(AdminAddNews.render()),
});

router.notFound(() => print("Not Found Page"));

router.resolve();