type TGoodsListProps = {
  goodsList: string[];
}

function GoodsList({goodsList}: TGoodsListProps) : JSX.Element {
  const goods = goodsList.map((item) => <li className="offer__inside-item" key={item}>{item}</li>);
  return(
    <ul className="offer__inside-list">
      {goods}
    </ul>
  );
}

export default GoodsList;
