import { MiniCardHome } from "../../UI/miniCardHome";

export function MiniCardsSection() {
  return (
    <>
      <div className="w-8/12 flex flex-row gap-7">
        <MiniCardHome
          title="30"
          tC={"text-black"}
          description="Last 30 "
          dC={"text-forth"}
          color="bg-firstWhite"
          unableBar={true}
          progressNumber={30}
        />
        <MiniCardHome
          title="5"
          tC={"text-firstWhite"}
          description="Last 30 "
          dC={"text-firstWhite"}
          color="bg-forth"
          unableBar={true}
          progressNumber={15}
        />
        <MiniCardHome
          title="41"
          tC={"text-black"}
          description="Last 30"
          dC={"text-forth"}
          color="bg-firstWhite"
          unableBar={true}
          progressNumber={45}
        />
        <MiniCardHome
          title="53"
          tC={"text-black"}
          description="Last 30 "
          dC={"text-forth"}
          color="bg-firstWhite"
          unableBar={true}
          progressNumber={93}
        />
        <MiniCardHome
          tC={"text-firstWhite"}
          title="80"
          description="Last 30 "
          dC={"text-forth"}
          color="bg-orange-200"
          unableBar={false}
          progressNumber={0}
          image="/dartboard.png"
        />
      </div>
    </>
  );
}
