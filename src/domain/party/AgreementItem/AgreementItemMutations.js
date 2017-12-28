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
import {AgreementItemResponseType} from '../../party/AgreementItem/AgreementItemResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAgreementItem = {
  type: AgreementItemResponseType,
  description: 'mutation for ofbiz createAgreementItem method',
  args:{agreementItemToBeAdded: {type: AgreementItemInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementItems/add?`, args.agreementItemToBeAdded, req);
  }
};
export {createAgreementItem};


const deleteAgreementItemByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementItemByIdUpdated method',
  args:{agreementItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementItems/${args.agreementItemId}?`, null, req);
  }
};
export {deleteAgreementItemByIdUpdated};


const updateAgreementItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementItem method',
  args:{agreementItemToBeUpdated: {type: AgreementItemInputType},agreementItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementItems/${args.agreementItemSeqId}?`, args.agreementItemToBeUpdated, req);
  }
};
export {updateAgreementItem};
