var products=[
			{prod:'Áo'},
            {prod:'Phụ kiện'},
            {prod:'Váy, đầm'},
            ];

var trademarks= [
			{name:'Anne Klein'},
            {name:'Calvin Klein'},
            {name:'Charter Club'},
            {name:'Cosabella'},
            {name:'DKNY'},
            ];
var prices= [
			{level:'Dưới 1 triệu'},
            {level:'1 triệu - 2 triệu'},
            {level:'2 triệu - 5 triệu'},
            {level:'5 triệu - 10 triệu'},
            {level:'Trên 10 triệu'},
            ]; 
var titles= [
			{title_product:'Áo Len Ren Skinny...', price: '740.000₫', imageUrl:"bootstrap/img/sp1.jpeg"},
            {title_product:'Váy Hoa Nữ A32-W122', price: '5.200.000₫', imageUrl:"bootstrap/img/sp5.jpeg"},
            {title_product:'Váy Ren Tommy Hilfiger', price: '11.500.000₫', imageUrl:"bootstrap/img/sp2.jpeg"},
            {title_product:'Chân Váy Chữ A...', price: '9.800.000₫', imageUrl:"bootstrap/img/sp8.jpeg"},
            {title_product:'Váy 1 Vai Skinny...', price: '2.500.000₫', imageUrl:"bootstrap/img/sp9.jpeg"},
            {title_product:'Váy Hoa Nữ A32-W122', price: '5.200.000₫', imageUrl:"bootstrap/img/sp1.jpeg"},
            {title_product:'Đầm Xòe Michael Kors', price: '8.600.000₫', imageUrl:"bootstrap/img/sp4.jpeg"},
            {title_product:'Váy Ren Tommy Hilfiger', price: '11.500.000₫', imageUrl:"bootstrap/img/sp5.jpeg"},
            {title_product:'Váy Skinny Túi Viền...', price: '5.200.000₫', imageUrl:"bootstrap/img/sp3.jpeg"},
            {title_product:'Váy Ren Tommy Hilfiger', price: '11.500.000₫', imageUrl:"bootstrap/img/sp2.jpeg"},
            {title_product:'Áo Len Ren Skinny...', price: '740.000₫', imageUrl:"bootstrap/img/sp9.jpeg"},
            {title_product:'Váy Hoa Nữ A32-W122', price: '5.200.000₫', imageUrl:"bootstrap/img/sp1.jpeg"},
            ];            
var prod_new_left= [
			{title_prod:'Áo Len Ren Skinny...', price: '740.000₫', imageUrl:"bootstrap/img/sp1.jpeg"},
            {title_prod:'Váy Hoa Nữ A32-W122', price: '5.200.000₫', imageUrl:"bootstrap/img/sp5.jpeg"},
            {title_prod:'Váy Skinny Túi Viền...', price: '5.200.000₫', imageUrl:"bootstrap/img/sp3.jpeg"},
            ];            
var prod_new_right= [
			{title_prod:'Chân Váy Chữ A...', price: '9.800.000₫', imageUrl:"bootstrap/img/sp8.jpeg"},
            {title_prod:'Đầm Xòe Michael Kors', price: '8.600.000₫', imageUrl:"bootstrap/img/sp4.jpeg"},
            {title_prod:'Váy Ren Tommy Hilfiger', price: '11.500.000₫', imageUrl:"bootstrap/img/sp2.jpeg"},
            ]; 
var regular_slider= [
			{imageUrl:"bootstrap/img/vendor_logo_1.png"},
            {imageUrl:"bootstrap/img/vendor_logo_2.png"},
            {imageUrl:"bootstrap/img/vendor_logo_3.png"},
            {imageUrl:"bootstrap/img/vendor_logo_4.png"},
            {imageUrl:"bootstrap/img/vendor_logo_5.png"},
            ];
var vay_mi_sliders= [
			{vay:'Boots', price: '5.500.000đ', imageUrl:"bootstrap/images/1.jpg"},
            {vay:'Oxfords', price: '8.600.000₫', imageUrl:"bootstrap/images/2.jpg"},
            {vay:'Loafers', price: '11.500.000₫', imageUrl:"bootstrap/images/3.jpg"},
            {vay:'Sneakers', price: '9.800.000₫', imageUrl:"bootstrap/images/4.jpg"},
            ];
var quan_mi_sliders= [
            {quan:'Belts', price: '700.000₫', imageUrl:"bootstrap/images/5.jpg"},
            {quan:'Hats & Caps', price: '800.000₫', imageUrl:"bootstrap/images/6.jpg"},
            {quan:'Sunglasses', price: '400.000đ', imageUrl:"bootstrap/images/7.jpg"},
            {quan:'Scarves', price: '500.000₫', imageUrl:"bootstrap/images/8.jpg"},
            ];
var pk_mi_sliders= [
            {pk:'Belts', price: '700.000₫', imageUrl:"bootstrap/images/9.jpg"},
            {pk:'Hats & Caps', price: '800.000₫', imageUrl:"bootstrap/images/10.jpg"},
            {pk:'Sunglasses', price: '400.000đ', imageUrl:"bootstrap/images/11.jpg"},
            ];
var giay_mi_sliders= [
            {giay:'Carry-Ons', price: '600.000₫', imageUrl:"bootstrap/images/12.jpg"},
            {giay:'Duffel Bags', price: '500.000₫', imageUrl:"bootstrap/images/13.jpg"},
            {giay:'Laptop Bags', price: '400.000đ', imageUrl:"bootstrap/images/14.jpg"},
            {giay:'Briefcases', price: '550.000đ', imageUrl:"bootstrap/images/15.jpg"},
            ];
var footers={
		slogan: 'Fashion chuyên cung cấp các mẫu thời tràn phù hợp cho thời trang công sở. Cam kết mang lại chất lượng sản phẩm cao, mẫu mã đẹp hợp thời trang. Chúng tôi luôn tiếp nhận những thông tin của khách hàng để cải thiên khả năng phục vụ và chất lượng sản phẩm', 
		imageUrl:'bootstrap/img/logo.png'
	};
var contacts={
		address: '80B Lê Duẩn - Đà Nẵng', 
		phone:'091.111.4486',
		email: 'myhanhqt96@gmail.com'
	};

	var  fashionApp= angular.module('fashionApp',[]);
	fashionApp.controller('repeatCategory', function ($scope) {
		$scope.products = products;
		$scope.trademarks = trademarks;
		$scope.prices = prices;
		$scope.titles = titles;
		$scope.prod_new_left = prod_new_left;
		$scope.prod_new_right = prod_new_right;
		$scope.regular_slider = regular_slider;
		$scope.vay_mi_sliders = vay_mi_sliders;
		$scope.quan_mi_sliders = quan_mi_sliders;
		$scope.pk_mi_sliders = pk_mi_sliders;
		$scope.giay_mi_sliders = giay_mi_sliders;
		$scope.footers = footers;
		$scope.contacts = contacts;
	});

