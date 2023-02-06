import { useRef, useState, } from "react"
import { filterData, allExercises } from "../services/db";
import SubHeader from "../components/subHeader/subHeader";
import { succesiveFilterArray } from "../services/utils";
import PaginatedList from "../components/paginatedList/paginatedList";
import { useEffectOnce } from "../customHooks/customHooks";

const Home = () => {
  const [list, setList] = useState(allExercises);
  const filterObj = useRef({
    bodyPart: null,
    target: null,
    equipment: null
  });

  useEffectOnce(() => {
    console.log("Component did mount");
    return () => console.log("Component will unmount");
  }, [])

  const handleSelectedFilters = (value, key) => {
    const map = {
      "Body Parts": 'bodyPart',
      "Target Muscles": 'target',
      "Equipment": 'equipment'
    }
    filterObj.current[map[key]] = value;
    const filteredList = succesiveFilterArray(allExercises, filterObj.current);
    setList(filteredList);
  }

  return (
    <>
      <SubHeader data={{
        "Body Parts": filterData.bodyParts, 
        "Target Muscles": filterData.targetMuscles, 
        "Equipment": filterData.equipment
        }} onChange={handleSelectedFilters}/>
        <PaginatedList list={list} pageQty={2}/>
    </>
  );
};

export default Home;
