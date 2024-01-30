import "./post.css"
import { MoreVert } from "@mui/icons-material"
import {Users} from "../../dummyData"
import { useState } from "react"

export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;//tạo URL hoàn chỉnh đến biến REACT_APP_PUBLIC_FOLDER trong env 

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/1.jpg" alt="" />
                        <span className="postUsername">
                            {Users.filter((u) => u.id === post.userId)[0].username}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span> {/* post?.desc, sử dụng toán tử ?. để kiểm tra xem post có tồn tại không trước khi cố gắng truy cập thuộc tính desc. Nếu post tồn tại, giá trị của desc sẽ được hiển thị; nếu không, sẽ hiển thị undefined. */}
                    <img className="postImg" src={PF + post.photo} alt="" /> {/*PF có thể là đường dẫn đến thư mục chứa tài nguyên tĩnh, và post.photo là tên hình ảnh. Toán tử + được sử dụng để nối chuỗi.*/}
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
                        <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
