const paddingModule={init:()=>{const e=document.querySelectorAll(".box"),t=document.getElementById("padding"),d=document.getElementById("padding-text"),n=document.getElementById("padding-top-text"),i=document.getElementById("padding-right-text"),a=document.getElementById("padding-bottom-text"),l=document.getElementById("padding-left-text"),s=document.getElementById("p-left"),o=document.getElementById("p-right"),u=document.getElementById("p-top"),p=document.getElementById("p-bottom"),g=document.getElementById("paddingval"),c=document.getElementById("paddingTopVal"),v=document.getElementById("paddingRightVal"),m=document.getElementById("paddingBottomVal"),y=document.getElementById("paddingLeftVal"),r=document.querySelector(".subparam-padding"),L=document.getElementById("subparam-padding_visible");t.addEventListener("input",(function(){e[0].style.padding=t.value+"px",e[1].style.padding=t.value+"px",g.textContent=t.value})),s.addEventListener("input",(function(){e[0].style.paddingLeft=s.value+"px",e[1].style.paddingLeft=s.value+"px",functionsModule.changeVisibilityAndVal(l,y,{top:u.value,right:o.value,bottom:p.value,left:s.value},"left","padding")})),o.addEventListener("input",(function(){e[0].style.paddingRight=o.value+"px",e[1].style.paddingRight=o.value+"px",functionsModule.changeVisibilityAndVal(i,v,{top:u.value,right:o.value,bottom:p.value,left:s.value},"right","padding")})),u.addEventListener("input",(function(){e[0].style.paddingTop=u.value+"px",e[1].style.paddingTop=u.value+"px",functionsModule.changeVisibilityAndVal(n,c,{top:u.value,right:o.value,bottom:p.value,left:s.value},"top","padding")})),p.addEventListener("input",(function(){e[0].style.paddingBottom=p.value+"px",e[1].style.paddingBottom=p.value+"px",functionsModule.changeVisibilityAndVal(a,m,{top:u.value,right:o.value,bottom:p.value,left:s.value},"bottom","padding")})),L.addEventListener("click",(function(){r.classList.toggle("visible"),r.classList.contains("visible")?(L.classList.remove("fa-arrow-down"),L.classList.add("fa-arrow-up"),t.value=0,e[0].style.padding=0,e[1].style.padding=0,t.disabled=!0,d.classList.add("hidden"),d.classList.remove("visible")):(L.classList.remove("fa-arrow-up"),L.classList.add("fa-arrow-down"),g.textContent="0",t.disabled=!1,e[0].style.padding=0,e[1].style.padding=0,s.value=0,o.value=0,u.value=0,p.value=0,c.textContent="0",v.textContent="0",m.textContent="0",y.textContent="0",d.classList.remove("hidden"),d.classList.add("visible"),n.classList.remove("visible"),n.classList.add("hidden"),l.classList.remove("visible"),l.classList.add("hidden"),i.classList.remove("visible"),i.classList.add("hidden"),a.classList.remove("visible"),a.classList.add("hidden"))}))}};
//# sourceMappingURL=index.7318fcbe.js.map