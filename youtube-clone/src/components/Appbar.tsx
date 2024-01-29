import { SearchBar } from "./SearchBar";

export const Appbar = () => {
  return (
    <div className="flex justify-between pt-1 p-3">
      <div className="text-md inline-flex items-centre pb-2">Youtube</div>
      <div>
        <SearchBar />
      </div>
      <div>Sign In</div>
    </div>
  );
};
