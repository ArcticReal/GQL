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
import {ContactMechTypePurposeInputType} from '../../party/ContactMechTypePurpose/ContactMechTypePurposeInputType.js';
import {ContactMechTypePurposeResponseType} from '../../party/ContactMechTypePurpose/ContactMechTypePurposeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContactMechTypePurpose = {
  type: ContactMechTypePurposeResponseType,
  description: 'mutation for ofbiz createContactMechTypePurpose method',
  args:{contactMechTypePurposeToBeAdded: {type: ContactMechTypePurposeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/contactMech/contactMechTypePurposes/add?`, args.contactMechTypePurposeToBeAdded, req);
  }
};
export {createContactMechTypePurpose};


const deleteContactMechTypePurposeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContactMechTypePurposeByIdUpdated method',
  args:{contactMechTypePurposeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/contactMech/contactMechTypePurposes/${args.contactMechTypePurposeId}?`, null, req);
  }
};
export {deleteContactMechTypePurposeByIdUpdated};


const updateContactMechTypePurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactMechTypePurpose method',
  args:{contactMechTypePurposeToBeUpdated: {type: ContactMechTypePurposeInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/contactMech/contactMechTypePurposes/${args.nullVal}?`, args.contactMechTypePurposeToBeUpdated, req);
  }
};
export {updateContactMechTypePurpose};
