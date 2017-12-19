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


const createAddendum = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAddendum method',
  args:{addendumEffectiveDate: {type: GraphQLString},agreementId: {type: GraphQLString},addendumCreationDate: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},addendumId: {type: GraphQLString},addendumText: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/createAddendum?addendumEffectiveDate=${args.addendumEffectiveDate}agreementId=${args.agreementId}addendumCreationDate=${args.addendumCreationDate}agreementItemSeqId=${args.agreementItemSeqId}addendumId=${args.addendumId}addendumText=${args.addendumText}`, null, req);
  }
};
export {createAddendum};


const createAgreementContentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAgreementContentType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},agreementContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/createAgreementContentType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}agreementContentTypeId=${args.agreementContentTypeId}`, null, req);
  }
};
export {createAgreementContentType};


const createAgreementItemType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAgreementItemType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},agreementItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/createAgreementItemType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}agreementItemTypeId=${args.agreementItemTypeId}`, null, req);
  }
};
export {createAgreementItemType};


const createAgreementTermAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAgreementTermAttribute method',
  args:{agreementTermId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/createAgreementTermAttribute?agreementTermId=${args.agreementTermId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createAgreementTermAttribute};


const createTermType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTermType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},termTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/createTermType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}termTypeId=${args.termTypeId}description=${args.description}`, null, req);
  }
};
export {createTermType};


const createTermTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTermTypeAttr method',
  args:{termTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/createTermTypeAttr?termTypeId=${args.termTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createTermTypeAttr};


const deleteAddendum = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAddendum method',
  args:{addendumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/deleteAddendum?addendumId=${args.addendumId}`, null, req);
  }
};
export {deleteAddendum};


const deleteAgreementContentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementContentType method',
  args:{agreementContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/deleteAgreementContentType?agreementContentTypeId=${args.agreementContentTypeId}`, null, req);
  }
};
export {deleteAgreementContentType};


const deleteAgreementItemType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementItemType method',
  args:{agreementItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/deleteAgreementItemType?agreementItemTypeId=${args.agreementItemTypeId}`, null, req);
  }
};
export {deleteAgreementItemType};


const deleteAgreementTermAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementTermAttribute method',
  args:{agreementTermId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/deleteAgreementTermAttribute?agreementTermId=${args.agreementTermId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteAgreementTermAttribute};


const deleteTermType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTermType method',
  args:{termTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/deleteTermType?termTypeId=${args.termTypeId}`, null, req);
  }
};
export {deleteTermType};


const deleteTermTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTermTypeAttr method',
  args:{termTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/deleteTermTypeAttr?termTypeId=${args.termTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteTermTypeAttr};


const updateAddendum = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAddendum method',
  args:{addendumId: {type: GraphQLString},addendumEffectiveDate: {type: GraphQLString},agreementId: {type: GraphQLString},addendumCreationDate: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},addendumText: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/updateAddendum?addendumId=${args.addendumId}addendumEffectiveDate=${args.addendumEffectiveDate}agreementId=${args.agreementId}addendumCreationDate=${args.addendumCreationDate}agreementItemSeqId=${args.agreementItemSeqId}addendumText=${args.addendumText}`, null, req);
  }
};
export {updateAddendum};


const updateAgreementContentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementContentType method',
  args:{agreementContentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/updateAgreementContentType?agreementContentTypeId=${args.agreementContentTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateAgreementContentType};


const updateAgreementItemType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementItemType method',
  args:{agreementItemTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/updateAgreementItemType?agreementItemTypeId=${args.agreementItemTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateAgreementItemType};


const updateAgreementTermAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementTermAttribute method',
  args:{agreementTermId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/updateAgreementTermAttribute?agreementTermId=${args.agreementTermId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateAgreementTermAttribute};


const updateTermType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTermType method',
  args:{termTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/updateTermType?termTypeId=${args.termTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateTermType};


const updateTermTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTermTypeAttr method',
  args:{termTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyAgreement/updateTermTypeAttr?termTypeId=${args.termTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateTermTypeAttr};
