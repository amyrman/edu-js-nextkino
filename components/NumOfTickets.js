const NumOfTickets = ({ handleNumTickets, numTickets }) => {
  const onClickFewer = () => {
    if (numTickets != 1) {
      handleNumTickets(numTickets - 1);
    }
  };
  const onClickMore = () => {
    if (numTickets != 8) {
      handleNumTickets(numTickets + 1);
    }
  };

  return (
    <div>
      <button onClick={onClickFewer}> &#10094; </button>
      <p> {numTickets}</p>
      <button onClick={onClickMore}>&#10095;</button>
    </div>
  );
};

export default NumOfTickets;
