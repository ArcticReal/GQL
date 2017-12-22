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
import {AgreementRoleResponseType} from '../../party/AgreementRole/AgreementRoleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAgreementRole = {
  type: AgreementRoleResponseType,
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
