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
import {ContactMechTypeAttrInputType} from '../../party/ContactMechTypeAttr/ContactMechTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContactMechTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContactMechTypeAttr method',
  args:{contactMechTypeAttrToBeAdded: {type: ContactMechTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/contactMech/contactMechTypeAttrs/add?`, args.contactMechTypeAttrToBeAdded, req);
  }
};
export {createContactMechTypeAttr};


const updateContactMechTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContactMechTypeAttr method',
  args:{contactMechTypeAttrToBeUpdated: {type: ContactMechTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/contactMech/contactMechTypeAttrs/${args.attrName}?`, args.contactMechTypeAttrToBeUpdated, req);
  }
};
export {updateContactMechTypeAttr};


const deleteContactMechTypeAttrByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContactMechTypeAttrByIdUpdated method',
  args:{contactMechTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/contactMech/contactMechTypeAttrs/${args.contactMechTypeAttrId}?`, null, req);
  }
};
export {deleteContactMechTypeAttrByIdUpdated};
