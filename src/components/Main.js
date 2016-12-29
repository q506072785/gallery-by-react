require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片数据，将图片名信息转成url路径
let imageDatas = require('../data/imageDatas.js');

//利用自执行函数，讲图片名信息转换成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr){
	for(var i = 0,j = imageDatasArr.length; i < j;i++){
		var oneImageData = imageDatasArr[i];
		
		oneImageData.imageURL = require('../images/'+oneImageData.fileName);
		
		imageDatasArr[i] = oneImageData;
	}
	return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className='stage'>
      	<section className='img-sec'>
      	</section>
      	<nav className='controller-nav'>
      	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;//暴露js模块
