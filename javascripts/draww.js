// // Тягучие элементы/декор
// $(document).ready(function(){


// });
// // Курсор
// $(document).mousemove(function(e){
//   $(".cursor").css({
//     left: e.clientX,
//     top: e.clientY,
//     opacity: "100%",
//   })
// });
// $(document).ready(function(){
//   $(document).mousemove(function(e){
//     $(".cursor").css({
//       left: e.clientX,
//       top: e.clientY,
//       opacity: "100%",
//     })});
//   $(document).mousemove(function(e){
//     $(".cursor").css({
//         left: e.clientX,
//         top: e.clientY,
//         opacity: "100%",
//     })});

  // РИСОВАЛКА
//   $(document).ready(function(){
//   let
//     canvas, ctx, brush = {
//       x: 0,
//       y: 0,
//       color: '#FFF968',
//       size: 8,
//       down: false,
//     },
//     strokes = [],
//     currentStroke = null;
//   function redraw () {
//     ctx.clearRect(0, 0, canvas.width(), canvas.height());
//     ctx.lineCap = 'round';
//     for (let i = 0; i < strokes.length; i++) {
//       let s = strokes[i];
//       ctx.strokeStyle = s.color;
//       ctx.lineWidth = s.size;
//       ctx.beginPath();
//       ctx.moveTo(s.points[0].x, s.points[0].y);
//       for (let j = 0; j < s.points.length; j++) {
//         let p = s.points[j];
//         ctx.lineTo(p.x, p.y);
//       }
//       ctx.stroke();
//     }
//   }
//   function init () {
//     canvas = $('#canvas');
//     canvas.attr({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//     ctx = canvas[0].getContext('2d');
//     function mouseEvent (e) {
//       brush.x = e.pageX;
//       brush.y = e.pageY;
//       currentStroke.points.push({
//         x: brush.x,
//         y: brush.y,
//       });
//       redraw();
//     }
//     canvas.mousedown(function (e) {
//       brush.down = true;
//       currentStroke = {
//         color: brush.color,
//         size: brush.size,
//         points: [],
//       };
//       strokes.push(currentStroke);
//       mouseEvent(e);
//     }).mouseup(function (e) {
//         brush.down = false;
//         mouseEvent(e);
//       currentStroke = null;
//     }).mousemove(function (e) {
//       if (brush.down)
//       mouseEvent(e);
//     });
//     $('.clearButton').click(function () {
//       strokes = [];
//       redraw();
//     });
//     $('.elipse1').click(function () {
//       brush.color = "#FFF968";
//     });
//     $('.elipse2').click(function () {
//       brush.color = "#021F69";
//     });
//     $('elipse3').click(function () {
//       brush.color = "#12A4FF";
//     });
    
//   }
//   $(init);
// });