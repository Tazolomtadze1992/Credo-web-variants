'use client';
import SiteHeader from '../SiteHeader';
import Calculator from './Calculator';
import Footer from './sections/Footer';
import './figma-native.css';
import './page.css';
import './loans.css';

const productHref=slug=>`https://credobank.ge/products/${slug}`;
const leadLoans=[
 {id:'consumer',title:'სამომხმარებლო სესხი',description:'მიიღე სესხი ნებისმიერი მიზნობრიობით და აქციე სურვილები რეალობად!',image:'d9094.png',slug:'consumer-loan',node:'1:1120'},
 {id:'auto',title:'ავტო სესხი',description:'შეიძინე ახალი ან მეორადი ავტომობილი კრედო ბანკის ავტო სესხით - მარტივად, შენზე მორგებული პირობებით.',image:'51713.png',slug:'auto-loan',node:'1:1129'},
];
const otherLoans=[
 {title:'აგრო სესხი',description:'მიიღე აგრო სესხი შენი სასოფლო-სამეურნეო საქმიანობიდან მიღებული შემოსავლის საფუძველზე.',image:'a3dc3.png',slug:'agro-loan',node:'1:1211'},
 {title:'ბიზნეს სესხი',description:'ბიზნეს სესხი 150 000 ლარამდე - მიიღე სწრაფი დაფინანსება და აქციე შენი იდეები წარმატებულ რეალობად!',image:'51bc0.png',slug:'business-loan',node:'1:1220'},
 {title:'ტურისტული სესხი',description:'განავითარე ტურისტული საქმიანობა და მიიღე მეტი შემოსავალი',image:'2a654.png',slug:'tourism-loan',node:'1:1229'},
];
const mortgageUses=['ბინის, სახლის ან კომერციული ფართის შეძენა','უძრავი ქონების მშენებლობა ან რემონტი','არსებული სესხის გადაფარვა ან გაერთიანება','გაარემონტე ან განაახლე შენი საცხოვრებელი - დააფინანსე სარემონტო სამუშაოები იპოთეკური სესხით'];
function TextLink({href,children,all=false}){return <a className="figma-loan-link" href={href}>{children}<img src={all?'/figma/738b4.svg':'/figma/6c47d.svg'} alt="" width="20" height="20"/></a>}
function LoanImage({file,title,crop=false}){return <div className={`figma-loan-image ${crop?'figma-loan-image-crop':''}`}><img src={`/figma/${file}`} alt={title}/></div>}

export default function LoanWebsite(){
 function onAction(action){
  if(action==='phone'){window.location.href='tel:+995322424242';return}
  if(action==='email'){window.location.href='mailto:info@credo.ge';return}
  if(action==='locations'){window.location.href='/#figma-locations';return}
  const destinations={apply:productHref('consumer-loan'),google:'https://onelink.to/mycredo',apple:'https://onelink.to/mycredo',chat:'https://credobank.ge/contact',terms:'https://credobank.ge/terms-and-conditions',privacy:'https://credobank.ge/privacy-policy',whatsapp:'https://wa.me/995322424242',facebook:'https://www.facebook.com/CredoBank',linkedin:'https://www.linkedin.com/company/credo-bank',instagram:'https://www.instagram.com/credo_bank',youtube:'https://www.youtube.com/@CredoBank'};
  if(destinations[action])window.open(destinations[action],'_blank','noopener,noreferrer');
 }
 return <>
  <div className="credo-shared-header"><SiteHeader/></div>
  <main className="figma-site figma-loans" data-node-id="1:1073">
   <h1 className="site-sr-only">სესხები</h1>
   <section className="figma-loan-leads figma-loan-container" id="products" aria-label="სესხები" data-node-id="1:1118">
    {leadLoans.map(loan=><article key={loan.id} className="figma-loan-lead" data-node-id={loan.node} id={loan.id}>
     <div className="figma-loan-intro"><h2>{loan.title}</h2><p>{loan.description}</p></div>
     <TextLink href={productHref(loan.slug)}>მოითხოვე</TextLink>
     <LoanImage file={loan.image} title={loan.title} crop/>
    </article>)}
   </section>
   <section className="figma-loan-mortgage figma-loan-container" id="mortgage" data-node-id="1:1139">
    <div className="figma-loan-mortgage-panel" data-node-id="1:1140">
     <LoanImage file="4fdb0.png" title="იპოთეკური სესხი" crop/>
     <div className="figma-loan-mortgage-copy"><div><h2>იპოთეკური სესხი</h2><p className="figma-loan-description">კრედო ბანკში იპოთეკური სესხის მიღება შეგიძლია. თუ შენი შემოსავალი სეზონურია ან რამდენიმე წყაროდან ფორმირდება, გადახდის გრაფიკს სრულად მოვარგებთ შენი შემოსავლების სპეციფიკას</p><ul>{mortgageUses.map(text=><li key={text}><img src="/figma/52098.svg" alt="" width="20" height="20"/><span>{text}</span></li>)}</ul></div>
      <a className="figma-primary figma-mortgage-apply" href={productHref('mortgage-loan')}>მოითხოვე სესხი</a>
     </div>
    </div>
   </section>
   <Calculator onAction={onAction} loanOnly note="გაანგარიშება საილუსტრაციოა. ზუსტ პირობებს — მათ შორის ეფექტურ საპროცენტო განაკვეთს — განაცხადის შემდეგ მიიღებ."/>
   <section className="figma-other-loans figma-loan-container" id="other-loans" data-node-id="1:1202">
    <div className="figma-other-loans-heading"><h2>სხვა სესხები</h2><TextLink href="https://credobank.ge/products" all>სრულად</TextLink></div>
    <div className="figma-other-loans-grid">{otherLoans.map(loan=><article className="figma-other-loan" key={loan.slug} data-node-id={loan.node}>
     <LoanImage file={loan.image} title={loan.title}/>
     <div className="figma-other-loan-copy"><div><h3>{loan.title}</h3><p>{loan.description}</p></div><TextLink href={productHref(loan.slug)}>სრულად</TextLink></div>
    </article>)}</div>
   </section>
  </main>
  <div className="figma-site"><footer className="figma-footer"><Footer onAction={onAction}/></footer></div>
 </>;
}
