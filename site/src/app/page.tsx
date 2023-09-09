/* eslint-disable react/no-unescaped-entities */

import ClickSwitch from "@/boba-components/ClickSwitch";
import MajorSegment from "@/boba-components/MajorSegment";
import Underline from "@/boba-components/Underline";

function Home() {
  return (
    <>
      <div className="p-4">
        <MajorSegment image={<div></div>} imageFirst={false}>
          <h1 className="text-6xl font-bold">Hi!</h1>
          <div>
            <h2 className="inline">I'm </h2>
            <Underline>
              <h2 className="inline">
                <ClickSwitch />
              </h2>
            </Underline>

            <h2 className="inline">.</h2>
          </div>
        </MajorSegment>

        <p></p>
      </div>
    </>
  );
}

export default Home;
