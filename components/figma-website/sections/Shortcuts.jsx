'use client';
const assetPathPrefix = "/figma";
const imgIcon = `${assetPathPrefix}/ed5a3.svg`;
const imgIcon1 = `${assetPathPrefix}/4fc4d.svg`;
const imgIcon2 = `${assetPathPrefix}/0b4af.svg`;
const imgIcon3 = `${assetPathPrefix}/a52f9.svg`;

export default function Shortcuts({ onAction }) {
  return (
    <div className="fg42" data-node-id="1:470" data-name="center">
      <div className="fg43" data-node-id="1:471" data-name="section">
        <div className="fg44" data-node-id="1:472" data-name="div">
          <div className="fg45" data-node-id="1:473" data-name="row">
            <button className="fg46" data-node-id="1:474" data-name="a" type="button" onClick={() => onAction("rcheuli")}>
              <div className="fg47" data-node-id="1:475" data-name="span">
                <div className="fg48" data-node-id="1:476" data-name="Icon">
                  <img alt="" className="fg6" src={imgIcon} />
                </div>
              </div>
              <div className="fg49" data-node-id="1:477" data-name="span">
                <p className="fg50" data-node-id="1:478">
                  რჩეული
                </p>
                <p className="fg51" data-node-id="1:479">
                  მეტი კომფორტი და ფინანსური სტაბილურობა
                </p>
              </div>
              <div className="fg22" data-node-id="1:480" data-name="Icon">
                <img alt="" className="fg6" src={imgIcon1} />
              </div>
            </button>
            <button className="fg52" data-node-id="1:481" data-name="a" type="button" onClick={() => onAction("emigrants")}>
              <div className="fg53" data-node-id="1:482" data-name="span">
                <div className="fg48" data-node-id="1:483" data-name="Icon">
                  <img alt="" className="fg6" src={imgIcon2} />
                </div>
              </div>
              <div className="fg49" data-node-id="1:484" data-name="span">
                <p className="fg50" data-node-id="1:485">
                  ემიგრანტებისთვის
                </p>
                <p className="fg51" data-node-id="1:486">
                  ბანკი მსოფლიოს ნებისმიერი წერტილიდან
                </p>
              </div>
              <div className="fg22" data-node-id="1:487" data-name="Icon">
                <img alt="" className="fg6" src={imgIcon1} />
              </div>
            </button>
            <button className="fg54" data-node-id="1:488" data-name="a" type="button" onClick={() => onAction("expats")}>
              <div className="fg55" data-node-id="1:489" data-name="span">
                <div className="fg48" data-node-id="1:490" data-name="Icon">
                  <img alt="" className="fg6" src={imgIcon3} />
                </div>
              </div>
              <div className="fg49" data-node-id="1:491" data-name="span">
                <p className="fg50" data-node-id="1:492">
                  ექსპატებისთვის
                </p>
                <p className="fg51" data-node-id="1:493">
                  სპეციალური პროდუქტები და სერვისები
                </p>
              </div>
              <div className="fg22" data-node-id="1:494" data-name="Icon">
                <img alt="" className="fg6" src={imgIcon1} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
