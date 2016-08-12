var footers= [
	{slogan: 'Fashion chuyên cung cấp các mẫu thời tràn phù hợp cho thời trang công sở. Cam kết mang lại chất lượng sản phẩm cao, mẫu mã đẹp hợp thời trang. Chúng tôi luôn tiếp nhận những thông tin của khách hàng để cải thiên khả năng phục vụ và chất lượng sản phẩm', imageUrl:'bootstrap/img/logo.png'}
];

var  fashionApp= angular.module('fashionApp',[]);
	fashionApp.controller('footer', function ($scope) {
		$scope.footers = footers;
	});