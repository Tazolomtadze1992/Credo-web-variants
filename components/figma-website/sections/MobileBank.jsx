'use client';
import {ArtStage} from '../../LoanCardArtwork';
const assetPathPrefix = "/figma";
const imgChangeColorHere = `${assetPathPrefix}/6ad12.png`;
const img = `${assetPathPrefix}/a7bb6.png`;
const img1 = `${assetPathPrefix}/261c9.png`;
const imgDisplayFrame = `${assetPathPrefix}/26302.png`;
const imgChangeColorHere2 = `${assetPathPrefix}/cff51.png`;
const img2 = `${assetPathPrefix}/e3efe.png`;
const img3 = `${assetPathPrefix}/944b5.png`;
const imgDisplayFrame1 = `${assetPathPrefix}/531f6.png`;
const imgIcon = `${assetPathPrefix}/52098.svg`;
const imgQrCode = `${assetPathPrefix}/f07be.svg`;
const imgPlaystore = `${assetPathPrefix}/0c4c4.svg`;
const imgPath90 = `${assetPathPrefix}/7fce8.svg`;
const imgApple = `${assetPathPrefix}/29acc.svg`;
const imgFix = `${assetPathPrefix}/af326.svg`;
const imgFix1 = `${assetPathPrefix}/7feba.svg`;
const imgChangeColorHere1 = `${assetPathPrefix}/e39c9.svg`;

export default function MobileBank({ onAction }) {
  return (
    <div className="fg115" data-node-id="1:667" data-name="margin">
      <div className="fg116" data-node-id="1:668" data-name="section">
        <div className="fg117" data-node-id="1:669" data-name="center">
          <div className="fg118" data-node-id="1:670" data-name="div">
            <div className="fg119" data-node-id="1:671">
              <div className="fg120" data-node-id="1:672" data-name="div">
                <div className="fg121" data-node-id="1:673">
                  <div className="fg122" data-node-id="1:674">
                    <h2 className="fg123" data-node-id="1:675">
                      <p className="fg124">მართე ფინანსები მარტივად,</p>
                      <p className="fg125">პირდაპირ მობაილბანკით</p>
                    </h2>
                    <p className="fg126" data-node-id="1:676">
                      ყველა საჭირო საბანკო სერვისი ერთ აპლიკაციაში - ნებისმიერ დროს, ნებისმიერი ადგილიდან.
                    </p>
                  </div>
                  <div className="fg127" data-node-id="1:677" data-name="ul">
                    <div className="fg128" data-node-id="1:678" data-name="li">
                      <div className="fg11" data-node-id="1:679" data-name="Icon">
                        <img alt="" className="fg6" src={imgIcon} />
                      </div>
                      <p className="fg129" data-node-id="1:680">
                        გადარიცხე თანხა სწრაფად და მარტივად
                      </p>
                    </div>
                    <div className="fg128" data-node-id="1:681" data-name="li">
                      <div className="fg11" data-node-id="1:682" data-name="Icon">
                        <img alt="" className="fg6" src={imgIcon} />
                      </div>
                      <p className="fg129" data-node-id="1:683">
                        გადაიხადე კომუნალური და სხვა გადასახადები
                      </p>
                    </div>
                    <div className="fg128" data-node-id="1:684" data-name="li">
                      <div className="fg11" data-node-id="1:685" data-name="Icon">
                        <img alt="" className="fg6" src={imgIcon} />
                      </div>
                      <p className="fg129" data-node-id="1:686">
                        მართე ანგარიშები და ბარათები ერთ სივრცეში
                      </p>
                    </div>
                  </div>
                </div>
                <div className="fg130" data-node-id="1:687">
                  <div className="fg131" data-node-id="1:688">
                    <div className="fg132" data-node-id="1:689" data-name="QR_Code">
                      <img alt="" className="fg6" src={imgQrCode} />
                    </div>
                  </div>
                  <div className="fg133" data-node-id="1:691" data-name="div">
                    <div className="fg134" data-node-id="1:692">
                      <p className="fg135" data-node-id="1:693">
                        დაასკანერე QR
                      </p>
                      <p className="fg136" data-node-id="1:694">
                        აპლიკაცია ხელმისაწვდომია
                      </p>
                    </div>
                    <div className="fg137" data-node-id="1:695">
                      <button className="fg138" data-node-id="1:696" data-name="Store download button" type="button" onClick={() => onAction("google")}>
                        <div className="fg139" data-node-id="1:697" data-name="Playstore">
                          <img alt="" className="fg6" src={imgPlaystore} />
                        </div>
                        <div className="fg140" data-node-id="1:702" data-name="Content">
                          <p className="fg141" data-node-id="1:703">
                            GET IT ON
                          </p>
                          <div className="fg39" data-node-id="1:704">
                            <div className="fg142">
                              <div className="fg143" data-name="path90">
                                <img alt="" className="fg6" src={imgPath90} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                      <button className="fg144" data-node-id="1:705" data-name="Store download button" type="button" onClick={() => onAction("apple")}>
                        <div className="fg145" data-node-id="1:706" data-name="Apple">
                          <img alt="" className="fg6" src={imgApple} />
                        </div>
                        <div className="fg146" data-node-id="1:709" data-name="Content">
                          <p className="fg147" data-node-id="1:710">
                            Download on the
                          </p>
                          <p className="fg148" data-node-id="1:711">
                            App Store
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <ArtStage width={490} height={363} className="figma-phone-stage"><div className="fg149" data-node-id="1:712">
                <div className="fg150" data-node-id="1:713" data-name="iPhone">
                  <div className="fg151" data-node-id="1:715" data-name="Group">
                    <div className="fg152" data-node-id="1:716" style={{ maskImage: `url("${imgFix}")` }} data-name="fix">
                      <img alt="" className="fg6" src={imgFix1} />
                    </div>
                    <div className="fg153" data-node-id="1:717" style={{ maskImage: `url("${imgFix}")` }} data-name="🎨 change color here">
                      <img alt="" className="fg113" src={imgChangeColorHere} />
                    </div>
                    <div className="fg154" data-node-id="1:718" data-name="Screen">
                      <div className="fg155" data-node-id="1:720" style={{ maskImage: `url("${imgFix}"), url("${img}")` }} data-name="👈">
                        <img alt="" className="fg6" height="489.957" src={img1} width="292.507" />
                      </div>
                    </div>
                    <div className="fg156" data-node-id="1:721" style={{ maskImage: `url("${imgFix}")` }} data-name="display-frame">
                      <img alt="" className="fg113" src={imgDisplayFrame} />
                    </div>
                  </div>
                </div>
                <div className="fg157" data-node-id="1:722" data-name="iPhone">
                  <div className="fg158" data-node-id="1:724" data-name="Group">
                    <div className="fg159" data-node-id="1:725" style={{ maskImage: `url("${imgChangeColorHere1}")` }} data-name="🎨 change color here">
                      <img alt="" className="fg113" src={imgChangeColorHere2} />
                    </div>
                    <div className="fg160" data-node-id="1:726" data-name="Screen">
                      <div className="fg161" data-node-id="1:728" style={{ maskImage: `url("${imgChangeColorHere1}"), url("${img2}")` }} data-name="👈">
                        <img alt="" className="fg6" height="503.194" src={img3} width="363.544" />
                      </div>
                    </div>
                    <div className="fg162" data-node-id="1:729" style={{ maskImage: `url("${imgChangeColorHere1}")` }} data-name="display-frame">
                      <img alt="" className="fg113" src={imgDisplayFrame1} />
                    </div>
                  </div>
                </div>
              </div></ArtStage>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
