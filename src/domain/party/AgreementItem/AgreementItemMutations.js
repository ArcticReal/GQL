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
import {AgreementItemInputType} from '../../party/AgreementItem/AgreementItemInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAgreementItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementItem method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementItems/add?`, null, req);
  }
};
export {createAgreementItem};


const deleteAgreementItemByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAgreementItemByIdUpdated method',
  args:{agreementItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementItems/${args.agreementItemId}?`, null, req);
  }
};
export {deleteAgreementItemByIdUpdated};


const updateAgreementItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementItem method',
  args:{agreementItemToBeUpdated: {type: AgreementItemInputType},agreementItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementItems/${args.agreementItemSeqId}?`, args.agreementItemToBeUpdated, req);
  }
};
export {updateAgreementItem};
