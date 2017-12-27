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


const facilityPermissionCheck = {
  type: ResponseType,
  description: 'mutation for ofbiz facilityPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPerm/facilityPermissionCheck?primaryPermission=${args.primaryPermission}&altPermission=${args.altPermission}&resourceDescription=${args.resourceDescription}&mainAction=${args.mainAction}&`, null, req);
  }
};
export {facilityPermissionCheck};
