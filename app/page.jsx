import FigmaWebsite from '../components/figma-website/FigmaWebsite';
import OurWebsite from '../components/OurWebsite';
import DesignComparison from '../components/design-comparison/DesignComparison';
import {readDesignPreference} from '../lib/read-design-preference';

export const metadata={title:'კრედო ბანკი · Design comparison'};
export default async function Home({searchParams}){
  const initialDesign=await readDesignPreference(searchParams);
  return <DesignComparison initialDesign={initialDesign} ours={<OurWebsite/>} other={<FigmaWebsite/>}/>;
}
