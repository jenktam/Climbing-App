import React, { Component } from 'react'

const Home = props => (
  <div>
    <div class="span8">
      <div id="myCarousel" class="carousel slide">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class=""></li>
          <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="2" class=""></li>
        </ol>
        <div class="carousel-inner">
          <div class="item">
            <img src="http://placehold.it/1900x700"/>
            <div class="carousel-caption">
              <h4>First Thumbnail label</h4>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
          </div>
          <div class="item active">
            <img src="http://placehold.it/1900x700"/>
            <div class="carousel-caption">
              <h4>Second Thumbnail label</h4>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
          </div>
          <div class="item">
            <img src="http://placehold.it/1900x700"/>
            <div class="carousel-caption">
              <h4>Third Thumbnail label</h4>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
          </div>
        </div>
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">›</a>
      </div>
      </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h1>Heading Here</h1>
          Nullam sapien massa, aliquam in cursus ut, ullamcorper in tortor. Aliquam mauris arcu, tristique a lobortis vitae, condimentum feugiat justo.
        </div>
        <div class="col-md-4">
          <h1>Heading Here</h1>
          Nullam sapien massa, aliquam in cursus ut, ullamcorper in tortor. Aliquam mauris arcu, tristique a lobortis vitae, condimentum feugiat justo.
        </div>
        <div class="col-md-4">
          <h1>Heading Here</h1>
          Nullam sapien massa, aliquam in cursus ut, ullamcorper in tortor. Aliquam mauris arcu, tristique a lobortis vitae, condimentum feugiat justo.
        </div>
      </div>
    </div>
  </div>
)

export default Home
