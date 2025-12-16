import { Header, Footer, Main } from "../components/index";
import { Cart } from "../features/index";
import {FTItems, ItemsCounter} from '../components/ui/index'

export default function App() {
    return (
        <>
            <Header />
                <Main>
                    <Cart>
                        <ItemsCounter />
                    </Cart>
                    <FTItems />
                </Main>
            <Footer />
        </>
    )
}