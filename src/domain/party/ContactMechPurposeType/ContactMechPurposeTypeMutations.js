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
import {ContactMechPurposeTypeResponseType} from '../../party/ContactMechPurposeType/ContactMechPurposeTypeResponseType.js';
import {ContactMechPurposeTypeInputType} from '../../party/ContactMechPurposeType/ContactMechPurposeTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContactMechPurposeType = {
  type: ContactMechPurposeTypeResponseType,
  description: 'mutation for ofbiz createContactMechPurposeType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/contactMech/contactMechPurposeTypes/add?`, null, req);
  }
};
export {createContactMechPurposeType};


const updateContactMechPurposeType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactMechPurposeType method',
  args:{contactMechPurposeTypeToBeUpdated: {type: ContactMechPurposeTypeInputType},contactMechPurposeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/contactMech/contactMechPurposeTypes/${args.contactMechPurposeTypeId}?`, args.contactMechPurposeTypeToBeUpdated, req);
  }
};
export {updateContactMechPurposeType};


const deleteContactMechPurposeTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContactMechPurposeTypeByIdUpdated method',
  args:{contactMechPurposeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/contactMech/contactMechPurposeTypes/${args.contactMechPurposeTypeId}?`, null, req);
  }
};
export {deleteContactMechPurposeTypeByIdUpdated};
