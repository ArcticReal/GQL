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
import {AgreementTypeInputType} from '../../party/AgreementType/AgreementTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createAgreementType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAgreementType method',
  args:{agreementTypeToBeAdded: {type: AgreementTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementTypes/add?`, args.agreementTypeToBeAdded, req);
  }
};
export {createAgreementType};


const updateAgreementType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementType method',
  args:{agreementTypeToBeUpdated: {type: AgreementTypeInputType},agreementTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementTypes/${args.agreementTypeId}?`, args.agreementTypeToBeUpdated, req);
  }
};
export {updateAgreementType};


const deleteAgreementTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementTypeByIdUpdated method',
  args:{agreementTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementTypes/${args.agreementTypeId}?`, null, req);
  }
};
export {deleteAgreementTypeByIdUpdated};
