import Card from "../components/global/Card/Card";
import Content from "../components/layouts/Content";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";


const DashboardPage = () => {
    return (
        <div>
            <Navbar />
            <Content>
                <Card>
                    Test
                </Card>
            </Content>
            <Footer />
        </div>
    )
}

export default DashboardPage;