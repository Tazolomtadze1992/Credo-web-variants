'use client';
const assetPathPrefix = "/figma";
const imgIconBuying = `${assetPathPrefix}/53c92.svg`;
const imgIconRightArrow = `${assetPathPrefix}/1693c.svg`;
const imgIconPlane = `${assetPathPrefix}/762de.svg`;
import FigmaMotion from "../FigmaMotion";
const imgFrame1707478505 = `${assetPathPrefix}/0be1e.png`;
const imgFrame1707478517 = `${assetPathPrefix}/0d0ea.png`;
const imgScreenshot202610230747351 = `${assetPathPrefix}/5f163.png`;
const imgIcon = `${assetPathPrefix}/6c47d.svg`;
const imgIcon1 = `${assetPathPrefix}/a7f45.svg`;
const imgFrame1707478513 = `${assetPathPrefix}/ac631.svg`;
const imgFrame1707478515 = `${assetPathPrefix}/fbb3a.svg`;
const imgFrame1707478514 = `${assetPathPrefix}/68126.svg`;
const imgIcon2 = `${assetPathPrefix}/2bf62.svg`;
const imgFrame1707478506 = `${assetPathPrefix}/a6637.svg`;
const imgFrame1707478507 = `${assetPathPrefix}/b1381.svg`;
const imgFrame1321314120 = `${assetPathPrefix}/33011.svg`;
const imgIcon3 = `${assetPathPrefix}/e89eb.svg`;
const imgIcon4 = `${assetPathPrefix}/10833.svg`;


function Icon({ className, icon = "Buying" }) {
  return (
    <div className={className || "fg114"} data-node-id="1:45">
      <img alt="" className="fg6" src={imgIconBuying} />
    </div>
  );
}


function Icon1({ className, icon = "Right Arrow" }) {
  const isPlane = icon === "Plane";
  return (
    <div className={className || "fg114"} id={isPlane ? "node-1_42" : "node-1_40"}>
      <img alt="" className="fg6" src={isPlane ? imgIconPlane : imgIconRightArrow} />
    </div>
  );
}

export default function Products({ onAction }) {
  return (
    <div className="fg56" data-node-id="1:495" data-name="section">
      <div className="fg57" data-node-id="1:496" data-name="margin">
        <h2 className="fg58" data-node-id="1:497">
          მომხმარებლები ირჩევენ
        </h2>
      </div>
      <div className="fg59" data-node-id="1:498" data-name="mosaic">
        <div className="fg60" data-node-id="1:499">
          <div className="fg61" data-node-id="1:500" data-name="სამომხმარებლო სესხი">
            <div className="fg62" data-node-id="1:501">
              <div className="fg63" data-node-id="1:502">
                <p className="fg64" data-node-id="1:503">
                  {`სესხი ციფრულად 70,000 `}
                  <br aria-hidden />
                  {`ლარამდე ნებისმიერი `}
                  <br aria-hidden />
                  შემოსავლით
                </p>
              </div>
              <button className="fg65" data-node-id="1:504" type="button" onClick={() => onAction("loan")}>
                <p className="fg66" data-node-id="1:505">
                  სრულად
                </p>
                <div className="fg11" data-node-id="1:506" data-name="Icon">
                  <img alt="" className="fg6" src={imgIcon} />
                </div>
              </button>
              <div className="fg44" data-node-id="1:507">
                <FigmaMotion className="fg67" data-node-id="1:508" data-name="limits">
                  <div className="fg68" data-node-id="1:509" data-name="row">
                    <p className="fg69" data-node-id="1:510">
                      ლიმიტი
                    </p>
                    <p className="fg70" data-node-id="1:511">
                      მიიღე 70,000 ლარამდე
                    </p>
                  </div>
                  <div className="fg71" data-node-id="1:512" data-name="divider" />
                  <div className="fg68" data-node-id="1:513" data-name="row">
                    <p className="fg69" data-node-id="1:514">
                      ვადა
                    </p>
                    <p className="fg70" data-node-id="1:515">
                      მაქს 48 თვით
                    </p>
                  </div>
                </FigmaMotion>
              </div>
            </div>
            <div className="fg72" data-node-id="1:516">
              <FigmaMotion className="fg73" data-node-id="1:517" data-motion-keys="rotate" data-motion-wrapper-for="1:517">
                <div className="fg74">
                  <div className="fg75">
                    <img alt="" className="fg76" src={imgFrame1707478505} />
                  </div>
                </div>
              </FigmaMotion>
              <FigmaMotion className="fg77" data-node-id="1:518" data-motion-keys="rotate" data-motion-wrapper-for="1:518">
                <div className="fg74">
                  <div className="fg75">
                    <img alt="" className="fg76" src={imgFrame1707478517} />
                  </div>
                </div>
              </FigmaMotion>
            </div>
          </div>
          <div className="fg78" data-node-id="1:519" data-name="ანაბარი">
            <div className="fg44" data-node-id="1:520">
              <p className="fg79" data-node-id="1:521">
                {`და-ყა-ვი შენს ტემპში `}
                <br aria-hidden />
                10 თვემდე 0%
              </p>
            </div>
            <button className="fg65" data-node-id="1:522" type="button" onClick={() => onAction("dayavi")}>
              <p className="fg80" data-node-id="1:523">
                სრულად
              </p>
              <div className="fg11" data-node-id="1:524" data-name="Icon">
                <img alt="" className="fg6" src={imgIcon1} />
              </div>
            </button>
            <div className="fg81" data-node-id="1:525">
              <div className="fg82" data-node-id="1:526">
                <div className="fg74">
                  <div className="fg83">
                    <img alt="" className="fg6" src={imgFrame1707478513} />
                  </div>
                </div>
              </div>
              <div className="fg84" data-node-id="1:528">
                <img alt="" className="fg6" src={imgFrame1707478515} />
              </div>
              <div className="fg82" data-node-id="1:530">
                <div className="fg85">
                  <div className="fg86">
                    <img alt="" className="fg6" src={imgFrame1707478514} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fg87" data-node-id="1:532">
          <div className="fg88" data-node-id="1:533" data-name="ანაბარი">
            <p className="fg89" data-node-id="1:534">
              ანაბარი შენი მიზნებისთვის
            </p>
            <button className="fg65" data-node-id="1:535" type="button" onClick={() => onAction("deposit")}>
              <p className="fg90" data-node-id="1:536">
                სრულად
              </p>
              <div className="fg11" data-node-id="1:537" data-name="Icon">
                <img alt="" className="fg6" src={imgIcon2} />
              </div>
            </button>
            <FigmaMotion className="fg91" data-node-id="1:538" data-name="Categories_Horizontal">
              <div className="fg92" data-node-id="1:555">
                <div className="fg93" data-node-id="1:556">
                  <Icon1 className="fg48" icon="Plane" />
                  <div className="fg94" data-node-id="1:558">
                    <div className="fg95" data-node-id="1:559" data-name="Master">
                      <div className="fg96" data-node-id="1:560" data-name="Content">
                        <div className="fg94" data-node-id="1:564" data-name="Text">
                          <p className="fg97" data-node-id="1:565">
                            მოგზაურობისთვის
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fg93" data-node-id="1:566">
                  <Icon className="fg48" />
                  <div className="fg94" data-node-id="1:568">
                    <div className="fg95" data-node-id="1:569" data-name="Master">
                      <div className="fg96" data-node-id="1:570" data-name="Content">
                        <div className="fg94" data-node-id="1:574" data-name="Text">
                          <p className="fg97" data-node-id="1:575">
                            შოპინგისთვის
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FigmaMotion>
          </div>
          <div className="fg98" data-node-id="1:576" data-name="სადებეტო ბარათები">
            <div className="fg99" data-node-id="1:577" data-name="card art">
              <div className="fg100" data-node-id="1:578">
                <FigmaMotion className="fg101" data-node-id="1:579" data-motion-keys="rotate" data-motion-wrapper-for="1:579">
                  <div className="fg74">
                    <div className="fg102" style={{ backgroundImage: "linear-gradient(103.74079575739778deg, rgb(41, 61, 77) 7.9777%, rgb(23, 28, 30) 55.171%, rgb(65, 35, 29) 133.73%)" }}>
                      <div className="fg103" data-node-id="1:580">
                        <img alt="" className="fg6" src={imgFrame1707478506} />
                      </div>
                      <div className="fg104" data-node-id="1:594">
                        <img alt="" className="fg6" src={imgFrame1707478507} />
                      </div>
                    </div>
                  </div>
                </FigmaMotion>
                <FigmaMotion className="fg105" data-node-id="1:598" data-motion-keys="rotate" data-motion-wrapper-for="1:598">
                  <div className="fg85">
                    <div className="fg102" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(103.74079575739778deg, rgb(41, 61, 77) 7.9777%, rgb(23, 28, 30) 55.171%, rgb(65, 35, 29) 133.73%)" }}>
                      <div className="fg103" data-node-id="1:599">
                        <img alt="" className="fg6" src={imgFrame1707478506} />
                      </div>
                      <div className="fg106" data-node-id="1:613" data-name="visa logo">
                        <div className="fg107" data-node-id="1:614">
                          <img alt="" className="fg6" src={imgFrame1321314120} />
                        </div>
                      </div>
                    </div>
                  </div>
                </FigmaMotion>
              </div>
            </div>
            <p className="fg108" data-node-id="1:616">
              ბარათები ყოველდღიური
              <br aria-hidden />
              ფინანსებისთვის
            </p>
            <button className="fg65" data-node-id="1:617" type="button" onClick={() => onAction("cards")}>
              <p className="fg109" data-node-id="1:618">
                სრულად
              </p>
              <div className="fg11" data-node-id="1:619" data-name="Icon">
                <img alt="" className="fg6" src={imgIcon3} />
              </div>
            </button>
          </div>
          <div className="fg110" data-node-id="1:620" data-name="ანაბარი">
            <p className="fg89" data-node-id="1:621">
              ფულადი გზავნილები საზღვრების გარეშე
            </p>
            <button className="fg65" data-node-id="1:622" type="button" onClick={() => onAction("transfers")}>
              <p className="fg111" data-node-id="1:623">
                სრულად
              </p>
              <div className="fg11" data-node-id="1:624" data-name="Icon">
                <img alt="" className="fg6" src={imgIcon4} />
              </div>
            </button>
            <div className="fg112" data-node-id="1:625" data-name="Screenshot 2026-10-23 074735 1">
              <img alt="" className="fg113" src={imgScreenshot202610230747351} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
