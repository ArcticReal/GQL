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
import {AgreementPromoApplInputType} from '../../party/AgreementPromoAppl/AgreementPromoApplInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAgreementPromoAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementPromoAppl method',
  args:{agreementPromoApplToBeAdded: {type: AgreementPromoApplInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementPromoAppls/add?`, args.agreementPromoApplToBeAdded, req);
  }
};
export {createAgreementPromoAppl};


const updateAgreementPromoAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementPromoAppl method',
  args:{agreementPromoApplToBeUpdated: {type: AgreementPromoApplInputType},agreementItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementPromoAppls/${args.agreementItemSeqId}?`, args.agreementPromoApplToBeUpdated, req);
  }
};
export {updateAgreementPromoAppl};


const deleteAgreementPromoApplByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAgreementPromoApplByIdUpdated method',
  args:{agreementPromoApplId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementPromoAppls/${args.agreementPromoApplId}?`, null, req);
  }
};
export {deleteAgreementPromoApplByIdUpdated};
