/* eslint-disable react/no-unescaped-entities */

import Chip from "@/boba-components/Chip";
import ClickSwitch from "@/boba-components/ClickSwitch";
import MajorSegment from "@/boba-components/MajorSegment";
import Underline from "@/boba-components/Underline";
import { MdOutlineLocationOn } from "react-icons/md";

function Home() {
  return (
    <>
      <div className="p-4">
        <MajorSegment image={<></>} imageFirst={false}>
          <h1 className="text-6xl font-bold">Hi!</h1>
          <div>
            <h2 className="inline">I'm </h2>
            <Underline>
              <h2 className="inline">
                <ClickSwitch />
              </h2>
            </Underline>
            <h2 className="inline">.</h2>
            <Chip
              text="Melbourne, AU"
              logo={
                <span className="text-md pl-1">
                  <MdOutlineLocationOn />
                </span>
              }
            />
          </div>
        </MajorSegment>

        <p></p>
      </div>
    </>
  );
}

export default Home;
