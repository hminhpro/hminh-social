import "./online.css"

export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;//tạo URL hoàn chỉnh đến biến REACT_APP_PUBLIC_FOLDER trong env 

  return (
    <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img 
            src={PF + user.profilePicture}
            alt="" 
            className="rightbarProfileImg" 
            />
            <span className='rightbarOnline'></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
    </li>
  )
}
