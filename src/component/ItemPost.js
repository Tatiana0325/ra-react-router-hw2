import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import useJsonFetch from "../hoocks/useJsonFetch.js";
import PostsContext from "../contexts/PostsContext.js";
moment.lang("ru");

export default function ItemPost(props) {
  const { match, history } = props;
  const { posts, url } = useContext(PostsContext);
  // eslint-disable-next-line no-unused-vars
  const [zapros, setZapros, data, loading] = useJsonFetch();
  const id = Number(match.params.id);
  const itemPost = posts.find((o) => o.id === id);

  const handleChange = (evt) => {
    history.push(`/posts/change/${id}`);
  };

  const handleRemove = (evt) => {
    setZapros({
      url: `${url}posts/${id}`,
      method: "DELETE",
    });
  };

  useEffect(() => {
    if (data) {
      history.goBack();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <React.Fragment>
      {/* <Link to={`/posts/change/${id}`}>change</Link> */}
      <Link to="/">Назад</Link>
      <div className="item-post" key={itemPost.id}>
        <div className="item-post-header">
          <div className="item-post-img"></div>
          <div>
            <p>Имя</p>
            <span>{moment(itemPost.created).fromNow()}</span>
          </div>
        </div>
        <div className="item-post-content">
          <p>{itemPost.content}</p>
        </div>
        <div className="item-post-footer">
          <button className="change button" onClick={handleChange}>
            Изменить
          </button>
          <button className="remove button" onClick={handleRemove}>
            Удалить
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
