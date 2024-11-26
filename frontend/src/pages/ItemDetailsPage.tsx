import { useParams } from 'react-router-dom';

function ItemDetailsPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Item Details</h1>
      <p>Details for item with ID: {id}</p>
      {/*hämta detaljer från API och visa dem */}
    </div>
  );
}

export default ItemDetailsPage;