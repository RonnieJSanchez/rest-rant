
const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive">No comments yet!</h3>;
  let rating = <h3 className="inactive">Not yet rated</h3>;
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars;
    }, 0);
    let averageRating = Math.round(sumRatings / data.place.comments.length);
    let stars = "";
    for (let i = 0; i < averageRating; i++) {
      stars += "⭐️";
    }
    rating = <h3>{stars} stars</h3>;
    comments = data.place.comments.map((comment) => {
      return (
        <div className="col-sm-4 rant-box">
          <h2 className="rant">{comment.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
          <h4>{comment.content}</h4>
          <h3>
            <stong>- {comment.author}</stong>
          </h3>
          <h4>Rating: {comment.stars}</h4>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img
              className="img-fluid"
              src={data.place.pic}
              alt={data.place.name}
            />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6 show-box">
            <h1>{data.place.name}</h1>
            <div>
              <h2>Rating</h2>
              {rating}
              <br />
            </div>
            <div>
              <h2>Desciption</h2>
              <h3>{data.place.showEstablished()}</h3>
              <h4>Serving {data.place.cuisines}</h4>
            </div>
            <a
              href={`/places/${data.place.id}/edit`}
              className="btn btn-warning"
            >
              Edit
            </a>
            <form
              method="POST"
              action={`/places/${data.place.id}?_method=DELETE`}
            >
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
          <hr />
          <div className="row">
            <div className="row comment-box">
              <h2>
                <br />
                Comments
              </h2>
              {comments}
            </div>
            <hr />
            <div className="rant-post-box">
              <h1>Got Your Own Rant or Rave?</h1>
              <form
                className="row g-3"
                method="POST"
                action={`/places/${data.place.id}/comment`}
              >
                <div className="col-12">
                  <label htmlFor="content" className="form-label">
                    Your Comment
                  </label>
                  <textarea
                    className="form-control"
                    type="text"
                    id="content"
                    name="content"
                  ></textarea>
                </div>
                <div className="col-md-4">
                  <label htmlFor="author" className="form-label">
                    Your Name
                  </label>
                  <input className="form-control" id="author" name="author" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="stars" className="form-label">
                    Stars
                  </label>
                  <input
                    className="form-range"
                    type="range"
                    id="stars"
                    name="stars"
                    min="1"
                    max="5"
                    step="0.5"
                  />
                </div>
                <div className="col-md-2">
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="rant"
                      id="rant-checkbox"
                    >
                      Rant?
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rant"
                      name="rant"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Add Comment"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;