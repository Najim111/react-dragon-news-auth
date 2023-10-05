
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";



const News = () => {
    const { id } = useParams()
    const news = useLoaderData()
    const singleNews = news.find(n => n._id == id) || {}
    const { image_url, title, details } = singleNews
    // console.log(singleNews);
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-6xl">news details</h2>
                    <img className="w-full" src={image_url} alt="" />
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p>{details}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};
export default News;