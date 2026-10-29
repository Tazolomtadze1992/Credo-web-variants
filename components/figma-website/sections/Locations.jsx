'use client';
const assetPathPrefix = "/figma";
const imgScreenShot20201129At4163 = `${assetPathPrefix}/fa794.png`;
const imgRectangle10412 = `${assetPathPrefix}/ea4c2.png`;
const imgIcon = `${assetPathPrefix}/de0ec.svg`;
const imgIcon1 = `${assetPathPrefix}/b04db.svg`;
const imgIcon2 = `${assetPathPrefix}/fefce.svg`;
const imgIcon3 = `${assetPathPrefix}/079bf.svg`;
const imgScreenShot20201129At4162 = `${assetPathPrefix}/92c99.svg`;
const imgUnion = `${assetPathPrefix}/c5087.svg`;
const imgAtm = `${assetPathPrefix}/91b74.svg`;
const imgYourLocation = `${assetPathPrefix}/f59a2.svg`;
const imgPointer = `${assetPathPrefix}/103d8.svg`;
const imgIcon4 = `${assetPathPrefix}/f9728.svg`;
const imgIcon5 = `${assetPathPrefix}/4ec57.svg`;
const imgIcon6 = `${assetPathPrefix}/4130d.svg`;
const imgIcon7 = `${assetPathPrefix}/fd55f.svg`;

export default function Locations({ onAction, locationQuery, selectedLocation }) {
  return (
    <div className="fg180" data-node-id="1:780" data-name="container">
      <div className="fg181" data-node-id="1:781" data-name="heading">
        <div className="fg182" data-node-id="1:782" data-name="title">
          <h2 className="fg166" data-node-id="1:783">
            ფილიალები და ბანკომატები
          </h2>
        </div>
        <div className="fg183" data-node-id="1:784">
          <div className="fg184" data-node-id="1:785">
            <div className="fg185" data-node-id="1:786" data-name="Input_field">
              <div className="fg186" data-node-id="I1:786;48:630" data-name="Input">
                <div className="fg96" data-node-id="I1:786;48:631">
                  <div className="fg187" data-node-id="I1:786;48:634">
                    <p className="fg188" data-node-id="I1:786;48:635">
                      აირჩიე ქალაქი
                    </p>
                    <div className="fg189" data-node-id="I1:786;48:636" data-name="Value">
                      <select aria-label="აირჩიე ქალაქი" onChange={event => onAction("city:"+event.target.value)}><option>ყველა</option><option>თბილისი</option></select>
                    </div>
                  </div>
                </div>
                <div className="fg11" data-node-id="I1:786;48:640" data-name="water_drop">
                  <img alt="" className="fg6" src={imgIcon} />
                </div>
              </div>
            </div>
            <div className="fg190" data-node-id="1:787" data-name="Input_field">
              <div className="fg191" data-node-id="I1:787;48:506" data-name="Input">
                <div className="fg96" data-node-id="I1:787;46:421">
                  <div className="fg187" data-node-id="I1:787;47:307">
                    <input aria-label="მიუთითე სასურველი ლოკაცია" placeholder="მიუთითე სასურველი ლოკაცია" onChange={event => onAction("location-search:"+event.target.value)} />
                  </div>
                </div>
                <div className="fg11" data-node-id="I1:787;48:286" data-name="water_drop">
                  <img alt="" className="fg6" src={imgIcon1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fg192" data-node-id="1:788" data-name="body">
        <div className="fg193" data-node-id="1:789" data-name="list panel">
          <div className="fg128" data-node-id="1:790">
            <button className="fg167" data-node-id="1:791" data-name="Badge" type="button" onClick={() => onAction("branch-filter")}>
              <p className="fg168" data-node-id="I1:791;48:1826">
                სერვისცენტრი
              </p>
            </button>
            <button className="fg167" data-node-id="1:792" data-name="Badge" type="button" onClick={() => onAction("atm-filter")}>
              <p className="fg168" data-node-id="I1:792;48:1826">
                ბანკომატი
              </p>
            </button>
            <button className="fg167" data-node-id="1:793" data-name="Badge" type="button" onClick={() => onAction("cash-filter")}>
              <p className="fg168" data-node-id="I1:793;48:1826">
                სალარო
              </p>
            </button>
          </div>
          <div className="fg194" data-node-id="1:794" data-name="list (scroll)">
            <button className="fg195" data-node-id="1:795" hidden={Boolean(locationQuery && !'თაბუკაშვილის ქ. N27'.toLowerCase().includes(locationQuery.toLowerCase()))} data-name="List" type="button" onClick={() => onAction("location-0")}>
              <div className="fg196" data-node-id="I1:795;64:1354">
                <div className="fg197" data-node-id="I1:795;64:1355">
                  <div className="fg198" data-node-id="I1:795;981:2200">
                    <div className="fg199" data-node-id="I1:795;64:1374" data-name="List_slot">
                      <div className="fg200" data-node-id="I1:795;64:1374;62:1284" data-name="Icon">
                        <img alt="" className="fg6" src={imgIcon2} />
                      </div>
                    </div>
                  </div>
                  <div className="fg201" data-node-id="I1:795;64:1357">
                    <p className="fg202" data-node-id="I1:795;994:2928">
                      თბილისი
                    </p>
                    <p className="fg203" data-node-id="I1:795;64:1359">
                      თაბუკაშვილის ქ. N27
                    </p>
                    <p className="fg204" data-node-id="I1:795;64:1362">
                      ორშ-პარ 10:00-17:30 • შაბ 10:15-12:15
                    </p>
                  </div>
                </div>
              </div>
            </button>
            <button className="fg195" data-node-id="1:796" hidden={Boolean(locationQuery && !'აღმაშენებლის გამზირი N55'.toLowerCase().includes(locationQuery.toLowerCase()))} data-name="List" type="button" onClick={() => onAction("location-1")}>
              <div className="fg196" data-node-id="I1:796;64:1354">
                <div className="fg197" data-node-id="I1:796;64:1355">
                  <div className="fg198" data-node-id="I1:796;981:2200">
                    <div className="fg205" data-node-id="I1:796;64:1374" data-name="List_slot">
                      <div className="fg200" data-node-id="I1:796;64:1374;62:1284" data-name="Icon">
                        <img alt="" className="fg6" src={imgIcon3} />
                      </div>
                    </div>
                  </div>
                  <div className="fg201" data-node-id="I1:796;64:1357">
                    <p className="fg206" data-node-id="I1:796;994:2928">
                      თბილისი
                    </p>
                    <p className="fg203" data-node-id="I1:796;64:1359">
                      აღმაშენებლის გამზირი N55
                    </p>
                    <p className="fg204" data-node-id="I1:796;64:1362">
                      ორშ-პარ 10:00-17:30 • შაბ 10:15-12:15
                    </p>
                  </div>
                </div>
              </div>
            </button>
            <button className="fg195" data-node-id="1:797" hidden={Boolean(locationQuery && !'ვაკის ექსპატ ს/ც, ი.ჭავჭავაძის გამზ. N16'.toLowerCase().includes(locationQuery.toLowerCase()))} data-name="List" type="button" onClick={() => onAction("location-2")}>
              <div className="fg196" data-node-id="1:798">
                <div className="fg197" data-node-id="1:799">
                  <div className="fg198" data-node-id="1:800">
                    <div className="fg205" data-node-id="1:801" data-name="List_slot">
                      <div className="fg200" data-node-id="I1:801;62:1284" data-name="Icon">
                        <img alt="" className="fg6" src={imgIcon3} />
                      </div>
                    </div>
                  </div>
                  <div className="fg207" data-node-id="1:805">
                    <p className="fg208" data-node-id="1:806">
                      თბილისი
                    </p>
                    <p className="fg209" data-node-id="1:807">
                      ვაკის ექსპატ ს/ც, ი.ჭავჭავაძის გამზ. N16
                    </p>
                    <p className="fg210" data-node-id="1:808">
                      ორშ-პარ 10:00-17:30 • შაბ 10:15-12:15
                    </p>
                    <div className="fg211" data-node-id="1:809" data-name="Badge">
                      <p className="fg212" data-node-id="I1:809;48:2309">
                        ექსპატ ცენტრი
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="fg213" data-node-id="1:813">
          <div className="fg214" data-node-id="1:814" data-name="Mask group">
            <div className="fg215" data-node-id="1:816" style={{ maskImage: `url("${imgScreenShot20201129At4162}")` }} data-name="Screen Shot 2020-11-29 at 4.16 2">
              <img alt="" className="fg216" src={imgScreenShot20201129At4163} />
            </div>
          </div>
          <button className="fg217" data-node-id="1:817" data-name="Branches" type="button" aria-label="სერვისცენტრი" onClick={() => onAction("map-default")}>
            <div className="fg218" data-node-id="1:818" data-name="Union">
              <img alt="" className="fg6" src={imgUnion} />
            </div>
            <div className="fg219" data-node-id="1:819">
              <div className="fg219" data-node-id="1:820" data-name="Mask group">
                <div className="fg220" data-node-id="1:822" style={{ maskImage: `url("${imgRectangle10412}")` }} />
              </div>
            </div>
          </button>
          <button className="fg221" data-node-id="1:823" data-name="Branches" type="button" aria-label="სერვისცენტრი" onClick={() => onAction("map-default")}>
            <div className="fg218" data-node-id="1:824" data-name="Union">
              <img alt="" className="fg6" src={imgUnion} />
            </div>
            <div className="fg219" data-node-id="1:825">
              <div className="fg219" data-node-id="1:826" data-name="Mask group">
                <div className="fg220" data-node-id="1:828" style={{ maskImage: `url("${imgRectangle10412}")` }} />
              </div>
            </div>
          </button>
          <button className="fg222" data-node-id="1:829" data-name="Branches" type="button" aria-label="სერვისცენტრი" onClick={() => onAction("map-default")}>
            <div className="fg218" data-node-id="1:830" data-name="Union">
              <img alt="" className="fg6" src={imgUnion} />
            </div>
            <div className="fg219" data-node-id="1:831">
              <div className="fg219" data-node-id="1:832" data-name="Mask group">
                <div className="fg220" data-node-id="1:834" style={{ maskImage: `url("${imgRectangle10412}")` }} />
              </div>
            </div>
          </button>
          <button className="fg223" data-node-id="1:835" data-name="Branches" type="button" aria-label="სერვისცენტრი" onClick={() => onAction("map-default")}>
            <div className="fg218" data-node-id="1:836" data-name="Union">
              <img alt="" className="fg6" src={imgUnion} />
            </div>
            <div className="fg219" data-node-id="1:837">
              <div className="fg219" data-node-id="1:838" data-name="Mask group">
                <div className="fg220" data-node-id="1:840" style={{ maskImage: `url("${imgRectangle10412}")` }} />
              </div>
            </div>
          </button>
          <button className="fg224" data-node-id="1:841" data-name="Branches" type="button" aria-label="სერვისცენტრი" onClick={() => onAction("map-default")}>
            <div className="fg218" data-node-id="1:842" data-name="Union">
              <img alt="" className="fg6" src={imgUnion} />
            </div>
            <div className="fg219" data-node-id="1:843">
              <div className="fg219" data-node-id="1:844" data-name="Mask group">
                <div className="fg220" data-node-id="1:846" style={{ maskImage: `url("${imgRectangle10412}")` }} />
              </div>
            </div>
          </button>
          <button className="fg225" data-node-id="1:847" data-name="Branches" type="button" aria-label="სერვისცენტრი" onClick={() => onAction("map-default")}>
            <div className="fg218" data-node-id="1:848" data-name="Union">
              <img alt="" className="fg6" src={imgUnion} />
            </div>
            <div className="fg219" data-node-id="1:849">
              <div className="fg219" data-node-id="1:850" data-name="Mask group">
                <div className="fg220" data-node-id="1:852" style={{ maskImage: `url("${imgRectangle10412}")` }} />
              </div>
            </div>
          </button>
          <button className="fg226" data-node-id="1:853" data-name="ATM" type="button" aria-label="ბანკომატი" onClick={() => onAction("map-default")}>
            <img alt="" className="fg6" src={imgAtm} />
          </button>
          <button className="fg227" data-node-id="1:856" data-name="ATM" type="button" aria-label="ბანკომატი" onClick={() => onAction("map-default")}>
            <img alt="" className="fg6" src={imgAtm} />
          </button>
          <button className="fg228" data-node-id="1:859" data-name="ATM" type="button" aria-label="ბანკომატი" onClick={() => onAction("map-default")}>
            <img alt="" className="fg6" src={imgAtm} />
          </button>
          <button className="fg229" data-node-id="1:862" data-name="ATM" type="button" aria-label="ბანკომატი" onClick={() => onAction("map-default")}>
            <img alt="" className="fg6" src={imgAtm} />
          </button>
          <div className="fg230" data-node-id="1:865" data-name="YourLocation">
            <img alt="" className="fg6" src={imgYourLocation} />
          </div>
          <div className="fg231" data-node-id="1:867" data-name="Tooltip">
            <div className="fg232" data-node-id="1:868" data-name="Pointer">
              <img alt="" className="fg6" src={imgPointer} />
            </div>
            <div className="fg233" data-node-id="1:870" data-name="Tooltip">
              <div className="fg234" data-node-id="1:871">
                <div className="fg235" data-node-id="1:872">
                  <div className="fg14" data-node-id="1:873">
                    <div className="fg236" data-node-id="1:874" data-name="Image">
                      <div className="fg237" data-node-id="1:875" data-name="List_slot">
                        <div className="fg238" data-node-id="1:876" data-name="Icon">
                          <div className="fg239" data-node-id="1:877">
                            <button className="fg239" data-node-id="1:878" data-name="Mask group" type="button" >
                              <div className="fg240" data-node-id="1:880" style={{ maskImage: `url("${imgRectangle10412}")` }} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fg241" data-node-id="1:884">
                      <p className="fg242" data-node-id="1:886">
                        {selectedLocation<0?"გოგი ცაბაძის #11":["თაბუკაშვილის ქ. N27","აღმაშენებლის გამზირი N55","ვაკის ექსპატ ს/ც, ი.ჭავჭავაძის გამზ. N16"][selectedLocation]}
                      </p>
                      <p className="fg243" data-node-id="1:887">
                        ფილიალი
                      </p>
                    </div>
                  </div>
                  <div className="fg244" data-node-id="1:888" data-name="Button_Secondary_Circle">
                    <div className="fg11" data-node-id="I1:888;29:707" data-name="water_drop">
                      <img alt="" className="fg6" src={imgIcon4} />
                    </div>
                  </div>
                </div>
                <div className="fg245" data-node-id="1:889">
                  <div className="fg246" data-node-id="1:890">
                    <div className="fg36" data-node-id="1:891">
                      <div className="fg11" data-node-id="1:892" data-name="Icon">
                        <img alt="" className="fg6" src={imgIcon5} />
                      </div>
                      <p className="fg247" data-node-id="1:893">
                        სამუშაო საათები
                      </p>
                    </div>
                    <div className="fg248" data-node-id="1:894">
                      <div className="fg249" data-node-id="1:895">
                        <p className="fg250" data-node-id="1:896">
                          ორშაბათი - პარასკევი
                        </p>
                        <p className="fg251" data-node-id="1:897">
                          10:00 - 17:30
                        </p>
                      </div>
                      <div className="fg249" data-node-id="1:898">
                        <p className="fg250" data-node-id="1:899">
                          შაბათი
                        </p>
                        <p className="fg251" data-node-id="1:900">
                          10:00 - 12:30
                        </p>
                      </div>
                    </div>
                    <div className="fg252" data-node-id="1:901" data-name="Badge">
                      <p className="fg253" data-node-id="I1:901;48:2309">
                        მუშაობს
                      </p>
                    </div>
                  </div>
                  <div className="fg246" data-node-id="1:902">
                    <div className="fg36" data-node-id="1:903">
                      <div className="fg11" data-node-id="1:904" data-name="Icon">
                        <img alt="" className="fg6" src={imgIcon6} />
                      </div>
                      <p className="fg247" data-node-id="1:905">
                        მისამართი
                      </p>
                    </div>
                    <div className="fg26" data-node-id="1:906">
                      <div className="fg254" data-node-id="1:907">
                        <p className="fg255">{selectedLocation<0?"თბილისი, გოგი ცაბაძის ქუჩა #11":["თბილისი, თაბუკაშვილის ქ. N27","თბილისი, აღმაშენებლის გამზირი N55","თბილისი, ი.ჭავჭავაძის გამზ. N16"][selectedLocation]}</p>
                        {selectedLocation<0&&<p className="fg256">(ლუკა პოლარეს გვერდით)</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fg257" data-node-id="1:908" data-name="Tooltip">
            <div className="fg232" data-node-id="1:909" data-name="Pointer">
              <img alt="" className="fg6" src={imgPointer} />
            </div>
            <div className="fg233" data-node-id="1:911" data-name="Tooltip">
              <div className="fg258" data-node-id="1:912">
                <div className="fg235" data-node-id="1:913">
                  <div className="fg14" data-node-id="1:914">
                    <div className="fg259" data-node-id="1:915" data-name="Image">
                      <div className="fg237" data-node-id="1:916" data-name="List_slot">
                        <div className="fg238" data-node-id="1:917" data-name="Icon">
                          <div className="fg260" data-node-id="1:918" data-name="Icon">
                            <img alt="" className="fg6" src={imgIcon7} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fg241" data-node-id="1:922" type="button" >
                      <p className="fg242" data-node-id="1:924">
                        {selectedLocation<0?"გოგი ცაბაძის #11":["თაბუკაშვილის ქ. N27","აღმაშენებლის გამზირი N55","ვაკის ექსპატ ს/ც, ი.ჭავჭავაძის გამზ. N16"][selectedLocation]}
                      </p>
                      <p className="fg243" data-node-id="1:925">
                        ბანკომატი
                      </p>
                    </div>
                  </div>
                  <button className="fg244" data-node-id="1:926" data-name="Button_Secondary_Circle" type="button" aria-label="დახურვა" onClick={() => onAction("close-map")}>
                    <div className="fg11" data-node-id="I1:926;29:707" data-name="water_drop">
                      <img alt="" className="fg6" src={imgIcon4} />
                    </div>
                  </button>
                </div>
                <div className="fg44" data-node-id="1:927">
                  <div className="fg246" data-node-id="1:928">
                    <div className="fg36" data-node-id="1:929">
                      <div className="fg11" data-node-id="1:930" data-name="Icon">
                        <img alt="" className="fg6" src={imgIcon6} />
                      </div>
                      <p className="fg247" data-node-id="1:931">
                        მისამართი
                      </p>
                    </div>
                    <div className="fg26" data-node-id="1:932">
                      <div className="fg254" data-node-id="1:933">
                        <p className="fg255">{selectedLocation<0?"თბილისი, გოგი ცაბაძის ქუჩა #11":["თბილისი, თაბუკაშვილის ქ. N27","თბილისი, აღმაშენებლის გამზირი N55","თბილისი, ი.ჭავჭავაძის გამზ. N16"][selectedLocation]}</p>
                        {selectedLocation<0&&<p className="fg256">(ლუკა პოლარეს გვერდით)</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
