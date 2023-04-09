import React from "react";
import "./bookmark.css";
import MangaCard from "../../Cards/MangaCard/MangaCard";
const Bookmark = () => {
  return (
    <div className="profile-bookmark">
      <div className="bookmark-title">
        <h4>bookmarks</h4>
      </div>
      <div className="profile-bookmark-content">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(() => (
          <div className="profile-book-card">
            <MangaCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
