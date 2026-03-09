import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <img
          className="h-full w-full object-cover"
          src={BG_URL}
          alt="logo"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/home-bg.svg";
          }}
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;
