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

const ReorderGuidelineInputType = new GraphQLInputObjectType({
  name: 'ReorderGuidelineInputType',
  description: 'input type for ReorderGuideline',

  fields: () => ({
    facilityId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    geoId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productId: {type: GraphQLString},
    reorderGuidelineId: {type: GraphQLString},
    reorderLevel: {type: GraphQLFloat},
    reorderQuantity: {type: GraphQLFloat},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ReorderGuidelineInputType};
    