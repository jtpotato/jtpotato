import { ReactNode } from "react";

type MajorSegmentProps = {
  image: ReactNode;
  imageFirst: boolean;
};

function MajorSegment(props: React.PropsWithChildren<MajorSegmentProps>) {
  return (
    <>
      <div className="p-4 rounded-lg flex flex-row bg-white/5 h-96">
        {props.imageFirst ? props.image : <> </>}
        <div className="p-16 flex justify-center flex-col flex-grow">{props.children}</div>
        {!props.imageFirst ? props.image : <> </>}
      </div>
    </>
  );
}

export default MajorSegment;
