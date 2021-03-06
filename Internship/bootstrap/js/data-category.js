var products = [
    {prod: 'Áo'},
    {prod: 'Phụ kiện'},
    {prod: 'Váy, đầm'}
];

var trademarks = [
    {name: 'Anne Klein'},
    {name: 'Calvin Klein'},
    {name: 'Charter Club'},
    {name: 'Cosabella'},
    {name: 'DKNY'}
];
var prices = [
    {level: 'Dưới 1 triệu'},
    {level: '1 triệu - 2 triệu'},
    {level: '2 triệu - 5 triệu'},
    {level: '5 triệu - 10 triệu'},
    {level: 'Trên 10 triệu'}
];
var prod_new_left = [
    {title_prod: 'Áo Len Ren Skinny...', price: '740.000₫', imageUrl: "bootstrap/img/sp1.jpeg"},
    {title_prod: 'Váy Hoa Nữ A32-W122', price: '5.200.000₫', imageUrl: "bootstrap/img/sp5.jpeg"},
    {title_prod: 'Váy Skinny Túi Viền...', price: '5.200.000₫', imageUrl: "bootstrap/img/sp3.jpeg"}
];
var prod_new_right = [
    {title_prod: 'Chân Váy Chữ A...', price: '9.800.000₫', imageUrl: "bootstrap/img/sp8.jpeg"},
    {title_prod: 'Đầm Xòe Michael Kors', price: '8.600.000₫', imageUrl: "bootstrap/img/sp4.jpeg"},
    {title_prod: 'Váy Ren Tommy Hilfiger', price: '11.500.000₫', imageUrl: "bootstrap/img/sp2.jpeg"}
];
var regular_slider = [
    {imageUrl: "bootstrap/img/vendor_logo_1.png"},
    {imageUrl: "bootstrap/img/vendor_logo_2.png"},
    {imageUrl: "bootstrap/img/vendor_logo_3.png"},
    {imageUrl: "bootstrap/img/vendor_logo_4.png"},
    {imageUrl: "bootstrap/img/vendor_logo_5.png"}
];
var vay_mi_sliders = [
    {vay: 'Boots', price: '5.500.000đ', imageUrl: "bootstrap/images/1.jpg"},
    {vay: 'Oxfords', price: '8.600.000₫', imageUrl: "bootstrap/images/2.jpg"},
    {vay: 'Loafers', price: '11.500.000₫', imageUrl: "bootstrap/images/3.jpg"},
    {vay: 'Sneakers', price: '9.800.000₫', imageUrl: "bootstrap/images/4.jpg"}
];
var quan_mi_sliders = [
    {quan: 'Belts', price: '700.000₫', imageUrl: "bootstrap/images/5.jpg"},
    {quan: 'Hats & Caps', price: '800.000₫', imageUrl: "bootstrap/images/6.jpg"},
    {quan: 'Sunglasses', price: '400.000đ', imageUrl: "bootstrap/images/7.jpg"},
    {quan: 'Scarves', price: '500.000₫', imageUrl: "bootstrap/images/8.jpg"}
];
var pk_mi_sliders = [
    {pk: 'Belts', price: '700.000₫', imageUrl: "bootstrap/images/9.jpg"},
    {pk: 'Hats & Caps', price: '800.000₫', imageUrl: "bootstrap/images/10.jpg"},
    {pk: 'Sunglasses', price: '400.000đ', imageUrl: "bootstrap/images/11.jpg"}
];
var giay_mi_sliders = [
    {giay: 'Carry-Ons', price: '600.000₫', imageUrl: "bootstrap/images/12.jpg"},
    {giay: 'Duffel Bags', price: '500.000₫', imageUrl: "bootstrap/images/13.jpg"},
    {giay: 'Laptop Bags', price: '400.000đ', imageUrl: "bootstrap/images/14.jpg"},
    {giay: 'Briefcases', price: '550.000đ', imageUrl: "bootstrap/images/15.jpg"}
];
var footers = {
    slogan: 'Fashion chuyên cung cấp các mẫu thời tràn phù hợp cho thời trang công sở. Cam kết mang lại chất lượng sản phẩm cao, mẫu mã đẹp hợp thời trang. Chúng tôi luôn tiếp nhận những thông tin của khách hàng để cải thiên khả năng phục vụ và chất lượng sản phẩm',
    imageUrl: 'bootstrap/img/logo.png'
};
var contacts = {
    address: '80B Lê Duẩn - Đà Nẵng',
    phone: '091.111.4486',
    email: 'myhanhqt96@gmail.com'
};
var infomation_prods = [
    {gioi_thieu: 'Thiết kế nổi bật với túi viền da, kiểu dáng ôm sát, khoe đường cong và đôi chân thon dài'},
    {gioi_thieu: '- Đường may chắc chắn, khéo léo.'},
    {gioi_thieu: '- Dễ dàng mix cùng các kiểu áo form dài như sơ mi, áo thun ... '},
    {gioi_thieu: '- Chất liệu: Jeans co giãn tốt, tạo cảm giác dễ chịu khi di chuyển.'},
    {gioi_thieu: '- Size: XL - XXL - XXXL - XXXXL'}
];
var policys = [
    {dieu: 'Với mong muốn mang lại sự hài lòng cho quý khách khi mua hàng, chúng tôi có những quy định trong vận chuyển, nhằm đảm bảo rằng những sản phẩm quý khách mua là sản phẩm mà vừa ý nhất.'},
    {dieu: '1. Chúng tôi sẽ được thực hiện và chuyển phát dựa trên mẫu khách hàng đã chọn. Trường hợp không có đúng sản phẩm Quý khách yêu cầu chúng tôi sẽ gọi điện xác nhận gửi sản phẩm tương tự thay thế.'},
    {dieu: '2. Thời gian chuyển phát tiêu chuẩn cho một đơn hàng là 12 giờ kể từ lúc đặt hàng. Chuyển phát sản phẩm đến các khu vực nội thành thành phố trên toàn quốc từ 4 giờ kể từ khi nhận hàng, chuyển phát ngay trong ngày đến các vùng lân cận (bán kính từ 10km – 50km).'},
    {dieu: '3. Các đơn hàng gửi đi quốc tế: không đảm bảo thời gian được chính xác như yêu cầu, không đảm bảo thời gian nếu thời điểm chuyển phát trùng với các ngày lễ, tết và chủ nhật tại khu vực nơi đến.'},
    {dieu: '4. Trường hợp không liên lạc được với người nhận, người nhận đi vắng:'},
    {dieu: '- Nếu chưa rõ địa chỉ chúng tôi sẽ lưu lại trong vòng 6 tiếng và liên lạc lại với người nhận, trong trường hợp ko liên lạc được đơn hàng sẽ bị hủy và không được hoàn lại thanh toán. '},
    {dieu: '- Nếu địa chỉ là công ty, văn phòng, nhà ở… Chúng tôi sẽ gửi đồng nghiệp, người thân nhận hộ và ký xác nhận - Để tại một nơi an toàn người nhận dễ nhận thấy tại nhà, văn phòng, công ty… Trường hợp này không có ký nhận.'},
    {dieu: '5. Trường hợp người nhận không nhận đơn hàng: '},
    {dieu: '- Chúng tôi sẽ hủy bỏ đơn hàng. Trường hợp này sẽ không được hoàn trả thanh toán.'},
    {dieu: '6. Trường hợp không đúng địa chỉ, thay đổi địa chỉ:'},
    {dieu: '- Không đúng địa chỉ: trường hợp sai địa chỉ chúng tôi sẽ lưu lại 6 tiếng và liên lạc với người gửi và người nhận để thỏa thuận về địa điểm, thời gian, nếu địa chỉ mới không quá 3km sẽ phát miễn phí. Trường hợp địa chỉ mới xa hơn 3km sẽ tính thêm phí theo quy định chuyển phát.'},
    {dieu: '7. Trường hợp không tồn tại người nhận tại địa chỉ yêu cầu: đơn hàng sẽ được hủy và không được hoàn lại thanh toán.'},
    {dieu: '8. Chúng tôi không vận chuyển sản phẩm đến các địa chỉ trên tàu hỏa, máy bay, tàu thủy, khu vực nguy hiểm, các khu vực cấm…'}
];
var top1 = [
    {id: 1, title_product: 'Áo Len Ren Skinny...', imageUrl: "bootstrap/img/sp3.jpeg" },
    {id: 2, title_product: 'Váy Hoa Nữ A32-W122', imageUrl: "bootstrap/img/sp5.jpeg"},
    {id: 3, title_product: 'Váy Ren Tommy Hilfiger', imageUrl: "bootstrap/img/sp2.jpeg"}
];
var top2 = [
    {id: 4, title_product: 'Chân Váy Chữ A...', imageUrl: "bootstrap/img/sp8.jpeg"},
    {id: 5, title_product: 'Váy 1 Vai Skinny...', imageUrl: "bootstrap/img/sp9.jpeg"},
    {id: 6, title_product: 'Váy Hoa Nữ A32-W122', imageUrl: "bootstrap/img/sp1.jpeg"}
];
var top3 = [
    {id: 7, title_product: 'Đầm Xòe Michael Kors', imageUrl: "bootstrap/img/sp4.jpeg"},
    {id: 8, title_product: 'Váy Ren Tommy Hilfiger', imageUrl: "bootstrap/img/sp5.jpeg"},
    {id: 9, title_product: 'Váy Skinny Túi Viền...', imageUrl: "bootstrap/img/sp3.jpeg"}
];
var top4 = [
    {id: 10, title_product: 'Váy Ren Tommy Hilfiger', imageUrl: "bootstrap/img/sp2.jpeg"},
    {id: 11, title_product: 'Áo Len Ren Skinny...', imageUrl: "bootstrap/img/sp9.jpeg"},
    {id: 12, title_product: 'Váy Hoa Nữ A32-W122', imageUrl: "bootstrap/img/sp1.jpeg"}
];

var titles = [
    {id: 1, title_product: 'Áo Len Ren Skinny...', price: '740.000₫', imageUrl: "bootstrap/img/sp3.jpeg"},
    {id: 2, title_product: 'Váy Hoa Nữ A32-W122', price: '5.200.000₫', imageUrl: "bootstrap/img/sp5.jpeg"},
    {id: 3, title_product: 'Váy Ren Tommy Hilfiger', price: '11.500.000₫', imageUrl: "bootstrap/img/sp2.jpeg"},
    {id: 4, title_product: 'Chân Váy Chữ A...', price: '9.800.000₫', imageUrl: "bootstrap/img/sp8.jpeg"},
    {id: 5, title_product: 'Váy 1 Vai Skinny...', price: '2.500.000₫', imageUrl: "bootstrap/img/sp9.jpeg"},
    {id: 6, title_product: 'Váy Hoa Nữ A32-W122', price: '5.200.000₫', imageUrl: "bootstrap/img/sp1.jpeg"},
    {id: 7, title_product: 'Đầm Xòe Michael Kors', price: '8.600.000₫', imageUrl: "bootstrap/img/sp4.jpeg"},
    {id: 8, title_product: 'Váy Ren Tommy Hilfiger', price: '11.500.000₫', imageUrl: "bootstrap/img/sp5.jpeg"},
    {id: 9, title_product: 'Váy Skinny Túi Viền...', price: '5.200.000₫', imageUrl: "bootstrap/img/sp3.jpeg"},
    {id: 10, title_product: 'Váy Ren Tommy Hilfiger', price: '11.500.000₫', imageUrl: "bootstrap/img/sp2.jpeg"},
    {id: 11, title_product: 'Áo Len Ren Skinny...', price: '740.000₫', imageUrl: "bootstrap/img/sp9.jpeg"},
    {id: 12, title_product: 'Váy Hoa Nữ A32-W122', price: '5.200.000₫', imageUrl: "bootstrap/img/sp1.jpeg"}
];
var citys = [
    {value: 2, name: "TP Hồ Chí Minh"},
    {value: 3, name: "An Giang"},
    {value: 4, name: "Bà Rịa-Vũng Tàu"},
    {value: 5, name: "Bắc Giang"},
    {value: 6, name: "Bắc Kạn"},
    {value: 7, name: "Bạc Liêu"},
    {value: 8, name: "Bắc Ninh"},
    {value: 9, name: "Bến Tre"},
    {value: 10, name: "Bình Định"},
    {value: 11, name: "Bình Dương"},
    {value: 12, name: "Bình Phước"},
    {value: 13, name: "Bình Thuận"},
    {value: 14, name: "Cà Mau"},
    {value: 15, name: "Cần Thơ"},
    {value: 16, name: "Cao Bằng"},
    {value: 17, name: "Đà Nẵng"},
    {value: 18, name: "Đắk Lắk"},
    {value: 19, name: "Đắk Nông"},
    {value: 20, name: "Điện Biên"},
    {value: 21, name: "Đồng Nai"},
    {value: 22, name: "Đồng Tháp"},
    {value: 23, name: "Gia Lai"},
    {value: 24, name: "Hà Giang"}
];
var countys = [
    {value: 1, name: "Quận Hoàn Kiếm"},
    {value: 2, name: "Quận Ba Đình"},
    {value: 3, name: "Quận Cầu Giấy"},
    {value: 4, name: "Quận Đống Đa"},
    {value: 5, name: "Quận Hai Bà Trưng"},
    {value: 6, name: "Quận Thanh Xuân"},
    {value: 7, name: "Quận Hoàng Mai"},
    {value: 8, name: "Quận Long Biên"},
    {value: 9, name: "Quận Tây Hồ"},
    {value: 10, name: "Thị xã Sơn Tây"},
    {value: 11, name: "Huyện Ba Vì"},
    {value: 12, name: "Huyện Chương Mỹ"},
    {value: 13, name: "Huyện Đan Phượng"},
    {value: 14, name: "Huyện Đông Anh"},
    {value: 15, name: "Huyện Gia Lâm"},
    {value: 16, name: "Huyện Hoài Đức"},
    {value: 17, name: "Huyện Mê Linh"},
    {value: 18, name: "Huyện Mỹ Đức"},
    {value: 19, name: "Huyện Phú Xuyên"},
    {value: 20, name: "Huyện Phúc Thọ"},
    {value: 21, name: "Huyện Quốc Oai"},
    {value: 22, name: "Huyện Sóc Sơn"},
    {value: 23, name: "Huyện Thạch Thất"},
    {value: 24, name: "Huyện Thanh Oai"}
];
//ui-router
var fashionApp = angular.module('fashionApp', ['ui.router', 'ngDialog']);

fashionApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "template/main.html",
                controller: 'homeController as home'
            })
            .state('category', {
                url: "/category",
                templateUrl: "template/category.html",
                controller: 'categoryController'
            })
            .state('contact', {
                url: "/contact",
                templateUrl: "template/contact.html",
                controller: 'contactController as contact'
            })
            .state('detail', {
                url: "/detail",
                templateUrl: "template/detail.html",
                controller: 'detailController as detail'
            })
            .state('checkout', {
                url: "/checkout",
                templateUrl: "template/checkout.html",
                controller: 'checkoutController as checkout'
            });

});

fashionApp.controller("homeController", homeController);
fashionApp.controller("categoryController", categoryController);
fashionApp.controller("contactController", contactController);
fashionApp.controller("detailController", detailController);
fashionApp.controller("checkoutController", checkoutController);

function checkoutController($scope, $timeout) {
    var self = this;
    $scope.citys = citys;
    $scope.countys = countys;
}
function contactController($scope, $timeout) {
    var self = this;
}
function detailController($scope, $timeout) {
    var self = this;

    self.top1 = top1;
    self.top2 = top2;
    self.top3 = top3;
    self.top4 = top4;
    $scope.infomation_prods = infomation_prods;
    $scope.policys = policys;
    console.log($scope.policys)
    $scope.activeTab = 1;
    $scope.changeData = function (key) {
        $scope.activeTab = key;
    }
}

function categoryController($scope, $timeout, $rootScope, ngDialog) {
    $scope.products = products;
    $scope.trademarks = trademarks;
    $scope.prices = prices;
    $scope.titles = titles;
    $scope.citys = citys;
    $scope.test = '';
    var test = $rootScope.$on('dataFilter', function (e, value) {
        $scope.test = value;
        console.log(value);
    });
    $scope.$on('destroy', test);
    $scope.open = function () {
        console.log("gsfs");
        ngDialog.open({template: 'bootstrap/popup/popupDetail.html', className: 'ngdialog-theme-default'});
    };
}
function homeController($scope, $timeout) {
    var self = this;

    $timeout(function () {
        $(".regular").slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 3
        });
        $('.regular1').slick();
    }, 1000);

}


fashionApp.controller("repeatCategory", repeatCategory);
function repeatCategory($scope, $rootScope) {


    $scope.prod_new_left = prod_new_left;
    $scope.prod_new_right = prod_new_right;
    $scope.regular_slider = regular_slider;
    $scope.vay_mi_sliders = vay_mi_sliders;
    $scope.quan_mi_sliders = quan_mi_sliders;
    $scope.pk_mi_sliders = pk_mi_sliders;
    $scope.giay_mi_sliders = giay_mi_sliders;
    $scope.footers = footers;
    $scope.contacts = contacts;



    //Nhan data tu controller tren


}

//Truyền data cho controller khac
function menuCtrl($scope, $rootScope, ngDialog, $timeout) {
    $scope.search = '';
    $scope.openSearch = false;
    $scope.checkFilter = function (keyword) {
        $rootScope.$emit('dataFilter', keyword);
        console.log(keyword)
    }
    $scope.open_search = function () {

        $scope.openSearch = !$scope.openSearch;

    }
//popup cart
    $scope.open = function () {
        console.log("gsfs");
        ngDialog.open({
            template: 'bootstrap/popup/popupCart.html',
            className: 'ngdialog-theme-default',
            controller: 'menuCtrl'
        });
    };
}

fashionApp.controller("menuCtrl", menuCtrl);



fashionApp.controller('userCtrl', ['$scope', function ($scope) {
        var self = this;
        self.user = {id: null, username: '', password: '', email: ''};
        self.id = 1;
        self.users = [];
        self.submit = function () {
            if (self.user.id === null) {
                self.user.id = self.id++;
                console.log('Saving New User', self.user);
                self.users.push(self.user); //Or send to server, we will do it in when handling services

            } else {
                for (var i = 0; i < self.users.length; i++) {
                    if (self.users[i].id === self.user.id) {
                        self.users[i] = self.user;
                        break;
                    }
                }
                console.log('User updated with id ', self.user.id);
            }
            self.reset();
        };
        self.edit = function (id) {
            console.log('id to be edited', id);
            for (var i = 0; i < self.users.length; i++) {
                if (self.users[i].id === id) {
                    self.user = angular.copy(self.users[i]);
                    break;
                }
            }
        }

        self.reset = function () {
            self.user = {id: null, username: '', password: '', email: ''};
            $scope.myForm.$setPristine(); //reset Form
        }

    }]);
fashionApp.controller("userCtrl", userCtrl);
//popup user
function userCtrl($scope, $rootScope, ngDialog, $timeout){
    $scope.currentTab = 'login';
    $scope.id = 1;
    $scope.changeTab = function(key){
        $scope.currentTab = key;
    }
    $scope.open = function () {
        console.log('nhan');
        ngDialog.open({
            template: 'bootstrap/popup/popupLogin.html',
            className: 'ngdialog-theme-default',
            controller: 'userCtrl'
        });
    };
    $scope.user = {id: null, username: '', password: '', email: ''};
    $scope.users = [];
        
        $scope.submit = function () {
            if ($scope.user.id === null) {
                $scope.user.id = $scope.id++;
                console.log('Saving New User', $scope.user);
                $scope.users.push($scope.user); //Or send to server, we will do it in when handling services

            } else {
                angular.forEach($scope.users,function(value,index){
                    if(value.id === $scope.user.id){
                        value = $scope.user;
                    }
                });
                
            }
            $scope.reset();
        };
        $scope.edit = function (id) {
            console.log('id to be edited', id);
            for (var i = 0; i < $scope.users.length; i++) {
                if ($scope.users[i].id === id) {
                    $scope.user = angular.copy($scope.users[i]);
                    break;
                }
            }
        }

        $scope.reset = function () {
            $scope.user = {id: null, username: '', password: '', email: ''};
            ngDialog.closeAll();
            console.log('Saving New User', $scope.users);
        }
}
fashionApp.controller('namesCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

        $scope.orderByMe = function (x) {
            $scope.myOrderBy = x;
        }
        $scope.test = '';
        var test = $rootScope.$on('dataFilter', function (e, value) {
            $scope.test = value;
        });
        $scope.$on('destroy', test);
    }]);

fashionApp.controller('topCtrl', ['$scope', function ($scope) {
        $scope.top1 = top1;
        $scope.top2 = top2;
        $scope.top3 = top3;
        $scope.top4 = top4;
        $scope.orderByMe = function (x) {
            $scope.myOrderBy = x;
        }
    }]);

fashionApp.filter('filterFunction', function () {
    return function (input, opt) {
        if (opt) {
            var out = [];
            for (var i = 0; i < input.length; i++) {
                var str = input[i].title_product;
                if (str) {
                    str = str.toLowerCase().replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a").replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e").replace(/ì|í|ị|ỉ|ĩ/g, "i").replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o").replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u").replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y").replace(/đ/g, "d");
                    if (str.search(opt.toLowerCase()) >= 0 || input[i].title_product.toLowerCase().search(opt.toLowerCase()) >= 0) {
                        out.push(input[i]);
                    }
                }
                ;
            }
            return out;
        } else {
            return input;
        }
    }
});

fashionApp.controller('AppController', ['$scope', function ($scope) {
        var self = this;
        self.user = {id: null, username: '', password: '', email: ''};
        self.id = 1;
        self.users = [];
        self.submit = function () {
            if (self.user.id === null) {
                self.user.id = self.id++;
                console.log('Saving New User', self.user);
                self.users.push(self.user); //Or send to server, we will do it in when handling services

            } else {
                for (var i = 0; i < self.users.length; i++) {
                    if (self.users[i].id === self.user.id) {
                        self.users[i] = self.user;
                        break;
                    }
                }
                console.log('User updated with id ', self.user.id);
            }
            self.reset();
        };
        self.edit = function (id) {
            console.log('id to be edited', id);
            for (var i = 0; i < self.users.length; i++) {
                if (self.users[i].id === id) {
                    self.user = angular.copy(self.users[i]);
                    break;
                }
            }
        }

        self.reset = function () {
            self.user = {id: null, username: '', password: '', email: ''};
            $scope.myForm.$setPristine(); //reset Form
        }

    }]);

