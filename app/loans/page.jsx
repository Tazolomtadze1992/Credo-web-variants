import LoanWebsite from '../../components/figma-website/LoanWebsite';
import DesignComparison from '../../components/design-comparison/DesignComparison';
export const metadata={title:'სესხები · კრედო ბანკი'};
export default function Loans(){return <DesignComparison initialDesign={2} other={<LoanWebsite/>}/>;}
