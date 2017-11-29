'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPost = exports.deletePost = exports.AuthorType = exports.PostType = undefined;

var _graphql = require('graphql');

var _lodash = require('lodash');

var _entityDef = require('./entityDef.js');

var PostType = new _graphql.GraphQLObjectType({
  name: 'Post',
  description: '...',

  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLString },
      title: { type: _graphql.GraphQLString },
      author: {
        type: AuthorType,
        resolve: function resolve(post) {
          return (0, _lodash.find)(_entityDef.authors, { id: post.authorId });
        }

      },
      votes: { type: _graphql.GraphQLInt }
    };
  }
});

var AuthorType = new _graphql.GraphQLObjectType({
  name: 'Author',
  description: '...',

  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLString },
      firstName: { type: _graphql.GraphQLString },
      lastName: { type: _graphql.GraphQLString },
      posts: {
        type: new _graphql.GraphQLList(PostType),
        resolve: function resolve(author) {
          return (0, _lodash.filter)(_entityDef.posts, { authorId: author.id });
        }

      }
    };
  }
});

var deletePost = {
  type: PostType,
  description: 'delete a post',
  args: {
    authorId: { type: _graphql.GraphQLString },
    title: { type: _graphql.GraphQLString },
    votes: { type: _graphql.GraphQLInt }

  },
  resolve: function resolve(root, args) {
    var newPost = Object.assign({ id: _entityDef.posts.length + 1, votes: 0 }, args);
    _entityDef.posts.push(newPost);
    return newPost;
  }
};

var createPost = {

  type: PostType,
  description: 'add a post',
  args: {
    authorId: { type: _graphql.GraphQLString },
    title: { type: _graphql.GraphQLString },
    votes: { type: _graphql.GraphQLInt }

  },
  resolve: function resolve(root, args) {
    var newPost = Object.assign({ id: _entityDef.posts.length + 1, votes: 0 }, args);
    _entityDef.posts.push(newPost);
    return newPost;
  }

};

exports.PostType = PostType;
exports.AuthorType = AuthorType;
exports.deletePost = deletePost;
exports.createPost = createPost;