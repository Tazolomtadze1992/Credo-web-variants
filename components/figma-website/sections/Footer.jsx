'use client';
import {useState} from "react";
const assetPathPrefix = "/figma";
const imgIcon = `${assetPathPrefix}/d7323.svg`;
const imgIcon1 = `${assetPathPrefix}/892c3.svg`;
const imgIcon2 = `${assetPathPrefix}/41cb7.svg`;
const imgIcon3 = `${assetPathPrefix}/4ee4e.svg`;
const imgIcon4 = `${assetPathPrefix}/7e5f5.svg`;
const imgIcon5 = `${assetPathPrefix}/01224.svg`;
const imgIcon6 = `${assetPathPrefix}/d23de.svg`;
const imgIcon7 = `${assetPathPrefix}/2605a.svg`;
const imgIcon8 = `${assetPathPrefix}/00ea2.svg`;
const imgPlaystore = `${assetPathPrefix}/0c4c4.svg`;
const imgPath90 = `${assetPathPrefix}/7fce8.svg`;
const imgApple = `${assetPathPrefix}/29acc.svg`;
const imgGroup = `${assetPathPrefix}/42886.svg`;


function Switch({className}) { const [dark,setDark]=useState(false); return <button type="button" className="fg277" role="switch" aria-label="მუქი თემა" aria-checked={dark} onClick={()=>{setDark(!dark);document.documentElement.dataset.figmaDark=String(!dark)}}><span /></button>; }

export default function Footer({ onAction }) {
  return (
    <div className="fg278" data-node-id="1:958" data-name="footer">
      <div className="fg117" data-node-id="1:959" data-name="center">
        <div className="fg279" data-node-id="1:960" data-name="div">
          <div className="fg44" data-node-id="1:961" data-name="div">
            <div className="fg280" data-node-id="1:962" data-name="row">
              <div className="fg281" data-node-id="1:963" data-name="div">
                <p className="fg282" data-node-id="1:964">
                  ჩვენ შესახებ
                </p>
                <div className="fg283" data-node-id="1:965">
                  <ul className="fg284" data-node-id="1:966">
                    <li className="fg285">
                      <a className="fg256" href="https://credobank.ge/about">კრედოს შესახებ</a>
                    </li>
                  </ul>
                  <ul className="fg284" data-node-id="1:967">
                    <li className="fg285">
                      <a className="fg256" href="https://credobank.ge/management">მმართველობა</a>
                    </li>
                  </ul>
                  <ul className="fg284" data-node-id="1:968">
                    <li className="fg285">
                      <a className="fg256" href="https://credobank.ge/financial-highlights">ფინანსური მაჩვენებლები</a>
                    </li>
                  </ul>
                  <ul className="fg284" data-node-id="1:969">
                    <li className="fg285">
                      <a className="fg256" href="https://credobank.ge/vacancy">კარიერა</a>
                    </li>
                  </ul>
                  <ul className="fg284" data-node-id="1:970">
                    <li className="fg285">
                      <a className="fg256" href="https://credobank.ge/news">მედია</a>
                    </li>
                  </ul>
                  <ul className="fg284" data-node-id="1:971">
                    <li className="fg285">
                      <a className="fg256" href="https://credobank.ge/owners">აქციონერთა კრება</a>
                    </li>
                  </ul>
                  <ul className="fg284" data-node-id="1:972">
                    <li className="fg285">
                      <a className="fg256" href="https://credobank.ge/about">ეკო-სოციალური ჰაბი</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="fg281" data-node-id="1:973" data-name="div">
                <p className="fg282" data-node-id="1:974">
                  დახმარება
                </p>
                <div className="fg283" data-node-id="1:975">
                  <ul className="fg284" data-node-id="1:976">
                    <li className="fg285">
                      <a className="fg256" href="https://credobank.ge/terms-and-conditions">პირობები და ტარიფები</a>
                    </li>
                  </ul>
                  <ul className="fg284" data-node-id="1:977">
                    <li className="fg285">
                      <a className="fg256" href="#figma-rates">გაცვლითი კურსი</a>
                    </li>
                  </ul>
                  <ul className="fg284" data-node-id="1:978">
                    <li className="fg285">
                      <a className="fg256" href="https://credobank.ge/contact">მომხმარებლის სახელმძღვანელო</a>
                    </li>
                  </ul>
                  <ul className="fg284" data-node-id="1:979">
                    <li className="fg285">
                      <a className="fg256" href="https://credobank.ge/contact">პრეტენზიების მართვა</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="fg286" data-node-id="1:980">
                <div className="fg92" data-node-id="1:981">
                  <div className="fg92" data-node-id="1:982" data-name="div">
                    <p className="fg287" data-node-id="1:983">
                      დაგვიკავშირდი
                    </p>
                    <div className="fg127" data-node-id="1:984">
                      <button className="fg288" data-node-id="1:985" type="button" onClick={() => onAction("phone")}>
                        <div className="fg11" data-node-id="1:986" data-name="Icon">
                          <img alt="" className="fg6" src={imgIcon} />
                        </div>
                        <p className="fg289" data-node-id="1:987">
                          +995 32 2 42 42 42
                        </p>
                      </button>
                      <button className="fg288" data-node-id="1:988" type="button" onClick={() => onAction("chat")}>
                        <div className="fg11" data-node-id="1:989" data-name="Icon">
                          <img alt="" className="fg6" src={imgIcon1} />
                        </div>
                        <p className="fg289" data-node-id="1:990">
                          ჩატი
                        </p>
                      </button>
                      <button className="fg288" data-node-id="1:991" type="button" onClick={() => onAction("locations")}>
                        <div className="fg11" data-node-id="1:992" data-name="Icon">
                          <img alt="" className="fg6" src={imgIcon2} />
                        </div>
                        <p className="fg289" data-node-id="1:993">
                          მისამართები
                        </p>
                      </button>
                      <button className="fg288" data-node-id="1:994" type="button" onClick={() => onAction("email")}>
                        <div className="fg11" data-node-id="1:995" data-name="Icon">
                          <img alt="" className="fg6" src={imgIcon3} />
                        </div>
                        <p className="fg289" data-node-id="1:996">
                          info@credo.ge
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="fg137" data-node-id="1:997">
                    <button className="fg290" aria-label="WhatsApp" data-node-id="1:998" data-name="Button_Secondary_Circle" type="button" onClick={() => onAction("whatsapp")}>
                      <div className="fg11" data-node-id="1:999" data-name="Icon">
                        <img alt="" className="fg6" src={imgIcon4} />
                      </div>
                    </button>
                    <button className="fg290" aria-label="Facebook" data-node-id="1:1000" data-name="Button_Secondary_Circle" type="button" onClick={() => onAction("facebook")}>
                      <div className="fg11" data-node-id="1:1001" data-name="Icon">
                        <img alt="" className="fg6" src={imgIcon5} />
                      </div>
                    </button>
                    <button className="fg290" aria-label="LinkedIn" data-node-id="1:1002" data-name="Button_Secondary_Circle" type="button" onClick={() => onAction("linkedin")}>
                      <div className="fg11" data-node-id="1:1003" data-name="Icon">
                        <img alt="" className="fg6" src={imgIcon6} />
                      </div>
                    </button>
                    <button className="fg290" aria-label="Instagram" data-node-id="1:1004" data-name="Button_Secondary_Circle" type="button" onClick={() => onAction("instagram")}>
                      <div className="fg11" data-node-id="1:1005" data-name="Icon">
                        <img alt="" className="fg6" src={imgIcon7} />
                      </div>
                    </button>
                    <button className="fg290" aria-label="YouTube" data-node-id="1:1006" data-name="Button_Secondary_Circle" type="button" onClick={() => onAction("youtube")}>
                      <div className="fg11" data-node-id="1:1007" data-name="Icon">
                        <img alt="" className="fg6" src={imgIcon8} />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="fg130" data-node-id="1:1008">
                  <p className="fg289" data-node-id="1:1009">
                    მუქი თემა
                  </p>
                  <Switch className="fg291" />
                </div>
                <div className="fg92" data-node-id="1:1011" data-name="div">
                  <p className="fg292" data-node-id="1:1012">
                    გადმოწერე მობაილბანკი
                  </p>
                  <div className="fg137" data-node-id="1:1013">
                    <button className="fg138" data-node-id="1:1014" data-name="Store download button" type="button" onClick={() => onAction("google")}>
                      <div className="fg139" data-node-id="1:1015" data-name="Playstore">
                        <img alt="" className="fg6" src={imgPlaystore} />
                      </div>
                      <div className="fg140" data-node-id="1:1020" data-name="Content">
                        <p className="fg141" data-node-id="1:1021">
                          GET IT ON
                        </p>
                        <div className="fg39" data-node-id="1:1022">
                          <div className="fg142">
                            <div className="fg143" data-name="path90">
                              <img alt="" className="fg6" src={imgPath90} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="fg144" data-node-id="1:1023" data-name="Store download button" type="button" onClick={() => onAction("apple")}>
                      <div className="fg145" data-node-id="1:1024" data-name="Apple">
                        <img alt="" className="fg6" src={imgApple} />
                      </div>
                      <div className="fg146" data-node-id="1:1027" data-name="Content">
                        <p className="fg147" data-node-id="1:1028">
                          Download on the
                        </p>
                        <p className="fg148" data-node-id="1:1029">
                          App Store
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fg293" data-node-id="1:1030" data-name="div">
            <div className="fg184" data-node-id="1:1031">
              <div className="fg294" data-node-id="1:1032" data-name="Link → კრედო ბანკი">
                <div className="fg295" data-node-id="1:1033" data-name="public">
                  <div className="fg296" data-node-id="1:1034" data-name="Layer 1">
                    <div className="fg297" data-node-id="1:1035" data-name="Group">
                      <div className="fg298" data-node-id="1:1036" data-name="Group">
                        <img alt="" className="fg6" src={imgGroup} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="fg129" data-node-id="1:1040">
                კრედო ბანკი - ყველა უფლება დაცულია
              </p>
            </div>
            <div className="fg299" data-node-id="1:1041" data-name="div">
              <button className="fg300" data-node-id="1:1042" type="button" onClick={() => onAction("terms")}>
                მომსახურების პირობები
              </button>
              <button className="fg300" data-node-id="1:1043" type="button" onClick={() => onAction("privacy")}>
                მონაცემთა დაცვა
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
