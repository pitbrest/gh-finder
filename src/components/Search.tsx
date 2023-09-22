import { useState } from "react";
import { SearchProps } from "types";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import Button from "./Button";

function Search({ hasError, onSubmit }: SearchProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim()) {
      await onSubmit(inputValue);
      setInputValue("");
    }
  };

  return (
    <form
      className="mb-12 search"
      onSubmit={handleSubmit}
    >
      <div className="relative">
        <label htmlFor="search">
          <SearchIcon className="w-8 h-8 absolute top-[1.1rem] left-2 md:left-3" />
        </label>
        <input
          className="search-input placeholder-neutral-950 w-full py-5 ps-11 px-2 rounded-lg tracking-wider pr-[90px] md:ps-12"
          type="text"
          name="userName"
          id="search"
          placeholder={hasError ? "" : "search GH user ..."}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
        />
        {hasError && !inputValue && (
          <div className="text-red-600 font-bold absolute top-[22px] right-[6.5rem]">
            No results found...
          </div>
        )}
        <Button>search</Button>
      </div>
    </form>
  );
}

export default Search;
