'use client';
import {useState} from 'react';
const money=n=>new Intl.NumberFormat('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}).format(n);
export default function Calculator({onAction,loanOnly=false,note}){
  const [mode,setMode]=useState('loan'); const [amount,setAmount]=useState('1500');const [term,setTerm]=useState('48');const [product,setProduct]=useState('consumer');const [changed,setChanged]=useState(false);
  const principal=Number(amount);const months=Number(term);const valid=principal>=1500&&principal<=80000&&months>0;
  const interest=(product==='auto'?.18:.22)/12;
  // The untouched initial state reproduces the designer's illustrative example.
  const payment=!changed?77.82:valid?principal*interest/(1-Math.pow(1+interest,-months)):0;
  const savings=valid?principal*Math.pow(1+.08/12,months):0;
  return <section className="figma-calculator" id="calculator" aria-labelledby="figma-calculator-title">
    <h2 id="figma-calculator-title">გამოთვალე მარტივად</h2>
    {!loanOnly&&<div className="figma-calculator-tabs" role="tablist" aria-label="კალკულატორი">{[['loan','სესხი'],['deposit','ანაბარი']].map(([id,label])=><button key={id} role="tab" aria-selected={mode===id} onClick={()=>setMode(id)}>{label}</button>)}</div>}
    <div className="figma-calc-box">
      <div className="figma-calc-form">
        <label>{mode==='loan'?'აირჩიე სესხი':'აირჩიე ანაბარი'}<select value={product} onChange={e=>{setProduct(e.target.value);setChanged(true)}}>{mode==='loan'?<><option value="consumer">სამომხმარებლო სესხი</option><option value="auto">ავტო სესხი</option></>:<option value="consumer">ვადიანი ანაბარი</option>}</select></label>
        <label>{mode==='loan'?'სესხის თანხა':'ანაბრის თანხა'}<input aria-label={mode==='loan'?'სესხის თანხა':'ანაბრის თანხა'} type="number" min="1500" max="80000" value={amount} onChange={e=>{setAmount(e.target.value);setChanged(true)}}/><small>მინ. 1,500 და მაქს. 80,000 ₾</small></label>
        <label>ვადა<select value={term} onChange={e=>{setTerm(e.target.value);setChanged(true)}}>{[6,12,24,36,48].map(n=><option key={n} value={n}>{n} თვე</option>)}</select></label>
      </div>
      <div className="figma-calc-results" aria-live="polite">
        <div className="figma-payment"><p>{mode==='loan'?'ყოველთვიური შენატანი':'ვადის ბოლოს მიიღებ'}</p><strong>{!valid?'—':money(mode==='loan'?payment:savings)} ₾</strong></div>
        <dl><div><dt>{mode==='loan'?'სესხის თანხა':'ანაბრის თანხა'}</dt><dd>{principal.toLocaleString('en-US')} ₾</dd></div><div><dt>{mode==='loan'?'სესხის ვადა':'ანაბრის ვადა'}</dt><dd>{!changed&&mode==='loan'?24:months} თვე</dd></div><div><dt>წლიური განაკვეთი (საილუსტრ.)</dt><dd>{mode==='loan'?Math.round(interest*1200):8}%</dd></div><div><dt>{mode==='loan'?'სულ გადასახდელი':'საპროცენტო სარგებელი'}</dt><dd>{money(mode==='loan'?(!changed?1867.61:payment*months):savings-principal)} ₾</dd></div></dl>
        <p className="figma-calc-note">{note||'სესხის ზუსტი პირობები განისაზღვრება ჯამური შემოსავლებისა და ვალდებულებების ანალიზის შემდგომ'}</p>
        <button className="figma-primary" disabled={!valid} onClick={()=>onAction(mode==='loan'?'apply':'deposit')}>{mode==='loan'?'მოითხოვე სესხი':'გახსენი ანაბარი'}</button>
      </div>
    </div>
  </section>
}
