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


const testServiceInterface = {
  type: ResopnseType,
  description: 'mutation for ofbiz testServiceInterface method',
  args:{test: {type: GraphQLString},testResult: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testtoolss/testServiceInterface?test=${args.test}testResult=${args.testResult}`, null, req);
  }
};
export {testServiceInterface};
