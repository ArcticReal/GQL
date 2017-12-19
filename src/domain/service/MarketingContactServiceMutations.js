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


const createContactListType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContactListType method',
  args:{description: {type: GraphQLString},contactListTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingContact/createContactListType?description=${args.description}contactListTypeId=${args.contactListTypeId}`, null, req);
  }
};
export {createContactListType};


const deleteContactListType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContactListType method',
  args:{contactListTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingContact/deleteContactListType?contactListTypeId=${args.contactListTypeId}description=${args.description}`, null, req);
  }
};
export {deleteContactListType};


const updateContactListType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactListType method',
  args:{contactListTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketingContact/updateContactListType?contactListTypeId=${args.contactListTypeId}description=${args.description}`, null, req);
  }
};
export {updateContactListType};
