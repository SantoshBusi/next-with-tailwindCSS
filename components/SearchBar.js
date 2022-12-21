import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="max-w-[975px] h-[50px] w-full rounded-[10px] flex items-center border-2 border-[#D1D1D1] bg-[#FFFFFF] mt-5">
        <span className="px-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5006 13.9996H14.7106L14.4306 13.7296C15.6306 12.3296 16.2506 10.4196 15.9106 8.38965C15.4406 5.60965 13.1206 3.38965 10.3206 3.04965C6.09063 2.52965 2.53063 6.08965 3.05063 10.3196C3.39063 13.1196 5.61063 15.4396 8.39063 15.9096C10.4206 16.2496 12.3306 15.6296 13.7306 14.4296L14.0006 14.7096V15.4996L18.2506 19.7496C18.6606 20.1596 19.3306 20.1596 19.7406 19.7496C20.1506 19.3396 20.1506 18.6696 19.7406 18.2596L15.5006 13.9996ZM9.50063 13.9996C7.01063 13.9996 5.00063 11.9896 5.00063 9.49965C5.00063 7.00965 7.01063 4.99965 9.50063 4.99965C11.9906 4.99965 14.0006 7.00965 14.0006 9.49965C14.0006 11.9896 11.9906 13.9996 9.50063 13.9996Z"
              fill="#868B8F"
            />
          </svg>
        </span>

        <input
          className="text-md text-[#868B8F] outline-none w-[680px]"
          type="text"
          placeholder="Search documents and help resources"
        />
      </div>
    </>
  );
};

export default SearchBar;