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
import {ResopnseType,KeyValueInputType} from '../../framework/helpTypes.js';


const noSyntaxError = {
  type: ResopnseType,
  description: 'mutation for ofbiz noSyntaxError method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/pluginsECommerces/noSyntaxError?`, null, req);
  }
};
export {noSyntaxError};
