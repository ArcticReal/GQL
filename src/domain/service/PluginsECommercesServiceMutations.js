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


const noSyntaxError = {
  type: GraphQLString,
  description: 'mutation for ofbiz noSyntaxError method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/pluginsECommerces/noSyntaxError?`, null, req);
  }
};
export {noSyntaxError};
