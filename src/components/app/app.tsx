import MainPage from '../../pages/main-page/main-page';
import { TOfferList } from '../../types';

type TAppProps = {
  offerList: TOfferList;
}
function App({offerList}: TAppProps) : JSX.Element {
  return (
    <MainPage offerList={offerList}/>
  );
}

export default App;
