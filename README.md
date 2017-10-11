学习react技术

ECMAScript 6 入门
http://es6.ruanyifeng.com/

阮一峰 React 技术栈系列教程
http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html

React 入门实例教程
http://www.ruanyifeng.com/blog/2015/03/react

React Router 使用教程
http://www.ruanyifeng.com/blog/2016/05/react_router.html

Redux 入门教程
http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

通配符匹配规则

path属性可以使用通配符。
```
<Route path="/hello/:name">
// 匹配 /hello/michael
// 匹配 /hello/ryan

<Route path="/hello(/:name)">
// 匹配 /hello
// 匹配 /hello/michael
// 匹配 /hello/ryan

<Route path="/files/*.*">
// 匹配 /files/hello.jpg
// 匹配 /files/hello.html

<Route path="/files/*">
// 匹配 /files/ 
// 匹配 /files/a
// 匹配 /files/a/b

<Route path="/**/*.jpg">
// 匹配 /files/hello.jpg
// 匹配 /files/path/to/file.jpg
``
通配符的规则如下。
```
（1）:paramName
:paramName匹配URL的一个部分，直到遇到下一个/、?、#为止。这个路径参数可以通过this.props.params.paramName取出。
（2）()
()表示URL的这个部分是可选的。
（3）*
*匹配任意字符，直到模式里面的下一个字符为止。匹配方式是非贪婪模式。
（4） **
** 匹配任意字符，直到下一个/、?、#为止。匹配方式是贪婪模式。
```

