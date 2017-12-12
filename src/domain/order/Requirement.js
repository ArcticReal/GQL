
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

import {RequirementBudgetAllocationType} from '../order/RequirementBudgetAllocation.js';
import {DesiredFeatureType} from '../order/DesiredFeature.js';
import {WorkRequirementFulfillmentType} from '../order/WorkRequirementFulfillment.js';
import {ProductType} from '../product/Product.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';
import {RequirementCustRequestType} from '../order/RequirementCustRequest.js';
import {OrderRequirementCommitmentType} from '../order/OrderRequirementCommitment.js';
import {RequirementTypeType} from '../order/RequirementType.js';
import {RequirementStatusType} from '../order/RequirementStatus.js';
import {FacilityType} from '../product/Facility.js';
import {RequirementRoleType} from '../order/RequirementRole.js';
import {DeliverableType} from '../workeffort/Deliverable.js';
import {RequirementAttributeType} from '../order/RequirementAttribute.js';


const RequirementType = new GraphQLObjectType({
  name: 'RequirementType',
  description: 'Type for Requirement in order',

  fields: () => ({
    reason: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${requirement.facilityId}`)
    },
    quantity: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${requirement.productId}`)
    },
    lastModifiedDate: {type: GraphQLString},
    estimatedBudget: {type: GraphQLFloat},
    description: {type: GraphQLString},
    requiredByDate: {type: GraphQLString},
    requirementStartDate: {type: GraphQLString},
    requirementType: {
      type: RequirementTypeType,
      args : {requirementTypeId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbiz.load(`order/requirement/requirementTypes/find?requirementTypeId=${requirement.requirementTypeId}`)
    },
    useCase: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAssets/find?fixedAssetId=${requirement.fixedAssetId}`)
    },
    requirementId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    deliverable: {
      type: DeliverableType,
      args : {deliverableId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbiz.load(`workeffort/deliverables/find?deliverableId=${requirement.deliverableId}`)
    },
    requirementRoles: {
      type: new GraphQLList(RequirementRoleType),
      args : {},
      resolve: (requirement, args, {loaders}) => loaders.ofbizArray.load(`order/requirement/requirementRoles/find?requirementId=${requirement.requirementId}`)
    },
    workRequirementFulfillments: {
      type: new GraphQLList(WorkRequirementFulfillmentType),
      args : {},
      resolve: (requirement, args, {loaders}) => loaders.ofbizArray.load(`order/requirement/workRequirementFulfillments/find?requirementId=${requirement.requirementId}`)
    },
    desiredFeatures: {
      type: new GraphQLList(DesiredFeatureType),
      args : {},
      resolve: (requirement, args, {loaders}) => loaders.ofbizArray.load(`order/desiredFeatures/find?requirementId=${requirement.requirementId}`)
    },
    requirementAttributes: {
      type: new GraphQLList(RequirementAttributeType),
      args : {},
      resolve: (requirement, args, {loaders}) => loaders.ofbizArray.load(`order/requirement/requirementAttributes/find?requirementId=${requirement.requirementId}`)
    },
    requirementCustRequests: {
      type: new GraphQLList(RequirementCustRequestType),
      args : {},
      resolve: (requirement, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/requirementCustRequests/find?requirementId=${requirement.requirementId}`)
    },
    requirementStatuses: {
      type: new GraphQLList(RequirementStatusType),
      args : {},
      resolve: (requirement, args, {loaders}) => loaders.ofbizArray.load(`order/requirement/requirementStatuss/find?requirementId=${requirement.requirementId}`)
    },
    orderRequirementCommitments: {
      type: new GraphQLList(OrderRequirementCommitmentType),
      args : {},
      resolve: (requirement, args, {loaders}) => loaders.ofbizArray.load(`order/requirement/orderRequirementCommitments/find?requirementId=${requirement.requirementId}`)
    },
    requirementBudgetAllocations: {
      type: new GraphQLList(RequirementBudgetAllocationType),
      args : {},
      resolve: (requirement, args, {loaders}) => loaders.ofbizArray.load(`order/requirement/requirementBudgetAllocations/find?requirementId=${requirement.requirementId}`)
    }
  })
});

export {RequirementType};
    




const RequirementInputType = new GraphQLInputObjectType({
  name: 'RequirementInputType',
  description: 'input type for Requirement in order',

  fields: () => ({
    reason: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    estimatedBudget: {type: GraphQLFloat},
    description: {type: GraphQLString},
    requiredByDate: {type: GraphQLString},
    requirementStartDate: {type: GraphQLString},
    requirementTypeId: {type: GraphQLString},
    useCase: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    requirementId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    deliverableId: {type: GraphQLString}
  })
});

export {RequirementInputType};
    