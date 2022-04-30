import Sidebar from "../sidebar/Sidebar"
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
           <img src="https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80" alt="" className="singlePostImg" />
           <h1 className="singlePostTitle">
               Lorem jiko epsum
           <div className="singlePostEdit">
               <i className=" singlePostIcon fa-solid fa-pen-to-square"></i>
               <i className=" singlePostIcon fa-solid fa-trash-can"></i>
               </div>
               </h1>
           <div className="singlePostInfo">
               <span className="singlePostAuthor">Author:<b>Apoorva</b></span>
               <span className="singlePostDate">1 hour ago</span>
               </div>
               <p className="singlePostDesc">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis cum sit vel odio itaque iusto commodi. Non tempora qui nostrum fugit ut, ullam, debitis pariatur repudiandae inventore minima fugiat hic.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis sapiente eaque maxime harum, repellat debitis nobis nesciunt. Laboriosam explicabo itaque maiores quidem sapiente culpa architecto eos, illum repellat placeat Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro id maiores. Perspiciatis quod nemo illo nesciunt temporibus possimus, deserunt doloribus autem nulla velit soluta iusto! Autem quasi sunt iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ratione quaerat consectetur exercitationem necessitatibus dignissimos omnis debitis. Illo incidunt velit deleniti blanditiis ea praesentium optio aliquid quasi, laboriosam, dolorem placeat?
                   </p>
               </div>
               <div className="singlePostReview">
               <i className="singlePostReviewIcon fa-solid fa-thumbs-up"></i>
               <i className="singlePostReviewIcon fa-solid fa-thumbs-down"></i>
               </div>
       </div>
    
  )
}
