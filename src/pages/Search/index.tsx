import { useDispatch, useSelector } from "react-redux";
import { AutoSizer, List } from "react-virtualized";
import { IState } from "../../common/film";
import { fetchFilms } from "../../redux/filmSlice";
import { AppDispatch } from "../../redux/store";
import { useEffect } from "react";

const Search = () => {
  //   const dispatch = useDispatch<AppDispatch>();
  //   const data = useSelector((state: IState) => state.film.films);

  //   useEffect(() => {
  //     // Dispatch the fetchData async thunk when the component mounts
  //     dispatch(fetchFilms());
  //   }, []);

  //   const rowRenderer = ({ index, key, style }) => {
  //     const item = data[index];

  //     return (
  //       <div key={key} style={{ ...style, borderBottom: "1px solid #ccc" }}>
  //         {/* Render your row content here */}
  //         {item}
  //       </div>
  //     );
  //   };

  return (
    <h2>hi</h2>
    // <AutoSizer>
    //   {({ height, width }) => (
    //     <List
    //       width={width}
    //       height={height}
    //       rowCount={data.length}
    //       rowHeight={50} // Adjust the row height as needed
    //       rowRenderer={rowRenderer}
    //     />
    //   )}
    // </AutoSizer>
  );
};

export default Search;
