const sum_Blog_type_read = (blogs, blog_type) => {
  let reapted;
  blogs.forEach((element) => {
    if (element.blog_type === checktype(element.blog_type, blog_type))
      reapted = {
        ...reapted,
        [element.blog_type]: reapted[element.blog_type] + element.read,
      };
    console.log(reapted);
  });

  return reapted;
};

const checktype = (type, blog_type) => {
  console.log(blog_type);
  const values = blog_type.map((data) => data.name === type);
  return values.name;
};
export { sum_Blog_type_read };
