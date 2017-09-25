console.log("here")


var indexCard = d3.select('body').append('svg')
.attr('width', 600)
.attr('height',400);

console.log(indexCard)

var clicked = true;

var circle1 = indexCard.append('circle')
  .attr('cx', 250)
  .attr('cy', 250)
  .attr('r', 100)
  .attr('fill', 'blue')
  .on('click', function(d){
    if(clicked==true){

      d3.select(this).attr('fill', 'orange').transition().attr('r', 50);
      clicked = false;
    }

    else {

      d3.select(this).attr('fill', 'blue').transition().attr('r', 100);
      clicked = true;

    }})

    .on('mouseover', function(d){
      d3.select(this).attr('fill', 'green')
    })

    .on('mouseout', function(d){
d3.select(this).attr('fill', 'blue')

    })

indexCard.append('rect')
.attr('x', 100)
.attr('y', 150)
.attr('width', 20)
.attr('height', 20)

indexCard.append('line')
.attr('x1' , 10)
.attr('x2' , 20)
.attr('y1', 150)
.attr('y2', 250)
.attr('stroke', "purple")

    // console.log('here')
    // d3.select(this).attr('fill', 'orange');
    // clicked = false;
    // console.log(clicked);
