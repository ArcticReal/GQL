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
import {AgreementRoleInputType} from '../../party/AgreementRole/AgreementRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createAgreementRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAgreementRole method',
  args:{agreementRoleToBeAdded: {type: AgreementRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementRoles/add?`, args.agreementRoleToBeAdded, req);
  }
};
export {createAgreementRole};


const deleteAgreementRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementRoleByIdUpdated method',
  args:{agreementRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementRoles/${args.agreementRoleId}?`, null, req);
  }
};
export {deleteAgreementRoleByIdUpdated};


const updateAgreementRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementRole method',
  args:{agreementRoleToBeUpdated: {type: AgreementRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementRoles/${args.roleTypeId}?`, args.agreementRoleToBeUpdated, req);
  }
};
export {updateAgreementRole};
