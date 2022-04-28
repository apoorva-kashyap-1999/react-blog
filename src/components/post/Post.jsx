import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://images.pexels.com/photos/7827269/pexels-photo-7827269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facere, deleniti at fugiat velit exercitationem similique ipsum culpa. Officiis, sunt! Nisi, unde quibusdam. Vero eius expedita facere similique veniam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facere, deleniti at fugiat velit exercitationem similique ipsum culpa. Officiis, sunt! Nisi, unde quibusdam. Vero eius expedita facere similique veniam quisLorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facere, deleniti at fugiat velit exercitationem similique ipsum culpa. Officiis, sunt! Nisi, unde quibusdam. Vero eius expedita facere similique veniam quis</p>
    </div>
  )
}
