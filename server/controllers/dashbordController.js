const Note = require("../models/Notes");
const mongoose = require("mongoose");

exports.dashboard = async (req, res) => {
  let perPage = 12;
  let page = req.query.page || 1;

  const locals = {
    title: "Dashboard",
    description: "Free NodeJS Notes App.",
  };

  try {
    const notes = await Note.aggregate([
      { $sort: { updatedAt: -1 } },
      { $match: { user: new mongoose.Types.ObjectId(req.user.id) } },
      {
        $project: {
          title: { $substr: ["$title", 0, 30] },
          body: { $substr: ["$body", 0, 100] },
        },
      },
    ])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const count = await Note.countDocuments();

    res.render("dashboard/index", {
      userName: req.user.firstName,
      locals,
      notes,
      layout: "../views/layouts/dashboard",
      current: page,
      pages: Math.ceil(count / perPage),
    });
  } catch (error) {
    console.log(error);
  }
};

// exports.dashboard = async (req, res) => {
//   const locals = {
//     userName: req.user.firstName,
//     title: "Dashboard",
//     description: "Note-app project",
//   };
//   let perPage = 12;
//   let page = req.query.page || 1;

//   try {
//     const notes = Note.aggregate([
//       {
//         $sort: {
//           createdAt: -1,
//         },
//       },
//       {
//         $match: { user: new mongoose.Types.ObjectId(req.user.id) },
//       },
//       {
//         $project: {
//           title: { $substr: ["$title", 0, 30] },
//           body: { $substr: ["$body", 0, 30] },
//         },
//       },
//     ])
//       .skip(perPage * page - perPage)
//       .limit(perPage)
//       .exec();

//     const count = await Note.countDocuments();
//     res.render("./dashboard/index", {
//       locals,
//       notes,
//       layout: "../views/layouts/dashboard",
//       current: page,
//       pages: Math.ceil(count / perPage),
//     });

//     //   // console.log(notes);
//   } catch (err) {
//     console.log(err);
//   }
// };

exports.dashboardViewNote = async (req, res) => {
  const note = await Note.findById({ _id: req.params.id })
    .where({ user: req.user.id })
    .lean();

  if (note) {
    res.render("dashboard/view-notes", {
      noteID: req.params.id,
      note,
      layout: "../views/layouts/dashboard",
    });
  } else {
    res.send("something went wrong.");
  }
};

exports.dashboardUpdateNote = async (req, res) => {
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, body: req.body.body, updatedAt: Date.now() }
    ).where({ user: req.user.id });
    // if (note) {
    //   console.log("updated");
    // } else {
    //   console.log("failed");
    // }
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

exports.dashboardDeleteNote = async (req, res) => {
  try {
    const deleteNote = await Note.deleteOne({ _id: req.params.id }).where({
      user: req.user.id,
    });
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

exports.dashboardAddNote = async (req, res) => {
  try {
    res.render("dashboard/add", {
      layout: "../views/layouts/dashboard",
    });
  } catch (error) {}
};
exports.dashboardAddNoteSubmit = async (req, res) => {
  try {
    res.render("dashboard/add", {
      layout: "../views/layouts/dashboard",
    });
  } catch (error) {}
};
