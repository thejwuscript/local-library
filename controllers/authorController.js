const author = require("../models/author");
const asyncHandler = require("express-async-handler");

exports.author_list = asyncHandler(async (req, res, next) => {
    res.send("not implemented: author list");
})

exports.author_detail = asyncHandler(async (req, res, next) => {
    res.send(`not implemented: author detail: ${req.params.id}`);
})

exports.author_create_get = asyncHandler(async (req, res, next) => {
    res.send("not implemented: author create get")
})

exports.author_create_post = asyncHandler(async (req, res, next) => {
    res.send("author delete POST")
})

exports.author_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author delete GET");
});

exports.author_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author delete POST");
});

exports.author_update_get = asyncHandler(async (req, res, next) => {
    res.send("author update get")
})

exports.author_update_post = asyncHandler(async (req, res, next) => {
    res.send("author update post")
})
