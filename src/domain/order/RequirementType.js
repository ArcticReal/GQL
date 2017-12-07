
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {RequirementBudgetAllocationType} from '../order/RequirementBudgetAllocationType.js';
import {DesiredFeatureType} from '../order/DesiredFeatureType.js';
import {WorkRequirementFulfillmentType} from '../order/WorkRequirementFulfillmentType.js';
import {ProductType} from '../product/ProductType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';
import {RequirementCustRequestType} from '../order/RequirementCustRequestType.js';
import {OrderRequirementCommitmentType} from '../order/OrderRequirementCommitmentType.js';
import {RequirementTypeType} from '../order/RequirementTypeType.js';
import {RequirementStatusType} from '../order/RequirementStatusType.js';
import {FacilityType} from '../product/FacilityType.js';
import {RequirementRoleType} from '../order/RequirementRoleType.js';
import {DeliverableType} from '../workeffort/DeliverableType.js';
import {RequirementAttributeType} from '../order/RequirementAttributeType.js';


const RequirementType = new GraphQLObjectType({
  name: 'RequirementType',
  description: 'Type for Requirement in order',

  fields: () => ({
    reason: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${requirement.facilityId}`)
    },
    quantity: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${requirement.productId}`)
    },
    lastModifiedDate: {type: GraphQLString},
    estimatedBudget: {type: GraphQLFloat},
    description: {type: GraphQLString},
    requiredByDate: {type: GraphQLString},
    requirementStartDate: {type: GraphQLString},
    requirementType: {
      type: RequirementTypeType,
      args : {requirementTypeId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbiz.load(`requirementTypes/find?requirementTypeId=${requirement.requirementTypeId}`)
    },
    useCase: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbiz.load(`fixedAssets/find?fixedAssetId=${requirement.fixedAssetId}`)
    },
    requirementId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    deliverable: {
      type: DeliverableType,
      args : {deliverableId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbiz.load(`deliverables/find?deliverableId=${requirement.deliverableId}`)
    },
    requirementRole: {
      type: new GraphQLList(RequirementRoleType),
      args : {requirementId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbizArray.load(`requirementRoles/find?requirementId=${requirement.requirementId}`)
    },
    workRequirementFulfillment: {
      type: new GraphQLList(WorkRequirementFulfillmentType),
      args : {requirementId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbizArray.load(`workRequirementFulfillments/find?requirementId=${requirement.requirementId}`)
    },
    desiredFeature: {
      type: new GraphQLList(DesiredFeatureType),
      args : {requirementId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbizArray.load(`desiredFeatures/find?requirementId=${requirement.requirementId}`)
    },
    requirementAttribute: {
      type: new GraphQLList(RequirementAttributeType),
      args : {requirementId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbizArray.load(`requirementAttributes/find?requirementId=${requirement.requirementId}`)
    },
    requirementCustRequest: {
      type: new GraphQLList(RequirementCustRequestType),
      args : {requirementId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbizArray.load(`requirementCustRequests/find?requirementId=${requirement.requirementId}`)
    },
    requirementStatus: {
      type: new GraphQLList(RequirementStatusType),
      args : {requirementId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbizArray.load(`requirementStatuss/find?requirementId=${requirement.requirementId}`)
    },
    orderRequirementCommitment: {
      type: new GraphQLList(OrderRequirementCommitmentType),
      args : {requirementId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbizArray.load(`orderRequirementCommitments/find?requirementId=${requirement.requirementId}`)
    },
    requirementBudgetAllocation: {
      type: new GraphQLList(RequirementBudgetAllocationType),
      args : {requirementId: {type: GraphQLString}},
      resolve: (requirement, args, {loaders}) => loaders.ofbizArray.load(`requirementBudgetAllocations/find?requirementId=${requirement.requirementId}`)
    }
  })
});

export {RequirementType};
    