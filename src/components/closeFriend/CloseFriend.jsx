import "./closeFriend.css"


export default function CloseFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;//tạo URL hoàn chỉnh đến biến REACT_APP_PUBLIC_FOLDER trong env 
  
  return (
    <li className="sidebarFriend">
        <img src={PF + user.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
