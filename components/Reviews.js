const Reviews = ({ reviews }) => {
  if (reviews.length > 0) {
    return (
      <div>
        <ul>
          {reviews.map((review) => {
            return (
              <li key={review.comment}>
                <p>{review.date}</p>
                <p>{review.comment}</p>
                <p>{review.rating}</p>
              </li>
            );
          })}
        </ul>
        ;
      </div>
    );
  } else {
    return <p>WHAT</p>;
  }
};

export default Reviews;
