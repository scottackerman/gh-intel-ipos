
(function($,Edge,compId){var _=null,y=true,n=false,x2='4.0.1.365',x32='900',x1='4.0.1',e49='${_Table-line}',e50='${_paper}',b='block',x76='iPos-animation-device-resolution',e53='${_home_tablet}',x39='rgba(21,131,220,0.00)',a='Base State',e58='${_screen_resolution}',x41='hidden',x42='rgba(251,251,251,1.00)',dt='Default Timeline',e65='${_web_tablet}',i='none',x43='visible',x73='285px',lf='left',e56='${_pens2}',bg='background-color',x75='auto',e80='${_resolution2}',x72='0px',e60='${_lamp_off}',x3='rgba(255,255,255,1)',x22='600',e62='${_map}',ta='text-align',ov='overflow',xc='rgba(0,0,0,1)',x77='resolution2',x35='stage',x74='51px',zy='scaleY',rz='rotateZ',e45='${_lamp_on}',c='color',x4='rgba(0,0,0,0)',x20='45',e47='${_yellow_hand_1}',g='image',r='deg',x78='resolution_test',x71='1px',x70='rgba(251,251,251,1)',e52='${_pixel-ruler}',e69='${_ruler}',e54='${_yellow_hand2}',tp='top',e67='${_shadow_Office}',fs='font-size',e55='${_wheels2}',x='text',e64='${_Shadow_map}',e57='${_lamp_pull}',x24='25',m='rect',e51='${_shadow_home}',e63='${_screen-size}',e61='${_file2}',e59='${_size-text}',s='style',e48='${_resolution}',e46='${_tablet_office}',x25='\'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif',p='px',o='opacity',e36='${_resolutionCopy}',x8='rgba(7,110,181,1.00)',e44='${_mug}',kx='skewX',x21='Lucida Sans Unicode, Lucida Grande, sans-serif',e79='${symbolSelector}',e40='${_Stage}',t='transform',h='height',l='normal',e38='${_resolutionCopy3}',e37='${_resolutionCopy2}',d='display',w='width',x26='rgba(255,255,255,1.00)',ql='linear',e66='${_shadow_web}',ff='font-family',e68='${_pixel-ruler-2}';var im='images/animations/';var g29='grid.svg',g12='yellow_hand2.svg',g17='pens2.svg',g7='Home_tablet.svg',g9='lamp_off.svg',g5='ruler.svg',g10='LAmp_pull.svg',g11='map_on.svg',g13='wheels2.svg',g30='grid2.svg',g28='file2.svg',g6='wheels.svg',g14='map.svg',g27='mug.svg',g16='tablet_office.png',g15='web_tablet.svg';var s18="00.0 inch",s33="0000 x 0000",s31="Screen Resolution",s34="iPos-device-resolution-text",s19="iPos-animation-device-size",s23="Screen Size";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:w,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'Table-line',t:m,r:['-985px','480px','904px','4px','auto','auto'],f:[x3],s:[0,"rgb(0, 0, 0)",i],tf:[[],[],[],['1','0.5']]},{id:'ruler',t:g,r:['892px','235px','432px','231px','auto','auto'],f:[x4,im+g5,'0px','0px'],tf:[[],['90']]},{id:'wheels',t:g,r:['223','342','1050px','750px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'home_tablet',t:g,r:['985px','0','1050px','750px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'shadow_home',v:i,t:'ellipse',r:['369px','536px','312px','15px','auto','auto'],br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'lamp_off',t:g,r:['395px','0','1050px','750px','auto','auto'],f:[x4,im+g9,'0px','0px']},{id:'lamp_pull',t:g,r:['1090px','305px','220px','231px','auto','auto'],f:[x4,im+g10,'0px','0px']},{id:'lamp_on',v:i,t:g,r:['0px','0px','1050px','750px','auto','auto'],f:[x4,im+g11,'0px','0px']},{id:'Shadow_map',v:i,t:'ellipse',r:['369px','536px','312px','15px','auto','auto'],br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'shadow_Office',v:i,t:'ellipse',r:['433px','536px','312px','15px','auto','auto'],br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'yellow_hand_1',v:i,t:g,r:['-429px','363px','220px','231px','auto','auto'],f:[x4,im+g12,'0px','0px']},{id:'wheels2',t:g,r:['1012px','375px','432px','231px','auto','auto'],f:[x4,im+g13,'0px','0px']},{id:'map',t:g,r:['714px','-76px','1050px','750px','auto','auto'],f:[x4,im+g14,'0px','0px']},{id:'shadow_web',v:i,t:'ellipse',r:['416px','536px','220px','15px','auto','auto'],br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'web_tablet',t:g,r:['-715px','-26px','1050px','750px','auto','auto'],f:[x4,im+g15,'0px','0px']},{id:'tablet_office',t:g,r:['974px','12px','1050px','750px','auto','auto'],f:[x4,im+g16,'0px','0px']},{id:'pens2',t:g,r:['1120px','-11px','1240px','886px','auto','auto'],f:[x4,im+g17,'0px','0px']},{id:'size-text',v:i,t:x,r:['748px','312px','231px','76px','auto','auto'],text:s18,align:"left",userClass:s19,n:[x21,x20,xc,x22,i,""]},{id:'screen-size',v:i,t:x,r:['747px','378px','220px','31px','auto','auto'],text:s23,align:"left",n:[x25,x24,"rgba(251,251,251,1)",x22,i,l]},{id:'paper',t:m,r:['1085px','462px','257px','31px','auto','auto'],f:[x26],s:[0,"rgb(0, 0, 0)",i]},{id:'mug',t:g,r:['1719px','358px','220px','231px','auto','auto'],f:[x4,im+g27,'0px','0px']},{id:'file2',t:g,r:['747px','133px','932px','665px','auto','auto'],f:[x4,im+g28,'0px','0px']},{id:'yellow_hand2',v:i,t:g,r:['425px','363px','220px','231px','auto','auto'],f:[x4,im+g12,'0px','0px']},{id:'pixel-ruler-2',t:g,r:['963px','27px','432px','231px','auto','auto'],f:[x4,im+g29,'0px','0px']},{id:'pixel-ruler',t:g,r:['-309px','236px','432px','231px','auto','auto'],f:[x4,im+g30,'0px','0px'],tf:[[],['90']]},{id:'resolution',v:i,t:x,r:['95px','383px','220px','51px','auto','auto'],text:s31,align:"left",n:[x25,x24,"rgba(251,251,251,1)",x32,i,l]},{id:'screen_resolution',v:i,t:x,r:['95px','383px','220px','51px','auto','auto'],text:s33,align:"left",userClass:s34,n:[x25,x24,"rgba(251,251,251,1)",x32,i,l]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:10715,a:n,l:{"Label 1":0},tt:[]}}},"resolution_test":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{n:[x25,35,x70,x32,i,l],r:[x71,x72,x73,x74,x75,x75],uc:x76,align:lf,id:x77,text:s33,v:i,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:3250,a:y,tt:[]}}}};var S1=symbols[x35];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e36).P(tp,383).P(d,i).P(w,250).P(lf,85).P(fs,25);A1.A(e37).P(tp,383).P(d,i).P(w,250).P(lf,85).P(fs,25);A1.A(e38).P(tp,383).P(d,i).P(w,250).P(lf,85).P(fs,25);A1.A(e40).P(bg,x39,c).P(w,1050).P(h,750).P(ov,x41);A1.A(e44).P(tp,358).P(lf,1719).T(6,760,0.059,ql).T(7.5,-200,0.25);A1.A(e45).P(tp,0).P(d,i).T(0,i).T(4.978,b).P(lf,-18).T(4.978,-18).T(5.819,-18).T(5.978,-961,0.25,ql);A1.A(e46).P(tp,12).P(lf,974).T(6.384,15,0.094,ql).T(7.728,-945,0.25);A1.A(e47).P(tp,363).P(lf,426).T(5.338,468,0.236,ql).T(5.753,-429,0.413).P(d,i).T(5.237,b);A1.A(e48).P(tp,383).P(fs,25).P(d,i).T(0,i).T(2.5,b).T(3.25,i).P(lf,85).T(3.066,85).P(w,250).T(2.936,250);A1.A(e49).P(zy,0.5,t,_,"").P(lf,-1088,_,_,p).T(0,39,0.5,ql).T(10.478,-985,0.237).P(w,971).T(0,971);A1.A(e50).P(bg,x26,c).P(w,257).P(h,31).T(6.583,81,0.159,ql).P(lf,1085).T(6,126,0.199).T(7.5,-834,0.25).P(tp,462).T(6.583,412,0.159);A1.A(e51).P(bg,x8,c).P(tp,519).T(5.978,519).T(6.228,519).P(o,0.25,_,_,"").T(5.766,0.25).P(lf,369,_,_,p).T(5.978,-334,0.25,ql).P(d,i).T(0,i).T(4.228,b).T(5.993,i);A1.A(e52).P(tp,236).P(rz,90,t,_,r).P(lf,-309,_,_,p).T(2.198,153,0.302,ql).T(3.305,-289,0.195);A1.A(e53).P(lf,985).T(3.533,0,0.49,ql).T(5.978,-944,0.25);A1.A(e54).P(tp,363).P(d,i).T(0,i).T(6.663,b).P(lf,425).T(6.747,482,0.253,ql).T(7.25,-424,0.417);A1.A(e55).P(tp,375).P(lf,1012).T(8.478,300,0.295,ql).T(10.228,1007,0.487);A1.A(e56).P(h,886).P(w,1240).P(lf,1120).T(6.287,161,0.191,ql).T(7.728,-799,0.25).P(tp,-9).T(1.257,-9);A1.A(e57).P(tp,305).T(4.478,313,0.5,ql).T(4.978,295,0.25).P(lf,1090).T(3.728,677,0.5).T(5.978,-267,0.25);A1.A(e58).P(tp,328).P(fs,35).P(d,i).T(0,i).T(2.5,b).T(3.25,i).P(lf,83).T(2.5,85,0.566,ql).P(w,250).T(2.936,250);A1.A(e59).P(c,x42,c).P("font-weight",600,_,_,"").P(lf,748,_,_,p).P(w,231).P(tp,312).P(ta,lf).P(ov,x43).P(h,76).P(ff,x21).P(fs,45).P(d,i).T(0,i).T(1.257,b).T(2,i);A1.A(e60).P(lf,395).T(3.728,-18,0.5,ql).T(5.978,-962,0.25);A1.A(e61).P(h,665).P(tp,133).P(w,932).P(lf,747).T(6,-212,0.199,ql).T(7.5,-1172,0.25);A1.A(e62).P(tp,-76).T(8.819,17,0.409,ql).T(9.228,6,0.178).P(lf,714).T(7.888,0,0.34).T(10.228,194,0.148).T(10.376,707,0.339).P(kx,0,t,_,r).T(10.072,10,0.304);A1.A(e63).P(fs,25).P(d,i).T(0,i).T(1.257,b).T(2,i).P(lf,755).T(1.257,755).P(tp,379).T(1.257,379);A1.A(e64).P(tp,519).P(bg,x8,c).P(d,i).T(0,i).T(8.228,b).P(o,0.25,_,_,"").T(8.675,0.25).P(lf,369,_,_,p).T(10.228,1076,0.487,ql);A1.A(e65).P(tp,-26).T(3.728,-25,0.203,ql).P(lf,-715).T(0.75,5,0.255).T(3.728,-669,0.203);A1.A(e66).P(tp,519).P(bg,x8,c).P(w,220).P(d,i).T(0,i).T(1.005,b).T(3.733,i).P(o,0.25,_,_,"").T(3.5,0.25).P(lf,421,_,_,p).T(0.904,421);A1.A(e67).P(tp,519).P(bg,x8,c).P(lf,433).P(w,229).P(d,i).T(0,i).T(6.478,b).T(7.729,i).P(o,0.25,_,_,"").T(7.053,0.25);A1.A(e68).P(tp,27).P(lf,963).T(2.198,314,0.302,ql).T(3.305,-360,0.195);A1.A(e69).P(tp,235).P(rz,90,t,_,r).P(lf,892,_,_,p).T(1.012,475,0.245,ql).T(2.01,933,0.24);var S2=symbols[x78];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e79).P(h,51).P(w,285);A2.A(e80).P(tp,0).P(w,285).P(h,51).P("font-weight",900,_,_,"").P(fs,35,_,_,p).P(lf,0).T(2.936,0).P(d,i).T(0,i).T(2.5,b).T(3.25,i);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"ipos-device");