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
import {AgreementItemTypeAttrInputType} from '../../party/AgreementItemTypeAttr/AgreementItemTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createAgreementItemTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAgreementItemTypeAttr method',
  args:{agreementItemTypeAttrToBeAdded: {type: AgreementItemTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementItemTypeAttrs/add?`, args.agreementItemTypeAttrToBeAdded, req);
  }
};
export {createAgreementItemTypeAttr};


const deleteAgreementItemTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementItemTypeAttrByIdUpdated method',
  args:{agreementItemTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementItemTypeAttrs/${args.agreementItemTypeAttrId}?`, null, req);
  }
};
export {deleteAgreementItemTypeAttrByIdUpdated};


const updateAgreementItemTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementItemTypeAttr method',
  args:{agreementItemTypeAttrToBeUpdated: {type: AgreementItemTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementItemTypeAttrs/${args.attrName}?`, args.agreementItemTypeAttrToBeUpdated, req);
  }
};
export {updateAgreementItemTypeAttr};
