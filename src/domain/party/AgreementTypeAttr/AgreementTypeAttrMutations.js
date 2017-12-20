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
import {AgreementTypeAttrInputType} from '../../party/AgreementTypeAttr/AgreementTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAgreementTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementTypeAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementTypeAttrs/add?`, null, req);
  }
};
export {createAgreementTypeAttr};


const deleteAgreementTypeAttrByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAgreementTypeAttrByIdUpdated method',
  args:{agreementTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementTypeAttrs/${args.agreementTypeAttrId}?`, null, req);
  }
};
export {deleteAgreementTypeAttrByIdUpdated};


const updateAgreementTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementTypeAttr method',
  args:{agreementTypeAttrToBeUpdated: {type: AgreementTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementTypeAttrs/${args.attrName}?`, args.agreementTypeAttrToBeUpdated, req);
  }
};
export {updateAgreementTypeAttr};
