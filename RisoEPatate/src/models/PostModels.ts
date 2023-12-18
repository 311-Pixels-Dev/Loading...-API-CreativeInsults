export class Posts{
    private id:string;
    private post_id:number;
    private post_text:string;
    private username:string;

    public constructor(){
    }

    public setId(id:string):Posts{
        this.id=id;
        return this;
    }

    public getId():string{
        return this.id;
    }

    public setPostId(post_id:number):Posts{
        this.post_id=post_id;
        return this;
    }

    public getPostId():number{
        return this.post_id;
    }

    public setUsername(username:string):Posts{
        this.username=username;
        return this;
    }

    public getUsername():string{
        return this.username;
    }

    public setPostText(post_text:string):Posts{
        this.post_text=post_text;
        return this;
    }

    public getPostText():string{
        return this.post_text;
    }
}