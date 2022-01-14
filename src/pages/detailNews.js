import Header from "../components/header";
import News from "../components/news";

const HomePage = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto">
            ${Header.render()}
            <main>
                <div class="banner">
                    <img src="https://picsum.photos/1500/400" />
                </div>
                <div class="news">
                    ${News.render()}
                </div>
            </main>
            <footer class="bg-blue-900 text-center py-4">
                <p class="mb-0 text-white">Copy by Datlt</p>
            </footer>
        </div>
           
        `;
    },
};
export default HomePage;