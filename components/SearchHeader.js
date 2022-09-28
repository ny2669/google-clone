import React from "react";
import Image from "next/image";
import { GrSearch } from "react-icons/gr";
import { ImCross } from "react-icons/im";
import { BiMicrophone } from "react-icons/bi";
import { IoIosKeypad } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import HeaderOptions from "./HeaderOptions";

const SearchHeader = ({search, st, query,word}) => {
  return (
    <div>
      <header className="header2">
        <Image src={"/image/google.png"} alt="" width={100} height={100} className='googleImag' />
        <div>
          <form onSubmit={search} className="form2">
            <input ref={st} type='text' value={query} onChange={word} className="input2" />
            <span className="micro">
              <ImCross className="delete" />

              <BiMicrophone className="match" />
              <GrSearch className="searchBnt" />
              <button hidden>search</button>
            </span>
          </form>
        </div>
        <span className="far-right">
          <AiOutlineSetting />
          <IoIosKeypad />
        
        </span>
      </header>
      <div>
        <HeaderOptions/>
      </div>
    </div>
  );
};

export default SearchHeader;
