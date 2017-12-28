import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const addToCart = {
  type: GraphQLString,
  description: 'mutation for ofbiz addToCart method',
  args:{productId: {type: GraphQLString},count: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`cart/add?productId=${args.productId}&count=${args.count}&`, null, req);
  }
};
export {addToCart};


const removeFromCart = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeFromCart method',
  args:{productId: {type: GraphQLString},count: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`cart/remove?productId=${args.productId}&count=${args.count}&`, null, req);
  }
};
export {removeFromCart};
