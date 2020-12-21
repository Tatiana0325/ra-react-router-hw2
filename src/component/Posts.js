// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import useJsonFetch from "../hoocks/useJsonFetch.js";
import PostsContext from "../contexts/PostsContext.js";
moment.lang("ru");

export default function Posts(props) {
  // eslint-disable-next-line no-unused-vars
  const { advanced, setAdvanced, url, posts, setPosts } = useContext(
    PostsContext
  );
  // eslint-disable-next-line no-unused-vars
  const [zapros, setZapros, data] = useJsonFetch();

  useEffect(() => {
    if (!data) {
      setZapros({
        url: `${url}posts`,
        method: "GET",
      });
    }
    if (data) {
      setPosts(data.resolve);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  console.log(posts);

  return (
    <div>
      {/* {loading && 'loading...'} */}
      <div className="main-top">
        <Link to="/posts/new" className="button">
          Создать пост
        </Link>
      </div>

      {data &&
        data.resolve.map((o) => (
          <Link to={`/posts/${o.id}`}>
            <div className="item-post" key={o.id}>
              <div className="item-post-header">
                <div className="item-post-img"></div>
                <div className="item-post-name">
                  <span>Имя</span>
                  <span>{moment(o.created).fromNow()}</span>
                </div>
              </div>
              <div className="item-post-content">
                <p>{o.content}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
