/*
 * @Author: Ethan && ethan@hanlife02.com
 * @Date: 2025-04-07 18:51:35
 * @LastEditors: Ethan && ethan@hanlife02.com
 * @LastEditTime: 2025-04-07 18:53:31
 * @FilePath: /web/App.js
 * @Description:
 *
 * Copyright (c) 2025 by Ethan, All Rights Reserved.
 */

import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Photos from "./Photos";
import Post from "./Post";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Intro />
        <Photos />
      </div>
      <Post />
    </div>
  );
};
