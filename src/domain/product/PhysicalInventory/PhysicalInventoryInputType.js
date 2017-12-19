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

const PhysicalInventoryInputType = new GraphQLInputObjectType({
  name: 'PhysicalInventoryInputType',
  description: 'input type for PhysicalInventory',

  fields: () => ({
    generalComments: {type: GraphQLString},
    partyId: {type: GraphQLString},
    physicalInventoryDate: {type: GraphQLString},
    physicalInventoryId: {type: GraphQLString}
  })
});

export {PhysicalInventoryInputType};
    