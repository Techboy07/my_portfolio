export interface project{

    name: string;
    description: string;
    image: string;
    live: string;
    sourceCode:string;

}

export interface doc extends Object{

data():project

}
export interface snapShot {

    docs: doc[]
}
