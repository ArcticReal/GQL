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
import {AgreementContentInputType} from '../../party/AgreementContent/AgreementContentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createAgreementContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAgreementContent method',
  args:{agreementContentToBeAdded: {type: AgreementContentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementContents/add?`, args.agreementContentToBeAdded, req);
  }
};
export {createAgreementContent};


const deleteAgreementContentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementContentByIdUpdated method',
  args:{agreementContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementContents/${args.agreementContentId}?`, null, req);
  }
};
export {deleteAgreementContentByIdUpdated};


const updateAgreementContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementContent method',
  args:{agreementContentToBeUpdated: {type: AgreementContentInputType},agreementItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementContents/${args.agreementItemSeqId}?`, args.agreementContentToBeUpdated, req);
  }
};
export {updateAgreementContent};
