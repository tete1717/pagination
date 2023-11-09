import { useState } from "react";
import AlbumList from "./AlbumList"
import "./pagenation.css"
import Album from "./type"
import ReactPaginate from "react-paginate";

type Props ={
  albums:Album[];
};

const Pagenation = (props:Props) => {
  const { albums } = props;

  const itemsParPage = 6; //任意に変更

  const [itemsOffset, setItemsOffset] = useState(0);

  const endOffset = itemsOffset + itemsParPage;

  const currentAlbums = albums.slice(itemsOffset,endOffset);
  const pageCount = Math.ceil(albums.length / itemsParPage);

  const handlePageclick = (e: { selected: number }) => {
    const newOffset = ( e.selected * itemsParPage) % albums.length;
    setItemsOffset(newOffset);
  }

  return (
    <div className="albumWrapper">
      <AlbumList albums={albums} currentAlbums={currentAlbums} />
      <div className="paginationWrapper">
        <ReactPaginate 
          pageCount={pageCount} onPageChange={handlePageclick}
          nextLabel="next >"
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
      />
      </div>
    </div>
  )
}

export default Pagenation
