import { useRef, useState } from "react";
import Editor from "./Editor";

const PostingEditor = () => {
    const [htmlContent, setHtmlContent] = useState(""); //๐
    const quillRef = useRef(); //๐

    //  const handleSubmit = async () => {
    //     const description = quillRef.current.getEditor().getText(); //ํ๊ทธ๋ฅผ ์ ์ธํ ์์ text๋ง์ ๋ฐ์์จ๋ค. ๊ฒ์๊ธฐ๋ฅ์ ๊ตฌํํ์ง ์์ ๊ฑฐ๋ผ๋ฉด ๊ตณ์ด text๋ง ๋ฐ๋ก ์ ์ฅํ  ํ์๋ ์๋ค.
    //     if (description.trim()==="") {
    //         alert("๋ด์ฉ์ ์๋ ฅํด์ฃผ์ธ์.")
    //         return;
    //     }
    //     if (postId) {
    //         //๊ธฐ์กด ๊ฒ์๊ธ ์๋ฐ์ดํธ
    //         await api.updatePost({postId,description,htmlContent});
    //         //history.push(`/@${user.name}/post/${postId}`);
    //     } else {
    //         //์๋ก์ด ๊ฒ์๊ธ ์์ฑ
    //         await api.createNewPost({description,htmlContent});
    //         //history.push(`/@${user.name}/posts?folder=${selectedFolder}`);
    //     }
    // }
    return (
        <div>
            <Editor quillRef={quillRef} htmlContent={htmlContent} setHtmlContent={setHtmlContent} api={api} />
            {/* <button className={styles.submit} onClick={handleSubmit}>Done</button> */}
        </div>
    )
}

export default PostingEditor;