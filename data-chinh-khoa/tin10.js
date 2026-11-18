// Tin học 10 chính khóa — chuẩn hóa thành hành trình học tương tác.
(() => {
    "use strict";
    const L = window.createInteractiveLesson;
    const mk = (title, overview, points, warmup, warmupAnswer, check, checkAnswer, task, criteria = []) => L({
        title,
        overview,
        goals: [overview, "Hoàn thành nhiệm vụ luyện tập và giải thích được lựa chọn.", "Vận dụng kiến thức để tạo sản phẩm hoặc giải quyết tình huống phù hợp."],
        warmup: { question: warmup, answer: warmupAnswer, feedback: "Liên hệ câu trả lời với thuật ngữ và dữ kiện trong bài." },
        concepts: [{ heading: "Kiến thức trọng tâm", points }],
        practice: [
            { question: check, answer: checkAnswer, feedback: "Nếu chưa đúng, xác định từ khóa trong câu hỏi rồi đối chiếu từng ý kiến thức." },
            { question: "Hãy tóm tắt bài học bằng ba ý ngắn.", answer: points.slice(0, 3).join("; "), feedback: "Bản tóm tắt đạt khi đúng thuật ngữ, đủ ý chính và không thêm nhận định ngoài bài." }
        ],
        application: {
            task,
            criteria: criteria.length ? criteria : ["Sản phẩm đúng yêu cầu và thuật ngữ.", "Có giải thích hoặc minh chứng kiểm tra.", "Trình bày rõ ràng, tôn trọng an toàn và bản quyền."],
            support: ["Đọc lại kiến thức trọng tâm.", "Chia nhiệm vụ thành từng bước nhỏ.", "Đối chiếu sản phẩm với tiêu chí trước khi nộp."]
        }
    });

    window.courseContent = [
        {
            chapterName: "Chương 0: Sách",
            lessons: [{ title: "Sách Giáo Khoa Tin học 10", videoId: "", desc: "Sách giáo khoa Kết nối tri thức với cuộc sống.", downloadUrl: "https://drive.google.com/file/d/1AnLn6cG4apsmTtCu5MlGGgyLG42Np1Ex/view?usp=sharing" }]
        },
        {
            chapterName: "Chương 1: Máy tính và xã hội tri thức",
            lessons: [
                L({
                    title: "Bài 1: Thông tin và xử lí thông tin",
                    overview: "Phân biệt thông tin với dữ liệu, chuyển đổi giữa các đơn vị lưu trữ và giải thích ưu điểm của việc lưu trữ, xử lí, truyền thông tin bằng thiết bị số.",
                    goals: [
                        "Phân biệt được thông tin và dữ liệu; mô tả được ba bước xử lí thông tin bằng máy tính.",
                        "Chuyển đổi được giữa bit, byte và các đơn vị KB, MB, GB, TB theo bội 1024.",
                        "Nêu và giải thích được ưu điểm của thiết bị số trong lưu trữ, xử lí, truyền thông tin và tự động hóa."
                    ],
                    resources: [
                        "Nguồn đối chiếu: SGK Tin học 10 — Kết nối tri thức với cuộc sống, Bài 1, trang 6–10.",
                        "Phạm vi thử nghiệm dùng mục tiêu “Sau bài này em sẽ” và các Hoạt động 1–2 trong SGK; chưa có KHBD Tin học 10 trong thư mục nguồn."
                    ],
                    warmup: {
                        question: "Dữ liệu “39°C” xuất hiện trong bản tin thời tiết và trong bệnh án. Hai trường hợp có truyền cùng một thông tin không? Hãy nêu căn cứ.",
                        answer: "Không. Trong bản tin thời tiết, 39°C có thể cho biết trời rất nóng; trong bệnh án, 39°C cho biết người bệnh sốt cao. Dữ liệu giống nhau nhưng thông tin phụ thuộc ngữ cảnh.",
                        feedback: "Câu trả lời cần phân biệt dữ liệu nhìn thấy với ý nghĩa được rút ra trong từng ngữ cảnh."
                    },
                    concepts: [
                        {
                            id: "DV1",
                            heading: "Thông tin, dữ liệu và quá trình xử lí",
                            source: "SGK Bài 1, mục 1, trang 6–7; Hình 1.1 và Hoạt động 1.",
                            lead: "Máy tính không tự nhận thức như con người. Nó tiếp nhận và biến đổi dữ liệu để hỗ trợ con người thu nhận thông tin.",
                            sections: [
                                {
                                    heading: "Quá trình xử lí thông tin bằng máy tính",
                                    paragraphs: [
                                        "Thông tin là những gì mang lại hiểu biết cho con người. Máy tính là công cụ hỗ trợ: nó làm việc với dữ liệu được biểu diễn trong bộ nhớ.",
                                        "Bước 1 — Tiếp nhận dữ liệu: dữ liệu có thể đến từ thiết bị như máy quét, cảm biến hoặc do con người nhập bằng bàn phím. Bước 2 — Xử lí dữ liệu: máy tính biến đổi dữ liệu trong bộ nhớ để tạo dữ liệu mới. Bước 3 — Đưa ra kết quả: kết quả có thể được trình bày thành văn bản, âm thanh, hình ảnh để con người hiểu; cũng có thể được lưu lại hoặc dùng làm đầu vào cho lần xử lí tiếp theo.",
                                        "Vì kết quả của một lần xử lí có thể trở thành đầu vào của lần sau, đầu vào và đầu ra không phải lúc nào cũng chỉ thuộc một dạng cố định. Trong máy tính, xử lí thông tin về bản chất là xử lí dữ liệu."
                                    ]
                                },
                                {
                                    heading: "Phân biệt dữ liệu và thông tin",
                                    paragraphs: [
                                        "Trong tin học, dữ liệu là thông tin đã được đưa vào máy tính để máy có thể nhận biết và xử lí. Thông tin là ý nghĩa mà con người rút ra từ dữ liệu.",
                                        "Thông tin và dữ liệu độc lập tương đối: một thông tin có thể được thể hiện bằng nhiều dữ liệu khác nhau; ngược lại, cùng một dữ liệu có thể mang những thông tin khác nhau tùy ngữ cảnh và cách xử lí.",
                                        "Thông tin có tính toàn vẹn. Khi dữ liệu thiếu, sai hoặc thiếu ngữ cảnh, thông tin rút ra có thể sai lệch hoặc không xác định được."
                                    ]
                                }
                            ],
                            examples: [
                                {
                                    title: "Ví dụ 1 — Một thông tin, nhiều dữ liệu",
                                    text: "Nội dung một bài giảng có thể được thể hiện bằng bài ghi trong vở, tệp bài soạn của giáo viên hoặc video tiết học. Dạng dữ liệu khác nhau nhưng đều có thể chuyển tải thông tin của bài giảng."
                                },
                                {
                                    title: "Ví dụ 2 — Một dữ liệu, nhiều thông tin",
                                    text: "Dữ liệu 39°C có ý nghĩa “trời rất nóng” trong dữ liệu thời tiết nhưng có ý nghĩa “sốt cao” trong bệnh án. Muốn hiểu đúng phải biết ngữ cảnh."
                                }
                            ],
                            questions: [
                                {
                                    level: "Quan sát",
                                    question: "Trong Hình 1.1, ba khâu nào tạo thành quá trình xử lí thông tin bằng máy tính?",
                                    hint: "Theo dõi các mũi tên từ người hoặc thiết bị tới máy tính rồi tới kết quả.",
                                    answer: "Tiếp nhận dữ liệu → xử lí dữ liệu → đưa ra kết quả.",
                                    feedback: "Không bỏ qua khâu tiếp nhận: máy tính cần dữ liệu đầu vào trước khi xử lí."
                                },
                                {
                                    level: "Giải thích",
                                    question: "Vì sao tệp Word, video và bài ghi trong vở có thể là dữ liệu của cùng một bài giảng?",
                                    hint: "So sánh dạng thể hiện với ý nghĩa được chuyển tải.",
                                    answer: "Chúng có dạng biểu diễn khác nhau nhưng đều có thể chuyển tải nội dung của bài giảng. Đây là trường hợp một thông tin được thể hiện bằng nhiều loại dữ liệu.",
                                    feedback: "Cần nêu được quan hệ giữa “dạng biểu diễn” và “ý nghĩa”, không chỉ liệt kê ba loại dữ liệu."
                                },
                                {
                                    level: "Áp dụng",
                                    question: "Một bảng điểm chỉ ghi các số 8, 7, 9 nhưng không có tên môn và tên học sinh. Có thể kết luận chính xác năng lực học tập của một bạn không? Vì sao?",
                                    hint: "Kiểm tra dữ liệu đã đủ đối tượng, tiêu chí và ngữ cảnh hay chưa.",
                                    answer: "Không. Các số điểm thiếu tên học sinh, tên môn và tiêu chí nên chưa đủ ngữ cảnh để xác định chính xác thông tin. Dữ liệu không đầy đủ có thể làm thông tin sai lệch hoặc không xác định được.",
                                    feedback: "Câu trả lời đạt khi chỉ ra cụ thể dữ kiện còn thiếu và hệ quả đối với tính toàn vẹn của thông tin."
                                }
                            ],
                            recap: [
                                "Thông tin là ý nghĩa mang lại hiểu biết; dữ liệu là dạng thể hiện được đưa vào để máy tính nhận biết và xử lí.",
                                "Cùng dữ liệu có thể mang thông tin khác nhau theo ngữ cảnh; dữ liệu thiếu có thể làm thông tin sai lệch.",
                                "Quá trình cơ bản gồm tiếp nhận dữ liệu, xử lí dữ liệu và đưa ra kết quả."
                            ]
                        },
                        {
                            id: "DV2",
                            heading: "Đơn vị lưu trữ dữ liệu",
                            source: "SGK Bài 1, mục 2, trang 8; Bảng 1.1.",
                            lead: "Máy tính tổ chức và truy cập dữ liệu theo nhóm bit; byte được dùng làm đơn vị cơ sở để đo lượng dữ liệu lưu trữ.",
                            sections: [
                                {
                                    heading: "Bit, byte và quan hệ giữa các đơn vị",
                                    paragraphs: [
                                        "Bit là đơn vị dữ liệu nhị phân nhận một trong hai giá trị 0 hoặc 1. Byte là đơn vị dữ liệu nhỏ nhất mà máy tính có thể truy cập theo cách tổ chức nêu trong SGK; 1 byte gồm 8 bit.",
                                        "Các đơn vị lớn hơn kế tiếp nhau 2¹⁰ = 1024 lần: 1 KB = 1024 B; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB. Bảng 1.1 còn tiếp tục với PB, EB, ZB và YB theo cùng quy tắc.",
                                        "Kí hiệu b viết thường là bit, còn B viết hoa là byte. Vì 1 B = 8 b, nhầm chữ hoa và chữ thường sẽ làm sai lượng dữ liệu tám lần."
                                    ]
                                },
                                {
                                    heading: "Cách chuyển đổi",
                                    paragraphs: [
                                        "Khi đổi từ đơn vị lớn sang đơn vị liền kề nhỏ hơn, nhân với 1024. Khi đổi từ đơn vị nhỏ sang đơn vị liền kề lớn hơn, chia cho 1024. Nếu đi qua nhiều bậc, thực hiện phép nhân hoặc chia cho 1024 ở mỗi bậc.",
                                        "Trước khi tính, cần viết rõ đơn vị xuất phát, đơn vị đích và số bậc chuyển đổi. Sau khi tính, kiểm tra tính hợp lí: đổi sang đơn vị nhỏ hơn thì số đo phải lớn hơn."
                                    ]
                                }
                            ],
                            examples: [
                                {
                                    title: "Ví dụ quy đổi",
                                    text: "3 MB = 3 × 1024 = 3072 KB; 2 GB = 2 × 1024 × 1024 = 2 097 152 KB; 2048 B = 2048 ÷ 1024 = 2 KB."
                                }
                            ],
                            questions: [
                                {
                                    level: "Quan sát",
                                    question: "Trong các kí hiệu b, B, KB và MB, kí hiệu nào chỉ bit và kí hiệu nào chỉ byte?",
                                    hint: "Chú ý chữ b viết thường và chữ B viết hoa.",
                                    answer: "b chỉ bit; B chỉ byte. KB và MB là kilobyte và megabyte nên đều dựa trên byte.",
                                    feedback: "Không đồng nhất b với B vì 1 byte bằng 8 bit."
                                },
                                {
                                    level: "Giải thích",
                                    question: "Vì sao khi đổi 2 GB sang KB phải nhân 1024 hai lần?",
                                    hint: "Viết chuỗi đơn vị từ GB đến KB.",
                                    answer: "Từ GB xuống MB là một bậc nên nhân 1024; từ MB xuống KB là bậc thứ hai nên tiếp tục nhân 1024. Vì vậy 2 GB = 2 × 1024 × 1024 KB.",
                                    feedback: "Đáp án cần nêu đủ hai bậc GB → MB → KB, không chỉ đưa kết quả."
                                },
                                {
                                    level: "Áp dụng",
                                    question: "Một tệp có dung lượng 5 MB và một tệp khác có dung lượng 4096 KB. Tệp nào lớn hơn và lớn hơn bao nhiêu KB?",
                                    hint: "Đưa hai dung lượng về cùng đơn vị KB trước khi so sánh.",
                                    answer: "5 MB = 5120 KB. Tệp 5 MB lớn hơn tệp 4096 KB một lượng 5120 − 4096 = 1024 KB.",
                                    feedback: "Không so sánh trực tiếp hai số khi đơn vị còn khác nhau."
                                }
                            ],
                            recap: [
                                "1 B = 8 b; b là bit, B là byte.",
                                "Các đơn vị KB, MB, GB, TB kế tiếp nhau 1024 lần.",
                                "Đổi sang đơn vị nhỏ hơn thì nhân; đổi sang đơn vị lớn hơn thì chia theo từng bậc."
                            ]
                        },
                        {
                            id: "DV3",
                            heading: "Lưu trữ, xử lí và truyền thông tin bằng thiết bị số",
                            source: "SGK Bài 1, mục 3, trang 9–10; Hình 1.2 và Hoạt động 2.",
                            lead: "Thiết bị số làm việc với thông tin số để lưu trữ, xử lí hoặc truyền dữ liệu; ưu điểm xuất hiện khi dữ liệu được biểu diễn và thao tác tự động.",
                            sections: [
                                {
                                    heading: "Nhận biết thiết bị số",
                                    paragraphs: [
                                        "Thiết bị làm việc với thông tin số — lưu trữ, truyền dữ liệu hoặc xử lí thông tin số — được gọi là thiết bị số. Trong Hình 1.2, thẻ nhớ, bộ thu phát wifi và máy tính xách tay là thiết bị số; đồng hồ cơ và đĩa hát không làm việc bằng dữ liệu số.",
                                        "Không nên phân loại chỉ dựa vào việc thiết bị có dùng điện hay không. Căn cứ quan trọng là thiết bị có biểu diễn và thao tác với thông tin số hay không."
                                    ]
                                },
                                {
                                    heading: "Ưu điểm của thiết bị số",
                                    paragraphs: [
                                        "Về lưu trữ: thiết bị số có thể chứa lượng dữ liệu lớn trong thiết bị gọn nhẹ; dữ liệu số dễ sao chép, tổ chức và tìm kiếm. Kho lưu trữ kết nối Internet còn giúp tiếp cận thông tin từ nhiều thiết bị.",
                                        "Về xử lí: máy tính thực hiện lượng lớn phép tính với tốc độ cao, độ chính xác và tính ổn định cao khi dữ liệu, chương trình và thiết bị hoạt động đúng. Máy có thể làm việc liên tục và hỗ trợ tự động hóa công việc.",
                                        "Về truyền thông tin: dữ liệu số có thể được truyền rất nhanh qua mạng, hỗ trợ trao đổi và tương tác gần như tức thời. Các ưu điểm này giúp thực hiện nhiều công việc chính xác, thuận tiện và với chi phí thấp hơn."
                                    ]
                                }
                            ],
                            examples: [
                                {
                                    title: "Đối chứng từ Hình 1.2",
                                    text: "Đĩa hát lưu âm thanh bằng dạng không số, còn thẻ nhớ lưu dữ liệu số. Đồng hồ cơ hiển thị thời gian bằng cơ cấu cơ học; thiết bị số tương ứng có thể lưu, xử lí hoặc truyền dữ liệu thời gian."
                                },
                                {
                                    title: "Bài toán thư viện",
                                    text: "Nếu số hóa 2000 cuốn sách, mỗi cuốn khoảng 50 MB, tổng dung lượng là 100 000 MB ≈ 97,66 GB. Về dung lượng danh nghĩa theo phép đổi trong bài, thẻ nhớ 256 GB có thể chứa lượng dữ liệu đó."
                                }
                            ],
                            questions: [
                                {
                                    level: "Quan sát",
                                    question: "Trong các thiết bị đồng hồ cơ, đĩa hát, bộ thu phát wifi, thẻ nhớ và máy tính xách tay, thiết bị nào là thiết bị số?",
                                    hint: "Tìm thiết bị có chức năng lưu trữ, xử lí hoặc truyền dữ liệu số.",
                                    answer: "Bộ thu phát wifi, thẻ nhớ và máy tính xách tay là thiết bị số; đồng hồ cơ và đĩa hát không dùng dữ liệu số theo ví dụ của SGK.",
                                    feedback: "Không dùng tiêu chí “có điện” hoặc “hiện đại”; phải dựa vào cách thiết bị làm việc với thông tin."
                                },
                                {
                                    level: "Giải thích",
                                    question: "Vì sao dữ liệu số giúp tìm kiếm thông tin trong một thư viện nhanh hơn việc dò từng cuốn sách giấy?",
                                    hint: "Liên hệ cách dữ liệu được tổ chức, lập chỉ mục và xử lí tự động.",
                                    answer: "Dữ liệu số có thể được tổ chức và cho máy tính xử lí tự động theo từ khóa hoặc thuộc tính. Máy tính đối chiếu nhanh nhiều bản ghi, trong khi dò sách giấy cần thao tác thủ công từng vị trí.",
                                    feedback: "Cần gắn tốc độ tìm kiếm với khả năng tổ chức và xử lí tự động của thiết bị số."
                                },
                                {
                                    level: "Áp dụng",
                                    question: "Một trường muốn gửi tài liệu học tập cho toàn bộ học sinh trong ngày. Hãy nêu hai ưu điểm và một điều kiện để phương án truyền tài liệu số hiệu quả.",
                                    hint: "Xem lại ưu điểm về truyền, lưu trữ và điều kiện thiết bị hoặc kết nối.",
                                    answer: "Ưu điểm có thể là truyền nhanh tới nhiều người, sao chép với chi phí thấp, lưu trữ và tìm kiếm thuận tiện. Điều kiện là học sinh có thiết bị và kết nối phù hợp, hoặc nhà trường phải có phương án ngoại tuyến thay thế.",
                                    feedback: "Không chỉ nêu “nhanh”; cần chỉ ra lợi ích cụ thể và điều kiện để thiết bị số phát huy ưu điểm."
                                }
                            ],
                            recap: [
                                "Thiết bị số lưu trữ, xử lí hoặc truyền thông tin dưới dạng dữ liệu số.",
                                "Ưu điểm chính gồm lưu trữ lớn và dễ tìm kiếm, xử lí nhanh/chính xác/ổn định, truyền nhanh và hỗ trợ tự động hóa.",
                                "Ưu điểm chỉ phát huy khi dữ liệu, chương trình, thiết bị và điều kiện kết nối phù hợp."
                            ]
                        }
                    ],
                    practice: [
                        {
                            question: "Từ dữ liệu điểm các môn của một học sinh, có thể rút ra những thông tin nào? Hãy mô tả một quy trình xử lí để rút ra một thông tin.",
                            answer: "Có thể rút ra điểm trung bình, môn mạnh/yếu hoặc mức biến động kết quả. Ví dụ: tiếp nhận bảng điểm đầy đủ tên môn và hệ số → kiểm tra dữ liệu → tính điểm trung bình theo công thức → đưa ra kết quả kèm danh sách điểm đã dùng.",
                            feedback: "Cần nêu cả thông tin muốn rút ra và ba khâu tiếp nhận, xử lí, đưa ra kết quả; tránh kết luận khi dữ liệu thiếu môn hoặc hệ số."
                        },
                        {
                            question: "Một thư viện số hóa 2000 cuốn sách, trung bình 50 MB mỗi cuốn. Cần khoảng bao nhiêu GB và thẻ nhớ 256 GB có đủ không?",
                            answer: "Tổng là 2000 × 50 = 100 000 MB. Đổi sang GB: 100 000 ÷ 1024 ≈ 97,66 GB. Theo dung lượng quy đổi trong bài, thẻ 256 GB đủ chứa.",
                            feedback: "Kiểm tra hai bước: tính tổng MB trước, sau đó chia 1024 để đổi sang GB."
                        },
                        {
                            question: "Bốn ảnh có dung lượng 10 144 KB, 9 888 KB, 10 016 KB và 9 440 KB. Theo dung lượng trung bình, thẻ 16 GB chứa tối đa khoảng bao nhiêu ảnh?",
                            answer: "Dung lượng trung bình là (10 144 + 9 888 + 10 016 + 9 440) ÷ 4 = 9 872 KB. Thẻ 16 GB = 16 × 1024 × 1024 = 16 777 216 KB. 16 777 216 ÷ 9 872 ≈ 1699,47 nên chứa tối đa khoảng 1699 ảnh theo giả định này.",
                            feedback: "Phải đổi dung lượng thẻ về KB và làm tròn xuống vì không thể lưu một phần của tệp ảnh."
                        },
                        {
                            question: "Một bạn nói: “Máy tính luôn cho thông tin đúng vì xử lí rất nhanh và chính xác.” Nhận định này sai ở đâu?",
                            answer: "Máy tính có thể thực hiện đúng chương trình với tốc độ cao, nhưng thông tin vẫn có thể sai nếu dữ liệu đầu vào thiếu/sai, chương trình hoặc cách xử lí không phù hợp, hay thiết bị gặp lỗi. Tốc độ không bảo đảm tính đúng của dữ liệu và kết luận.",
                            feedback: "Phân biệt độ chính xác khi thực hiện lệnh với độ đúng của dữ liệu, chương trình và thông tin đầu ra."
                        }
                    ],
                    application: {
                        task: "Phân tích cách thiết bị số đã thay đổi việc chụp ảnh: mô tả dữ liệu đầu vào, một khâu xử lí, kết quả đầu ra; sau đó giải thích ít nhất hai thay đổi về lưu trữ, tìm kiếm hoặc truyền ảnh so với máy ảnh dùng phim.",
                        criteria: [
                            "Mô tả đúng chuỗi tiếp nhận dữ liệu → xử lí → đưa ra kết quả.",
                            "Phân biệt được dữ liệu ảnh với thông tin con người rút ra từ ảnh.",
                            "Giải thích ít nhất hai ưu điểm của thiết bị số bằng ví dụ cụ thể.",
                            "Không dùng khẳng định tuyệt đối; nêu ít nhất một điều kiện hoặc giới hạn như dung lượng, thiết bị hay kết nối."
                        ],
                        support: [
                            "Bắt đầu từ dữ liệu ánh sáng được cảm biến tiếp nhận.",
                            "Liệt kê các thao tác có thể thực hiện với tệp ảnh: lưu, sao chép, tìm kiếm, chỉnh sửa, gửi.",
                            "Dùng cấu trúc: trước đây…; với thiết bị số…; thay đổi này có lợi vì…"
                        ]
                    }
                }),
                mk("Bài 2: Vai trò của thiết bị thông minh và Tin học đối với xã hội", "Nhận biết thiết bị thông minh và vai trò của Tin học trong xã hội hiện đại.", ["Thiết bị thông minh hoạt động theo phần mềm, có khả năng kết nối và xử lí dữ liệu.", "IoT kết nối thiết bị để thu thập, trao đổi và xử lí dữ liệu.", "Tin học hỗ trợ quản lí, tự động hóa, nghiên cứu và phát triển kinh tế tri thức."], "Điện thoại thông minh khác điện thoại thông thường ở những khả năng nào?", "Có hệ điều hành, ứng dụng, cảm biến, khả năng xử lí và kết nối dữ liệu.", "Một thiết bị có kết nối mạng đã chắc chắn là thiết bị thông minh chưa?", "Chưa; còn cần khả năng xử lí, phần mềm điều khiển và tương tác phù hợp.", "Phân tích một thiết bị thông minh theo đầu vào – xử lí – đầu ra – kết nối.", ["Nêu đúng bốn thành phần.", "Có ví dụ dữ liệu cụ thể.", "Nêu một lợi ích và một rủi ro."]),
                mk("Bài 3: Một số kiểu dữ liệu và dữ liệu văn bản", "Phân biệt kiểu dữ liệu và giải thích cách văn bản được mã hóa trong máy tính.", ["Dữ liệu có thể là số, văn bản, hình ảnh, âm thanh hoặc logic.", "ASCII biểu diễn một tập kí tự; Unicode hỗ trợ nhiều ngôn ngữ và hệ chữ.", "Số hóa văn bản là gán mã số cho kí tự để lưu trữ và xử lí."], "Máy tính lưu chữ cái dưới dạng nét chữ hay dưới dạng mã?", "Máy tính lưu mã số của kí tự; phông chữ quyết định cách hiển thị.", "Vì sao Unicode phù hợp hơn khi lưu tiếng Việt?", "Unicode có mã cho các kí tự và dấu tiếng Việt, hỗ trợ thống nhất nhiều ngôn ngữ.", "Tạo bảng gồm năm kí tự, mã hoặc tên bảng mã và cách hiển thị dự kiến."),
                mk("Bài 4: Hệ nhị phân và dữ liệu số nguyên", "Hiểu hệ nhị phân và thực hiện chuyển đổi số nguyên giữa hệ thập phân và nhị phân.", ["Hệ nhị phân dùng hai chữ số 0 và 1, mỗi vị trí có trọng số là lũy thừa của 2.", "Đổi nhị phân sang thập phân bằng tổng các bit nhân trọng số.", "Đổi số nguyên dương sang nhị phân bằng chia liên tiếp cho 2 và đọc số dư từ dưới lên."], "Vì sao máy tính thường dùng hệ nhị phân?", "Hai trạng thái 0/1 phù hợp với hai trạng thái vật lí ổn định của mạch điện tử.", "Số nhị phân 1010 tương ứng số thập phân nào?", "10, vì 1×8 + 0×4 + 1×2 + 0×1 = 10.", "Chuyển đổi ba số do GV giao theo cả hai chiều và kiểm tra lại bằng trọng số.", ["Đúng kết quả.", "Có các bước tính.", "Kiểm tra ngược lại."]),
                mk("Bài 5: Dữ liệu logic", "Sử dụng giá trị đúng/sai và các phép toán logic AND, OR, XOR, NOT.", ["Dữ liệu logic có hai giá trị đúng và sai.", "AND đúng khi mọi điều kiện đúng; OR đúng khi ít nhất một điều kiện đúng.", "XOR đúng khi hai giá trị khác nhau; NOT đảo giá trị logic."], "Điều kiện “có thẻ và nhập đúng mã” dùng phép toán nào?", "AND, vì cả hai điều kiện phải đúng.", "Khi A đúng và B sai, A XOR B có giá trị gì?", "Đúng, vì hai giá trị khác nhau.", "Lập bảng chân trị cho một biểu thức logic gồm hai biến.", ["Đủ tổ hợp đầu vào.", "Tính đúng từng phép.", "Giải thích được một ứng dụng."])
            ]
        },
        {
            chapterName: "Chương 2: Mạng máy tính và Internet",
            lessons: [
                mk("Bài 6: Mạng máy tính trong cuộc sống hiện đại", "Mô tả mạng máy tính, Internet và lợi ích của việc kết nối.", ["Mạng máy tính kết nối thiết bị để trao đổi dữ liệu và dùng chung tài nguyên.", "Internet là mạng kết nối toàn cầu dựa trên các giao thức chung.", "Dịch vụ mạng hỗ trợ liên lạc, học tập, làm việc và chia sẻ."], "Một phòng máy không kết nối Internet vẫn có thể là mạng máy tính không?", "Có, nếu các máy kết nối với nhau trong mạng cục bộ.", "Phân biệt Internet và Web.", "Internet là hạ tầng mạng; Web là một dịch vụ nội dung hoạt động trên Internet.", "Vẽ sơ đồ mạng gia đình hoặc phòng học và chú thích thiết bị/kết nối."),
                mk("Bài 7: Thực hành sử dụng thiết bị số", "Thực hiện các thao tác cơ bản, an toàn và có tổ chức trên thiết bị số.", ["Quản lí tệp/thư mục theo tên và cấu trúc dễ tìm.", "Thiết lập, cập nhật và sử dụng thiết bị đúng hướng dẫn.", "Bảo vệ tài khoản, dữ liệu và sức khỏe khi sử dụng thiết bị."], "Vì sao nên tổ chức tệp theo thư mục thay vì lưu tất cả ở màn hình nền?", "Cấu trúc thư mục giúp tìm kiếm, sao lưu và chia sẻ chính xác hơn.", "Trước khi tháo thiết bị lưu trữ ngoài cần làm gì?", "Đóng tệp đang dùng và thực hiện thao tác tháo an toàn nếu hệ điều hành yêu cầu.", "Tạo cấu trúc thư mục học tập, lưu một tệp đúng tên và mô tả quy tắc sao lưu.", ["Cấu trúc hợp lí.", "Tên tệp rõ nghĩa.", "Có quy tắc an toàn và sao lưu."]),
                mk("Bài 8: Mạng máy tính trong cuộc sống hiện đại — an toàn Internet", "Nhận diện rủi ro và áp dụng biện pháp bảo vệ khi sử dụng Internet.", ["Rủi ro gồm mã độc, lừa đảo, lộ dữ liệu, nội dung sai lệch và quấy rối.", "Dùng mật khẩu mạnh, xác thực bổ sung, cập nhật và sao lưu.", "Kiểm tra nguồn, liên kết và yêu cầu cung cấp thông tin trước khi hành động."], "Một tin nhắn thúc giục bấm liên kết ngay có dấu hiệu rủi ro nào?", "Tạo áp lực thời gian và dùng liên kết chưa xác minh — dấu hiệu thường gặp của lừa đảo.", "Khi nhận tệp lạ từ người quen, nên làm gì?", "Xác minh qua kênh khác, không mở ngay và quét an toàn.", "Phân tích một tình huống lừa đảo giả định theo Dấu hiệu – Rủi ro – Cách xử lí.")
            ]
        },
        {
            chapterName: "Chương 3: Đạo đức, pháp luật và văn hóa trong môi trường số",
            lessons: [
                mk("Bài 9: An toàn trong không gian mạng", "Bảo vệ thông tin cá nhân và ứng xử có trách nhiệm trong không gian mạng.", ["Thông tin cá nhân cần được chia sẻ có kiểm soát.", "Tôn trọng người khác, bản quyền và quy định pháp luật.", "Lưu bằng chứng, chặn và báo cáo khi gặp quấy rối hoặc lừa đảo."], "Một ảnh đăng công khai có thể tiết lộ thông tin nào ngoài khuôn mặt?", "Địa điểm, trường lớp, thời gian, thói quen hoặc người liên quan.", "Ba bước xử lí khi bị quấy rối trực tuyến?", "Không đáp trả kích động; lưu bằng chứng/chặn; báo người tin cậy hoặc nền tảng/cơ quan phù hợp.", "Xây dựng bộ năm quy tắc an toàn số cho lớp."),
                mk("Bài 10: Thực hành khai thác tài nguyên trên Internet", "Tìm kiếm, đánh giá và sử dụng tài nguyên Internet đúng mục đích, bản quyền.", ["Dùng từ khóa cụ thể và bộ lọc tìm kiếm.", "Đánh giá tác giả, ngày, bằng chứng và đối chiếu nhiều nguồn.", "Trích dẫn nguồn, kiểm tra giấy phép và không sao chép tùy tiện."], "Kết quả đứng đầu máy tìm kiếm có luôn đáng tin nhất không?", "Không; thứ hạng không thay thế việc đánh giá tác giả, bằng chứng và mục đích nguồn.", "Nêu ba tiêu chí đánh giá một nguồn.", "Tác giả/tổ chức; bằng chứng và độ cập nhật; khả năng đối chiếu với nguồn độc lập.", "Tìm hai nguồn về cùng chủ đề, lập bảng đánh giá và chọn nguồn phù hợp.")
            ]
        },
        {
            chapterName: "Chương 4: Ứng dụng tin học",
            lessons: [
                mk("Bài 11: Ứng dụng trên Internet", "Sử dụng dịch vụ đám mây và thư điện tử hiệu quả, an toàn.", ["Dịch vụ đám mây cung cấp lưu trữ, ứng dụng và cộng tác qua mạng.", "Thư điện tử cần tiêu đề rõ, nội dung phù hợp và tệp đính kèm an toàn.", "Quyền chia sẻ phải đúng đối tượng và mức truy cập."], "Gửi liên kết chỉnh sửa và liên kết chỉ xem khác nhau thế nào?", "Quyền chỉnh sửa cho phép thay đổi nội dung; chỉ xem không cho sửa.", "Khi nào nên dùng BCC trong email?", "Khi gửi nhiều người cần bảo vệ địa chỉ của họ khỏi các người nhận khác.", "Soạn email học tập mẫu và thiết lập quyền chia sẻ một tài liệu giả định."),
                mk("Bài 12: Phần mềm thiết kế đồ họa", "Nhận biết đồ họa vectơ và làm quen môi trường Inkscape.", ["Ảnh vectơ mô tả đối tượng bằng hình học nên co giãn ít suy giảm chất lượng.", "Inkscape có vùng vẽ, hộp công cụ, bảng chọn và thanh thuộc tính.", "Tệp SVG lưu đối tượng vectơ và có thể xuất sang ảnh điểm."], "Logo cần phóng ở nhiều kích thước nên ưu tiên vectơ hay bitmap?", "Vectơ, vì có thể co giãn mà vẫn giữ đường nét.", "SVG phù hợp với loại đồ họa nào?", "Đồ họa vectơ.", "Tạo tệp SVG gồm ba hình cơ bản và lưu đúng tên."),
                mk("Bài 13: Bổ sung các đối tượng đồ họa", "Tạo, chọn, sao chép, biến đổi và sắp xếp các đối tượng vectơ.", ["Đối tượng cơ bản gồm chữ nhật, elip, đa giác, sao và văn bản.", "Có thể di chuyển, co giãn, quay, lật và sao chép.", "Thứ tự lớp quyết định đối tượng nào che đối tượng nào."], "Một hình phức tạp có thể được tạo từ nhiều hình đơn giản bằng cách nào?", "Phân tích thành đối tượng cơ bản rồi biến đổi, sao chép và xếp lớp.", "Ctrl+D trong Inkscape thường dùng để làm gì?", "Tạo bản sao đối tượng tại cùng vị trí.", "Dựng một biểu tượng từ ít nhất ba loại hình và mô tả thứ tự lớp."),
                mk("Bài 14: Làm việc với đối tượng đường và văn bản", "Tạo đường, chỉnh điểm neo và trình bày văn bản trong thiết kế.", ["Đối tượng đường gồm đoạn thẳng/đường cong nối qua các điểm neo.", "Tay nắm điều khiển thay đổi hướng và độ cong.", "Văn bản cần được chọn kiểu, cỡ, căn chỉnh và vị trí phù hợp."], "Vì sao hình giọt nước khó tạo chỉ bằng hình khối có sẵn?", "Nó cần đường cong được điều chỉnh bằng điểm neo.", "Điểm neo dùng để làm gì?", "Xác định và chỉnh hình dạng các đoạn của đối tượng đường.", "Thiết kế logo chữ đơn giản có một đối tượng đường và một văn bản."),
                mk("Bài 15: Hoàn thiện hình ảnh đồ họa", "Hoàn thiện bố cục, màu sắc và xuất bản sản phẩm đồ họa.", ["Bố cục cần thứ bậc, cân bằng và khoảng trắng.", "Màu sắc và kiểu chữ phải dễ đọc, phù hợp mục đích.", "Lưu tệp nguồn để chỉnh sửa; xuất định dạng theo mục đích sử dụng."], "Vì sao cần giữ cả tệp nguồn SVG và tệp xuất PNG?", "SVG để tiếp tục chỉnh sửa; PNG thuận tiện chia sẻ/hiển thị dạng ảnh điểm.", "Trước khi xuất sản phẩm cần kiểm tra gì?", "Nội dung, chính tả, bố cục, tương phản, kích thước và phạm vi xuất.", "Hoàn thiện poster nhỏ và tự đánh giá theo bố cục, dễ đọc, kỹ thuật, bản quyền.")
            ]
        },
        {
            chapterName: "Chương 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            lessons: [
                mk("Bài 16: Ngôn ngữ lập trình bậc cao và Python", "Hiểu vai trò ngôn ngữ lập trình bậc cao và làm quen môi trường Python.", ["Ngôn ngữ bậc cao giúp mô tả thuật toán gần cách tư duy của con người.", "Chương trình cần được dịch/thực thi để máy tính làm theo.", "Python hỗ trợ chế độ tương tác và chạy tệp chương trình."], "Máy tính có hiểu trực tiếp câu lệnh Python như con người đọc không?", "Cần trình thông dịch Python chuyển và thực hiện câu lệnh.", "Hai cách làm việc cơ bản với Python?", "Tương tác từng lệnh và viết/chạy tệp chương trình.", "Chạy chương trình in lời chào và ghi lại mã, kết quả, lỗi nếu có."),
                mk("Bài 17: Biến và lệnh gán", "Sử dụng biến, tên biến và lệnh gán trong Python.", ["Biến tham chiếu tới giá trị trong quá trình chạy.", "Tên biến tuân thủ quy tắc định danh và nên có ý nghĩa.", "Lệnh gán dùng dấu =; vế phải được tính trước rồi gán cho vế trái."], "Sau x = 3 rồi x = x + 2, x bằng bao nhiêu?", "5.", "Dấu = trong lệnh gán có giống phép bằng toán học không?", "Không hoàn toàn; nó gán giá trị vế phải cho biến vế trái.", "Viết chương trình đổi chỗ hai giá trị và giải thích từng lệnh."),
                mk("Bài 18: Các lệnh vào ra đơn giản", "Sử dụng input() và print() để giao tiếp với người dùng.", ["input() nhận dữ liệu dưới dạng xâu nếu chưa chuyển kiểu.", "Dùng int() hoặc float() khi cần tính toán số.", "print() có thể xuất nhiều giá trị và thông báo rõ nghĩa."], "Vì sao input('Tuổi: ') + 1 gây lỗi nếu chưa chuyển kiểu?", "input trả xâu; cần chuyển sang int trước khi cộng số.", "Lệnh nào đọc số nguyên n?", "n = int(input(...)).", "Viết chương trình nhập chiều dài, chiều rộng và in diện tích kèm đơn vị."),
                mk("Bài 19: Câu lệnh rẽ nhánh if", "Dùng biểu thức logic và if/elif/else để lựa chọn hành động.", ["Điều kiện được đánh giá đúng hoặc sai.", "if thực hiện khối lệnh khi điều kiện đúng.", "elif kiểm tra trường hợp tiếp theo; else xử lí phần còn lại.", "Python dùng thụt lề để xác định khối."], "Một chương trình xếp loại cần kiểm tra nhiều khoảng điểm bằng cấu trúc nào?", "if – elif – else theo thứ tự điều kiện phù hợp.", "Lỗi thường gặp khi viết if Python?", "Thiếu dấu hai chấm, sai thụt lề hoặc điều kiện chồng lấn/sai thứ tự.", "Viết chương trình nhập một số và thông báo âm, bằng 0 hay dương."),
                mk("Bài 20: Câu lệnh lặp for", "Dùng range và for cho các thao tác lặp biết trước số lần.", ["for duyệt qua dãy giá trị.", "range(stop), range(start, stop) hoặc range(start, stop, step).", "Giá trị stop không được đưa vào dãy."], "range(1, 5) tạo những giá trị nào?", "1, 2, 3, 4.", "Khi nào ưu tiên for?", "Khi biết số lần lặp hoặc cần duyệt một dãy.", "Viết chương trình tính tổng từ 1 đến n bằng for và kiểm tra với một n nhỏ."),
                mk("Bài 21: Câu lệnh lặp while", "Dùng while cho lặp chưa biết trước số lần và kiểm soát điều kiện dừng.", ["while lặp khi điều kiện còn đúng.", "Biến điều khiển phải được cập nhật để tránh lặp vô hạn.", "break kết thúc vòng lặp trong trường hợp cần thiết."], "Điều gì xảy ra nếu điều kiện while luôn đúng và không có điểm dừng?", "Chương trình lặp vô hạn.", "Một vòng while an toàn cần gì?", "Điều kiện rõ và thao tác làm tiến gần tới trạng thái dừng.", "Viết chương trình yêu cầu nhập lại cho tới khi người dùng nhập số dương."),
                mk("Bài 22: Kiểu dữ liệu danh sách", "Khởi tạo, truy cập, thay đổi và duyệt danh sách Python.", ["List chứa nhiều phần tử theo thứ tự.", "Chỉ số bắt đầu từ 0; chỉ số âm truy cập từ cuối.", "Có thể thay đổi phần tử và duyệt bằng for."], "Danh sách có 5 phần tử thì chỉ số cuối theo chiều thuận là bao nhiêu?", "4.", "a[-1] biểu thị gì?", "Phần tử cuối danh sách.", "Tạo danh sách điểm, tính tổng và in từng phần tử kèm vị trí."),
                mk("Bài 23: Một số lệnh làm việc với danh sách", "Sử dụng append, insert, remove và các thao tác danh sách.", ["append thêm vào cuối; insert thêm tại vị trí.", "remove xóa giá trị xuất hiện đầu tiên và gây lỗi nếu không có.", "Có thể dùng in để kiểm tra trước khi xóa."], "Muốn xóa x an toàn khi chưa biết x có trong danh sách không, làm gì?", "Kiểm tra if x in danh_sach trước khi remove.", "append và insert khác nhau thế nào?", "append thêm cuối; insert thêm tại chỉ số chỉ định.", "Xây dựng chương trình quản lí danh sách việc cần làm với thêm và xóa."),
                mk("Bài 24: Xâu kí tự", "Truy cập, duyệt và xử lí xâu trong Python.", ["Xâu là dãy kí tự có chỉ số.", "Có thể duyệt kí tự bằng for.", "Xâu không thay đổi trực tiếp từng kí tự; cần tạo xâu mới."], "Có thể gán s[0] = 'A' trực tiếp không?", "Không; xâu là kiểu bất biến.", "len(s) cho biết gì?", "Số kí tự trong xâu.", "Viết chương trình đếm số lần xuất hiện của một kí tự trong xâu."),
                mk("Bài 25: Một số lệnh làm việc với xâu kí tự", "Dùng in, find(), split() và join() để xử lí xâu.", ["in kiểm tra xâu con.", "find trả vị trí đầu tiên hoặc -1 nếu không thấy.", "split tách xâu thành danh sách; join ghép các phần tử bằng chuỗi nối."], "Kết quả khi find không tìm thấy xâu con?", "-1.", "split và join có quan hệ gì?", "split tách xâu thành phần; join ghép các phần thành xâu.", "Chuẩn hóa một câu có nhiều khoảng trắng bằng split rồi join."),
                mk("Bài 26: Hàm trong Python", "Định nghĩa và gọi hàm để tổ chức chương trình.", ["Hàm gom một nhiệm vụ có tên để tái sử dụng.", "def khai báo hàm; return trả kết quả.", "Hàm không return rõ ràng trả None."], "Lợi ích chính của hàm là gì?", "Tái sử dụng, chia nhỏ vấn đề và dễ kiểm thử/bảo trì.", "print và return khác nhau thế nào?", "print hiển thị; return gửi giá trị về nơi gọi.", "Viết hàm tính diện tích hình chữ nhật và gọi với hai bộ dữ liệu."),
                mk("Bài 27: Tham số của hàm", "Phân biệt tham số, đối số và tổ chức chương trình dùng hàm.", ["Tham số xuất hiện trong định nghĩa hàm.", "Đối số là giá trị truyền khi gọi.", "Tên và số lượng đối số phải phù hợp cách định nghĩa."], "Trong f(x), x ở định nghĩa và giá trị 5 ở f(5) được gọi là gì?", "x là tham số; 5 là đối số.", "Vì sao nên dùng tham số thay vì đọc input bên trong mọi hàm?", "Hàm linh hoạt, dễ kiểm thử và tái sử dụng hơn.", "Tách một chương trình tính toán thành ít nhất hai hàm có tham số."),
                mk("Bài 28: Phạm vi của biến", "Phân biệt biến cục bộ, toàn cục và sử dụng phạm vi hợp lí.", ["Biến tạo trong hàm thường là cục bộ.", "Biến ngoài hàm thuộc phạm vi rộng hơn.", "global cho phép gán biến toàn cục nhưng nên hạn chế để giảm phụ thuộc."], "Hai hàm có thể cùng dùng tên biến cục bộ x mà không xung đột không?", "Có, mỗi biến thuộc phạm vi cục bộ của hàm tương ứng.", "Rủi ro khi lạm dụng biến toàn cục?", "Khó theo dõi thay đổi, kiểm thử và tái sử dụng hàm.", "Chỉnh chương trình dùng biến toàn cục thành hàm nhận tham số và trả kết quả."),
                mk("Bài 29: Nhận biết lỗi chương trình", "Nhận diện lỗi cú pháp, lỗi khi chạy và lỗi logic.", ["Lỗi cú pháp vi phạm quy tắc ngôn ngữ.", "Lỗi khi chạy xuất hiện với dữ liệu/trạng thái cụ thể.", "Lỗi logic làm chương trình chạy nhưng kết quả sai."], "Chương trình chạy không báo lỗi nhưng tính sai thuộc loại nào?", "Lỗi logic.", "Thông báo lỗi giúp gì?", "Cho biết loại lỗi và vị trí gần nơi phát hiện để khoanh vùng.", "Phân loại một bộ lỗi mẫu và đề xuất bước kiểm tra đầu tiên."),
                mk("Bài 30: Kiểm thử và gỡ lỗi", "Thiết kế dữ liệu kiểm thử và sửa lỗi chương trình có hệ thống.", ["Ca kiểm thử gồm đầu vào và kết quả mong đợi.", "Cần kiểm thử trường hợp thường, biên và không hợp lệ.", "Gỡ lỗi bằng tái hiện, khoanh vùng, sửa nhỏ và kiểm thử lại."], "Một chương trình chia hai số cần ca kiểm thử biên nào?", "Mẫu số bằng 0 và các giá trị âm/0 phù hợp yêu cầu.", "Vì sao sửa nhiều chỗ cùng lúc không tốt?", "Khó biết thay đổi nào giải quyết hoặc tạo lỗi.", "Lập bảng ít nhất năm ca kiểm thử cho một chương trình đã học."),
            ]
        },
        {
            chapterName: "Chương 6: Tin học với nghề nghiệp",
            lessons: [
                mk("Bài 31: Việt Nam và kinh tế tri thức", "Giải thích vai trò của CNTT trong phát triển kinh tế tri thức.", ["Tri thức, dữ liệu và đổi mới tạo giá trị lớn trong nền kinh tế hiện đại.", "CNTT hỗ trợ số hóa, tự động hóa và kết nối thị trường.", "Chuyển đổi số cần hạ tầng, nhân lực và sử dụng có trách nhiệm."], "Một sản phẩm số tạo giá trị nhờ yếu tố nào ngoài phần cứng?", "Dữ liệu, phần mềm, tri thức, dịch vụ và khả năng đổi mới.", "CNTT hỗ trợ kinh tế tri thức ra sao?", "Tăng khả năng tạo, xử lí, chia sẻ tri thức và tự động hóa hoạt động.", "Phân tích một ví dụ chuyển đổi số tại địa phương theo lợi ích và điều kiện cần."),
                mk("Bài 32: Ôn tập lập trình Python", "Hệ thống hóa biến, vào/ra, rẽ nhánh, lặp, danh sách, xâu và hàm.", ["Chọn cấu trúc dữ liệu và điều khiển theo bài toán.", "Chia chương trình thành hàm nhỏ.", "Kiểm thử bằng trường hợp thường, biên và lỗi."], "Khi bài toán có nhiều bước lặp và xử lí giống nhau, nên tổ chức thế nào?", "Dùng vòng lặp và hàm để giảm lặp mã, tăng khả năng kiểm thử.", "Quy trình giải bài toán lập trình gồm gì?", "Phân tích → thuật toán → mã → kiểm thử → sửa lỗi.", "Giải một bài tổng hợp và nộp thuật toán, mã, bảng kiểm thử."),
                mk("Bài 33: Nghề nghiệp trong lĩnh vực Tin học", "Nhận biết nhóm nghề Tin học, năng lực cần thiết và lộ trình học tập.", ["Nhóm nghề gồm phát triển phần mềm, dữ liệu, hạ tầng, an toàn, sản phẩm và hỗ trợ.", "Mỗi nghề cần kiến thức, kĩ năng kĩ thuật và kĩ năng hợp tác.", "Thông tin nghề cần đối chiếu nguồn tuyển sinh/tuyển dụng đáng tin cậy."], "Biết lập trình có đủ cho mọi nghề Tin học không?", "Không; yêu cầu khác nhau về dữ liệu, hệ thống, thiết kế, giao tiếp và kiến thức miền.", "Khi tìm thông tin nghề cần kiểm tra gì?", "Nguồn, thời điểm, mô tả công việc, năng lực và lộ trình đào tạo.", "Lập hồ sơ một nghề gồm nhiệm vụ, năng lực, sản phẩm minh chứng và lộ trình học."),
                mk("Bài 34: Nghề thiết kế đồ họa", "Tìm hiểu công việc, quy trình và năng lực của nhà thiết kế đồ họa.", ["Thiết kế đồ họa giải quyết vấn đề truyền thông bằng hình ảnh và chữ.", "Quy trình gồm hiểu yêu cầu, nghiên cứu, phác thảo, thiết kế, phản hồi và bàn giao.", "Sản phẩm cần thẩm mỹ, dễ tiếp cận, đúng bản quyền và mục đích."], "Thiết kế đẹp nhưng khó đọc có đạt yêu cầu không?", "Không; hiệu quả truyền thông và khả năng tiếp cận là tiêu chí cốt lõi.", "Portfolio dùng để làm gì?", "Thể hiện sản phẩm, quy trình, năng lực và vai trò của người thiết kế.", "Tạo brief và phác thảo cho một poster học đường, kèm tiêu chí dễ đọc và bản quyền.")
            ]
        }
    ];
})();
