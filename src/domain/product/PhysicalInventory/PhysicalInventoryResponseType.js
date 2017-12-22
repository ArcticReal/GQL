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

const PhysicalInventoryResponseType = new GraphQLObjectType({
  name: 'PhysicalInventoryResponseType',
  description: 'response type for PhysicalInventory',

  fields: () => ({
    generalComments: {type: GraphQLString},
    partyId: {type: GraphQLString},
    physicalInventoryDate: {type: GraphQLString},
    physicalInventoryId: {type: GraphQLString}
  })
});

export {PhysicalInventoryResponseType};
    