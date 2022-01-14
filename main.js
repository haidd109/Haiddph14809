import Navigo from "navigo";
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
});

router.notFound(() => print("Not Found Page"));

router.resolve();

// class KhuanBanh {
//     constructor(luongDuong, luongBot) {
//         this.duong = luongDuong;
//         this.bot = luongBot;
//     }

//     showInfo() {
//         console.log(`
//             Lượng đường: ${this.duong}
//             Lượng Bột: ${this.bot}
//         `);
//     }
// }

// const banhDeo = new KhuanBanh(10, 20);
// banhDeo.showInfo();
// console.log(banhDeo.duong);

// function sum(a, b) {
//     return a + b;
// }
// sum(3, 4);