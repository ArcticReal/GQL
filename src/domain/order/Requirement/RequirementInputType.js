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

const RequirementInputType = new GraphQLInputObjectType({
  name: 'RequirementInputType',
  description: 'input type for Requirement',

  fields: () => ({
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    deliverableId: {type: GraphQLString},
    description: {type: GraphQLString},
    estimatedBudget: {type: GraphQLFloat},
    facilityId: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    reason: {type: GraphQLString},
    requiredByDate: {type: GraphQLString},
    requirementId: {type: GraphQLString},
    requirementStartDate: {type: GraphQLString},
    requirementTypeId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    useCase: {type: GraphQLString}
  })
});

export {RequirementInputType};
    