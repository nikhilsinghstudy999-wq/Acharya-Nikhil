export function articleSchema(headline:string,datePublished:string,authorName:string,description:string,url:string) {
  return {'@context':'https://schema.org','@type':'Article',headline,datePublished,dateModified:datePublished,
    author:{'@type':'Person',name:authorName,url:'https://www.acharyanikhilshastri.com/about'},
    description,
    publisher:{'@type':'Organization',name:'Acharya Nikhil Shastri Astrology',
      logo:{'@type':'ImageObject',url:'https://www.acharyanikhilshastri.com/images/logo.png'}},
    mainEntityOfPage:{'@type':'WebPage','@id':url}};
}
export function breadcrumbSchema(items:{name:string;path:string}[]) {
  return {'@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement: items.map((item,i)=>({'@type':'ListItem',position:i+1,name:item.name,
      item:`https://www.acharyanikhilshastri.com${item.path}`}))};
}
export function faqSchema(questions:{question:string;answer:string}[]) {
  return {'@context':'https://schema.org','@type':'FAQPage',
    mainEntity: questions.map(q=>({'@type':'Question',name:q.question,
      acceptedAnswer:{'@type':'Answer',text:q.answer}}))};
}
