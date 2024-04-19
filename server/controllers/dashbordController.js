exports.dashboard = async (req, res) => {
  const locals = {
    title: "Dashboard",
    description: "lorem10101010101010",
  };

  res.render("./dashboard/index", {
    locals,
    layout: "../views/layouts/dashboard",
  });
};
