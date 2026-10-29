'use client';
import {useState} from 'react';
import SiteHeader from '../SiteHeader';
import NewsSection from '../NewsSection';
import Hero from './sections/Hero';
import Shortcuts from './sections/Shortcuts';
import Products from './sections/Products';
import MobileBank from './sections/MobileBank';
import Rates from './sections/Rates';
import Locations from './sections/Locations';
import Footer from './sections/Footer';
import Calculator from './Calculator';
import './figma-native.css';
import './page.css';

const destinations={loan:'https://credobank.ge/products/digital-loan',apply:'https://credobank.ge/products/consumer-loan',deposit:'https://credobank.ge/products/term-deposit-pro',cards:'https://credobank.ge/products/mastercard-debit-cards',transfers:'https://credobank.ge/products/international-remittance',dayavi:'/prototypes/dayavi',rcheuli:'https://credobank.ge/rcheuli',emigrants:'https://credobank.ge/emigrants',expats:'https://credobank.ge/expats',google:'https://onelink.to/mycredo',apple:'https://onelink.to/mycredo',terms:'https://credobank.ge/terms-and-conditions',privacy:'https://credobank.ge/privacy-policy',whatsapp:'https://wa.me/995322424242',facebook:'https://www.facebook.com/CredoBank',linkedin:'https://www.linkedin.com/company/credo-bank',instagram:'https://www.instagram.com/credo_bank',youtube:'https://www.youtube.com/@CredoBank'};
export default function FigmaWebsite(){
 const [mapOpen,setMapOpen]=useState(true),[location,setLocation]=useState(-1),[locationQuery,setLocationQuery]=useState(''),[filter,setFilter]=useState(''),[rateType,setRateType]=useState(false),[allRates,setAllRates]=useState(false),[chat,setChat]=useState(false);
 function onAction(action){
  const scroll=id=>document.getElementById(id)?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
  if(action==='products'){scroll('products');return}
  if(action==='locations'){scroll('figma-locations');return}
  if(action==='close-map'){setMapOpen(false);return}
  if(action==='map-default'){setLocation(-1);setMapOpen(true);return}
  if(action.startsWith('location-search:')){setLocationQuery(action.slice(16));return}
  if(action.startsWith('city:')){setLocationQuery('');return}
  if(action.startsWith('location-')){setLocation(Number(action.slice(9)));setMapOpen(true);return}
  if(action.endsWith('-filter')){setFilter(action);setMapOpen(true);return}
  if(action==='rate-type'){setRateType(v=>!v);return}
  if(action==='all-rates'){setAllRates(v=>!v);return}
  if(action==='phone'){window.location.href='tel:+995322424242';return}
  if(action==='email'){window.location.href='mailto:info@credo.ge';return}
  if(action==='chat'){setChat(v=>!v);return}
  if(destinations[action])window.open(destinations[action],'_blank','noopener,noreferrer');
 }
 return <>
  <div className="credo-shared-header"><SiteHeader/></div>
  <main className="figma-alternative-main" id="top">
   <div className="figma-site" data-map-open={mapOpen} data-location={location} data-location-filter={filter} data-rate-type={rateType}>
    <div className="figma-reference-hero"><Hero onAction={onAction}/></div>
    <div className="figma-shortcuts"><Shortcuts onAction={onAction}/></div>
    <section className="figma-products" id="products"><Products onAction={onAction}/></section>
    <Calculator onAction={onAction}/>
    <section className="figma-mobile-bank"><MobileBank onAction={onAction}/></section>
    <section className="figma-rates" id="figma-rates"><Rates onAction={onAction}/>{allRates&&<div className="figma-all-rates">{['USD','EUR','RUB'].map(c=><div key={c}><strong>{c}</strong><span>ყიდვა 2.8750 ₾</span><span>გაყიდვა 2.8718 ₾</span></div>)}</div>}</section>
    <section className="figma-locations" id="figma-locations"><Locations onAction={onAction} locationQuery={locationQuery} selectedLocation={location}/></section>
   </div>
   <NewsSection/>
  </main>
  <div className="figma-site"><footer className="figma-footer" id="figma-footer"><Footer onAction={onAction}/></footer><button className="figma-chat" aria-label="ჩატი" onClick={()=>onAction('chat')}><img src="/figma/4fe36.svg" alt=""/></button>{chat&&<div className="figma-chat-panel"><button onClick={()=>setChat(false)} aria-label="დახურვა">×</button><strong>დაგვიკავშირდი</strong><a href="tel:+995322424242">+995 32 2 42 42 42</a><a href="mailto:info@credo.ge">info@credo.ge</a></div>}</div>
 </>;
}
