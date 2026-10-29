'use client';
const assetPathPrefix = "/figma";
const img = `${assetPathPrefix}/61546.png`;
const imgCarouselDots = `${assetPathPrefix}/67150.svg`;
const imgIcon = `${assetPathPrefix}/cdc90.svg`;

export default function Hero({ onAction }) {
  return (
    <div className="fg25" data-node-id="1:456">
      <div className="fg26" data-node-id="1:457">
        <div className="fg27" data-node-id="1:458">
          <h1 className="fg28" data-node-id="1:459">
            შენი საიმედო{' '}
            <br aria-hidden />
            ფინანსური პარტნიორი
          </h1>
          <p className="fg29" data-node-id="1:460">
            მართე ფინანსები სადაც არ უნდა იყო - სესხი, ბარათი და ანაბარი ერთ სივრცეში, სერვისცენტრში თუ ვიდეო ზარით
          </p>
          <button className="fg30" data-node-id="1:461" style={{ backgroundImage: "linear-gradient(100deg, #fc6250, #a66b70)" }} data-name="Button_Primary" type="button" onClick={() => onAction("products")}>
            <p className="fg20" data-node-id="I1:461;29:213">
              გაიგე მეტი
            </p>
          </button>
        </div>
        <div className="fg31" data-node-id="1:462" data-name="კრედო ბანკის და ევროპის რეკონსტრუქციისა და გავნითარების ბანკის ხელშეკრულება">
          <div className="fg32">
            <img alt="" className="fg33" src={img} />
          </div>
        </div>
      </div>
      <div className="fg34" data-node-id="1:463">
        <button className="fg35" data-node-id="1:464" data-name="Carousel dots" type="button" disabled aria-label="შემდეგი">
          <img alt="" className="fg6" src={imgCarouselDots} />
        </button>
        <div className="fg36" data-node-id="1:465">
          <button className="fg37" data-node-id="1:466" type="button" disabled aria-label="წინა">
            <div className="fg38" data-node-id="1:467" data-name="Icon">
              <img alt="" className="fg6" src={imgIcon} />
            </div>
          </button>
          <button className="fg39" data-node-id="1:468" type="button" disabled aria-label="შემდეგი">
            <div className="fg40">
              <div className="fg41">
                <div className="fg38" data-node-id="1:469" data-name="Icon">
                  <img alt="" className="fg6" src={imgIcon} />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
