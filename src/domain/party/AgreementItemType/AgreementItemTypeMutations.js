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
import {AgreementItemTypeInputType} from '../../party/AgreementItemType/AgreementItemTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAgreementItemType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementItemType method',
  args:{agreementItemTypeToBeAdded: {type: AgreementItemTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementItemTypes/add?`, args.agreementItemTypeToBeAdded, req);
  }
};
export {createAgreementItemType};


const updateAgreementItemType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementItemType method',
  args:{agreementItemTypeToBeUpdated: {type: AgreementItemTypeInputType},agreementItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementItemTypes/${args.agreementItemTypeId}?`, args.agreementItemTypeToBeUpdated, req);
  }
};
export {updateAgreementItemType};


const deleteAgreementItemTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAgreementItemTypeByIdUpdated method',
  args:{agreementItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementItemTypes/${args.agreementItemTypeId}?`, null, req);
  }
};
export {deleteAgreementItemTypeByIdUpdated};
