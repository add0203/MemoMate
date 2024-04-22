exports.homepage = async (req, res) => {
  const locals = {
    title: "MEMOMATE",
    description: "MemoMate is a simple to use free note taking app made in node Js, Ejs & MongoDB. MemoMate is a simple to use free note taking app made in Node Js, EJS & MongoDB.",
  };

  res.render("./home/index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};

exports.about = async (req, res) => {
  const locals = {
    title: "About - Nodejs About",
    description: ".......",
  };

  res.render("about", locals);
};
