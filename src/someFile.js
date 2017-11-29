import{
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
} from 'graphql';
import { find, filter } from 'lodash';

import {authors, posts} from './entityDef.js';

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: '...',

  fields: () => ({
    id: {type: GraphQLString},
    title: {type: GraphQLString},
    author: {
      type: AuthorType,
      resolve: (post) => find(authors, {id: post.authorId})

    },
    votes: {type: GraphQLInt}
  })
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: '...',

  fields: () => ({
    id: {type: GraphQLString},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    posts: {
      type: new GraphQLList(PostType),
      resolve: (author) => filter(posts, {authorId: author.id})


    }
  })
})

const deletePost = {
  type: PostType,
  description: 'delete a post',
  args: {
    authorId: {type: GraphQLString},
    title: {type: GraphQLString},
    votes: {type: GraphQLInt},

  },
  resolve: (root, args) => {
    const newPost = Object.assign({id: posts.length +1, votes: 0}, args);
    posts.push(newPost);
    return newPost;
  }
}

const createPost = {

    type: PostType,
    description: 'add a post',
    args: {
      authorId: {type: GraphQLString},
      title: {type: GraphQLString},
      votes: {type: GraphQLInt},

    },
    resolve: (root, args) => {
      const newPost = Object.assign({id: posts.length +1, votes: 0}, args);
      posts.push(newPost);
      return newPost;
    }

}


export {PostType};
export {AuthorType};

export {deletePost};

export {createPost};
