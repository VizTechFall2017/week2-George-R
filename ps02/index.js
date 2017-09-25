console.log("here")


var indexCard = d3.select('body').append('svg')
.attr('width', 500)
.attr('height',500);



indexCard.append('rect')
.attr('x', 0)
.attr('y', 0)
.attr('width', 500)
.attr('height', 500)

.attr('fill', '#D8D888')
.on('mouseover', function(d){


    d3.select(this).attr('fill', '#A67CB5')
  })

  .on('mouseout', function(d){
d3.select(this).attr('fill', '#A67CB5')

  })


var circle1 = indexCard.append('circle')
  .attr('cx', 250)
  .attr('cy',250)
  .attr('r', 250)
  .attr('fill', '#B7B775')
  .on('mouseover', function(d){


      d3.select(this).attr('fill', '#9E69B2')
    })

    .on('mouseout', function(d){
d3.select(this).attr('fill', '#9E69B2')

    })


var circle2 = indexCard.append('circle')
      .attr('cx', 175)
      .attr('cy',250)
      .attr('r', 175)
      .attr('fill', '#9F9F6C')
      .on('mouseover', function(d){
          d3.select(this).attr('fill', '#8B4EA1')
        })

        .on('mouseout', function(d){
    d3.select(this).attr('fill', '#8B4EA1')

        })



var circle3 = indexCard.append('circle')
              .attr('cx', 250)
              .attr('cy',250)
              .attr('r', 100)
              .attr('fill', '#868657')
              .on('mouseover', function(d){
                  d3.select(this).attr('fill', '#7A4C8A')
                })

                .on('mouseout', function(d){
            d3.select(this).attr('fill', '#7A4C8A')

                })

var circle4 = indexCard.append('circle')
  .attr('cx', 175)
          .attr('cy',250)
  .attr('r', 25)
    .attr('fill', '#6B6B49')
    .on('mouseover', function(d){
        d3.select(this).attr('fill', '#6F3B82')
  })
.on('mouseout', function(d){
d3.select(this).attr('fill', '#6F3B82')

                                })
