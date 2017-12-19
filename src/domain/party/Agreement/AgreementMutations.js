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
import {AgreementInputType} from '../../party/Agreement/AgreementInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createAgreement = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAgreement method',
  args:{agreementToBeAdded: {type: AgreementInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreements/add?`, args.agreementToBeAdded, req);
  }
};
export {createAgreement};


const updateAgreement = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreement method',
  args:{agreementToBeUpdated: {type: AgreementInputType},agreementId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreements/${args.agreementId}?`, args.agreementToBeUpdated, req);
  }
};
export {updateAgreement};


const deleteAgreementByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementByIdUpdated method',
  args:{agreementId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreements/${args.agreementId}?`, null, req);
  }
};
export {deleteAgreementByIdUpdated};
