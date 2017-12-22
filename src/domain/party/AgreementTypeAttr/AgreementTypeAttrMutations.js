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
import {AgreementTypeAttrResponseType} from '../../party/AgreementTypeAttr/AgreementTypeAttrResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAgreementTypeAttr = {
  type: AgreementTypeAttrResponseType,
  description: 'mutation for ofbiz createAgreementTypeAttr method',
  args:{agreementTypeAttrToBeAdded: {type: AgreementTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementTypeAttrs/add?`, args.agreementTypeAttrToBeAdded, req);
  }
};
export {createAgreementTypeAttr};


const deleteAgreementTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementTypeAttrByIdUpdated method',
  args:{agreementTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementTypeAttrs/${args.agreementTypeAttrId}?`, null, req);
  }
};
export {deleteAgreementTypeAttrByIdUpdated};


const updateAgreementTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementTypeAttr method',
  args:{agreementTypeAttrToBeUpdated: {type: AgreementTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementTypeAttrs/${args.attrName}?`, args.agreementTypeAttrToBeUpdated, req);
  }
};
export {updateAgreementTypeAttr};
