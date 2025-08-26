//work here 24 06 2025 10:107
import { createGlobalStyle, DefaultTheme } from 'styled-components'
import { pxToRem } from '@/utils'

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
    body, html {
        background-color: ${(props) => props.theme.appBackground};
        color: ${(props) => props.theme.appColor};
        font-family: "Inter", sans-serif;
        margin: 0;
        padding: 0;
    }
    h1, h2, p, ul, li, figure {
        margin: 0;
        padding: 0;
    }

    .mb-1 {
        margin-bottom: ${pxToRem(16)};
    }

    .mb-2 {
        margin-bottom: ${pxToRem(32)};
    }

    .skeleton-loading {
        animation: skeletonAnimation 2s infinite alternate;
    }

    @keyframes skeletonAnimation {
        from {
        background-color: ${(props) => props.theme.appSkeletonFrom};
        }
        to {
        background-color: ${(props) => props.theme.appSkeletonTo};
        }
    }

    .skeleton-loading-mh-1 {
        min-height: ${pxToRem(175)};
    }

    .skeleton-loading-mh-2 {
        min-height: ${pxToRem(400)};
    }
    .container-img-principal {
        display: flex;
        grid-template-columns: 3fr, 1fr;               
        gap: 10px;
        justify-content: center;
        align-items: center;        
        
    }
    .img-principal {
        flex: 4;
        padding-top: 10px;
        height: 600px;        
    }
    .fade-in {
        opacity: 1;
        animation: showImg 4s ease forwards;
    }
    .fade-in-h2 {
        opacity: 0;
        animation: showImg 2s ease forwards;
    }
    @keyframes showImg {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    .text-slogan {        
        flex: 1;
        align-items: center;             
    }
    .container-menu {
        grid-template-columns: repeat(5, 1fr);
        display: grid;
        align-items: center;            
        height: 100px;
        padding-left: 10px;
    }
    .config-text-menu {        
        padding-left: 20px;
    }
    .text-hover: hover {
        color:grey;
        cursor: pointer;
    }
    .img-cursor: hover {
        cursor: pointer;
    }
    .h2-format {
        padding-left:100px
    }
    .h1-format {
        padding-left:25px
    }
    .h1-format-space {
        padding-left:150px
    }
    .frase-1 {
        padding-left: 350px;
        padding-top: 50px;
        color:black;
    }
    .service-page {
        display:flex;  
        padding-top:100px;
        justify-content: center;
        align-items: center;                                
    }
    
    .screen-initial {
        display: grid;               
        margin: 0px;                  
    }  
    .card-Services {
        display:flex;
        justify-content: center;
        align-items: center;                        
    }
    .text-page{
        height:100px;
        width: 100px;
        padding: 100px;

    }
    
`
