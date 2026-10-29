'use client';
const assetPathPrefix = "/figma";
const imgIcon = `${assetPathPrefix}/6ed40.svg`;
const imgUnitedStates = `${assetPathPrefix}/d6a6b.svg`;
const imgEuropeanUnion = `${assetPathPrefix}/e3d02.svg`;
const imgRussia = `${assetPathPrefix}/d82cc.svg`;

export default function Rates({ onAction }) {
  return (
    <div className="fg42" data-node-id="1:730" data-name="center">
      <div className="fg163" data-node-id="1:731" data-name="section">
        <div className="fg44" data-node-id="1:732">
          <div className="fg164" data-node-id="1:733" data-name="margin">
            <div className="fg165" data-node-id="1:734" data-name="div">
              <h2 className="fg166" data-node-id="1:735">
                ვალუტის კურსი
              </h2>
              <button className="fg167" data-node-id="1:736" data-name="Badge" type="button" onClick={() => onAction("rate-type")}>
                <p className="fg168" data-node-id="I1:736;48:1826">
                  კომერციული
                </p>
                <div className="fg11" data-node-id="I1:736;48:1830" data-name="Icon">
                  <img alt="" className="fg6" src={imgIcon} />
                </div>
              </button>
            </div>
          </div>
          <div className="fg44" data-node-id="1:737" data-name="div">
            <div className="fg169" data-node-id="1:738" data-name="row">
              <div className="fg170" data-node-id="1:739" data-name="div">
                <div className="fg128" data-node-id="1:740" data-name="div">
                  <div className="fg171" data-node-id="1:741" data-name="united states">
                    <img alt="" className="fg6" src={imgUnitedStates} />
                  </div>
                  <div className="fg172" data-node-id="1:742" data-name="span">
                    <p className="fg173" data-node-id="1:743">
                      USD
                    </p>
                    <p className="fg174" data-node-id="1:744">
                      აშშ დოლარი
                    </p>
                  </div>
                </div>
                <div className="fg175" data-node-id="1:745" data-name="row">
                  <div className="fg176" data-node-id="1:746" data-name="div">
                    <p className="fg177" data-node-id="1:747">
                      ყიდვა
                    </p>
                    <p className="fg178" data-node-id="1:748">{`2.8750 ₾ `}</p>
                  </div>
                  <div className="fg176" data-node-id="1:749" data-name="div">
                    <p className="fg177" data-node-id="1:750">
                      გაყიდვა
                    </p>
                    <p className="fg178" data-node-id="1:751">{`2.8718 ₾ `}</p>
                  </div>
                </div>
              </div>
              <div className="fg170" data-node-id="1:752" data-name="div">
                <div className="fg128" data-node-id="1:753" data-name="div">
                  <div className="fg171" data-node-id="1:754" data-name="european union">
                    <img alt="" className="fg6" src={imgEuropeanUnion} />
                  </div>
                  <div className="fg172" data-node-id="1:755" data-name="span">
                    <p className="fg173" data-node-id="1:756">
                      EUR
                    </p>
                    <p className="fg174" data-node-id="1:757">
                      ევრო
                    </p>
                  </div>
                </div>
                <div className="fg175" data-node-id="1:758" data-name="row">
                  <div className="fg176" data-node-id="1:759" data-name="div">
                    <p className="fg177" data-node-id="1:760">
                      ყიდვა
                    </p>
                    <p className="fg178" data-node-id="1:761">{`2.8750 ₾ `}</p>
                  </div>
                  <div className="fg176" data-node-id="1:762" data-name="div">
                    <p className="fg177" data-node-id="1:763">
                      გაყიდვა
                    </p>
                    <p className="fg178" data-node-id="1:764">{`2.8718 ₾ `}</p>
                  </div>
                </div>
              </div>
              <div className="fg170" data-node-id="1:765" data-name="div">
                <div className="fg128" data-node-id="1:766" data-name="div">
                  <div className="fg171" data-node-id="1:767" data-name="russia">
                    <img alt="" className="fg6" src={imgRussia} />
                  </div>
                  <div className="fg172" data-node-id="1:768" data-name="span">
                    <p className="fg173" data-node-id="1:769">
                      RUB
                    </p>
                    <p className="fg174" data-node-id="1:770">
                      რუსული რუბლი
                    </p>
                  </div>
                </div>
                <div className="fg175" data-node-id="1:771" data-name="row">
                  <div className="fg176" data-node-id="1:772" data-name="div">
                    <p className="fg177" data-node-id="1:773">
                      ყიდვა
                    </p>
                    <p className="fg178" data-node-id="1:774">{`2.8750 ₾ `}</p>
                  </div>
                  <div className="fg176" data-node-id="1:775" data-name="div">
                    <p className="fg177" data-node-id="1:776">
                      გაყიდვა
                    </p>
                    <p className="fg178" data-node-id="1:777">{`2.8718 ₾ `}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fg15" data-node-id="1:778">
          <button className="fg179" data-node-id="1:779" data-name="Button_Secondary" type="button" onClick={() => onAction("all-rates")}>
            <p className="fg17" data-node-id="I1:779;29:569">
              ყველა ვალუტა
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
