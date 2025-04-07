/*
 * @Author: Ethan && ethan@hanlife02.com
 * @Date: 2025-04-07 18:38:45
 * @LastEditors: Ethan && ethan@hanlife02.com
 * @LastEditTime: 2025-04-07 18:48:46
 * @FilePath: /web/CommentReply.js
 * @Description:
 *
 * Copyright (c) 2025 by Ethan, All Rights Reserved.
 */

import React, { useState } from "react";

const CommentReply = (props) => {
  const [isLiked, setIsliked] = useState(false);
  return (
    <div className="comment-text">
      <h5>{props.name}</h5>
      <p>{props.content}</p>
      <p>{isLiked ? "Liked" : "like"}</p>
    </div>
  );
};

export default CommentReply;
