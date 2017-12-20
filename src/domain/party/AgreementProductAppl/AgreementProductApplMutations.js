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
import {AgreementProductApplInputType} from '../../party/AgreementProductAppl/AgreementProductApplInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAgreementProductAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementProductAppl method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementProductAppls/add?`, null, req);
  }
};
export {createAgreementProductAppl};


const updateAgreementProductAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementProductAppl method',
  args:{agreementProductApplToBeUpdated: {type: AgreementProductApplInputType},agreementItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementProductAppls/${args.agreementItemSeqId}?`, args.agreementProductApplToBeUpdated, req);
  }
};
export {updateAgreementProductAppl};


const deleteAgreementProductApplByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAgreementProductApplByIdUpdated method',
  args:{agreementProductApplId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementProductAppls/${args.agreementProductApplId}?`, null, req);
  }
};
export {deleteAgreementProductApplByIdUpdated};
