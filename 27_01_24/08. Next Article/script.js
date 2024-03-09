function getArticleGenerator(articles) {
    let articleContent = Array.from(articles);
    const contentRef = document.getElementById("content");

    return () => {
        if(!articleContent.length) {
            return;
        };
        
        let currentArticle = articleContent.shift();
        let newArticle = document.createElement("article");
        newArticle.textContent = currentArticle;
        contentRef.appendChild(newArticle);
    };

};
