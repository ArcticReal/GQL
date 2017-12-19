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


const createEnumerationType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createEnumerationType method',
  args:{enumTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEnum/createEnumerationType?enumTypeId=${args.enumTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createEnumerationType};


const deleteEnumerationType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteEnumerationType method',
  args:{enumTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEnum/deleteEnumerationType?enumTypeId=${args.enumTypeId}`, null, req);
  }
};
export {deleteEnumerationType};


const updateEnumerationType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateEnumerationType method',
  args:{enumTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEnum/updateEnumerationType?enumTypeId=${args.enumTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateEnumerationType};
