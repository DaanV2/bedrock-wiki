import{_ as i,c as r,a as n,e as o,b as e,d as t,r as s,o as l}from"./404.md.ce3b5fb6.js";const z='{"title":"Creating addons with JQ","description":"","frontmatter":{"title":"Creating addons with JQ","hidden":true},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":2,"title":"Getting jq","slug":"getting-jq"},{"level":2,"title":"Defining Syntax","slug":"defining-syntax"},{"level":3,"title":"The Dot","slug":"the-dot"},{"level":3,"title":"Paths","slug":"paths"},{"level":3,"title":"Array Access","slug":"array-access"},{"level":3,"title":"Editing Values","slug":"editing-values"},{"level":3,"title":"The Pipe","slug":"the-pipe"},{"level":3,"title":"Logical Operations","slug":"logical-operations"},{"level":3,"title":"Variables","slug":"variables"},{"level":2,"title":"Builtin Functions","slug":"builtin-functions"},{"level":3,"title":"Syntax","slug":"syntax"},{"level":3,"title":"Math","slug":"math"},{"level":3,"title":"Map and Map Values","slug":"map-and-map-values"},{"level":3,"title":"To and From Entries","slug":"to-and-from-entries"},{"level":3,"title":"Walk","slug":"walk"},{"level":3,"title":"Further Reading","slug":"further-reading"},{"level":2,"title":"Defining Custom Functions","slug":"defining-custom-functions"},{"level":2,"title":"Command Line Use","slug":"command-line-use"},{"level":2,"title":"Bringing It All Together","slug":"bringing-it-all-together"}],"relativePath":"meta/jq.md"}',d={},u=o("",12),h=e("h3",{id:"paths",tabindex:"-1"},[t("Paths "),e("a",{class:"header-anchor",href:"#paths","aria-hidden":"true"},"#")],-1),c=e("p",null,[t("Here, we see that our "),e("code",null,"."),t(" filter returns what we expected: the entire JSON file. Now, let's say we wanted to return some specific part of the JSON file, the header UUID, for example. We would then construct a filter that contains the full path to that value. In this case, that would be "),e("code",null,".header.uuid"),t(". Let's see that in action:")],-1),p=e("h3",{id:"array-access",tabindex:"-1"},[t("Array Access "),e("a",{class:"header-anchor",href:"#array-access","aria-hidden":"true"},"#")],-1),f=e("p",null,[t("We can access arrays in jq similarly to how we would in other languages. Let's say we wanted to return the last number in our minimum engine version array. We would construct the following filter: "),e("code",null,".header.min_engine_version[-1]"),t(". Note that, of course, we could also specify the positive position 2 if we always wanted to return to the second position. Simply using empty brackets, "),e("code",null,".[]"),t(", will return all array elements in a line separated list. Feel free to play around with this and learn the basics:")],-1),m=e("h3",{id:"editing-values",tabindex:"-1"},[t("Editing Values "),e("a",{class:"header-anchor",href:"#editing-values","aria-hidden":"true"},"#")],-1),g=e("p",null,[t("Now let's get into the real meat of jq and start manipulating our JSON data. The way we do this is with the plain assignment operator ("),e("code",null,"="),t("). There are a few variants of this operator, referred to as update-assignment operators, such as "),e("code",null,"|="),t(" and "),e("code",null,"+="),t(", which you can read more about in jq's official "),e("a",{href:"https://stedolan.github.io/jq/manual/#Assignment",target:"_blank",rel:"noopener noreferrer"},"manual"),t(", and experiment within the example below:")],-1),_=e("h3",{id:"the-pipe",tabindex:"-1"},[t("The Pipe "),e("a",{class:"header-anchor",href:"#the-pipe","aria-hidden":"true"},"#")],-1),y=e("p",null,[t("Similar to UNIX command-line interfaces, jq makes use of the pipe, "),e("code",null,"|"),t(". When you use the pipe character, you are essentially telling jq to take the result of your filter on the left of the pipe and run it through the filter to the pipe's right. Let's go back to our array access example, except this time. We will output the entire array apply some filter to the output array. We'll use jq's built-in map function to demonstrate this, which is a handy function as it can be used to apply a specified filter to every value in an input array. We'll add 1 to each value in the minimum engine version array:")],-1),v=o("",3),b=o("",3),w=e("h3",{id:"variables",tabindex:"-1"},[t("Variables "),e("a",{class:"header-anchor",href:"#variables","aria-hidden":"true"},"#")],-1),A=e("p",null,[t("Variables can be defined anywhere in filter. When a variable is defined, it is valid for use anywhere downstream in the pipe from where it was initially defined. They are defined in the form: "),e("code",null,".input as $var | $var"),t(", which would effectively return "),e("code",null,".input"),t(". Any valid JSON type can also serve as an input, such as objects, arrays, strings, and numbers. Take the simple example:")],-1),C=e("h2",{id:"builtin-functions",tabindex:"-1"},[t("Builtin Functions "),e("a",{class:"header-anchor",href:"#builtin-functions","aria-hidden":"true"},"#")],-1),D=e("h3",{id:"syntax",tabindex:"-1"},[t("Syntax "),e("a",{class:"header-anchor",href:"#syntax","aria-hidden":"true"},"#")],-1),B=e("p",null,[t("jq comes with a variety of built-in functions. We've already encountered the function "),e("code",null,"map"),t(" while explaining the pipe. One thing of note regarding jq functions is that their syntax differs depending on the number of arguments they take. Multi-argument functions will take their values enclosed in parentheses and separated by semicolons. In contrast, for single-argument functions, the input is piped in. Take the example below, in which we use the multi-argument function pow to raise the format version to the third power, while we also use the single argument function sqrt to find the square root of the format version. In this example, you'll also note that we introduce the concept of building an entirely new JSON structure within our jq filter. This is extremely useful in situations where we'd like to reshape some input files somehow. It's always important to keep in mind that any valid JSON is valid anywhere in a jq filter:")],-1),q=o("",4),x=e("h3",{id:"to-and-from-entries",tabindex:"-1"},[t("To and From Entries "),e("a",{class:"header-anchor",href:"#to-and-from-entries","aria-hidden":"true"},"#")],-1),k=e("p",null,[t("The function "),e("code",null,"to_entries"),t(" is a useful single argument jq builtin that is helpful when we'd like to rearrange keys and values. Let's say we wanted to invert all the key/value pairs in the header. Using "),e("code",null,"to_entries"),t(`, we'll construct an array of all key-value pairs in the header, reformatted as objects, and assigned "key" or "value" to reference them later. To understand how this function works, it's important to see what this intermediate looks like. Note that this can also be reversed by appending `),e("code",null,"from_entries"),t(":")],-1),j=e("p",null,[t("Now, we'll use "),e("code",null,"map"),t(" to iterate through each array entry, and finally, we'll introduce a new function, add. This single-argument function will take the array of objects output by "),e("code",null,"map"),t(" and essentially move them up one level to again exist as key-value pairs under the header. We'll also need to convert all our values to strings so they can serve as keys. We'll use the single-argument function "),e("code",null,"tostring"),t(". Note that "),e("code",null,"tonumber"),t(" is the inverse of this:")],-1),T=o("",2),S=o("",4),I=o("",12);function N(W,F,V,J,P,O){const a=s("JQEmbed");return l(),r("div",null,[u,n(a,{content:"c35537fac79dfd77cd89551b7487abed?query=."}),h,c,n(a,{content:"c35537fac79dfd77cd89551b7487abed?query=.header.uuid"}),p,f,n(a,{content:"c35537fac79dfd77cd89551b7487abed?query=.header.min_engine_version[-1]"}),m,g,n(a,{content:"c35537fac79dfd77cd89551b7487abed?query=.format_version%20%3D%203"}),_,y,n(a,{content:"c35537fac79dfd77cd89551b7487abed?query=.header.min_engine_version%20%7C%20map%28.%20%2B%201%29"}),v,n(a,{content:"199ed596c0f7158cdb7d2da8510690c5?query=if%20.format_version%20>%201%20then%20.header.description%20%3D%20%22Big%20Format%22%20else%20.%20end"}),b,n(a,{content:"199ed596c0f7158cdb7d2da8510690c5?query=if%20%28.header.version%5B0%5D%20>%201%20and%20.modules%5B0%5D.version%5B0%5D%20>%201%20%7C%20not%29%20%0A%0Athen%20.header.description%20%3D%20%22Little%20Version%22%20else%20.%20end"}),w,A,n(a,{content:"f99c7ad63286e1813cebc4a6dac1df1d?query=%7B%22hello%22%3A%20%22world%22%7D%20as%20%24var%20%7C%20%24var%20%7C%20.hello&slurp=true"}),C,D,B,n(a,{content:"c35537fac79dfd77cd89551b7487abed?query=%7B%0A%20%20%22multi-argument%22%3A%20pow%28.format_version%3B%203%29%2C%0A%20%20%22single-argument%22%3A%20.format_version%20%7C%20sqrt%0A%7D"}),q,n(a,{content:"199ed596c0f7158cdb7d2da8510690c5?query=.header%20as%20%24header%20%7C%0A.header%20%3D%20%28%24header%20%7C%20map_values%28%28select%28type%20%3D%3D%20%22string%22%29%20%7C%20gsub%28%22Example%22%3B%20%22Production%22%29%29%29%29%20%2B%20%28%24header%20%7C%20map_values%28select%28type%20!%3D%20%22string%22%29%29%29"}),x,k,n(a,{content:"199ed596c0f7158cdb7d2da8510690c5?query=.header%20%7C%20to_entries"}),j,n(a,{content:"199ed596c0f7158cdb7d2da8510690c5?query=.header%20%3D%20%28.header%20%7C%20to_entries%20%7C%20map%28%7B%28.value%20%7C%20tostring%29%3A%20.key%7D%29%20%7C%20add%29"}),T,n(a,{content:"ef243c5bcf9cfedf561f351b34947f76?query=walk%28if%20type%20%3D%3D%20%22object%22%20then%20with_entries%28select%28.value%20!%3D%20null%29%29%20else%20.%20end%29"}),S,n(a,{content:"938c5245d17516df7cf8f46c9fd6a525?query=def%20test_func%28%24input1%3B%20%24input2%29%3A%0A%28%24input1%20%2B%20%24input2%29%0A%3B%0A%0Adef%20no_input%3A%0A%281%20%2B%201%29%0A%3B%0A%0A%7B%28test_func%28%22combined%22%3B%20%22Strings%22%29%29%3A%20%28no_input%29%7D"}),I])}var L=i(d,[["render",N]]);export{z as __pageData,L as default};
