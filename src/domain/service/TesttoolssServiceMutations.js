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


const testServiceInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz testServiceInterface method',
  args:{test: {type: GraphQLString},testResult: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testtoolss/testServiceInterface?test=${args.test}testResult=${args.testResult}`, null, req);
  }
};
export {testServiceInterface};
