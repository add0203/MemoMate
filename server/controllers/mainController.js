exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJS Notes",
    description: "lorem10101010101010",
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
