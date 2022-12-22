import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <Layout>
      <Profile/>
      <Menu/>
    </Layout>
  )
}