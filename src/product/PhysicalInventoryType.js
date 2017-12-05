
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const PhysicalInventory = new GraphQLObjectType({
  name: 'PhysicalInventoryType',
  description: 'Type for PhysicalInventory in product',

  fields: () => ({
    physicalInventoryId: {type: GraphQLString},
    physicalInventoryDate: {type: GraphQLString},
    generalComments: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {PhysicalInventory};
    