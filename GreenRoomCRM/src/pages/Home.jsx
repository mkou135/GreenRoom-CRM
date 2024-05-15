import { SimpleCard } from "../components/home/Piechart";


export default function Home() {
  return (
    <>
    <div className="flex flex-row justify-around mb-10">
  <SimpleCard/>
  <SimpleCard/>
  </div>
    <div className="flex flex-row justify-around mt-10">
  <SimpleCard/>
  <SimpleCard/>
  </div>

    </>
  );
}