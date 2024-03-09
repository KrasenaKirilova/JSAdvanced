function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            console.log(`Post : ${this.title}`);
            console.log(`Content: ${this.content}`);
        }
    };

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        toString() {
            let result = "";
            super.toString();
            console.log(`Rating: ${this.likes - this.dislikes}`);
            if (this.comments.length > 0) {

                result += `Comments:\n` + this.comments.map(comment => ` * ${comment}`).join('\n');
            }
            return result;
        }


        addComment(comment) {
            if (typeof comment === "string" && comment !== "")
                this.comments.push(comment);
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views) ? views : 0;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
            // super.toString();
            // console.log(` Post: ${this.itle} \n Content: ${this.ontent}\n Views: ${this.view}`);
        }
    };

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }

}

/*Решение на колега 
function solution() {
    class Post {
        constructor(title, content) {
            this.title = title; 
            this.content = content; 
        }
    
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes) ? likes : 0; 
            this.dislikes = Number(dislikes) ? dislikes : 0; 
            this.comments = [];
        }
    
        addComment(comment) {
            if (typeof comment === "string" && comment.trim() !== "") { 
                this.comments.push(comment);
            }
        }
    
        toString() {
            let rating = this.likes - this.dislikes;
            let result = super.toString() + `\nRating: ${rating}`;
            if (this.comments.length > 0) {
                result += `\nComments:\n` + this.comments.map(comment => ` * ${comment}`).join('\n');
            }
            return result;
        }
    }
    
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views) ? views : 0; 
        }
    
        view() {
            this.views++;
            return this; 
        }
    
        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }
    
return {
    Post,
    SocialMediaPost,
    BlogPost
};

}
*/

const classes = solution();

let post = new classes.Post("Post", "Content");

//console.log(post.toString());

// Post: Post

// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");


scm.addComment("Very good post");

scm.addComment("Wow!");

console.log(scm.toString());

// scm.addComment('');

// console.log(scm.toString());

// Post: TestTitle

// Content: TestContent

// Rating: -5

// Comments:

// * Good post

// * Very good post

// * Wow!

let views = new classes.BlogPost("NewTitle", "NewContent", 2);
console.log(views.toString());
