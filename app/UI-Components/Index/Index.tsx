import { Hero } from "./Hero/page";
import HighlyRatedArticle from "./HighlyRatedArticle/page";
import PopularTags from "./PopularTags/page";
import RecentPosts from "./RecentPosts/page";

export default function Index() {
  return (
    <>
      <Hero /> 
      <HighlyRatedArticle/>
      <PopularTags />
      <RecentPosts/>
    </>
  )
}