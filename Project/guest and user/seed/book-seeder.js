var Book = require('../models/book');
var Banner = require('../models/banner');
var mongoose = require('mongoose');

mongoose.connect('mongodb://member:14clcgoofy@g04-goofy-shard-00-00-96sb7.mongodb.net:27017,g04-goofy-shard-00-01-96sb7.mongodb.net:27017,g04-goofy-shard-00-02-96sb7.mongodb.net:27017/Goofy?ssl=true&replicaSet=G04-Goofy-shard-0&authSource=admin');
// var uri = 'localhost:27017/goofy';
// //using Native Promise (Available in ES6)
// mongoose.Promise = global.Promise;

// var options = { promiseLibrary: require('bluebird') };
// var db = mongoose.createConnection(uri, options);

//mongoose.connect('localhost:27017/Goofy');

var books = [
    new Book({
        title: 'Kẻ Móc Túi',
        author: 'Nakamura Fuminori',
        type: 'Văn học nước ngoài',
        category: 'Truyện trinh thám - Kinh dị',
        newprice: 53300,
        oldprice: 65000,
        discount: 18,
        saving: 11700,
        cover: "Bìa mềm",
        summary: '"Cuốn sách này không dành cho những người ưa thích tiểu thuyết trinh thám truyền thống. Một câu chuyện thông minh, thuyết phục và cảm động bất ngờ.”',
        description: 'Một gã trai sống lang bạt ở Tokyo bằng tài móc túi thiên bẩm: móc túi thuận cả hai tay. Gã với tay móc mọi thứ của người khác nhưng lại quay lưng với thế giới.<br/> <br/>' +
            'Một gã trai sống lang bạt ở Tokyo bằng tài móc túi thiên bẩm: móc túi thuận cả hai tay. Gã với tay móc mọi thứ của người khác nhưng lại quay lưng với thế giới. Một ngày, tay trùm Yazuka bắt gã thực hiện ba phi vụ “nhỏ”: lấy trộm điện thoại di động của một người đàn ông; lấy một vật nhỏ có dính vân tay của một người đàn ông khác kèm theo vài sợi tóc của hắn; đánh tráo tập tài liệu mà một người đàn ông luôn mang theo bên người sao cho ít nhất hai ngày sau hắn mới phát hiện ra.<br> <br>' +
            'Hai phi vụ đầu được gã thực hiện suôn sẻ, cho tới phi vụ cuối cùng… Và số phận hai mẹ con cô gái điếm mới quen đột nhiên nằm trong tay gã…<br> <br>' +
            'Giữa sự sống và cái chết, ánh sáng bất ngờ soi rọi lên cuộc đời kẻ móc túi… <br> <br>' +
            '<strong>Nhận định</strong><br><br>' +
            '<i>“Cuốn sách này không dành cho những người ưa thích tiểu thuyết trinh thám truyền thống.Một câu chuyện thông minh, thuyết phục và cảm động bất ngờ.”</i> <br> <br>' +
            '<strong>–Laura Wilson, The Guardian</strong>',
        publisher: 'Nhã Nam',
        publishing_company: 'Lao Động',
        numberpage: '156',
        size: '14 x 20.5 cm',
        weight: '290',
        view: 39,
        release_date: new Date('2017-03-30'),
        imagepathsmall: '/images/ke-moc-tui-small.jpg',
        imagepathmedium: '/images/ke-moc-tui-medium.jpg',
        imagepathlarge: '/images/ke-moc-tui-large.jpg'
    }),
    new Book({
        title: 'Sherlock Holmes – Tập 1',
        author: 'Conan Doyle',
        type: 'Văn học nước ngoài',
        category: 'Truyện trinh thám - Kinh dị',
        newprice: 92000,
        oldprice: 115000,
        discount: 20,
        saving: 23000,
        cover: "Bìa mềm",
        summary: 'Nhân vật Sherlock Holmes từ lâu đã trở thành nguồn cảm hứng cho hàng trăm, hàng ngàn tác phẩm ở nhiều loại hình nghệ thuật khác: từ âm nhạc, ca kịch đến điện ảnh… Bộ sách Sherlock Holmes toàn tập (Hộp 3 Tập) một lần nữa mang đến cho người đọc cơ hội được nhìn ngắm, ngưỡng mộ và đánh giá nhân vật...',
        description: '<b>“Tên tôi là Sherlock Holmes. Công việc của tôi là tìm hiểu những gì mà người khác không biết…”</b> <br> <br>' +
            'Đối với các độc giả yêu thích dòng văn trinh thám nói riêng cũng như những người yêu sách trên toàn thế giới nói chung thì không phải nói nhiều về sức hút của hai cái tên: nhà văn Conan Doyle và “đứa con tinh thần” của cả cuộc đời ông - Sherlock Holmes. <br><br>' +
            'Nhân vật Sherlock Holmes từ lâu đã trở thành nguồn cảm hứng cho hàng trăm, hàng ngàn tác phẩm ở nhiều loại hình nghệ thuật khác: từ âm nhạc, ca kịch đến điện ảnh… Bộ sách Sherlock Holmes toàn tập (Hộp 3 Tập) một lần nữa mang đến cho người đọc cơ hội được nhìn ngắm, ngưỡng mộ và đánh giá nhân vật độc đáo của nhà văn tài năng Conan Doyle. Chân dung cuộc đời, sự nghiệp và nhân cách của Sherlock Holmes chưa bao giờ được tái hiện chân thực, đầy đủ và sống động đến thế... Chỉ từ một giọt nước, người giỏi suy luận có thể đoán ra rất nhiều chuyện liên quan đến một thác nước hay một đại dương dù họ chưa bao giờ tận mắt nhìn thấy chúng. Như vậy, cuộc sống là một chuỗi mắt xích rộng lớn nhất của nó, nếu ta biết được một mắt xích. Như tất cả mọi khoa học khác, “suy đoán và phân tích” là một khoa học mà ta chỉ có thể làm chủ nó sau một quá trình nghiên cứu dài lâu, bền bỉ. <br><br>' +
            'Người mới đi vào lĩnh vực này nên bắt đầu bằng những vấn đề sơ đẳng: gặp bất kỳ ai, chỉ bằng vào sự quan sát, hãy cố tìm hiểu tiểu sử, nghề nghiệp hay thói quen của người ấy. Tuy có vẻ ấu trĩ nhưng thực ra sự thật này được rèn giũa các khả năng quan sát của ta và nó dạy cho ta biết cần phải nhìn thẳng vào đâu và phải tìm kiếm cái gì. Móng tay, những vết chai ở ngón trỏ và ngón cái, ống tay áo, đầu gối quần, dáng đi, cách đứng đều là những thứ nói lên nghề nghiệp của một con người…',
        publisher: 'Huy Hoàng',
        publishing_company: 'Văn học',
        numberpage: '666',
        size: '13.5 x 20.5 cm',
        weight: '550',
        view: 72,
        release_date: new Date('2017-03-29'),
        imagepathsmall: '/images/sherlock-holmes-tap-1-small.jpg',
        imagepathmedium: '/images/sherlock-holmes-tap-1-medium.jpg',
        imagepathlarge: '/images/sherlock-holmes-tap-1-large.jpg'
    }),
    new Book({
        title: 'Yêu Sao Để Không Đau',
        author: 'Hạ Vũ',
        type: 'Văn học trong nước',
        category: 'Truyện ngắn - Tản văn',
        newprice: 71380,
        oldprice: 86000,
        discount: 17,
        saving: 14620,
        cover: "Bìa mềm",
        summary: '"Quyển sách, sẽ như những lời “hướng dẫn giữ gìn” tình yêu cho bạn, là những gì tôi đã đi trước, trải nghiệm và ghi nhận. Bạn có thể lấy nó làm hành trang vững chắc trên con đường tình yêu của mình, cũng có thể đọc để cho biết thôi, và vẫn yêu theo cách riêng mà mình muốn. Nhưng, có thể hứa với tôi...',
        description: '"Quyển sách, sẽ như những lời “hướng dẫn giữ gìn” tình yêu cho bạn, là những gì tôi đã đi trước, trải nghiệm và ghi nhận. Bạn có thể lấy nó làm hành trang vững chắc trên con đường tình yêu của mình, cũng có thể đọc để cho biết thôi, và vẫn yêu theo cách riêng mà mình muốn. Nhưng, có thể hứa với tôi một điều này không? Rằng dù bạn có chọn thế nào, thì cũng nhất định không được hối tiếc với sự chọn lựa đó của mình. Vì vốn dĩ bạn đã từng biết, từng hiểu được, nhưng vẫn cam lòng đi theo tiếng gọi của con tim, không hề lo ngại. Sự dấn thân đó là một điều đáng hãnh diện. Sự lựa chọn đó sẽ là một dấu son đỏ cho một thời trẻ dại nhưng vô cùng lộng lẫy của bạn. Một thời từng thương, từng nhớ, từng mơ mộng, từng hi vọng… Một thời thật đẹp! Thế nên, hứa với tôi, đừng bao giờ hối tiếc cả. Cũng như đừng bao giờ để sự hối tiếc cản trở con đường đi tìm kiếm hạnh phúc của cuộc đời mình, được không?". <br> <br>' +
            'Những người xuất hiện trong “Góc khuất đàn bà”, liệu ai là người hạnh phúc nhất, hoặc liệu những người đàn bà trong cuốn sách này, ai là người đau khổ nhất? Sinh ra là đàn bà, là phụ nữ, từ những tháng ngày tuổi trẻ vô lo, rồi đến khi trưởng thành mang trong lòng bao nghĩ suy hay đến khi trở thành một người đàn bà thuần thục lại đem trong mình là hàng trăm những âu lo dang dở. Từ một bí mật nhỏ nhoi, dần dần lại trở thành một góc khuất sâu thẳm. Từ một giọt nước mắt, lại trở thành một nỗi khổ triền miên. Sau cùng, trong “Góc khuất” của đàn bà, bao nhiêu là đau khổ do đàn ông tạo ra, hay là do tự mình tạo nên, ai biết? Rốt cuộc, là đàn ông phụ họ, hay họ phụ chính mình? Đôi nét tác giả Chỉ trong vòng hơn 6 tháng xuất hiện, Hạ Vũ đã xây dựng thành công một trang Facebook cá nhân cập nhật đều đặn các tản văn tự viết thu về hàng trăm nghìn lượt chia sẻ, bình luận mỗi ngày. <br> <br>' +
            'Ngoài ra, Hạ Vũ còn được biết đến qua vai trò là admin của chuỗi các Fanpage tâm lý-tình cảm lớn, với những bài đăng nhận được rất nhiều sự đồng cảm, ủng hộ, và được các trang fanpage khác truyền nhau đăng tải lại. Nhưng tuyệt nhiên, Vũ – cách Hạ Vũ luôn tự xưng – vẫn chưa từng hé lộ công khai bất cứ thông tin, hình ảnh nào của mình. “ Kẻ nói hộ lòng người”, là điều duy nhất mà người ta biết thêm về Hạ Vũ, khi Vũ đáp lại câu hỏi “Vũ là ai?” mà các bạn đọc dành cho. <br> <br>' +
            'Giữa sự sống và cái chết, ánh sáng bất ngờ soi rọi lên cuộc đời kẻ móc túi… <br> <br>' +
            '“Thắc mắc Vũ là ai làm chi? <br><br>' +
            'Biết mặt Vũ làm gì? <br> <br>' +
            'Biết chữ của Vũ, biết nghề của Vũ là nói hộ lòng bạn là được rồi!” <br> <br>' +
            '(Hạ Vũ)',
        publisher: 'Bão',
        publishing_company: 'Hà Nội',
        numberpage: '216',
        size: '12 x 19 cm',
        weight: '260',
        view: 39,
        release_date: new Date('2017-04-07'),
        imagepathsmall: '/images/yeu-sao-de-khong-dau-small.jpg',
        imagepathmedium: '/images/yeu-sao-de-khong-dau-medium.jpg',
        imagepathlarge: '/images/yeu-sao-de-khong-dau-large.jpg'
    }),
    new Book({
        title: 'Cà Phê Cùng Tony (Tái Bản 2017)',
        author: 'Tony Buổi Sáng',
        type: 'Văn học trong nước',
        category: 'Truyện ngắn - Tản văn',
        newprice: 72250,
        oldprice: 85000,
        discount: 15,
        saving: 12750,
        cover: "Bìa mềm",
        summary: 'Có đôi khi vào những tháng năm bắt đầu vào đời, giữa vô vàn ngả rẽ và lời khuyên, khi rất nhiều dự định mà thiếu đôi phần định hướng, thì CẢM HỨNG là điều quan trọng để bạn trẻ bắt đầu bước chân đầu tiên trên con đường theo đuổi giấc mơ của mình. Cà Phê Cùng Tony là tập hợp những bài viết...',
        description: 'Có đôi khi vào những tháng năm bắt đầu vào đời, giữa vô vàn ngả rẽ và lời khuyên, khi rất nhiều dự định mà thiếu đôi phần định hướng, thì CẢM HỨNG là điều quan trọng để bạn trẻ bắt đầu bước chân đầu tiên trên con đường theo đuổi giấc mơ của mình. <b>Cà Phê Cùng Tony</b> là tập hợp những bài viết của tác giả <b>Tony Buổi Sáng</b>. Đúng như tên gọi, mỗi bài nhẹ nhàng như một tách cà phê, mà bạn trẻ có thể nhận ra một chút gì của chính mình hay bạn bè mình trong đó: Từ chuyện lớn như định vị bản thân giữa bạn bè quốc tế, cho đến chuyện nhỏ như nên chú ý những phép tắc xã giao thông thường. <br> <br>' +
            'Chúng tôi tin rằng những người trẻ tuổi luôn mang trong mình khát khao vươn lên và tấm lòng hướng thiện, và có nhiều cách để động viên họ biến điều đó thành hành động. Nếu như tập sách nhỏ này có thể khơi gợi trong lòng bạn đọc trẻ một cảm hứng tốt đẹp, như tách cà phê thơm vào đầu ngày nắng mới, thì đó là niềm vui lớn của tác giả <b>Tony Buổi Sáng</b>. <br> <br>' +
            '<b>Tony Buổi Sáng</b> cũng là tác giả của <b>Trên đường băng</b>, tác phẩm hiện đã bán hơn 200.000 bản.. <br> <br>' +
            'Giữa sự sống và cái chết, ánh sáng bất ngờ soi rọi lên cuộc đời kẻ móc túi… <br> <br>' +
            '<b>Trích đoạn</b> <br><br>' +
            '...Thật ra Tony hiểu vì sao các bác giáo sư tiến sĩ soạn sách đã phải đưa vào nhiều nội dung như vậy. Rất là tâm huyết và đáng trân trọng. Vì ngày xưa, kiến thức rất khó tìm. Nhiều điều hữu ích chỉ nằm trong sách, trong thư viện các thành phố lớn, các trường các viện đại học lớn và người ta phải nhớ mọi thứ, nên phải cộng điểm cho học sinh nông thôn vì ít cơ hội tiếp cận kiến thức. Nhưng, bây giờ kiến thức nằm hết trên mạng, trong file máy tính, truy cập là ra ngay, nên các nước đã phải thay đổi chương trình học phổ thông sau khi máy tính và internet ra đời. Học sinh chỉ cần nhớ những gì cốt lõi, và PHƯƠNG PHÁP tìm kiếm tài liệu. Vì chữ nghĩa rồi cũng sẽ rụng rơi theo thời gian, kiến thức mới lại bổ sung liên tục, nên phương pháp tìm kiếm thông tin tốt sẽ giúp ích cho các bạn trong cuộc sống sau này. Làm ngành nghề gì cũng phải cập nhật cái mới...',
        publisher: 'NXB Trẻ',
        publishing_company: 'NXB Trẻ',
        numberpage: '268',
        size: '13 x 20 cm',
        weight: '310',
        view: 139,
        release_date: new Date('2017-01-01'),
        imagepathsmall: '/images/ca-phe-cung-tony-2017-small.jpg',
        imagepathmedium: '/images/ca-phe-cung-tony-2017-medium.jpg',
        imagepathlarge: '/images/ca-phe-cung-tony-2017-large.jpg'
    }),
    new Book({
        title: 'Hành Trình Của Tháng Năm',
        author: 'Hân Như',
        type: 'Văn học trong nước',
        category: 'Tiểu thuyết',
        newprice: 68800,
        oldprice: 85000,
        discount: 20,
        saving: 17000,
        cover: "Bìa mềm",
        summary: 'Khác với những tác phẩm trước đây, Hành trình của tháng năm - cuốn sách thứ 5 của tác giả trẻ này lại được viết bằng ngòi bút kể chuyện chậm rãi, không ồn ào, không hoa mỹ, từng câu từng chữ đều gắn liền với những kỷ niệm tuổi thơ của cô ở một vùng quê đầy sông nước mênh mang, nơi mà tình yêu...',
        description: 'Được biết đến ngay từ tác phẩm đầu tay <b>“Chỉ có thể là yêu”</b>, cho đến nay, Hân Như đã có tới bốn tác phẩm in riêng, đều là những truyện dài viết cho tình yêu tuổi trẻ. Mang một phong cách viết mộc mạc, điềm đạm nhưng những câu chuyện tình mà Hân Như xây dựng lại đầy phong ba bão táp, cuốn hút người đọc tới từng câu từng chữ cuối cùng. <br> <br>' +
            'Khác với những tác phẩm trước đây, <b>Hành trình của tháng năm</b> - cuốn sách thứ 5 của tác giả trẻ này lại được viết bằng ngòi bút kể chuyện chậm rãi, không ồn ào, không hoa mỹ, từng câu từng chữ đều gắn liền với những kỷ niệm tuổi thơ của cô ở một vùng quê đầy sông nước mênh mang, nơi mà tình yêu cũng mang màu sắc trong trẻo lạ thường. <br> <br>' +
            '<i>Ngày Tâm chưa sinh ra, hồi ấy mẹ và dì còn bé lắm, ông ngoại đã bỏ bà ngoại đi theo người ta.</i> <br> <br>' +
            '<i>Ngày Tâm vừa chào đời, bố đã bỏ mẹ để cưới một người phụ nữ khác, một người phụ nữ có thể sinh cho ông một mụn con trai.</i> <br> <br>' +
            '<i>Ngày Tâm 5 tuổi, dì bị nhà chồng đuổi về bởi không thể có con…</i> <br><br>' +
            '<i>Tâm mười bảy tuổi, chị Vân có thai, bỏ học về nhà.</i> <br><br>' +
            '<i>Từ ngày ấy, ngoại chẳng bao giờ bước ra khỏi ngõ, còn mẹ ra đường càng cúi gằm mặt mà đi.</i> <br><br>' +
            '<i>Cũng mùa hè năm ấy, Tâm gặp người con trai định mệnh của đời mình. Theo chiều dài năm tháng, hình ảnh của những cánh đồng hoa cải ven sông, của gốc gạo trên đê, của những đêm trăng ngồi thuyền đi trong sông sen,... đã gắn liền với câu chuyện tình cảm tuổi học trò đẹp như tranh giữa Thanh Tâm và Quang Anh. Để rồi cho dù xa cách nhau mười năm trời, họ vẫn còn đau đáu về nhau.</i> <br><br>' +
            '<i>Họ cứ thế đi về tương lai, với niềm tin sẽ tìm lại được nhau trên con tàu mang tên Hy Vọng.</i> <br><br>' +
            'Xuyên suốt <b>“Hành trình của tháng năm”</b> là hình ảnh của một ngôi nhà tranh vách đất với bốn thế hệ và những phận đàn bà đau khổ, giữa tiếng chê bai, dè bỉu của người đời; là hàng xóm “mỗi cây mỗi hoa, mỗi nhà mỗi cảnh”; là cuộc đấu tranh với “đất lề, quê thói”, với những lạc hậu; là những tình cảm tốt đẹp đáng trọng giữa người với người.',
        publisher: 'Người Trẻ Việt',
        publishing_company: 'Văn học',
        numberpage: '321',
        size: '14 x 20.5 cm',
        weight: '490',
        view: 1309,
        release_date: new Date('2016-06-22'),
        imagepathsmall: '/images/hanh-trinh-cua-thang-nam-small.jpg',
        imagepathmedium: '/images/hanh-trinh-cua-thang-nam-medium.jpg',
        imagepathlarge: '/images/hanh-trinh-cua-thang-nam-large.jpg'
    }),
    new Book({
        title: 'Nhà Nàng Ở Cạnh Nhà Tôi',
        author: 'LiNi Thông Minh',
        type: 'Truyện ngắn - Tản văn',
        category: 'Tiểu thuyết',
        newprice: 81180,
        oldprice: 99000,
        discount: 18,
        saving: 17820,
        cover: "Bìa mềm",
        summary: 'Một câu chuyện viết theo dạng tâm sự và nhật ký của một anh chàng mới lớn nên mang lời kể ngô nghê, thật thà và hài ước. Nhưng cũng chính vì thế mà tác phẩm được người đọc đón nhận dễ dàng và coi nó như một liều thuốc xả stress không mang nặng tính văn học và bỏ qua những quy tắc nghiêm khắc của văn...',
        description: 'Một câu chuyện viết theo dạng tâm sự và nhật ký của một anh chàng mới lớn nên mang lời kể ngô nghê, thật thà và hài ước. Nhưng cũng chính vì thế mà tác phẩm được người đọc đón nhận dễ dàng và coi nó như một liều thuốc xả stress không mang nặng tính văn học và bỏ qua những quy tắc nghiêm khắc của văn chương. <br> <br>' +
            'Khi gấp những trang cuối cùng lại, bạn sẽ hiểu tại sao cuốn sách này - chỉ đơn giản là câu chuyện của một cậu chàng thanh niên ngồi viết nhật ký vì say đắm một mối tình, với lối kể chuyện tung hứng dí dỏm và rực rỡ sắc màu cảm xúc đã khiến cho bao người truy lùng và cuồng nhiệt những năm tháng qua. <br> <br>' +
            'Một cuốn sách giản đơn nhưng đủ để chúng ta biết rằng, mỗi cuộc tình đều là một câu chuyện kể, mỗi người tình đều là một món quà... <br> <br>' +
            '"Có con mèo thầm thương chiếc lá <br> <br>' +
            'Chẳng màng đến cá, mặc cuộn len <br><br>' +
            'Tình yêu là thế thôi em nhỉ? <br><br>' +
            'Chỉ cần người ấy, chẳng cần gì..."',
        publisher: 'Bão',
        publishing_company: 'Văn học',
        numberpage: '352',
        size: '13 x 20.5 cm',
        weight: '320',
        view: 20,
        release_date: new Date('2016-08-1'),
        imagepathsmall: '/images/nha-nang-o-canh-nha-toi-small.jpg',
        imagepathmedium: '/images/nha-nang-o-canh-nha-toi-medium.jpg',
        imagepathlarge: '/images/nha-nang-o-canh-nha-toi-large.jpg'
    }),
    new Book({
        title: 'Mỉm Cười Cho Qua',
        author: 'Hamlet Trương - Iris Cao',
        type: 'Truyện ngắn - Tản văn',
        category: 'Tiểu thuyết',
        newprice: 55200,
        oldprice: 69000,
        discount: 20,
        saving: 13800,
        cover: "Bìa mềm",
        summary: 'Mỉm cười cho qua gồm những tản văn mới nhất của hai cây bút trẻ viết về những chủ đề muôn thuở nhưng chưa bao giờ cũ của giới trẻ: tình yêu, tình người, cuộc sống xung quanh. Thông điệp của Mỉm cười cho qua nằm ở sự phớt lờ những chuyện vốn dĩ không thể thay đổi. Khi còn trẻ, chúng ta thường hay...',
        description: 'Sau thành công của sách <b>Thương nhau để đó, Ai rồi cũng khác</b>, đây là lần thứ ba hai tác giả đang được yêu thích <b>Hamlet Trương</b> và <b>Iris Cao</b> tiếp tục song hành trong tác phẩm văn học mới: <b>Mỉm cười cho qua</b> gồm những tản văn mới nhất của hai cây bút trẻ viết về những chủ đề muôn thuở nhưng chưa bao giờ cũ của giới trẻ: tình yêu, tình người, cuộc sống xung quanh. <br> <br>' +
            'Với tác phẩm mới, cả hai sẽ có sự “hoán đổi” thú vị khi <b>Hamlet Trương</b> sẽ viết thêm về tình yêu và <b>Iris Cao</b> ngược lại, sẽ có những chia sẻ về cuộc đời. Thông điệp của <b>Mỉm cười cho qua</b> nằm ở sự phớt lờ những chuyện vốn dĩ không thể thay đổi. Khi còn trẻ, chúng ta thường hay gặp những trở ngại về tình yêu, công việc, gia đình… và một trong những thói quen của chúng ta là khiến mình đắm chìm mãi trong đó. Cuốn sách với thông điệp tích cực rằng chúng ta sẽ luôn là những người tiến về phía trước, đối với những thử thách chúng ta chỉ cần “mỉm cười” và “cho qua”. Rồi chúng ta sẽ thảnh thơi bước tiếp vì cuộc đời còn dài và tất cả đau đớn đó chỉ là một phần của trải nghiệm. <br> <br>' +
            '<b>Nhận định</b> <br> <br>' +
            '<i>"Có thể gọi Hamlet Trương và Iris Cao là “Đại sứ Hạnh Phúc”. Hai bạn trẻ này luôn thể hiện thông điệp sống lạc quan qua những mẩu chuyện gần gũi, giản đơn về gia đình, tình yêu, tình bạn và những cung bậc cảm xúc từ chính cuộc sống xung quanh… Họ đang truyền sức trẻ và năng lượng sống tích cực đến cho tôi!"</i> <br> <br>' +
            '<b>(Thu Hà - Thư ký tòa soạn phía Nam báo Hoa Học Trò)</b> <br><br>' +
            '<i>"Không phải ngẫu nhiên mà Hamlet Trương và Iris Cao sở hữu lượng phát hành sách “khổng lồ”, họ là những cây bút mang nặng hơi thở của thời đại. Họ mang đến cho độc giả của mình những cảm xúc chân thật, nồng ấm mà đôi khi những hoa mỹ khoa trương không tài nào làm được. Họ đứng trên vị trí của người trẻ để nghĩ suy và xây dựng, nên họ xứng đáng được người trẻ tin tưởng đồng hành trong những ngày trưởng thành của mình."</i> <br> <br>' +
            '<b>(Hoàng Trang- Biên Tập Viên Nhà Xuất Bản Văn Học)</b> <br><br>' +
            '<i>"Cảm ơn Cuộc Đời đã cho tôi có cơ hội hợp tác với Hamlet Trương và Iris Cao, tôi gọi đó là Mối Lương Duyên An Lành! Họ nhiệt thành, họ đầy thấu cảm và nhất là luôn tỏa "cái khí chất" mạnh mẽ nhưng rất ung dung tận hưởng từng giây từng phút của cuộc sống này. Chúng tôi trân thương gửi đến các quý độc giả một món quà từ cảm xúc của Hamlet Trương và Iris Cao: sách "Mỉm cười cho qua".</i> <br> <br>' +
            '<b>(Thu Hà - Thư ký tòa soạn phía Nam báo Hoa Học Trò)</b> <br><br>' +
            '(Thảo Minh Châu - Giám đốc Minh Châu Books)',
        publisher: 'Minh Châu Books',
        publishing_company: 'Văn học',
        numberpage: '196',
        size: '13 x 20.5 cm',
        weight: '310',
        view: 1319,
        release_date: new Date('2015-07-18'),
        imagepathsmall: '/images/mim-cuoi-cho-qua-small.jpg',
        imagepathmedium: '/images/mim-cuoi-cho-qua-medium.jpg',
        imagepathlarge: '/images/mim-cuoi-cho-qua-large.jpg'
    }),
    new Book({
        title: 'Atlas Muôn Loài',
        author: 'Virginie Aladjidi - Emmanuelle Tchoukriel',
        type: 'Sách thiếu nhi',
        category: 'Kĩ năng - Kiến thức',
        newprice: 123250,
        oldprice: 145000,
        discount: 15,
        saving: 21750,
        cover: "Bìa cứng",
        summary: 'Động vật luôn cuốn hút trẻ em ở mọi lứa tuổi. Cuốn atlas đầu đời này của các em sẽ giới thiệu gần 250 trên tổng số 1,2 triệu loài động vật đã được các nhà khoa học thống kê trên Trái Đất. Đó là các loài thú, chim, côn trùng, thân mềm, bò sát có vảy, cá...',
        description: 'Động vật luôn cuốn hút trẻ em ở mọi lứa tuổi. Cuốn atlas đầu đời này của các em sẽ giới thiệu gần 250 trên tổng số 1,2 triệu loài động vật đã được các nhà khoa học thống kê trên Trái Đất. Đó là các loài thú, chim, côn trùng, thân mềm, bò sát có vảy, cá... <br> <br>' +
            'Trong <b>Atlas muôn loài</b>, thế giới được phân thành chín vùng. Ứng với từng vùng địa lý là ba tấm bản đồ vừa dễ hiểu, vừa sống động, phân loại các loài động vật cư trú trên cạn, các loài động vật biết bay, và các loài động vật sống dưới nước. <br> <br>' +
            'Một vài loài trong số đó đang trở nên quý hiếm (hổ, tinh tinh), thậm chí cực kỳ quý hiếm (tê giác đen, hải cẩu thầy tu, rùa da), hoặc đã bị tuyệt chủng trong môi trường hoang dã (linh dương sừng kiếm). Do đó, bên cạnh việc giúp độc giả có thêm hiểu biết về thế giới động vật kỳ thú trong tự nhiên thì cuốn sách còn mong muốn góp một tiếng nói khơi dậy tình yêu và lòng trân trọng đối với những người bạn đáng quý của chúng ta.',
        publisher: 'Nhã Nam',
        publishing_company: 'Thế giới',
        numberpage: '105',
        size: '26 x 33 cm',
        weight: '350',
        view: 109,
        release_date: new Date('2017-03-01'),
        imagepathsmall: '/images/atlas-muon-loai-small.jpg',
        imagepathmedium: '/images/atlas-muon-loai-medium.jpg',
        imagepathlarge: '/images/atlas-muon-loai-large.jpg'
    }),
    new Book({
        title: 'Thế Giới Động Vật',
        author: 'Editions Fleurus',
        type: 'Sách thiếu nhi',
        category: 'Kĩ năng - Kiến thức',
        newprice: 229500,
        oldprice: 270000,
        discount: 15,
        saving: 40500,
        cover: "Bìa cứng",
        summary: 'Với hơn 300 trang sách màu cùng 1.000 minh họa ấn tượng, sinh động, Thế Giới Động Vật đã miêu tả đầy đủ, chân thực các đặc điểm, tập tính của hơn 150 loài vật trong nhiều sinh cảnh khác nhau. Đặc biệt, có những loài vật được miêu tả trong các môi trường sinh thái khác nhau.',
        description: 'Thế giới động vật phong phú và đa dạng luôn mời gọi chúng ta tìm hiểu, khám phá. Cuốn sách này sẽ giúp bạn biết được muôn vàn điều kỳ lạ và thú vị của những con vật xung quanh mình. <br> <br>' +
            'Hướng tới đối tượng độc giả nhỏ tuổi, <b>Thế Giới Động Vật</b> cung cấp những thông tin cơ bản, ngắn gọn và dễ hiểu. Với cuốn sách này, các em sẽ được biết đến thế giới tự nhiên vô cùng đa dạng và độc đáo, từ các loài động vật khổng lồ như khủng long, gấu, cá voi xanh...cho tới những sinh vật bé nhỏ như: mối, rận "sát thủ", ong, muỗi... Bạn đọc nhỏ tuổi cũng sẽ được chu du từ những cánh rừng bạt ngàn, hoang dã - nơi những con lợn lòi, những con nai sừng tấm hay chồn Mác - tét... sinh sống cho tới thế giới đại dương bao la có những con cá mập phàm ăn, những chú cá heo đáng yêu và vô vàn các sinh vật phong phú khác. Đặc biệt, các em có thể ngược dòng thời gian quay trở lại hàng triệu năm trước để quan sát nhiều loài khủng long khác nhau hay tìm thấy không ít điều thú vị ngay trong chính các con vật nuôi ở gia đình mình. <br><br>' +
            'Với hơn 300 trang sách màu cùng 1.000 minh họa ấn tượng, sinh động, <b>Thế Giới Động Vật</b> đã miêu tả đầy đủ, chân thực các đặc điểm, tập tính của hơn 150 loài vật trong nhiều sinh cảnh khác nhau. Đặc biệt, có những loài vật được miêu tả trong các môi trường sinh thái khác nhau. Các em sẽ thấy được sự thích nghi của động vật đối với môi trường sống như thế nào. Em sẽ rất ngạc nhiên khi thấy sự khác biệt của loài mèo khi được thuần hóa và khi sống hoang dã trong rừng rậm. Em cũng sẽ biết được các loài chim sẽ thay đổi như thế nào khi bước từ rừng xanh vào môi trường nuôi nhốt… <br><br>' +
            '<b>Thế Giới Động Vật</b> thực sự là một cuốn bách khoa thú vị bằng hình ảnh. Cuốn sách sẽ giúp những nhà khám phá nhỏ tăng cường tri thức, nâng cao khả năng sáng tạo, trí tưởng tượng của mình và thêm yêu hành tinh xanh này.',
        publisher: 'Đông A',
        publishing_company: 'Dân Trí',
        numberpage: '320',
        size: '19 x 26 cm',
        weight: '1300',
        view: 1252,
        release_date: new Date('2013-08-01'),
        imagepathsmall: '/images/the-gioi-dong-vat-small.jpg',
        imagepathmedium: '/images/the-gioi-dong-vat-medium.jpg',
        imagepathlarge: '/images/the-gioi-dong-vat-large.jpg'
    }),
    new Book({
        title: 'Phá Tan Sự Ngụy Biện',
        author: 'M. Neil Browne - Stuart M. Keeley',
        type: 'Sách kĩ năng sống',
        category: 'Kĩ năng sống',
        newprice: 79200,
        oldprice: 99000,
        discount: 20,
        saving: 19800,
        cover: "Bìa mềm",
        summary: 'Đa phần nội dung của cuốn sách là những thông tin, những lời dạy vô cùng quý giá. Nó giúp ta hiểu sâu những giả định và quy trình ngầm ẩn sau những ý kiến, tư tưởng mà ta phải tương tác. Từ đó có thể thấu suốt sự bí ẩn của ngôn từ, những giả định, ngụy biện và đưa ra những lập luận chặt chẽ.',
        description: '<b>KỸ NĂNG PHÂN TÍCH LẬP LUẬN VÀ ĐẶT CÂU HỎI PHẢN BIỆN</b> <br><br>' +
            'Đa phần nội dung của cuốn sách là những thông tin, những lời dạy vô cùng quý giá. Nó giúp ta hiểu sâu những giả định và quy trình ngầm ẩn sau những ý kiến, tư tưởng mà ta phải tương tác. Từ đó có thể thấu suốt sự bí ẩn của ngôn từ, những giả định, ngụy biện và đưa ra những lập luận chặt chẽ. <br><br>' +
            'Hai tác giả M. Neil Browne và Stuart M. Keeley định nghĩa tư duy phản biện là: hiểu rõ một tập hợp các câu hỏi phản biện, khả năng đặt ra và trả lời các câu hỏi phản biện đúng lúc và ý hướng chủ động sử dụng các câu hỏi phản biện. Thật vậy, tư duy phản biện là một thái độ chủ động, tích cực chứ không phải là sự thụ động chấp nhận mọi thứ ta nghe biết. Đó là hỏi, đánh giá và đưa ra những nhận định, tìm ra sự liên kết và phân loại thông tin. Điều đó cũng có nghĩa là ta phải có cái nhìn khai phóng, không mù quáng trong những giả định không được kiểm chứng.',
        publisher: 'Alphabooks',
        publishing_company: 'Lao động',
        numberpage: '384',
        size: '13 x 20.5 cm',
        weight: '410',
        view: 152,
        release_date: new Date('2017-02-01'),
        imagepathsmall: '/images/pha-tan-su-nguy-bien-small.jpg',
        imagepathmedium: '/images/pha-tan-su-nguy-bien-medium.jpg',
        imagepathlarge: '/images/pha-tan-su-nguy-bien-large.jpg'
    }),
    new Book({
        title: 'Đắc Nhân Tâm',
        author: 'Dale Carnegie',
        type: 'Sách kĩ năng sống',
        category: 'Nghệ thuật sống đẹp',
        newprice: 64600,
        oldprice: 76000,
        discount: 15,
        saving: 11400,
        cover: "Bìa mềm",
        summary: 'Đắc nhân tâm có sức lan toả vô cùng rộng lớn – dù bạn đi đến bất cứ đâu, bất kỳ quốc gia nào cũng đều có thể nhìn thấy. Tác phẩm được đánh giá là quyển sách đầu tiên và hay nhất, có ảnh hưởng làm thay đổi cuộc đời của hàng triệu người trên thế giới.',
        description: '<b>Đắc Nhân Tâm – How to win friends and Influence People</b> của <b>Dale Carnegie</b> là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. <br><br>' +
            'Tác phẩm đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia. <br><br>' +
            'Đây là quyển sách duy nhất về thể loại self-help liên tục đứng đầu danh mục sách bán chạy nhất (best-selling Books) do báo The New York Times bình chọn suốt 10 năm liền. Riêng bản tiếng Anh của sách đã bán được hơn 15 triệu bản trên thế giới. <br><br>' +
            '<b>Đắc nhân tâm</b> có sức lan toả vô cùng rộng lớn – dù bạn đi đến bất cứ đâu, bất kỳ quốc gia nào cũng đều có thể nhìn thấy. Tác phẩm được đánh giá là quyển sách đầu tiên và hay nhất, có ảnh hưởng làm thay đổi cuộc đời của hàng triệu người trên thế giới. <br><br>' +
            'Không còn nữa khái niệm giới hạn <b>Đắc Nhân Tâm</b> là nghệ thuật thu phục lòng người, là làm cho tất cả mọi người yêu mến mình. Đắc Nhân Tâm và cái Tài trong mỗi người chúng ta. Đắc Nhân Tâm trong ý nghĩa đó cần được thụ đắc bằng sự hiểu rõ bản thân, thành thật với chính mình, hiểu biết và quan tâm đến những người xung quanh để nhìn ra và khơi gợi những tiềm năng ẩn khuất nơi họ, giúp họ phát triển lên một tầm cao mới. Đây chính là nghệ thuật cao nhất về con người và chính là ý nghĩa sâu sắc nhất đúc kết từ những nguyên tắc vàng của Dale Carnegie.<br><br>' +
            'Quyển sách <b>Đắc Nhân Tâm</b> “Đầu tiên và hay nhất mọi thời đại về nghệ thuật giao tiếp và ứng xử”, quyển sách đã từng mang đến thành công và hạnh phúc cho hàng triệu người trên khắp thế giới.',
        publisher: 'First News - Trí Việt',
        publishing_company: 'NXB Trẻ',
        numberpage: '320',
        size: '14.5 x 20.5 cm',
        weight: '450',
        view: 2252,
        release_date: new Date('2014-10-19'),
        imagepathsmall: '/images/dac-nhan-tam-small.jpg',
        imagepathmedium: '/images/dac-nhan-tam-medium.jpg',
        imagepathlarge: '/images/dac-nhan-tam-large.jpg'
    }),
    new Book({
        title: 'Quẳng Gánh Lo Đi Và Vui Sống',
        author: 'Dale Carnegie',
        type: 'Sách kĩ năng sống',
        category: 'Nghệ thuật sống đẹp',
        newprice: 57800,
        oldprice: 68000,
        discount: 15,
        saving: 10200,
        cover: "Bìa mềm",
        summary: 'Qua hơn nửa thế kỷ, những lời khuyên thiết thực và sâu sắc của Dale Carnegie vẫn còn nguyên giá trị cho đến ngày nay. Ngay bây giờ, bạn đã có thể ghi tên mình vào danh sách hàng triệu con người đã học được cách: Quẳng gánh lo đi và vui sống!',
        description: 'Nhờ các phương pháp của Dale Carnegie, hàng triệu người đọc đã xây dựng được thái độ sống tích cực, an tâm cảm nhận hạnh phúc và mãi mãi loại bỏ thói quen lo lắng: <br><br>' +
            'Hãy đóng chặt những cánh cửa sắt dẫn đến quá khứ và tương lai. Chỉ sống trong những vách ngăn của hiện tại <br><br>' +
            'Nhìn nhận những mặt tích cực của cuộc sống <br><br>' +
            'Khi làm việc đến quên mình, ta cũng quên đi mọi lo lắng <br><br>' +
            'Thử kiểm tra theo luật bình quân, xác suất xảy ra điều bạn đang lo lắng là bao nhiêu phần trăm? <br><br>' +
            'Luôn nỗ lực hết mình <br><br>' +
            'Hãy nghĩ đến những may mắn bạn có được chứ không phải là những rắc rối <br><br>' +
            'Hãy quên đi bản thân bằng cách quan tâm đến người khác. Mỗi ngày làm một điều tốt có thể khiến ai đó mỉm cười <br><br>' +
            'Qua hơn nửa thế kỷ, những lời khuyên thiết thực và sâu sắc của Dale Carnegie vẫn còn nguyên giá trị cho đến ngày nay. Ngay bây giờ, bạn đã có thể ghi tên mình vào danh sách hàng triệu con người đã học được cách: <b>Quẳng gánh lo đi và vui sống!</b>',
        publisher: 'First News - Trí Việt',
        publishing_company: 'NXB Trẻ',
        numberpage: '312',
        size: '14.5 x 20.5 cm',
        weight: '450',
        view: 1352,
        release_date: new Date('2014-10-19'),
        imagepathsmall: '/images/quang-ganh-lo-di-va-vui-song-small.jpg',
        imagepathmedium: '/images/quang-ganh-lo-di-va-vui-song-medium.jpg',
        imagepathlarge: '/images/quang-ganh-lo-di-va-vui-song-large.jpg'
    }),
    new Book({
        title: 'Hắt Xì',
        author: 'Cửu Bả Đao',
        type: 'Văn học nước ngoài',
        category: 'Tiểu thuyết tình cảm - Lãng mạn',
        newprice: 68800,
        oldprice: 86000,
        discount: 20,
        saving: 17200,
        cover: "Bìa mềm",
        summary: 'Tôi hít thở sâu, xòe đôi cánh trắng muốt trên vai, xuyên qua bãi bồ công anh mênh mông tít tắp, lượn lên bầu trời cao, từ từ tan vào vô vàn ánh sao lấp lánh. Một chặng đường mới đang chờ đợi tôi, tôi cũng chờ đợi chuyến đi. Mong sao trong chuyến đi đẹp đẽ tiếp theo, tôi vẫn sẽ được ôm lấy nụ cười...',
        description: 'Tôi hít thở sâu, xòe đôi cánh trắng muốt trên vai, xuyên qua bãi bồ công anh mênh mông tít tắp, lượn lên bầu trời cao, từ từ tan vào vô vàn ánh sao lấp lánh. <br><br>' +
            'Một chặng đường mới đang chờ đợi tôi, tôi cũng chờ đợi chuyến đi. <br><br>' +
            'Nhìn nhận những mặt tích cực của cuộc sống <br><br>' +
            'Mong sao trong chuyến đi đẹp đẽ tiếp theo, tôi vẫn sẽ được ôm lấy nụ cười của người con gái thương yêu. <br><br>' +
            'Trở thành siêu anh hùng của riêng cô ấy.”',
        publisher: 'Nhã Nam',
        publishing_company: 'Hội Nhà Văn',
        numberpage: '320',
        size: '14.5 x 20.5 cm',
        weight: '420',
        view: 252,
        release_date: new Date('2014-03-15'),
        imagepathsmall: '/images/hat-xi-small.jpg',
        imagepathmedium: '/images/hat-xi-medium.jpg',
        imagepathlarge: '/images/hat-xi-large.jpg'
    }),
    new Book({
        title: 'Prime Toeic - Listening (Kèm 1 CD)',
        author: 'Nhiều tác giả',
        type: 'Sách học ngoại ngữ',
        category: 'Học tiếng Anh',
        newprice: 298000,
        oldprice: 298000,
        discount: 0,
        saving: 0,
        cover: "Bìa mềm",
        summary: 'Part 1: Photograph Descriptions. Chapter 1: Introduction. Chapter 2: photos focusing on actions. Chapter 3: photos focusing on Objects/ scenes/ settings. Part 2: Questions & Responses',
        description: '<b>Contents:</b> <br><br>' +
            'Part 1: Photograph Descriptions <br><br>' +
            'Chapter 1: Introduction <br><br>' +
            'Chapter 2: photos focusing on actions <br><br>' +
            'Chapter 3: photos focusing on Objects/ scenes/ settings <br><br>' +
            'Part 2: Questions & Responses <br><br>' +
            'Chapter 1: Introduction <br><br>' +
            'Chapter 2: Questions Types <br><br>' +
            'Part 3 & 4 : Short Conversations/ Short Talks <br><br>' +
            'Chapter 1: Introduction <br><br>' +
            'Chapter 2: Questions Types <br><br>' +
            'Chapter 3: Part 3 Topics & Mini-Tests (1) <br><br>' +
            'Chapter 4: Part 3 Topics & Mini-Tests (2) <br><br>' +
            'Chapter 5: Part 4 Topics & Mini-Tests <br><br>' +
            'Actual Test <br><br>' +
            'Answers & Audio Scripts <br><br>',
        publisher: 'Minh Tâm',
        publishing_company: 'Tổng Hợp TP. HCM',
        numberpage: '272',
        size: '18.5 x 26 cm',
        weight: '610',
        view: 1086,
        release_date: new Date('2016-10-19'),
        imagepathsmall: '/images/prime-toeic-small.jpg',
        imagepathmedium: '/images/prime-toeic-medium.jpg',
        imagepathlarge: '/images/prime-toeic-large.jpg'
    }),
    new Book({
        title: 'Thần thoại La Mã',
        author: 'G.Chandon',
        type: 'Sách thiếu nhi',
        category: 'Truyện cổ tích - Thần thoại',
        newprice: 62400,
        oldprice: 78000,
        discount: 20,
        saving: 15600,
        cover: "Bìa mềm",
        summary: 'Sau cuộc chiến thành Troie, những người Troie đi đâu về đâu? Phải chăng họ sẽ bị tuyệt diệt hoặc hoàn toàn khuất phục, trở thành nô lệ của người Hy Lạp? Nghe những lời sấm truyền mách bảo rằng: Hoàng tử thành Troie là Énée, con trai của nữ thần tình yêu và sắc đẹp Vénus, cùng những chiến binh kiên...',
        description: 'Sau cuộc chiến thành Troie, những người Troie đi đâu về đâu? Phải chăng họ sẽ bị tuyệt diệt hoặc hoàn toàn khuất phục, trở thành nô lệ của người Hy Lạp?<br><br>' +
            'Nghe những lời sấm truyền mách bảo rằng: Hoàng tử thành Troie là Énée, con trai của nữ thần tình yêu và sắc đẹp Vénus, cùng những chiến binh kiên cường đã quyết tâm tìm đến vùng đất Italie để tái sinh dân tộc, xây dựng đế chế hùng mạnh mới. Nhưng Junon - nữ hoàng của các vị thần vẫn luôn thù ghét và tìm cách ngăn cản bước chân định mệnh đem tương lai xán lạn đến cho họ.<br><br>' +
            'Với cuốn sách Thần thoại La Mã, bạn đọc sẽ được sống trong những giây phút lịch sử hào hùng, chứng kiến hành trình gian khổ và hùng tráng của những anh hùng thành Troie. Liệu các thế lực thù địch, cả thần và người có ngăn cản, tiêu diệt được họ, hay người Troie sẽ giành được vận mệnh huy hoàng của mình?',
        publisher: 'Huy Hoàng',
        publishing_company: 'NXB Phụ Nữ',
        numberpage: '289',
        size: '13.5 x 20.5 cm',
        weight: '330',
        view: 78,
        release_date: new Date('2017-03-20'),
        imagepathsmall: '/images/than-thoai-la-ma-small.jpg',
        imagepathmedium: '/images/than-thoai-la-ma-medium.jpg',
        imagepathlarge: '/images/than-thoai-la-ma-large.jpg'
    }),
    new Book({
        title: '21 Chuyện Cướp Biển',
        author: 'Nhiều tác giả',
        type: 'Sách thiếu nhi',
        category: 'Truyện kể cho bé',
        newprice: 127000,
        oldprice: 150000,
        discount: 15,
        saving: 22500,
        cover: "Bìa cứng",
        summary: '21 Chuyện Cướp Biển là cuốn sách tập hợp những câu chuyện vui vẻ, hài hước về nghề cướp biển. Đó là câu chuyện thú vị về bé Titu đi tìm kiếm kho báu theo tấm bản đồ nhặt được trên bờ biển. Nhưng cuối cùng, kho báu hấp dẫn cậu nhất là những vỏ sò đầy màu sắc mà cậu dự định sẽ xâu...',
        description: '21 Chuyện Cướp Biển là cuốn sách tập hợp những câu chuyện vui vẻ, hài hước về nghề cướp biển. Đó là câu chuyện thú vị về bé Titu đi tìm kiếm kho báu theo tấm bản đồ nhặt được trên bờ biển. Nhưng cuối cùng, kho báu hấp dẫn cậu nhất là những vỏ sò đầy màu sắc mà cậu dự định sẽ xâu thành chiếc vòng cổ dành tặng mẹ yêu. Còn chuyện Cướp biển tìm vàng kể về chuyến ra đảo tìm vàng của hai anh em Victor và Lili. Cuối cùng, kho báu hai anh em tìm được chỉ là một đồng bạc, nhưng chỉ thế cũng đã khiến hai em rất vui rồi. Ngoài những câu chuyện kể về các em nhỏ hào hứng đóng vai cướp biển, cuốn sách còn có những mẩu chuyện về những cướp biển thực thụ. Đó là cô con gái của cướp biển Nadan Hung Hãn nhanh trí, dũng cảm hay anh chàng Trojenti có tài bắn đại bác… Và thêm rất nhiều câu chuyện vui về cô gà Út đẻ trứng vàng trên thuyền; chú cừu Habib luôn mơ ước tìm được kho báu chôn trên đảo hay những tên cướp biển nổi tiếng thi nấu ăn chỉ vì muốn được ở bên cô công chúa Florida xinh đẹp…',
        publisher: 'Đông A',
        publishing_company: 'Dân Trí',
        numberpage: '112',
        size: '22 x 29 cm',
        weight: '450',
        view: 1089,
        release_date: new Date('2016-12-21'),
        imagepathsmall: '/images/21-chuyen-cuop-bien-small.jpg',
        imagepathmedium: '/images/21-chuyen-cuop-bien-medium.jpg',
        imagepathlarge: '/images/21-chuyen-cuop-bien-large.jpg'
    }),
    new Book({
        title: 'Dế Mèn Phiêu Lưu Ký',
        author: 'Tô Hoài',
        type: 'Sách thiếu nhi',
        category: 'Văn học',
        newprice: 108000,
        oldprice: 120000,
        discount: 10,
        saving: 12000,
        cover: "Bìa mềm",
        summary: 'Trong hơn nửa thế kỉ kể từ ngày ra mắt bạn đọc lần đầu tiên năm 1941, "Dế Mèn phiêu lưu kí" là một trong những sáng tác tâm đắc nhất của nhà văn Tô Hoài. Tác phẩm đã được tái bản nhiều lần và được dịch ra hơn 20 thứ tiếng trên thế giới và luôn được các thế hệ độc giả nhỏ tuổi đón nhận.',
        description: 'Trong hơn nửa thế kỉ kể từ ngày ra mắt bạn đọc lần đầu tiên năm 1941, <b>"Dế Mèn phiêu lưu kí"</b> là một trong những sáng tác tâm đắc nhất của nhà văn <b>Tô Hoài</b>. Tác phẩm đã được tái bản nhiều lần và được dịch ra hơn 20 thứ tiếng trên thế giới và luôn được các thế hệ độc giả nhỏ tuổi đón nhận.<br><br>' +
            'Tác phẩm đã được xuất bản với nhiều hình thức khác nhau. Trong đó cuốn "Dế Mèn phiêu lưu kí" gồm 148 trang, trên khổ giấy 18 x 25cm cùng nhiều minh hoạ sinh động của hoạ sĩ Tạ Huy Long - một hoạ sĩ chuyên vẽ cho sách thiếu nhi. Bằng cách sử dụng màu nước điêu luyện, hoạ sĩ Tạ Huy Long đã làm sống động thêm tác phẩm bất hủ này của nhà văn Tô Hoài. Cuốn sách vì vậy sẽ là món quà đẹp cả về hình thức lẫn nội dung, là món quà ý nghĩa và bổ ích mà các bậc phụ huynh tặng cho những em bé ngoan của mình.',
        publisher: 'NXB Kim Đồng',
        publishing_company: 'NXB Kim Đồng',
        numberpage: '148',
        size: '18 x 25 cm',
        weight: '350',
        view: 1320,
        release_date: new Date('2014-10-01'),
        imagepathsmall: '/images/de-men-phieu-luu-ky-small.jpg',
        imagepathmedium: '/images/de-men-phieu-luu-ky-medium.jpg',
        imagepathlarge: '/images/de-men-phieu-luu-ky-large.jpg'
    }),
    new Book({
        title: 'Sông',
        author: 'Nguyễn Ngọc Tư',
        type: 'Văn học trong nước',
        category: 'Tiểu thuyết',
        newprice: 59500,
        oldprice: 70000,
        discount: 15,
        saving: 10500,
        cover: "Bìa mềm",
        summary: 'Sông là tiểu thuyết đầu tay của nhà văn Nguyễn Ngọc Tư với sự đổi mới toàn diện của chính cô. Đẹp. Đáo để. Trần tục và hư ảo. Truyện kết thúc bằng dấu chấm hỏi về số phận một con người - Không hề do dự, cô đã đẩy mầm ý tưởng vừa nhú lên sang tay người đọc, để họ nuôi dưỡng chúng, bằng...',
        description: 'Sông là tiểu thuyết đầu tay của nhà văn Nguyễn Ngọc Tư với sự đổi mới toàn diện của chính cô. Đẹp. Đáo để. Trần tục và hư ảo. Truyện kết thúc bằng dấu chấm hỏi về số phận một con người  - Không hề do dự, cô đã đẩy mầm ý tưởng vừa nhú lên sang tay người đọc, để họ nuôi dưỡng chúng, bằng trải nghiệm qua việc đọc cuốn sách này.<br><br>' +
            '<b>Trích đoạn:</b><br><br>' +
            '"... Sài Gòn. Sáng nay ở đó Tú dậy, đánh răng rồi chở vợ ra đường, họ có thể cùng ăn sáng trước khi đến cơ quan. Sáng nay ở đó Hậu, Bách, Cường tiểu thơ vẫn còn nằm ngầy ngật trong hơi men vì nhậu nhẹt khuya. Sáng nay mẹ cậu mặc quần lửng, giày thể thao, đá cầu ở công viên xong thì xõa tóc ngồi quán cà phê với một trong những người đàn ông của bà, cũng có thể là cha cậu.<br><br>' +
            'Sáng nay cậu cùng một người không thể gọi là lạ, cũng không thể nói đã quá biết nhau, đi xuyên qua những cánh rừng tinh linh đi tìm những khe suối nằm đâu đó giữa những vách đá. Hai thằng người bụi bặm và trông hơi tàn tạ…<br><br>' +
            'Khi mặt trời biến hai cái bóng thành vũng tối dưới chân, bọn cậu đã tận mắt nhìn thấy một vài cái khe nhỏ nước chảy cùng một thứ rêu óng biếc. Hứng mãi nước mới đầy một vốc tay, cậu không thể hình dung có bao nhiêu dòng chảy re rắt như vầy để làm tràn đầy hồ Thiên, khiến nó không khô cạn dù bất cứ mùa nắng hạn nào. Cậu xòe những ngón tay chắn giữa khe, thấy nước ẩn nhẩn lách qua, nhỏ nhắn và xanh xao như một hồn ma sầu muộn. Không thể tin được những nhánh nước rủ rỉ này lại làm nên dòng chảy hàng ngàn dặm của sông Di...."',
        publisher: 'NXB Trẻ',
        publishing_company: 'NXB Trẻ',
        numberpage: '230',
        size: '13 x 20 cm',
        weight: '420',
        view: 1268,
        release_date: new Date('2014-10-20'),
        imagepathsmall: '/images/song-small.jpg',
        imagepathmedium: '/images/song-medium.jpg',
        imagepathlarge: '/images/song-large.jpg'
    }),
];

var bookbanner1 = new Book({
    title: 'Gió Thổi Sắc Đào Bay',
    author: 'Phàn Lạc',
    type: 'Văn học nước ngoài',
    category: 'Tiểu thuyết đam mỹ',
    newprice: 134250,
    oldprice: 179000,
    discount: 25,
    saving: 44750,
    cover: "Bìa mềm",
    summary: 'Một vương gia thiếu niên phong tướng, chí hướng cao xa. Một lãng tử quen thói bướm ong, chỉ biết vui trong chuyện trăng chuyện gió. Hai kẻ vốn chẳng chút liên quan, kết quả lại vì những chuyện trùng hợp mà sánh vai tiến bước cùng nhau trong một chuyến hành trình. Từ ghét nhau đến hiểu nhau rồi cảm thông cho nhau,...',
    description: 'Một vương gia thiếu niên phong tướng, chí hướng cao xa. Một lãng tử quen thói bướm ong, chỉ biết vui trong chuyện trăng chuyện gió. Hai kẻ vốn chẳng chút liên quan, kết quả lại vì những chuyện trùng hợp mà sánh vai tiến bước cùng nhau trong một chuyến hành trình.<br><br>' +
        'Từ ghét nhau đến hiểu nhau rồi cảm thông cho nhau, từ hoạn nạn chân tình đơm nở.<br><br>' +
        'Đến khi chân tướng dần lộ diện, địch hay bạn quả khó biện phân, tin hay không tin, cũng khó mà lựa chọn. <br><br>' +
        '“Nói cho ta biết, lời hứa khi đó có bao nhiêu phần chân thật?” <br><br>' +
        '“Đừng đặt quá nhiều hy vọng vào tương lai, lời hứa, chỉ chân thật khi ta vừa thề thốt.” <br><br>' +
        'Nếu tất cả mọi người đều đặt ích lợi - thiệt hơn lên đầu, nếu khi lựa chọn, tình cảm sẽ là thứ đầu tiên bị vứt bỏ, vậy vì cái gì mà hắn luôn mãi kiên trì?',
    publisher: 'Owlbooks',
    publishing_company: 'Dân Trí',
    numberpage: '668',
    size: '15.5 x 24 cm',
    weight: '810',
    view: 2077,
    release_date: new Date('2017-03-12'),
    imagepathsmall: '/images/gio-thoi-sac-dao-bay-small.jpg',
    imagepathmedium: '/images/gio-thoi-sac-dao-bay-medium.jpg',
    imagepathlarge: '/images/gio-thoi-sac-dao-bay-large.jpg'
});

var bookbanner2 = new Book({
    title: 'Những Ngôi Nhà Ma Ám – Tập 1',
    author: 'Nhị Thập Tam',
    type: 'Văn học nước ngoài',
    category: 'Truyện trinh thám - Kinh dị',
    newprice: 80000,
    oldprice: 100000,
    discount: 20,
    saving: 20000,
    cover: "Bìa mềm",
    summary: 'Làm giàu thật (ra không) khó! Chỉ cần phát hiện được lĩnh vực một bán vạn mua là dễ dàng xúc tiền thiên hạ. Ví như, kinh doanh bất động sản có ma. Nơi nào cũng có những căn nhà ế ẩm hoặc được rao bán với giá rẻ mạt. Chỉ vì từng có người chết không nhắm mắt rồi dai dẳng mãi chẳng chịu đầu...',
    description: 'Làm giàu thật (ra không) khó!<br><br>' +
        'Chỉ cần phát hiện được lĩnh vực một bán vạn mua là dễ dàng xúc tiền thiên hạ.<br><br>' +
        'Ví như, kinh doanh bất động sản có ma.<br><br>' +
        'Nơi nào cũng có những căn nhà ế ẩm hoặc được rao bán với giá rẻ mạt. Chỉ vì từng có người chết không nhắm mắt rồi dai dẳng mãi chẳng chịu đầu thai, ở lại đấy quấy phá làm cho người sống kinh hoàng điêu đứng.<br><br>' +
        'Nhận ra cơ hội, một thanh niên rủng rỉnh chút tiền và một thanh niên giỏi huyền thuật bèn hợp tác với nhau, đi khắp nơi thu mua những căn nhà ấy, dự định làm phép đuổi ma trừ tà cho nhà trở lại bình thường rồi bán giá cao, đặng thu lợi gấp bội.<br><br>' +
        'Sau khi nhập cuộc, hai thanh niên mới choáng váng nhận ra, lĩnh vực ít cạnh tranh không có nghĩa là ít hung hiểm. Họ phải cầm nước bọt, ngậm phân dê, uống nước tiểu đồng nam… để tránh ma nhập ma đuổi. Tưởng thế là đã vất vả lắm rồi, nào ngờ còn mắc lừa suýt bị chôn sống làm thế thân, tống cổ được ma này thì ma khác lại bám vào người, thậm chí ngẫu nhiên nhặt được tấm ván thiên quan tài cũng thấy ghi sẵn tên họ mình và ngày giờ phải chết.<br><br>' +
        'Rất muốn rút lui, đến lúc quay đầu mới biết, cả người lẫn ma đều đã không buông tha cho họ.<br><br>' +
        'oOo<br><br>' +
        'Sau đó ít lâu, trên mạng đăng tin, có người sẵn sàng tặng không ngôi nhà đắt tiền. Cho kẻ chịu nghe anh ta kể chuyện trọn một đêm thâu.<br><br>' +
        'Chín người đến nghe nhưng sáng ra, chỉ còn một người…<br><br>' +
        '<i>Câu chuyện làm giàu thật khó của hai thanh niên buôn bán nhà ma. Mê hoặc người đọc bởi nhiều yếu tố huyền bí phong thủy kết hợp với suy luận cổ điển. Tình tiết mới mẻ, vận dụng cách viết thịnh hành của tiểu thuyết Âu Mỹ: những mẩu chuyện riêng lẻ về 17 ngôi nhà ma ám xâu chuỗi lại sẽ hé lộ một bí mật kinh người, mức độ suy luận phá án cũng theo đó tăng dần, hồi hộp tăng dần. Một tiểu thuyết giàu nội hàm, độc đáo.</i> <br><br>' +
        '<b>- Báo sáng Vũ Hán</b><br><br>' +
        '<i>Không mấy người có dịp đi đào mộ. Nhưng mỗi người ít nhiều đều gặp hoặc biết về những ngôi nhà ma ám. Gần gũi như thế mà vẫn có thể ly kì như thế. Đó chính là điểm hấp dẫn tôi ở tiểu thuyết này.</i> <br><br>' +
        '<b>- Nam Phái Tam Thúc, tác giả Đạo mộ bút kí</b>',
    publisher: 'IPM',
    publishing_company: 'Văn học',
    numberpage: '364',
    size: '13.5 x 20.5 cm',
    weight: '450',
    view: 1421,
    release_date: new Date('2017-03-19'),
    imagepathsmall: '/images/nhung-ngoi-nha-ma-am-tap-1-small.jpg',
    imagepathmedium: '/images/nhung-ngoi-nha-ma-am-tap-1-medium.jpg',
    imagepathlarge: '/images/nhung-ngoi-nha-ma-am-tap-1-large.jpg'
});

var bookbanner3 = new Book({
    title: 'Nhân Hình Quán',
    author: 'Yukito Ayatsuji',
    type: 'Văn học nước ngoài',
    category: 'Truyện trinh thám - Kinh dị',
    newprice: 78400,
    oldprice: 98000,
    discount: 20,
    saving: 19600,
    cover: "Bìa mềm",
    summary: 'Sau khi cha mất, Soichi trở về Nhân Hình Quán tiếp quản tài sản thừa kế đồ sộ của mình, đồng thời tiếp quản cả những ma nơ canh cha để lại. Mỗi con đều mất một phần thân thể, và theo di ngôn của cha, Soichi không được phép di chuyển chúng khỏi vị trí hiện tại hay xoay mặt chúng đi hướng khác.',
    description: 'Sau khi cha mất, Soichi trở về Nhân Hình Quán tiếp quản tài sản thừa kế đồ sộ của mình, đồng thời tiếp quản cả những ma nơ canh cha để lại. Mỗi con đều mất một phần thân thể, và theo di ngôn của cha, Soichi không được phép di chuyển chúng khỏi vị trí hiện tại hay xoay mặt chúng đi hướng khác.<br><br>' +
        'Tuy không thể làm trái lời cha, nhưng không gì ngăn anh khám phá bí mật ẩn sau các hình nhân đó. Trong lúc Soichi miệt mài với trò chơi trinh thám của mình, thì những vụ án liên tiếp xảy ra ngay bên ngoài, gần chỗ anh dạo chơi, uống cà phê, thậm chí sát cạnh nhà. Cùng với sự hỗ trợ từ xa của người bạn',
    publisher: 'IPM',
    publishing_company: 'Hội Nhà Văn',
    numberpage: '344',
    size: '13.5 x 20.5 cm',
    weight: '405',
    view: 781,
    release_date: new Date('2017-03-16'),
    imagepathsmall: '/images/nhan-hinh-quan-small.jpg',
    imagepathmedium: '/images/nhan-hinh-quan-medium.jpg',
    imagepathlarge: '/images/nhan-hinh-quan-large.jpg'
});

// insert book and banner
bookbanner1.save();
var banner1 = new Banner({
    bookid: bookbanner1._id,
    imagepath: '/images/banner-gio-thoi-sac-dao-bay.jpg'
});
banner1.save();

bookbanner2.save();
var banner2 = new Banner({
    bookid: bookbanner2._id,
    imagepath: '/images/banner-nhung-ngoi-nha-ma-am-tap-1.jpg'
});
banner2.save();

bookbanner3.save();
var banner3 = new Banner({
    bookid: bookbanner3._id,
    imagepath: '/images/banner-nhan-hinh-quan.jpg'
});
banner3.save();

var done = 0;
for (var i = 0; i < books.length; i++) {
    books[i].save(function(err, result) {
        done++;
        if (done === books.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}