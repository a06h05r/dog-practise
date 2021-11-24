import '../normalize.css';
import './App.css';
import {
  StyledNavber,
  StyledBody,
  StylendButton,
  StyledHero,
  StyledHeroGrey,
  StyledContainer,
  StyledRow,
  StyledFooter,
} from './AppStyle';
import Logo from '../img/logo_store.png';
import LogoFooter from '../img/logo_01_x80@2x.png';
import TopAbout from '../img/top_about.png';
import Jumbotron from '../img/banner/mv01_1944x.jpeg';
import JumbotronProduct from '../img/product/feature_collection_1080x.jpeg';
import Product1 from '../img/product/nowacube01_540x.jpeg';
import Product2 from '../img/product/nowacube02_540x.jpeg';
import Product3 from '../img/product/nowacube03_540x.jpeg';
import Product4 from '../img/product/nowacube04_540x.jpeg';
import Product5 from '../img/product/nowacube05_cb766ea8-9c77-4cf2-9335-1779d283f967_540x.jpeg';
import Product6 from '../img/product/nowacube06_540x.jpeg';
import Series1 from '../img/nowa/img_collection_bottle_01_720x.jpeg';
import Series2 from '../img/nowa/img_collection_toto_01_720x.jpeg';
import Series3 from '../img/nowa/img_collection_tumbler_01_720x.jpeg';
import Series4 from '../img/nowa/nowaCube_Top_thm_720x.jpeg';
import Slider from '../img/journal/top_journal01_pc_1080x_f7a2fc34-e479-4797-84f4-e0a6e77d6c0f_1080x.jpeg';
import SmallSlider1 from '../img/wanbassador/wanbassador01.jpeg';
import SmallSlider2 from '../img/wanbassador/wanbassador02.jpeg';
import SmallSlider3 from '../img/wanbassador/wanbassador03.jpeg';
import SmallSlider4 from '../img/wanbassador/wanbassador04.jpeg';
import OneNowaDay1 from '../img/nowaday/top_insta01.jpeg';
import OneNowaDay2 from '../img/nowaday/top_insta02.jpeg';
import OneNowaDay3 from '../img/nowaday/top_insta03.jpeg';
import OneNowaDay4 from '../img/nowaday/top_insta04.jpeg';
import OneNowaDay5 from '../img/nowaday/top_insta05.jpeg';
import OneNowaDay6 from '../img/nowaday/top_insta06.jpeg';
import OneNowaDay7 from '../img/nowaday/top_insta07.jpeg';
import OneNowaDay8 from '../img/nowaday/top_insta08.jpeg';

function About() {
  return(
      <StyledHero>
          <StyledHeroGrey>
          <div className='top-about-warpper'>
              <div className='img-about'>
              <img className='img' src={TopAbout}/>
              </div>
              <div className='description'>
              <p>
              ワンコ友達や家族と一緒に楽しめる。
              <br></br>
              好きなファッションやインテリアを選ぶように楽しめる。
              <br></br>
              ワンコnowaがお届けするのはそんなアイテムです。
              <br></br>
              クリエイティブでワンコライフに彩りを。
              </p>
              <StylendButton>ABOUT</StylendButton>
              </div>
          </div>
          </StyledHeroGrey>
      </StyledHero>
  );
}

function Cube(){
  return (
      <StyledHero>
          <StyledContainer>
          <div className='para'>
              <h3>nowa cube</h3>
              <p>キューブをあければ、広がる幸せ</p>
          </div>          
          <div>
              <img className='img' src={JumbotronProduct}/>
          </div>
              <StyledRow>
                  <div className='col col-1-3'>
                  <img className='img' src={Product1}/>
                  <div className='para'>
                      <p>nowa cube 全犬種セット</p>
                      <p>¥2,750 〜</p>
                  </div>
                  </div>
                  <div className='col col-1-3'>
                  <img className='img' src={Product2}/>
                  <div className='para'>
                      <p>フレブルcube 5個セット（グリーンピスタチオ）</p>
                      <p>¥2,750 〜</p>
                  </div>
                  </div>
                  <div className='col col-1-3'>
                  <img className='img' src={Product3}/>
                  <div className='para'>
                      <p>ミニシュナcube 5個セット（ほろにが抹茶豆）</p>
                      <p>¥2,750 〜</p>
                  </div>
                  </div>
              </StyledRow>
              <StyledRow>
                  <div className='col col-1-3'>
                  <img className='img' src={Product4}/>
                  <div className='para'>
                      <p>トイプーcube 5個セット（黒蜜きなこ豆）</p>
                      <p>¥2,750 〜</p>
                  </div>
                  </div>
                  <div className='col col-1-3'>
                  <img className='img' src={Product5}/>
                  <div className='para'>
                      <p>チワワcube 5個セット（五色豆）</p>
                      <p>¥2,750 〜</p>
                  </div>
                  </div>
                  <div className='col col-1-3'>
                  <img className='img' src={Product6}/>
                  <div className='para'>
                      <p>豆柴cube 5個セット（カシュー醤油）</p>
                      <p>¥2,750 〜</p>
                  </div>
                  </div>
              </StyledRow>
          </StyledContainer>
      </StyledHero>
  );
}

function Series(){
  return(
    <StyledHero>
      <StyledContainer>
         <div className='para'>
          <h3>nowa series</h3>
          <p>ワンコライフに＋クリエイティブ</p>
        </div>
            <StyledRow>
              <div className='col col-1-2'>
                <img className='img' src={Series1}/>
                <div className='series-item'>nowa bottle</div>
              </div>
              <div className='col col-1-2'>
                <img className='img' src={Series2}/>
                <div className='series-item'>nowa tote</div>
              </div>
            </StyledRow>
            <StyledRow>
              <div className='col col-1-2'>
                <img className='img' src={Series3}/>
                <div className='series-item'>nowa tumbler</div>
              </div>
              <div className='col col-1-2'>
                <img className='img' src={Series4}/>
                <div className='series-item'>nowa cube</div>
              </div>
            </StyledRow>
      </StyledContainer>    
    </StyledHero> 
  );
}

function Journal(){
  return(
    <StyledHero>
    <StyledHeroGrey>
      <StyledContainer>
        <div className='para'>
          <h3>Journal</h3>
          <p>ワンコライフに＋クリエイティブ</p>
        </div>
        <div>
          <img className='img' src={Slider}/>
        </div>
        <div>すべてを見る</div>
      </StyledContainer>
    </StyledHeroGrey>
  </StyledHero> 
  );
}

function Wanbassador(){
  return(
    <StyledHero>
    <StyledContainer>
      <div className='para'>
        <h3>Wanbassador</h3>
      </div>
      <StyledRow>
        <div className='col col-1-4'>
          <img className='img' src={SmallSlider1}/>
          <div>@reoche_ru_sakura</div>
        </div>
        <div className='col col-1-4'>
          <img className='img' src={SmallSlider2}/>
          <div>@pooboobijou</div>
        </div>
        <div className='col col-1-4'>
          <img className='img' src={SmallSlider3}/>
          <div>@daifuku_396</div>
        </div>
        <div className='col col-1-4'>
          <img className='img' src={SmallSlider4}/>
          <div>@__mugicha0417</div>
        </div>
      </StyledRow>
    </StyledContainer>
  </StyledHero>
  );
}

function Ig(){
  return(
    <StyledHero>
          <StyledContainer>
            <div className='para'>
              <h3>One nowa day</h3>
              <p>nowaプロダクトのある毎日</p>
            </div>
            <StyledRow>
              <div className='col col-1-4'>
                <img className='img' src={OneNowaDay1}/>
              </div>
              <div className='col col-1-4'>
                <img className='img' src={OneNowaDay2}/>
              </div>
              <div className='col col-1-4'>
                <img className='img' src={OneNowaDay3}/>
              </div>
              <div className='col col-1-4'>
                <img className='img' src={OneNowaDay4}/>
              </div>
            </StyledRow>
            <StyledRow>
              <div className='col col-1-4'>
                <img className='img' src={OneNowaDay5}/>
              </div>
              <div className='col col-1-4'>
                <img className='img' src={OneNowaDay6}/>
              </div>
              <div className='col col-1-4'>
                <img className='img' src={OneNowaDay7}/>
              </div>
              <div className='col col-1-4'>
                <img className='img' src={OneNowaDay8}/>
              </div>
            </StyledRow>
            <div className='para'>
              <StylendButton>公式Instagram</StylendButton>
            </div>
          </StyledContainer>
        </StyledHero>
  );
}

function Footer(){
  return(
    <StyledFooter>
        <a className='footer-logowrapper'>
          <img className='footer-logo' src={LogoFooter}/>
        </a>
        <div>
          <ul className='footer-item'>
            <li>運営会社</li>
            <li>プライバシーポリシー</li>
            <li>特定商取引法</li>
            <li>よくある質問</li>
            <li>お問い合わせ</li>
            <li>利用規約</li>
            <li>公式Instagram</li>
          </ul>
        </div>
      </StyledFooter>
  );
}
function App() {
  return (
    <StyledBody>
      <StyledNavber>
        <a className='logo-storeWrapper'>
          <img className='logo-store' src={Logo}/>
        </a>
        <div className='navigation-bg'>
          <ul className='navigation-list'>
            <li>PRODUCT</li>
            <li>JOURNAL</li>
            <li>ABOUT</li>
            <li>會員</li>
            <li>搜尋</li>
            <li>購物車</li>
          </ul>
        </div>
      </StyledNavber>
      <div>
        <img src={Jumbotron}/>
      </div>
      <p className='para'>
        <p>お支払い方法の追加について</p>
        Amazon Payにてお買い求めいただけるようになりました。
        <br></br>
        <br></br>
        Amazon.co.jpでご登録されているお届け先、お支払い方法をご利用いただきご購入いただくことができます。
        <br></br>
        入力の手間も省けますので、是非ご利用ください。
      </p>    
      <About />
      <Cube />
      <Series />
      <Journal />
      <Wanbassador />
      <Ig />
      <Footer />
    </StyledBody>
  );
}
export default App;

