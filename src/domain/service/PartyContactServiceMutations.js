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


const createContactMechPurposeType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContactMechPurposeType method',
  args:{contactMechPurposeTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyContact/createContactMechPurposeType?contactMechPurposeTypeId=${args.contactMechPurposeTypeId}description=${args.description}`, null, req);
  }
};
export {createContactMechPurposeType};


const createContactMechType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContactMechType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},contactMechTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyContact/createContactMechType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}contactMechTypeId=${args.contactMechTypeId}`, null, req);
  }
};
export {createContactMechType};


const createContactMechTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContactMechTypeAttr method',
  args:{contactMechTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyContact/createContactMechTypeAttr?contactMechTypeId=${args.contactMechTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createContactMechTypeAttr};


const createContactMechTypePurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContactMechTypePurpose method',
  args:{contactMechPurposeTypeId: {type: GraphQLString},contactMechTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyContact/createContactMechTypePurpose?contactMechPurposeTypeId=${args.contactMechPurposeTypeId}contactMechTypeId=${args.contactMechTypeId}`, null, req);
  }
};
export {createContactMechTypePurpose};


const deleteContactMechPurposeType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContactMechPurposeType method',
  args:{contactMechPurposeTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyContact/deleteContactMechPurposeType?contactMechPurposeTypeId=${args.contactMechPurposeTypeId}description=${args.description}`, null, req);
  }
};
export {deleteContactMechPurposeType};


const deleteContactMechType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContactMechType method',
  args:{contactMechTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyContact/deleteContactMechType?contactMechTypeId=${args.contactMechTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {deleteContactMechType};


const deleteContactMechTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContactMechTypeAttr method',
  args:{contactMechTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyContact/deleteContactMechTypeAttr?contactMechTypeId=${args.contactMechTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteContactMechTypeAttr};


const deleteContactMechTypePurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContactMechTypePurpose method',
  args:{contactMechPurposeTypeId: {type: GraphQLString},contactMechTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyContact/deleteContactMechTypePurpose?contactMechPurposeTypeId=${args.contactMechPurposeTypeId}contactMechTypeId=${args.contactMechTypeId}`, null, req);
  }
};
export {deleteContactMechTypePurpose};


const updateContactMechPurposeType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactMechPurposeType method',
  args:{contactMechPurposeTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyContact/updateContactMechPurposeType?contactMechPurposeTypeId=${args.contactMechPurposeTypeId}description=${args.description}`, null, req);
  }
};
export {updateContactMechPurposeType};


const updateContactMechType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactMechType method',
  args:{contactMechTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyContact/updateContactMechType?contactMechTypeId=${args.contactMechTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateContactMechType};


const updateContactMechTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactMechTypeAttr method',
  args:{contactMechTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyContact/updateContactMechTypeAttr?contactMechTypeId=${args.contactMechTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateContactMechTypeAttr};


const updateContactMechTypePurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactMechTypePurpose method',
  args:{contactMechPurposeTypeId: {type: GraphQLString},contactMechTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyContact/updateContactMechTypePurpose?contactMechPurposeTypeId=${args.contactMechPurposeTypeId}contactMechTypeId=${args.contactMechTypeId}`, null, req);
  }
};
export {updateContactMechTypePurpose};
