import styled from 'styled-components';

export const StyledBody = styled.body`   
    .para{
        text-align: center;
    }
    .img{
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
`
export const StyledContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding-right: 12px;
    padding-left: 12px;
`
export const StyledRow = styled.div`
    border: 1px solid blue;
    display: flex;
    margin: 0 -12px;

    .col{
        border: 1px solid red;    
        justify-content: space-between;
        padding-left: 12px;
        padding-right: 12px;
    }
    .col-1-3{   
        width: 33.333333%;
    }
    .col-1-2{
        width: 50%;
    }
    .col-1-4{
        width: 25%;
    }
`
export const StyledHero = styled.div`
    margin-bottom: 75px;

    /* Series */
    .series-item{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 240px;
        background-color: rgba(0,0,0,0.2);
        text-align: center;
        font-size: 18px;
        color: #FFF;
        padding: 24px 20px;
        font-weight: 500; /* 字體粗度 */
    }
`
export const StyledHeroGrey = styled.div`
    background-color: #efefef;

    /* About */
    .top-about-warpper{
        display: flex;
        justify-content: space-between;
        padding-top: 110px;
        padding-bottom: 120px;
        padding-right: 40px;
        padding-left: 40px;
        align-items: center;
        margin: 0 auto;
        width: 85%;
    }
    .img-about{
        width:45%;
    }  
    .description{
        text-align: center;
    }
`
export const StylendButton = styled.button `
    background-color: #000;
    max-width: 280px;
    color: #FFF;
    border: none;
    padding: 14px 20px;
    margin-top: 53px;
    line-height: 21px;
    font-weight: 700;
    letter-spacing: 4.5px;
    display: inline-block;
`
export const StyledNavber = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    padding: 31px 40px;

    .logo-storeWrapper{
        padding: 66px 20px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #FFF;
        z-index: 500;
    }
    .logo-store{
        display: inline-block;
        vertical-align: top;
        max-width: 172px;
        max-height: 103px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .navigation-list{
        display: flex;
    }
    .navigation-list li{
        margin-left: 30px;
    }
`
export const StyledFooter = styled.div`
    background-color: #000;
    color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 25px;

    .footer-logowrapper{
        height: 80px;
    }
    .footer-logo{
        width: 100%;
        height: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .footer-item{
        display: flex;

    }
    .footer-item li{
        margin-right: 40px;
    }
    
`