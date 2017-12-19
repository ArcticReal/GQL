
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

import {RequirementType} from '../../order/Requirement/RequirementType.js';
import {CustRequestItemType} from '../../order/CustRequestItem/CustRequestItemType.js';


const RequirementCustRequestType = new GraphQLObjectType({
  name: 'RequirementCustRequestType',
  description: 'Type for RequirementCustRequest in order',

  fields: () => ({
    custRequest: {
      type: CustRequestItemType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (requirementCustRequest, args, {loaders}) => loaders.ofbiz.load(`order/custRequest/custRequestItems/find?custRequestId=${requirementCustRequest.custRequestId}`)
    },
    requirement: {
      type: RequirementType,
      args : {requirementId: {type: GraphQLString}},
      resolve: (requirementCustRequest, args, {loaders}) => loaders.ofbiz.load(`order/requirements/find?requirementId=${requirementCustRequest.requirementId}`)
    },
    custRequestItemSeqId: {type: GraphQLString}
  })
});

export {RequirementCustRequestType};
    