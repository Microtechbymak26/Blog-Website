// type Blog =  {
//     Title: string,
//     Paragraph: string,
//     image: any,
//     slug: string,
//     block:string 
// }


interface Image {
    src: string; 
    alt: string; 
  }
  
  type Blog = {
    Title: string;
    Paragraph: string;
    image: Image; 
    slug: string;
    block: string;
  };