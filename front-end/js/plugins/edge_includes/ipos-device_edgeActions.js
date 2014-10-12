/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   (function(symbolName) {
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
        $('.iPos-animation-device-size').html(deviceWidth);
        $('.iPos-device-resolution-text').html(screen.height + 'x' + screen.width);
        setAnimationObject('ipos-device'); 
      });
      
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         animationComplete();
      });

   })("stage");

})(jQuery, AdobeEdge, "ipos-device");