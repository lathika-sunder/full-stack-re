import React, { useState, useEffect } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import "../RequestPickupComponent/InputTag.css"; 

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const InputTag = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    console.log("Tags:", tags);
  }, []); 

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  return (
    <div id="tags">
      <ReactTags
        tags={tags}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        inputFieldPosition="bottom"
        autocomplete
        allowDragDrop={false}
      />
    </div>
  );
};

export default InputTag;
