
const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
      <Def>
        <main>
          <div className="row">
            <div className="col-sm-6">
              <img src={data.place.name} alt={data.place.name} />
              <h3>
                Located in {data.place.city}, {data.place.state}
              </h3>
              <h2>
                <img
                  className="showImage"
                  src={data.place.pic}
                  alt="Show Food"
                />
              </h2>
            </div>
          </div>
          <h2>Rating</h2>
          <div>
            <p>Not Rated</p>
          </div>
          <h2>Description</h2>
          <div>
           <h3> 
            {data.place.showEstablished()}
           </h3>
           <h4>
            Serving {data.place.cuisines}
           </h4>
          </div>
          <h2>Comments</h2>
          <div>
            <p>No Comments Yet</p>
          </div>
          <div>
            <h3>
              <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit
              </a>
              <form method="POST" action={`places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>
            </h3>
            <h2>Comments</h2>
            {comments}
          </div>
        </main>
      </Def>
    );
}

module.exports = show