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
  args:{allRequestParams: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`cart/add?allRequestParams=${args.allRequestParams}`, null, req);
  }
};
export {addToCart};


const removeFromCart = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeFromCart method',
  args:{allRequestParams: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`cart/remove?allRequestParams=${args.allRequestParams}`, null, req);
  }
};
export {removeFromCart};
